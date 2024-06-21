function printMessage(str){
    console.log(str);
}

function useFunction(func){
    func('HI');
}

useFunction(printMessage);

// no invoke function name --> anymous function
useFunction(function(str){
    console.log("Mseesage is " + str);
});

//IIFE --> sayHi("Peter")
var sayHi = function(name){
    var string = "Hi," + name + "!";
    console.log(string);
}('Peter');

(function(name){
    var string = "Hi," + name + "!";
    console.log(string);
})("Peter");