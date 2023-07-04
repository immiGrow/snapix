import dbConnect from '../../../mongodb/db'
// import Authenticated from '../../../middleware/Authenticated'
import Collections from '../../../models/Collections'
dbConnect()

export default function handlerCtnView(req, res) {
    // res.status(200).json({ name: 'John Doe' })
    if (req.method === "PUT") {
        viewCltn(req, res);
    }

}
const viewCltn = async(req, res) => {
    const { cltnId } = req.body

    const views = await Collections.findOneAndUpdate({ _id: cltnId }, {
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