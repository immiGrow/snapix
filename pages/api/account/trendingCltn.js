// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../mongodb/db"
import Collections from "../../../models/Collections"

dbConnect()

export default function handlerTrendingCltns(req, res) {
    fetchTrCltns(req, res)
}
const fetchTrCltns = async(req, res) => {
    const no = await Collections.estimatedDocumentCount()
    const cltns = await Collections.find({}).populate("Images.ImageId").sort({ views: 1 }).limit(8)
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