import Authenticated from '../../../middleware/Authenticated'
import Photo from '../../../models/Photo'
import Users from '../../../models/Users'
import dbConnect from '../../../mongodb/db'
dbConnect()
export default function AllUserImagesForStats(req, res) {
    fetchUserImages(req, res)
}
const fetchUserImages = Authenticated(async(req, res) => {
    // const user = await Users.findOne({ _id: req.user })
    let likesArr = []

    const findImg = await Photo.find({ user: req.user }).sort({ createdAt: -1 }).limit(10).populate("user likes").exec()

    await res.status(200).json({
        success: true,
        response: {
            results: findImg
        }
    })
})