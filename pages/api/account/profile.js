import Authenticated from "../../../middleware/Authenticated";
import Photo from "../../../models/Photo";
import Users from "../../../models/Users";
export default function handlerOfProfile(req, res) {
    if (req.method === "POST") {
        updateUserProfile(req, res);
    }
    if (req.method === "GET") {
        fetchUserProfile(req, res);
    }
    if (req.method === "DELETE") {
        deleteAccount(req, res);
    }
}
const updateUserProfile = Authenticated(async(req, res) => {
    const {
        firstName,
        lastName,
        country,
        city,
        email,
        about,
        profile_image,
        website,
        facebook,
        instagram,
        youtube,
        twitter
    } = req.body;
    try {
        const userProfile = await Users.findOneAndUpdate({ _id: req.user }, {
            $set: {
                firstName,
                lastName,
                country,
                city,
                email,
                about,
                profile_image,
                website,
                facebook,
                instagram,
                youtube,
                twitter
            },
        }, {
            new: true
        });
        await res.status(200).json({
            success: true,
            userProfile
        })
    } catch (error) {
        await res.status(400).json({
            success: false,
            message: "Couldn't update profile"
        })
    }

});

const fetchUserProfile = Authenticated(async(req, res) => {

    const rankViewLikes=await Photo.find({}).sort({likes:-1,views:-1})
    const arr=[]
    for (let i = 0; i < rankViewLikes.length; i++) {
        const element = rankViewLikes[i];
        arr.push(element.user.toString())
        
    }
    const rankFind=arr.filter((item,index) => arr.indexOf(item.toString()) === index);
    console.log(rankFind)
    
    let totalLikes=0
    let totalViews=0
    const userProfile=await Users.findOne({_id:req.user})
    const filtered_user=rankViewLikes.filter((data)=>data.user.toString()===req.user)
    for (let i = 0; i < rankViewLikes.length; i++) {
        const item = rankViewLikes[i];
       
        if (item.user.toString()===userProfile._id.toString()){
          
            for (let m = 0; m < filtered_user.length; m++) {
            const e = filtered_user[m];
          
            console.log("The totalLikes &  Views",e)
            totalLikes+=e.likes.length
            totalViews+=e.views
                
            }
            console.log(item.user.toString(),userProfile.toString())
            console.log("matched")
            await res.status(200).json({
                success: true,
                userProfile,
                rank:rankFind.indexOf(req.user)+1,
                totalViews,
                totalLikes
                
            })
        }
        
    }
    

})

const deleteAccount = Authenticated(async(req, res) => {
    try {

        await Users.findOneAndDelete({ _id: req.user })
        await res.status(200).json({ success: true, message: "Successfully deleted account" })

    } catch (error) {
        await res.status(400).json({
            success: false,
            message: "Couldn't delete the account"
        })
    }

})