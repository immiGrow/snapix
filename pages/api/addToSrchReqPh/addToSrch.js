import fs from 'fs'
import path from 'path';
export default async function AddToSearchRequirePhotos(req, res) {
    if (req.method === "GET") {
        getAllReqPhSrches(req, res);
    }
    if (req.method === "POST") {
        addToSrch(req, res)
    }
    if (req.method === "DELETE") {
        clearAllSrches(req, res)
    }

}
const addToSrch = async(req, res) => {
    const { term } = req.body
    const srchArr = []
    const filePath = path.join(process.cwd(), 'public', 'search_require_photos.json');
    const inData = fs.readFileSync(filePath)
        // console.log("the initial data ",JSON.parse(inData))
    const objData = await JSON.parse(inData)
    const addSrch = [`${term}`]
    for (let key in objData) {
        srchArr.push(objData[key])
    }
    // console.log("the srchArr",srchArr)
    const addingData = srchArr.concat(addSrch)
        // console.log("the finale data is ",addingData)
    fs.writeFileSync(filePath, JSON.stringify(addingData), () => {})
    await res.status(200).json({
        success: true,
        message: "Search has been added"
    })

}
const clearAllSrches = async(req, res) => {

    // console.log("the srchArr",srchArr)
    const addingData = []
    const filePath = path.join(process.cwd(), 'public', 'recent_searches.json');
    // console.log("the finale data is ",addingData)
    fs.writeFileSync(filePath, JSON.stringify(addingData), () => {})
    await res.status(200).json({
        success: true,
        message: "Search has been cleared"
    })
}

const getAllReqPhSrches = async(req, res) => {
    const searches = []
    const filePath = path.join(process.cwd(), 'public', 'search_require_photos.json');
    const data = fs.readFileSync(filePath)
    const objData = await JSON.parse(data)
    for (let key in objData) {
        searches.push(objData[key])
    }
    await res.status(200).json({
        success: true,
        searches
    })

}