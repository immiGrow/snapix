import dbConnect from "../../../mongodb/db";

import Photo from "../../../models/Photo";
dbConnect();
export default function CategoryPhotos(req, res) {
    fetchPhotos(req, res);
}

const fetchPhotos = async(req, res) => {
    const { ctg } = req.body
    const ITEMS_PER_PAGE = 20;
    const page = req.query.page;
    const skip = (page - 1) * ITEMS_PER_PAGE;
    const query = { category: ctg };


    const items = await Photo.find(query).sort({ likes: -1, views: -1, downloads: -1 }).limit(ITEMS_PER_PAGE).skip(skip).populate("user");
    const pageCount = items.length / ITEMS_PER_PAGE


    await res.status(200).json({
        success: true,
        response: {
            results: items,
        },
        pagination: {
            count: items.length,
            pageCount,
        },
    });

};