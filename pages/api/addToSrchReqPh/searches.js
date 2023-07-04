import fs from 'fs'
import path from 'path';
export default async function AllSrchesGetAndPost(req, res) {
    if (req.method === "GET") {
        getAllSearches(req, res)
    }
    if (req.method === "POST") {
        addToSrches(req, res)
    }

}
const getAllSearches = async(req, res) => {
    const searches = []
    const filePath = path.join(process.cwd(), 'public', 'recent_searches.json');
    const data = await fs.readFileSync(filePath)
    const objData = await JSON.parse(data)
    for (let key in objData) {
        searches.push(objData[key])
    }
    await res.status(200).json({
        success: true,
        searches: searches
    })
}

const addToSrches = async(req, res) => {
    const { term } = req.body
    const srchArr = []
    const filePath = path.join(process.cwd(), 'public', 'recent_searches.json');
    const inData = await fs.readFileSync(filePath)
        // console.log("the initial data ",JSON.parse(inData))
    const objData = await JSON.parse(inData)
    const addSrch = [`${term}`]
    for (let key in objData) {
        srchArr.push(objData[key])
    }
    // console.log("the srchArr",srchArr)
    const addingData = srchArr.concat(addSrch)
        // console.log("the finale data is ",addingData)
    await fs.writeFileSync(filePath, JSON.stringify(addingData), () => {})
    await res.status(200).json({
        success: true,
        message: "Search has been added"
    })
}