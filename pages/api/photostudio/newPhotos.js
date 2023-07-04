import dbConnect from '../../../mongodb/db'
// import Products from '../../../model/Products'
import Photo from '../../../models/Photo'
dbConnect()

export default async function GetHighPhoto(req, res) {

    const totalPhotos = await Photo.estimatedDocumentCount()
    const item = await Photo.find({}).sort({ views: -1, downloads: -1, likes: -1 }).limit(28)
    await res.status(200).json({
        success: true,
        item,
        totalPhotos
    })



}