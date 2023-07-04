import Authenticated from '../../../middleware/Authenticated'
import Photo from '../../../models/Photo'
import Users from '../../../models/Users'
import Collections from '../../../models/Collections'
import dbConnect from '../../../mongodb/db'
dbConnect()

export default function addToCOllectionAPI(req, res) {
    if (req.method === "GET") {
        fetchUserCltn(req, res)
    }
    if (req.method === "POST") {
        createNewCollection(req, res)
    }
    if (req.method === "PUT") {

        addToCollection(req, res)
    }
}

const fetchUserCltn = Authenticated(async(req, res) => {

    const userCltn = await Collections.find({ user: req.user }).sort({ views: 1 })
        .populate("Images.ImageId").exec();

    await res.status(200).json({
        success: true,
        response: {
            results: userCltn
        }
    })

})

const addToCollection = Authenticated(async(req, res) => {
    const { photoId, cltnId } = req.body
        // try {
    const findIfExist = await Collections.findOne({ _id: cltnId })
    if (!findIfExist) {
        await res.status(404).json({
            success: false,
            message: "Sorry, No collection exist with this name"
        })
    }

    const imageExist = await Collections.findOne({
        _id: cltnId,
        Images: {
            $elemMatch: {
                ImageId: photoId
            }
        }
    })
    if (!imageExist) {
        const cltnCover = await Collections.findOne({ _id: cltnId })
        if (cltnCover.cover_images.length <= 6) {

            const addToCoverImages = await Photo.findOne({ _id: photoId })
            const imageObj = {
                source: addToCoverImages.url
            }
            await Collections.findOneAndUpdate({ _id: cltnId }, {
                $push: {
                    cover_images: imageObj
                }
            }, {
                new: true
            })
        }
        const pushObj = {
            ImageId: photoId
        }
        const userFind = await Collections.findOneAndUpdate({ _id: cltnId }, {
            $push: {
                Images: pushObj,
                // cover_images: imageObj
            },

        }, {
            new: true
        })


        await res.status(201).json({
            success: true,
            response: {
                results: userFind
            },
            message: "Successfully added to collection!"
        })
    } else {

        await res.status(409).json({
            success: false,
            message: "Image already exists in your collection",
            response: {
                results: imageExist
            }
        })
    }
    // Add 6 images to cover_images for outer view


    // }
    //  catch (error) {
    //     await res.status(400).json({
    //         success: false,
    //         message: "Couldn't add to collection"
    //     })
    // }

})
const createNewCollection = Authenticated(async(req, res) => {

    const { title, description, curatedBy } = req.body
    try {
        const cltns = await Collections({
            title,
            description,
            curatedBy,
            user: req.user
        }).save()
        await res.status(201).json({
            success: true,
            message: "Collection has been created successfully",
            cltns
        })

    } catch (error) {
        await res.status(400).json({
            success: false,
            message: "Couldn't create collection"
        })
    }

})