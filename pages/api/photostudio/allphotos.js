import dbConnect from "../../../mongodb/db";

import Photo from "../../../models/Photo";
dbConnect();
export default function handlerOfAllPhotos(req, res) {
    fetchPhotos(req, res);
}

const fetchPhotos = async(req, res) => {

    const ITEMS_PER_PAGE = 20;
    const page = req.query.page;
    const skip = (page - 1) * ITEMS_PER_PAGE;
    const query = {};

    const count = await Photo.estimatedDocumentCount(query);
    const items = await Photo.find(query).populate("user").sort({ likes: -1, views: -1, downloads: -1 }).limit(ITEMS_PER_PAGE).skip(skip);
    const pageCount = count / ITEMS_PER_PAGE


    await res.status(200).json({
        success: true,
        response: {
            results: items,
        },
        pagination: {
            count,
            pageCount,
        },
    });

};