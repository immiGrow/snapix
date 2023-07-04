import dbConnect from '../../../mongodb/db'
import Authenticated from '../../../middleware/Authenticated'
import Photo from '../../../models/Photo'
dbConnect()

export default function handlerLikePhoto(req, res) {
    // res.status(200).json({ name: 'John Doe' })
    if (req.method === "PUT") {
        likeThePhoto(req, res);
    }
    if (req.method === "DELETE") {
        dislikeThePhoto(req, res);
    }
}
const likeThePhoto = Authenticated(async(req, res) => {
    const { photoId } = req.body

    // try {

    const LikePhoto = await Photo.findOneAndUpdate({ _id: photoId }, {
        $push: {
            likes: req.user
        }
    }, {
        new: true
    })

    await res.status(200).json({
            success: true,
            message: "Photo has liked",
            photo: LikePhoto
        })
        // } catch (error) {
        //     await res.status(400).json({
        //         success: false,
        //         message: "Couldn't like the photo"
        //     })
        // }


})
const dislikeThePhoto = Authenticated(async(req, res) => {
    const { photoId } = req.body
    try {
        const likeDoer = await Photo.findOneAndUpdate({ _id: photoId }, {
            $pull: {
                likes: req.user
            }
        }, {
            new: true
        })
        await res.status(200).json({
            success: true,
            photo: likeDoer
        })
    } catch (error) {
        await res.status(400).json({
            success: false,
            message: "Couldn't dislike the photo"
        })
    }

})