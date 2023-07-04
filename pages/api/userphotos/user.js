import Photo from '../../../models/Photo'
import Users from '../../../models/Users'
import Collections from '../../../models/Collections'
import dbConnect from '../../../mongodb/db'
dbConnect()
export default function handlerUserAllPhotosWithProfile(req, res) {
    if (req.method === "PUT") {

        fetchUserEverything(req, res)
    }
}
const fetchUserEverything = async(req, res) => {
    const { askUserId } = req.body

    const allImages = await Photo.find({ user: askUserId })
    const allCollections = await Collections.find({ user: askUserId })
    const userProfile = await Users.findOne({ _id: askUserId })

    await res.status(200).json({
        success: true,
        allImages,
        allCollections,
        userProfile
    })
}