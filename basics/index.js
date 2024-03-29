
// Part 4 (user input)
// 1.easy way=window prompt
// 2.professional way = html textbox

// 1.easy way
// let userName=window.prompt("What's Your user name ?");
// console.log(userName);

// 2.professional way
// let userName;
// document.getElementById("MySubmit").onclick = function () {
//         userName = document.getElementById("MYinput").value; // console.log(userName);
//         document.getElementById("myh1").textContent = `Hello ${userName}`;
// }


// Part 5 (Type Conversion)
// it is the process to changing the data type of a value to another datatype (string,number,boolean)

// let age=window.prompt("How old are you ?")
// age=Number(age); //type conversion

// age+=1;
// console.log(age ,typeof age);

// let x="pizza";
// let y="pizza";
// let z="pizza";

// let x="0"; 
// let y="0";
// let z="0";

// let y="";
// let x=""; 
// let z="";

// x=Number(x); // NaN `Number`
// y=String(y); //undefined string
// z=Boolean(z); //false boolean

// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);


// Part 5 (const)=> A variable that cant be changed

// const PI = 3.14159;
// let radius;
// let Circumference;

// radius = window.prompt(`Eneter the radius of a circle`); //first
// radius=Number(radius); //first

// Circumference = 2 *PI * radius; //first

// document.getElementById("MySubmit").onclick=function(){
//         radius=document.getElementById("MYinput").value;
//         radius=Number(radius);
//         Circumference = 2 *PI * radius;
//         document.getElementById("myh3").textContent=Circumference + " cm";
// }


// part 6(Math)=>built-in object that provides a collection of properties and methods

// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.round(x) returns the nearest integer: Math.round(4.6) //output =>5 ,Math.round(4.4); //output =>4
// Math.ceil(x) returns the value of x rounded up to its nearest integer Math.ceil(4.2);//output =>5
// Math.floor(x) returns the value of x rounded down to its nearest integer: Math.floor(4.9); //output =>4
// Math.trunc(x) returns the integer part of x: Math.trunc(4.9); //output =>4
// Math.sign(x) returns if x is negative, null or positive:
// Math.pow(x, y) returns the value of x to the power of y:
// Math.sqrt(x) returns the square root of x:
// Math.abs(x) returns the absolute (positive) value of x: if x is -ve
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
// Math.log(x) returns the natural logarithm of x.


// part 7 (random number generator)

// let randomNumber = Math.floor(Math.random()*6) + 1;
// console.log(randomNumber);

// let max=100;
// let min = 50;
// let randomNumber = Math.floor(Math.random()*(max-min)) + min;
// console.log(randomNumber);


// part 8 (if statement)

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;

// mySubmit.onclick=function(){
//         age=myText.value;
//         age=Number(age);

//         if(age>=18 && age<=60){
//                 resultElement.textContent="You are elegible to have a licence";
//         }
//         else{
//                 resultElement.textContent="you are not elegible to have a licence";
//         }

// }


// part 9(.checked property)
// checked property determines the checked state of an HTML checkbox or radio button element

// const myCheckBox= document.getElementById("myCheckBox");
// const visaBtn= document.getElementById("visaBtn");
// const masterCardBtn= document.getElementById("masterCardBtn");
// const payPalBtn= document.getElementById("payPalBtn");
// const mySubmit= document.getElementById("mySubmit");
// const subResult= document.getElementById("subResult");
// const paymentResult= document.getElementById("paymentResult");

// mySubmit.onclick = function(){

//         if(myCheckBox.checked){
//                 subResult.textContent = `you are Subscribed!`;
//         }
//         else{
//                 subResult.textContent = `you are Not Subscribed!`;
//         }

//         if(visaBtn.checked){
//                 paymentResult.textContent = `you are paying with VISA`;
//         }
//         else if(masterCardBtn.checked){
//                 paymentResult.textContent = `you are paying with Master Card`;
//         }
//         else if(payPalBtn.checked){
//                 paymentResult.textContent = `you are paying with PayPal`;
//         }
//         else{
//                 paymentResult.textContent = `you must select a payment type`  
//         }

// }


// part 10 (ternary operator (condition) ? x : y)

// part 11 (Switch statement) 
// The switch statement is used to perform different actions based on different conditions

// let marks = 50;
// let grade ;

// switch (true) {
//         case marks >100:
//                 grade =`A`;
//                 break;
//         case marks >90:
//                 grade =`B`;
//                 break;
//         case marks >80:
//                 grade =`C`;
//                 break;
//         case marks >70:
//                 grade =`D`;
//                 break;
//         case marks >60:
//                 grade =`E`;
//                 break;

//         default:
//                 grade = `f`;
//                 break;
// }
// console.log(grade);


// part 12 (String)
// A JavaScript string is zero or more characters written inside quotes.You can use single or double quotes.

// let userName = `Ayush Jaiswal`;

// console.log(userName.charAt(0)); //return A
// console.log(userName.indexOf("w")); //retun 10
// console.log(userName.lastIndexOf("a")); // return 11
// console.log(userName.length) //return 13

// userName=userName.trim();
// console.log(userName);

// userName=userName.toUpperCase();
// console.log(userName);

// userName=userName.toLowerCase();
// console.log(userName);

// userName=userName.repeat(2);
// console.log(userName);

// let result = userName.startsWith(" ");
// // console.log(result);

// if (result) {
//         console.log(`user name start with the character you select`);
// }
// else{
//         console.log(`user name is: ${userName}`);
// }

// let result = userName.endsWith("l");
// if (result) {
//         console.log(`user name end\'s with l and user name is ${userName}`);
// }
// else{
//         console.log(`user name name not matched`);
// }

// userName.includes(" ");

// let phoneNumber="123-456-7890";

// phoneNumber=phoneNumber.replaceAll("-","/");
// console.log(phoneNumber);

// phoneNumber=phoneNumber.padStart(15,"0");
// phoneNumber=phoneNumber.padEnd(15,"0");
// console.log(phoneNumber);

// part 13 (string slicing)
// creating of substring from a portion of another string.
// string slice(start,end) 

// const fullName="Ayush Jaiswal";

// let firstName = fullName.slice(0,5);
// console.log(firstName);

// let lastName = fullName.slice(6,13);
// let lastName = fullName.slice(6);
// console.log(lastName);

// let charFirst = fullName.slice(0,1);
// console.log(charFirst);
// let charLast = fullName.slice(-1);
// console.log(charLast);

// let firstName=fullName.slice(0,fullName.indexOf(" "));
// console.log(firstName);

// let lastName=fullName.slice(fullName.indexOf(" ")+1);
// console.log(lastName);

// part 14 (method chaining)
// calling one method after onether is one continouse line of code.


// let userName = window.prompt("Enter the user name ");
// ..........no method chaining.................

// userName=userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let extraChar = userName.slice(1);

// extraChar = extraChar.toLowerCase(extraChar);
// userName = letter + extraChar;
// console.log(userName);

// ..........Method chaining.............

// userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

// console.log(userName);

// part 15 (Function)
// function is a block of code designed to perform a particular task.

// function isValidEmail(email){
//         if(email.includes("@")){
//                 return true;
//         }
//         else{
//                 return false;
//         }
// }

// console.log(isValidEmail("ayush@gmail.com"));

// part 16 (array)An array is a special variable, which can hold more than one value

// let fruits = ["Banana", "Orange", "Apple"];

// fruits[1]="Mango"; // change the element
// fruits.push("coconut"); //add element to the end
// fruits.pop(); //remove the last element of the array
// fruits.unshift("Graps"); // add an element to the begining
// fruits.shift() //remove an array to the begining

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let numOfFruits = fruits.length;
// console.log(numOfFruits);

// let index = fruits.indexOf("Orange")
// console.log(index);

// fruits.sort();
// for(let e of fruits){
//         console.log(e)
// }

// fruits.sort().reverse();
// for(let e of fruits){
//         console.log(e)
// }


// part 17 Spread operator
// The JavaScript spread operator (...) allows us to quickly 
// copy all or part of an existing array or object into another array or object

// let number = [1,2,3,4,5];
// let maximum = Math.max(...number);
// let minimum = Math.min(...number);

// console.log(maximum);
// console.log(minimum);

// let username = "Ayush JAiswal";
// let letter = [...username].join("-");
// console.log(letter);

// let fruits = ["Banana", "Orange", "Apple"];
// let vegitables = ["potato", "carrots", "garlic"];

// let foods = [...fruits,...vegitables];
// let foods = [...fruits,...vegitables,"eggs","milk"];

// console.log(foods);


// part 18 rest operator = (...rest)
// Allow a function work with a variable number of argument by budling them into an array 

// spread = extend an element into seprated array 
// rest = bundels seprated element into an array

// ex1

// function openFridge(...foods){ //rest paramenter
//         // console.log(foods);
//         console.log(...foods); //spread operator

// }
// function getFood(...foods){ 
//         return foods;

// }

// const food1= "pizza";
// const food2= "burger";
// const food3= "chicken";
// const food4= "momos";
// const food5= "rice";

// // openFridge(food1,food2,food3,food4,food5);

// const food = getFood(food1,food2,food3,food4,food5);
// // console.log(food);
// console.log(...food);

// ex2

// function sum(...numbers){
//          let sum = 0;

//          for(let number of numbers){
//                 sum+=number;
//          }
//          return sum;
// }

// const result = sum(1,2,3,4,5);

// console.log(`your total is ${result}`);


// function average(...numbers){
//          let sum = 0;

//          for(let number of numbers){
//                 sum+=number;
//          }
//          return sum/numbers.length;
// }

// const result = average(1,2,3,4,5);

// console.log(`your total is ${result}`);

// ex3

// function combineString(...strings){
//         return strings.join(" ");
// }
// const fullName=combineString("mr.","Ayush","kumar","Jaiswal");
// console.log(fullName);


// part 19 (call back)
// A call back is an function that pass an argument to another function.

// Example 1

// hello(wait);
// hello(leave);
// hello(goodBye);
// goodBye();

// function hello(callBack){
//         console.log("Hello!");
//         callBack();
// }

// function wait(){
//         console.log("wait!");
// }

// function leave(){
//         console.log("leave!");
// }

// function goodBye(){
//         console.log("goodBye!");
// }

// example 2

// addNumber(4,6,displayPage);


// function addNumber(x,y,callBack){
//         let sum = x+y;
//         callBack(sum);
// }

// function displayPage(sum){
//         document.getElementById("myH1").textContent = sum;
// }


// Part 20 (forEach())
// method use to iterate over the elements of an array and apply a specific function(callback)
// to each element.        
// array.forEach (callback)
// its also provide an element, index ,arr as an argument.

// example 1

// let number = [1,2,3,4,5];

// number.forEach(square);
// // number.forEach(triple);
// // number.forEach(double);
// number.forEach(display);

// function double(element,index,array){
//         array[index] = element*2;
// }
// function triple(element,index,array){
//         array[index] = element*3;
// }

// function square(element,index,array){
//         array[index] = Math.pow(element,2);
// }

// function display(element){
//         console.log(element);
// }

// examle 2

// let fruits = ["banana", "orange", "apple","coconut"];

// fruits.forEach(capitalize);
// fruits.forEach(upperCase);
// fruits.forEach(display);

// function upperCase(element,index,arr){
//         arr[index]=element.toUpperCase();
// }

// function capitalize(element,index,arr){
//         arr[index]=element.charAt(0).toUpperCase() + element.slice(1);
// }

// function display(element){
//         console.log(element);
// }

// Part 21 (.map)
// accept a callback and apply that function to each element of an array,to return a new array.

// Example 1

// const number = [1,2,3,4,5];
// const squares=number.map(square);
// const cubes=number.map(cube);

// // console.log(squares);
// console.log(cube);

// function square (element){
//         return Math.pow(element,2);
// }
// function cube (element){
//         return Math.pow(element,3);
// }

// Example 2

// const student = ["Ayush","Sainty" , "ronit" ,"hero","pandey"];

// const upper = student.map(upperCase);
// console.log(upper);

// const Lower = student.map(lowerCase);
// console.log(Lower);

// function upperCase(element){
//         return element.toUpperCase();
// }

// function lowerCase(element){
//         return element.toLowerCase();
// }

// const dates = ["2021-2-12","2022-12-9","2023-24-1","2024-24-11"];
// const formatteDate = dates.map(formatDate);

// console.log(formatteDate);

// function formatDate(element){
//         const parts = element.split("-");
//         return`${parts[1]}/${parts[2]}/${parts[0]}`;
// }


// Part 22(.filter) create a new array by filtering out element.

// let number = [1,2,3,4,5,6,7];
// let evenNum = number.filter(isEven);
// let oddNum = number.filter(isOdd);

// console.log(evenNum);
// console.log(oddNum);

// function isEven(element){
//         return element % 2 ==0;
// }

// function isOdd(element){
//         return element % 2 !== 0;
// }


// let fruits = ["banana", "orange", "apple","coconut"];

// let sortWord = fruits.filter(getSortWord);

// console.log(sortWord);

// function getSortWord(element){
//         return element.length < 6;
// }


// Part 23 (.reduce) reduce methode reduse an array to  single value

// const prices = [4,4,2,5,2,30];

// const total = prices.reduce(sum);

// console.log(total);

// function sum(accumulator,element){
//         return accumulator+element;
// }

// const grade = [56,78,98,67,87];

// const Max = grade.reduce(maxGrade);

// console.log(Max);

// function maxGrade(accumulator,element){
//         return Math.max(accumulator,element);
// }


// Part 24 (function expression)
// it is a way to define function as value or variable

// setTimeout(function(){
//         console.log("Hello!")
// },3000)

// const number = [1,2,3,4,5];

// const squares = number.map(function(element){
//         return Math.pow(element,2);
// });
// // console.log(squares);

// const evenNum = number.filter(function(element){
//         return element%2==0;
// })
// // console.log(evenNum);

// const total = number.reduce(function(accumulator,element){
//         return accumulator + element;
// })
// console.log(total);

// part 25 (Arrow function)
// its a consice way to write a function expression 
// (Parameters) => some code

// const hello = (name,age) => {console.log(`Hello ${name}`)
//                          console.log(`you are ${age} year old`)};

// hello("Ayush",22);

// ex 2
// setTimeout(hello, 3000);

// function hello(){
//         console.log("Hello!");
// }

// we can also write this code like 

// setTimeout(function (){
//         console.log("Hello!");
// }, 3000);

// we can also write this code like 

// setTimeout(() => console.log("Hello!"),3000);

// const number = [1,2,3,4,5,6,7];

// const sqares = number.map((element)=> Math.pow(element,2) );
// const cube = number.map((element)=> Math.pow(element,3) );

// // console.log(sqares);
// // console.log(cube);

// const evenNum = number.filter((element) => element % 2 === 0);
// const oddNum = number.filter((element) => element % 2 !== 0);

// // console.log(evenNum);
// // console.log(oddNum);

// const total = number.reduce((accumulater,element) => accumulater + element);

// console.log(total);


// Part 26 (Object)
// A collection of related properties or method can represent real world project like people,product,place.
// object = {key:value,
//                 function()}

// const person1 ={
//         firstName: "Ayush",
//         lastName: "Jaiswal",
//         age: 22,
//         isEmployed: false,
//         sayHello: function(){console.log("Hi i am Ayush")},
// }

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);
// person1.sayHello();

// const person2= {
//         firstName: "Sainty",
//         lastName: "Kumar",
//         age: 22,
//         isEmployed: true,
//         sayHello: () => console.log("hey i am sainty"),
// }
// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);
// person2.sayHello();


// part 27 (this)
// this keyword refers to an object. Which object depends on how this is being invoked (used or called)
// Person.name=this.name

// const person1 ={
//         name: "Ayush Jaiswal",
//         favFood: "PIzza",
//         sayHello: function(){console.log(`Hello i am ${this.name}`)},
        
// }
// person1.sayHello();

// PArt 28 (constructor)
// special method for defining the properties and method of object

// function car(make,model,year,color){
//         this.make=make,
//         this.model=model,
//         this.year=year,
//         this.color=color
//         this.drive = function(){console.log(`You drive ${this.model}`);}
// }

// const car1 = new car("ford","mustang","2024","red");
// const car2 = new car("honda","fortunuer","2024","white");

// // console.log(car1.make);
// // console.log(car1.model);
// // console.log(car1.year);
// // console.log(car1.color);

// // console.log(car2.make);
// // console.log(car2.model);
// // console.log(car2.year);
// // console.log(car2.color);

// car1.drive();
// car2.drive();

// Part 29(class) ES6 Features
// it provides a more structured and clear way to work with object compare to
// traditional constructor function ex static keyword, incaptulation,inhearitance

// class product{
//         constructor(name,price){
//                 this.name = name;
//                 this.price = price;
//         }

//         displayProduct(){
//                 console.log(`Product: ${this.name}`);
//                 console.log(`Price: $${this.price}`);
//         }
//         calculateTotal(saleTax){
//                 return this.price + (this.price*saleTax);
//         }
// }

// const product1 = new product("Tshirt",30.43);
// const product2 = new product("Jeans",10.43);
// const product3 = new product("underwear",1000.43);

// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();

// const saleTax =0.05;

// const sales=product1.calculateTotal(saleTax);
// console.log(`sales including tax price is $${sales}`);

// class student  {
//         constructor(name,marks){
//                 this.name=name;
//                 this.marks=marks;
//         }

//         totalMarks(){
//                 console.log(`total marks ${this.marks}`);
//         }
// }

// const student1 = new student("Ayush",98);

// student1.totalMarks();


// PArt 30 (Static keyword )
// static keyword that define properties and method belong to a class itself
// rather then the object created from that claass (class owns anything static, not the object)

// class Mathutility{
//         static PI = 3.14;
//         static getDiameter(radius){
//            return radius *2 ;
//         }
//         static getCircumference (radius){
//                 return 2 * this.PI *radius;
//         }
//         static getArea(radius){
//                 return this.PI * radius *radius;
//         }
// }
// console.log(Mathutility.PI);
// console.log(Mathutility.getDiameter(10));
// console.log(Mathutility.getCircumference(10));
// console.log(Mathutility.getArea(10));

// class user {
//         static userCount = 0;

//         constructor (username){
//                 this.username = username;
//                 user.userCount++;
//         }
//         static getUserCount(){
//                 console.log(`there are ${user.userCount} online user`);
//         }
//         sayHello(){
//                 console.log(`My user name is ${this.username}`);
//         }
// }

// const user1 = new user("Ayush");
// const user2 = new user("Sainty");
// const user3 = new user("jaiswal");

// // console.log(user1.username);
// // console.log(user2.username);
// // console.log(user3.username);
// // console.log(user.userCount);

// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// user.getUserCount();


// Part 31 (inheritance)
// it allow a new class to inherit properties and method from an existing class
// (Parent -> child) help with code reusability

// class Animal{
//         alive = true;

//         eat (){
//                 console.log(`This ${this.name} is Eating`);
//         }
//         Sleep (){
//                 console.log(`This ${this.name} is Sleeping`);
//         }
// }
// class rabbit extends Animal{
//         name = "Rabbit";

//         run(){
//                 console.log(`The ${this.name} is running`);
//         }
// }
// class Fish extends Animal{
//         name = "Fish";

//         Swiming(){
//                 console.log(`The ${this.name} is Swiming`);
//         }
// }
// class Lion extends Animal{
//         name = "Lion";

//         rule(){
//                 console.log(`The ${this.name} is Ruling`);
//         }
// }

// const Rabbit = new rabbit();
// const fish = new Fish();
// const lion = new Lion();

// console.log(Rabbit.alive);
// Rabbit.eat();
// Rabbit.Sleep();
// Rabbit.run();

// console.log(fish.alive);
// fish.eat();
// fish.Sleep();
// fish.Swiming();

// console.log(lion.alive);
// lion.eat();
// lion.Sleep();
// lion.rule();


// part 32 (Super keyword)
// The super keyword is used to call the constructor 
// of its parent class to access the parent's properties and methods.
// this = this object
// super = parent

class Animal{
      constructor(name,age){
        this.name= name;
        this.age = age;
      }
      move(speed){
        console.log(`The ${this.name} can move at speed of ${speed}mph`);
      }
}
class rabbit extends Animal{

      constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;

      }
      run(){
                console.log(`The ${this.name} is running`);
                super.move(this.runSpeed);
        }
}
class Fish extends Animal{

        constructor(name,age,swimSpeed){
                super(name,age);
                this.swimSpeed = swimSpeed;
              }
        Swiming(){
                console.log(`The ${this.name} is Swiming`);
                this.move(this.swimSpeed)
        }
}
class Hawk extends Animal{

        constructor(name,age,flySpeed){
                super(name,age);
                this.flySpeed = flySpeed;
              }
        fly(){
                console.log(`The ${this.name} is flying`);
                this.move(this.flySpeed)
        }             
}
const Rabbit = new rabbit("rabbit",1,25);
const fish = new Fish("Pirana",1,45);
const hawk = new Hawk("Hawk",5,60);

// console.log(Rabbit.name);
// console.log(Rabbit.age);
// console.log(Rabbit.runSpeed);

// console.log(fish.name);
// console.log(fish.age);
// console.log(fish.swimSpeed);

// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flySpeed);

Rabbit.run();
fish.Swiming();
hawk.fly();