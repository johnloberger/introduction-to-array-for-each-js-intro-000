// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback){
  array.forEach(callback);
}
var animals = ["dog", "cat", "squirrel"]
doToElementsInArray (animals, changeCompletely)
// Add your changeCompletely() function here:
