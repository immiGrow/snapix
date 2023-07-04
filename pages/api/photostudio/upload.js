import dbConnect from '../../../mongodb/db'
import Authenticated from "../../../middleware/Authenticated"
import Users from '../../../models/Users'
import Photo from '../../../models/Photo'
import Notifications from '../../../models/Notifications'
import jimp from 'jimp';
import axios from 'axios';
import { encode } from 'blurhash';


dbConnect()

export default function handlerOfUploadingPhotos(req, res) {
    if (req.method === "POST") {
        createDoc(req, res)

    }
}
const createDoc = Authenticated(async(req, res) => {
    const { title, tags, url, category } = req.body

    if (!title || !tags || !url) {
        res.status(400).json({
            success: false,
            message: "Please provide all the fields"
        })
    }
    // try {
    const userFind = await Users.findOne({
        _id: req.user
    })

    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const imageData = response.data;
    const image = await jimp.read(imageData);
    const pixels = image.bitmap.data;
    const width = image.bitmap.width;
    const height = image.bitmap.height;

    const encodeImageToBlurhash = async() => {
        console.log("The encodeImageToBlurhash has started")

        console.log("The width ", width, "the height ", height);
        return encode(pixels, width, height, 4, 4);
    };
    const encodedHashString = await encodeImageToBlurhash();
    console.log("The encoded image hash string is ", encodedHashString)


    await new Photo({
        title,
        tags,
        url,
        width,
        height,
        blur_hash: encodedHashString,
        category,
        user: userFind,
        createdAt: new Date()
    }).save()
    const userFollowers = await Users.findOne({ _id: req.user }, { password: 0 })
    const followersArray = userFollowers.followers

    console.log("The followers are ", followersArray)
    if (followersArray.length > 0) {
        for (let i = 0; i < followersArray.length; i++) {
            const itemId = followersArray[i];

            await new Notifications({
                notifyBy: userFollowers,
                notifyTo: itemId,
                notifiedAt: new Date(),
                message: `Hey, ${userFollowers.username} has uploaded a new photo`
            }).save()

        }
    }

    // Show notifications on bell icon

    await res.status(201).json({
        success: true,
        message: "Photo has been created successfully"
    })

    // } catch (error) {
    //     await res.status(400).json({
    //         success: false,
    //         message: "Sorry couldn't upload the photo"
    //     })
    // }

})