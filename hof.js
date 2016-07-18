//forEach - takes an array and for each element in the array, pass that element into a callback function
var vietnameseFood = ['pho', 'dong khan', 'bahn mi', 'bun', 'boba tea']

vietnameseFood.forEach(function(element, i, arr){
  console.log('element is: ', element);
  console.log('index is: ', i);
  console.log('array is: ', arr)
})

function forEach(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr)
  }
}

//filter - takes an array and a callback function that will be called for each element. If the callback function returns truthy, keep the element, otherwise don't.
var newArray = vietnameseFood.filter(function(el, i, arr){
  if (el[0] === 'b')
  return true;
})
console.log(newArray);


//
function filter(arr, fn) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      newArray.push(arr[i]);
    }
  }
  return newArray
}
var newArray = filter(vietnameseFood, function(element, index, array){
  if (element[0] === 'b')
  return true;
})
console.log(newArray);


//map


//reduce
