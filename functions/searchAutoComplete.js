exports = async function(arg){
  var collection = context.services.get("mongodb-atlas").db("unreveal").collection("photos");
  let pipeline=[
    {
      $search:{
      'index':'autoComplete',
      'autocomplete':{
      'query':arg,
      'path':'title',
      'tokenOrder':'sequential'
      }
      }
    },
    {
      $limit:10
    },{
      $project:{
        "_id":0,
       
        "title":1
      }
    }
  
    ]

 return collection.aggregate(pipeline);
};