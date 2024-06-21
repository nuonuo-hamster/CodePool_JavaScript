//
let name = 'tom';
let str = `hello ${name}`;
console.log(str);

//
let arr = [1,2,3,4];
console.log(arr);
console.log(...arr);
console.log(Math.max(...arr));

//
let arr2 = [5,6,7];
let arr3 = [...arr, ...arr2];
console.log(arr3);

//
const func1 = x => x+1;
const func2 = x => {return x+1};
console.log(func1(0));
console.log(func2(0));

//
var obj = {
    person: 'Jay'
};
console.log(this);

function greet(){
    let str = `Hi, ${this.person}` ;
    console.log(str);
}

greet.call(obj);