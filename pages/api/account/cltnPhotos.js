// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../mongodb/db"
import Collections from "../../../models/Collections"

dbConnect()

export default function fetchCtnPhoto(req, res) {
    fetchCltnPhotos(req, res)
}
const fetchCltnPhotos = async(req, res) => {
    const { ctnId } = req.body;
    // const no = await Collections.estimatedDocumentCount()
    const cltn = await Collections.findOne({ _id: ctnId }).populate("Images.ImageId user")

    await res.status(200).json({
        success: true,
        response: {
            results: cltn
        }
        // pagination: {
        //     totalDocs: no
        // }
    })
}