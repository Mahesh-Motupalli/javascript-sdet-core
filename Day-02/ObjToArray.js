const objToArray = (objGiven) => {
   const ArrayReceived= [];
   for(let key in objGiven ){
       if(objGiven.hasOwnProperty(key)){
           ArrayReceived.push([key,objGiven[key]]);
       }
    }
   return ArrayReceived;
}
module.exports= objToArray;