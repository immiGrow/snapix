import dbConnect from '../../../mongodb/db'
import Authenticated from '../../../middleware/Authenticated'
import Photo from '../../../models/Photo'
dbConnect()

export default function handlerView(req, res) {
    // res.status(200).json({ name: 'John Doe' })
    if (req.method === "PUT") {
        viewPhoto(req, res);
    }

}
const viewPhoto = async(req, res) => {
    const { photoId } = req.body

    const views = await Photo.findOneAndUpdate({ _id: photoId }, {
        $inc: {
            views: 1
        }
    }, {
        new: true
    })
    await res.status(200).json({
        success: true,
        views
    })
}