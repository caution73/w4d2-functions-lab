//Write a function called minusOne that takes a parameter num. Assuming the argument is a number, print the argument -1.

const minusOne = function(num){
    if(typeof num === "number"){
        console.log(num - 1);
    }else{
        console.log(num);
    }
};

minusOne(5);



const makeSentence = function(){
    let string = "";
    for (let i of arguments){
        string += " " + i;
    }
    return string;
}

console.log(makeSentence("Bob", "likes", "cats", "."));


const getLastElement = function(parArray){
    let lastElement = parArray[parArray.length-1];
    console.log(lastElement);
}

getLastElement(["1", "2", "3"]);
/*
Write a function called getLastElementthat takes a parameter arr.
Invoke the function with an array as the argument.
The function should print the last element within the array.

getLastElement([1, 2, 3, 4, 5, 6]);       // 6
getLastElement(['a', 'b', 'c']);          // 'c'
getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]
Hint: arr[arr.length - 1]-->

*/