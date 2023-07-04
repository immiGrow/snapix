import dbConnect from '../../../mongodb/db'
import Authenticated from '../../../middleware/Authenticated'
dbConnect()
export default function handlerUser(req, res) {

    if (req.method === 'POST') {
        getUser(req, res)
    }

}
const getUser = Authenticated(async(req, res) => {
    try {
        const userId = req.user
        await res.status(200).json({
            success: true,
            userId
        })
    } catch (error) {
        await res.status(400).json({
            success: false,
            message: "Couldn't find user"
        })
    }

})