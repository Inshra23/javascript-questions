//question1
// let fruits = ["apple", "banana", "mango", "orange", "stawberry"]

// document.write("Element of index 0 is " + fruits[0] + "<br>")
// document.write("Element of index 1 is " + fruits[1] + "<br>")
// document.write("Element of index 2 is " + fruits[2] + "<br>")
// document.write("Element of index 3 is " + fruits[3] + "<br>")
// document.write("Element of index 4 is " + fruits[4] + "<br>")


// //question2
// document.write("Counting:")
// for(let i =1; i <= 15; i++){
//     document.write(i + ",")
// }

// document.write("<br> <br>" +"Reverse Counting:")
// for(let i =10; i >= 0; i--){
//     document.write(i + ",")
// }

// document.write("<br> <br>" + "Even:")
// for(let i = 0; i <= 15; i+=2){
//     document.write(i + ",")
// }

// document.write("<br> <br>" + "Odd:")
// for(let i = 1; i <= 20; i+=2){
//     document.write(i + ",")
// }

// document.write("<br> <br>" + "Series:")
// for(let i = 2; i <= 20; i+=2){
//     document.write(i + "k,")
// }

let bakeryItems= ["cake", "applepie", "cookies", "chips", "patties"];
let userInput =prompt("Welcome to ABC Bakery. What do you want Sir/Ma'am");
let found = bakeryItems.includes(userInput)
if(found){
    document.write(userInput + " is available in our bakery");
}
else{
    document.write("Sorry, "+ userInput + " is not available in our bakery");
}

