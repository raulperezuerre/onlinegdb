const myArray = [1,2,3,4,5,6,7,8,9,0];

mappedArray = myArray.map(function(item) {
   return item * 2; 
});

document.getElementById('result').innerHTML = mappedArray;