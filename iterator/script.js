//
// var myArray = ["h","e","l","l","o"];
var myArray = [1,1,2,3,4]
var iterator = myArray[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

////
console.log("////");
for(var element of myArray){
    console.log(element);
}
console.log("////");
for(var index in myArray){
    console.log(index);
}