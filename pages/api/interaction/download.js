import dbConnect from '../../../mongodb/db'
import Authenticated from '../../../middleware/Authenticated'
import Photo from '../../../models/Photo'
dbConnect()

export default function handlerOfDownload(req, res) {
    // res.status(200).json({ name: 'John Doe' })
    if (req.method === "PUT") {
        downloadPhoto(req, res);
    }

}
const downloadPhoto = async(req, res) => {
    const { photoId } = req.body

    const downloads = await Photo.findOneAndUpdate({ _id: photoId }, {
        $inc: {
            downloads: 1
        }
    }, {
        new: true
    })
    await res.status(200).json({
        success: true,
        downloads
    })
}