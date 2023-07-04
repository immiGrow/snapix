// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handlerOfCompany(req, res) {
    res.status(200).json({
        owner: "Abhisha Kumar Chittore",
        created_at: "2023",
        company_name: "unreveal",
        slogan: "Creators Everywhere",
        reason: "To provide uninterrupted high resolution photos of free of cost",

    })
}