import dbConnect from '../../../mongodb/db';
import Photo from '../../../models/Photo';
import Collections from '../../../models/Collections';
dbConnect()
export default function handlerRelPhotosAndCltns(req, res) {
    if (req.method === "POST") {
        fetchRelPhotosAndCltns(req, res)
    }
}

const fetchRelPhotosAndCltns = async(req, res) => {

    const { queryPhotos } = req.body
    console.log("the quryreljdvjs ", queryPhotos)
    const relPhotos = await Photo.find({ $text: { $search: queryPhotos } }).sort({ likes: -1, views: -1, downloads: -1 }).limit(20).populate("user")
    const relCltns = await Collections.find({ $text: { $search: queryPhotos } }).sort({ views: -1 }).limit(20).populate("user")

    const notZeroPhotos = (data) => {
        return data.Images.length > 0 && data.title !== "My Collection"
    }
    const filteredCltns = relCltns.filter(notZeroPhotos)
    await res.status(200).json({
        success: true,
        response: {
            relPhotos: relPhotos,
            relCltns: filteredCltns
        }

    })

}