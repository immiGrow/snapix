import mongoose from 'mongoose';


const MongoUri = "mongodb+srv://Abhisha_Kumar_Chittore:056Abhisha@unreveal.7vvsncf.mongodb.net/unreveal?retryWrites=true&w=majority"

export default function dbConnect() {
    if (mongoose.connections[0].readyState) {
        console.log("Already Connected")
        return
    }
    mongoose.connect(MongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    })
    mongoose.connection.on("connect", () => {
        console.log("Connection to mongodb has done ")
    })
    mongoose.connection.on("error", (error) => {
        console.log("Error ", error)
    })

}