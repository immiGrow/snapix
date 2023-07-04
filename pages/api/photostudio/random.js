import dbConnect from '../../../mongodb/db'
// import Products from '../../../model/Products'
import Photo from '../../../models/Photo'
dbConnect()

export default async function GetEachPhoto(req, res) {

    const totalItems = await Photo.estimatedDocumentCount()
    const random = Math.floor(Math.random() * totalItems)
    const item = await Photo.findOne({}).skip(random).populate("user")
    await res.status(200).json({
        success: true,
        response: {
            results: item
        }
    })
}