import showBlogs from './components/showBlogs.vue'
import addBlog from './components/addBlog.vue'


export default [
  { path: '/', component: showBlogs},
  { path: '/add', component: addBlog }
]


// var firstName = 'Angie';
// var age = 26;
// var city = 'Stockholm';
// var fullAge = true;


// console.log(firstName + ' ' + "is" + ' ' + age) 

// console.log('hello world from js');

// var job, isMarried;
// job = 'teacher';
// isMarried = true; 

// console.log(firstName + ' ' + " is a" + ' ' + job + ' .' + "is she married?" + isMarried)
// alert(firstName + ' ' + "is going to nail her interview on friday?" + isMarried + '!')


// var lastName = prompt("what is your name?");
// console.log(firstName);

// var year = 2018
// var yearAngie = year - 1992;
// var yearBebo = year - 1997;
// var yearGio = year - 2000;
// var whoOlder = yearGio > yearBebo;

// console.log(typeof year);
// console.log(typeof whoOlder);

// console.log("Angie is " + ' ' + yearAngie + ' ' + 'years old');
// console.log('is Giovanni older than Andrea?' + whoOlder + '.');

// var now = 2018;
// var yearAngie = 1992;
// var yearMiro = 2014;
// var fullAge = 18;

// var ageBebo = 22
// var ageGio = 19
// var ageAngie = 26

// var average = (ageAngie + ageBebo + ageGio) / 3 
// roundedAverage = Math.round(average);
// console.log(roundedAverage);

// var isFullAge = now - yearMiro >= fullAge;
// console.log(isFullAge);

// var johnHeight = 1.85
// var markHeight = 1.78
// var johnWeight = 80
// var markWeight = 75

// var bmiJohn = johnWeight / (johnHeight)^2
// console.log("The BMI of John is " + bmiJohn);
// var bmiMark = markWeight / (markHeight)^2
// console.log("The BMI of Mark is " + bmiMark);

// // var highestBmi = bmiJohn >= bmiMark
// // console.log('is the BMI of John higher than the one of Mark?'+ ' ' + highestBmi + '.');

// if (bmiMark > bmiJohn) {
//   console.log("Mark bmi is higher than Marks")
// } else { console.log("John Bmi\'s is higher than Mark\'s")}

// var angieAge = 26
// var fullAge = 18

// if (angieAge >= fullAge) {
//   console.log("cheers, here's your beer!")}
// else {console.log("nope, kiddo, only juice for you")}

// var name = 'Joe'
// var age = 16

// if (age < 15) {
//   console.log("you are still a kid");
// } else if (age <= 60 && age >= 16) {
//   console.log ("you are an adult");
// } else {
//   console.log("you are very old ")}

// age >= 18 ? console.log(name + 'enjoys a nice cold beer') : console.log(name + ' ' +'can drink just water');

// var job = "developer"
// var myName = 'Angie'

// switch (job) {
//   case 'developer':
//     console.log(myName + ' ' + 'builds web apps');
//     break;
//   case 'teacher':
//     console.log(myName + ' ' +'teaches people math');
//     break;
//   case 'salesman':
//     console.log(myName + ' ' +'sales stuff to people');
//     break;
//   default: 
//     console.log(myName + ' ' +'does something else')
// }; 

// var height = 0;

// if (height || height === 0 ) {
//   console.log('Variable is defined');
// } else {
//   console.log('variable has NOT been defined');
// }

// var mikeScoreAverage = (116 + 94 + 123) / 3
// var johnScoreAverage = (89 + 120 + 103) / 3
// var maryScoreAverage = (97 + 134 + 105) / 3

// console.log(mikeScoreAverage);
// console.log(johnScoreAverage);

// if (mikeScoreAverage > johnScoreAverage && mikeScoreAverage > maryScoreAverage)
//   console.log("Mike\'s team has scored the most on average they have scored" + ' ' + mikeScoreAverage);
// else if 
//   (mikeScoreAverage < johnScoreAverage && johnScoreAverage > maryScoreAverage)
//   console.log ("John\'s team has scored the most on average, they have scored" + ' ' + johnScoreAverage)
// else 
//   console.log('both teams have scored less than Mary\'s team on average, she scored' + ' ' + maryScoreAverage);

// function calculateAge(birthYear){
//   return 2019 - birthYear;
// }

// var agePerson1 = calculateAge(1992);
// var agePerson2 = calculateAge(1954);

// console.log(agePerson1, agePerson2);

// function yearUntilRetirement (year, firstName){
//   var age = calculateAge(year);
//   var retirement = 65 - age;
//   if (retirement > 0){
//       console.log(firstName + ' will retire in' + ' ' + retirement + ' ' + 'years.');
//   } else {
//       console.log (firstName + ' is already retired.');
//   }
// }

//   console.log(yearUntilRetirement(1992, 'Angie'));
//   console.log(yearUntilRetirement(1988, 'Bob'));
//   console.log(yearUntilRetirement(1932, 'Anna'));


// var whatDoYouDo = function(job, firstName) {
//   switch(job) {
//     case 'teacher':
//         return firstName + ' teaches kids how to code';
//     case 'driver':
//         return firstName + ' drives people around';
//     default:
//       return firstName + ' does soemthing else';
//   }
// }

// console.log(whatDoYouDo('teacher', 'Karl'));
// console.log(whatDoYouDo('driver', 'Albin'));
// console.log(whatDoYouDo('pilot', 'Angie'));

// var names = ['rudolph', 'babe', 'rex']
// var years = new Array(1990, 1969, 1948);

// console.log(names[2]); // rex
// console.log(names.length);  //3

// //mutate array data 

// names[1] = 'Pongo'
// names[names.length] = 'Chip';
// console.log(names);

// var mia = ['Mia', 'Lindsten', 1991, 'pilot', false];

// mia.push('blue');
// mia.unshift('Ms.');
// mia.shift();
// mia.pop();
// console.log(mia);

// var isPilot = mia.indexOf('pilot') === 3 ? 'Mia is a pilot' : 'Mia is a pilot'; 
// console.log(isPilot);


// var bill = [124, 48, 268]

// function tipCalculator(bill) {
//   if (bill < 50) {
//     return(bill* 20/100)  
//   } else if 
//   (bill >= 51 && bill <= 200){
//     return(bill * 15/100)}
//     else return (bill * 10/100)
//   }

// bill.map((e)=>tipCalculator(e));
// console.log(bill.map((e)=>tipCalculator(e)));

// var dog =  {
//   name: 'ettore', 
//   birthYear: 2006,
//   color: 'blonde',
//   family: ['mirò', 'ben'],
//   isHappy: true,
//   calcAge: function(){
//     this.age = 2019 - this.birthYear;
//   }
// };

// dog.calcAge();
// console.log(dog);

// // console.log(dog);
// // console.log(dog.family);
// // var x = 'birthyear'
// // console.log(dog['age']);
// // dog.age = 15
// // console.log(dog.calcAge());

// var person1 = {
//   nom :'Maria',
//   height : 1.70,
//   weight : 55,
//   bmi: function(){
//     myBmi = this.weight / (this.height^2)
//     return myBmi
//   }
// }

// console.log(person1.bmi());

// var person2 = {
//   nom : 'Karla',
//   height : 1.72,
//   weight : 61,
//   bmi: function(){
//     myBmi = this.weight / (this.height^2)
//     return myBmi
//   }
// }

// console.log(person2.bmi());

// if (person1.bmi() > person2.bmi()) {
//   console.log( person1['nom'] + " is fatter than Karla since her BMI is "+ person1.bmi());
// } else {
//   console.log(person2['nom'] + " is fatter than Maria since her BMI is " + person2.bmi());
// }


//for loop
// for (i = 1; i <= 6; i++){
//   console.log(i);
// }

var dog = ['ettore', 'labrador', 2006, 'happy'];
// for (var i=0; i<dog.length; i++) {
//   console.log(dog[i]);
// }

//while loop
// var i = 0;
// while(i < dog.length){
//   console.log(dog[i]);
//   i++
// }

// //continue and break statement
// for (var i = 0; i < dog.length; i++) {
//   if(typeof dog[1] !== 'string' ) continue;
//   console.log(dog[i]);
// }

// for (var i = 0; i < dog.length; i++) {
//   if(typeof dog[i] !== 'string' ) continue;
//   console.log(dog[i]);
// }

// for(var i = 5; i >= 0; i--) {
//   console.log(dog[i]);
// } 


// var Dylan = {
//   fullName : 'Dylan Bob',
//   bills : [124, 48, 268, 180, 42],
//   calcTip: function(){
//     this.tips = [];
//     this.finalValues = [];

//     for (var i = 0; i < this.bills.length; i++)
//     {
//       var percentage;
//       var bill = this.bills[i];
  
//       if(bill < 50) {
//         percentage = .2;
//       } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//       } else {
//         percentage = .1;
//       }
      
  
//       this.tips[i] = bill * percentage;
//       this.finalValues[i] = bill + this.tips[i];
//     }
//   }
// }

// Dylan.calcTip();
// console.log(Dylan);


// var mark = {
//   fullName : 'mark smith',
//   bills : [77, 475, 110, 45],
//   calcTip: function(){
//     this.tips = [];
//     this.finalValues = [];
//     this.finalAverage = [];

//     for (var i = 0; i < this.bills.length; i++)
//     {
//       var percentage;
//       var bill = this.bills[i];
  
//       if(bill < 100) {
//         percentage = .2;
//       } else if (bill >= 100 && bill < 300) {
//         percentage = .1;
//       } else {
//         percentage = .25;
//       }
      

//       for (var i = 0, sum = 0; i < this.finalValues.length; sum += this.finalValues[i++]);

//       this.tips[i] = bill * percentage;
//       this.finalValues[i] = bill + this.tips[i]; 
//       this.finalAverage = (sum) / this.finalValues.length; 
//     }
//   }
// }



// mark.calcTip();
// console.log(mark);


________________________

// function declaration for hoisting

// calculateAge(1933);

// function calculateAge(year) {
//   console.log(2019 - year);

// }



// //function expression - hoisitng works only if they are called after being defined

// var retirement = function(year) {
//   console.log(65- (2019 - year));
// }

// retirement(1990);


// variables same as function expressions needs to be called after being defined


// var age = 23;
// console.log(age);

// function foo() {
//   var age = 27;
//   console.log(age); // 27 because it reads the local variable 
// }
// foo();
// console.log(age); //23 because it takes the var age stored as global variable in line 24

// // scoping example
 
// var a = 'hello';  // global variable 
//   first();

// function first() {
//   var b = 'hej'; // local variable
//   second();

//   function second(){
//     var c = 'ciao';  // local variable 
//     console.log(a + ' ' + b + ' ' + c); // b can be accessed because inside the parent function  
//   }
// }

// var a = 'hello';  
//   first();

// function first() {
//   var b = 'hej'; 
//   second();

//   function second(){
//     var c = 'ciao';  
//     third()  
//   }
// }

// function third() {
//   var d = 'Bob';
//   console.log(c);
// }


// calculateAge(2000);

// function calculateAge(year) {
//   console.log(2019 - year);
//   console.log(this);
// }

// var john = {
//     name: 'john',
//     yearOfBirth: 1991,
//     calculateAge: function() {
//       console.log(2019 - this);
//       console.log(2019 - 
//       this.yearOfBirth)

//       // function innerFunction() {
//       //   console.log(this);
//       // }
//       // innerFunction();
//   }
// }

// john.calculateAge();


// var mike = {
//   name: 'mike',
//   yearOfBirth: 1998
// };

// mike.calculateAge = john.calculateAge;
// mike.calculateAge();