// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../mongodb/db"
import Collections from "../../../models/Collections"

dbConnect()

export default function handlerCltns(req, res) {
    fetchAllCltns(req, res)
}
const fetchAllCltns = async(req, res) => {

    const no = await Collections.estimatedDocumentCount()
    const cltns = await Collections.find({}).sort({ views: -1 }).populate("Images.ImageId")

    const notZeroPhotos = (data) => {
        return data.Images.length > 0 && data.title !== "My Collection"
    }
    const filteredCltns = cltns.filter(notZeroPhotos)
    await res.status(200).json({
        success: true,
        response: {
            results: filteredCltns
        },
        pagination: {
            totalDocs: no
        }
    })
}