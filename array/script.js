var arr = [true, 1, "str"];

var value = arr.pop();
console.log(value);

arr.push("cat");
console.log(arr);

console.log("length:",arr.length);
console.log(arr.indexOf(true));
console.log(arr.slice(1,3));

//map
var num = [1,2,3,4]
var result = num.map(function(number){
    return number*2
})
console.log("result:",result);

//foreach
array1 = ['a','b','c'];
array1.forEach(element => {
    console.log(element);
});

// array1.forEach(function(element){
//     console.log(element);
// });

//filter
var numArr = [1,2,3,4,5,6,7]
var filterArr = numArr.filter(function(element){
    return element > 2;
})
console.log(filterArr);

//find
var findArr = numArr.find(function(element){
    return element > 2;
})
console.log(findArr);

//reduce 0->sum, numArr->current
var result = numArr.reduce(function (sum, current) {
    sum += current;
    return sum;
},0)
console.log(result);


arr = [1, 2, 3, 4];
let sum = arr.reduce((x, y) => {
        console.log(x)
        return x + y
    })
console.log("r ",sum);
// 得到 1,3,6
 
let sum2 = arr.reduce((x, y) => {
        console.log(x)
        return x + y
    }, 10)
console.log("r ",sum2);
