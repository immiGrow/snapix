exports = async function(arg){
  let collection=context.services
  .get("mongodb-atlas")
  .db("unreveal")
  .collection("collections");
let pipeline=[
  
  {
    $search: {
      index: 'relatedCltns',
      text: {
        query: arg,
        path: {
          'wildcard': '*'
        },
        fuzzy:{}
      }
    }
  }

  ]
return collection.aggregate(pipeline);
};