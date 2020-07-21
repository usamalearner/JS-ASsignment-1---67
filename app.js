
//================================================================= chapter  1 ================
// alert("Greetings welcome");
// 
// alert("Error! please enter a valid password");
// 
// alert("welcome to jS land" +"\r\n"+ "happy coding");
// 
// alert("welcome to jS land");
// alert("happy coding");
// 
// ===========================================================chapter 2===================
// var username = "usama ali";
// 
// var myName = "Syed Usama Ali";
// 
// var message = "Hello World";
// alert(message);
// 
//  var name ="Usama";
//  var age ="19 years old";
//  var course =  "web and mobile hybrid app development";
// alert(name);
// alert(age);
// alert(course);
// 
// var email = "syedusamaali@gmail.com";
// alert("my email is " + email);
// 
// var book ="a smarter way way to learn JS";
//  alert("I am trying to learn from a book" + book);
// 
// document.write("<h1>yeah I can write HTML content thriugh JS");
// 
// ==================================== chapter 3 =============================
// var age = 15;
//  alert("my age is" + age);
// 
// var times = "N times";
//  alert("you have visited this site " + times);
// 
// var birthyear = 1999;
// document.write(birthyear + "<br>" + "this type of my declared variable is number");
// 
// var name = "Syed Usama Ali";
// var product = "T Shirts";
// var quantity = 5;
// document.write(name + "has ordered " + quantity + product);
// 
// ======================================chapter 4============================================
// var a = "usama", age = 5, course = "WEB";
// 
//  legal varible Names
// var userName , age, emailAddress, myName, yourName ;
//  illegal variable names
// var _usama , Name , MYname , AGe , CurrentLOcation;
// 
// document.write("<h1>Rules for naming JS variables</h1><br>");
// document.write("Variable names can only contain numbers, $ and _  For example $my_1stVariable<br>" );
// document.write("Variables must begin with a letter,$ or _ or . For example $name, _name or name <br>");
// document.write("Variable names are case sensitive <br> Variable names should not be JS keywords");
// 
// ===============================================================chapter 5 ========================
// 
// var a = 12
// var b = 13
// var c = a+b 
// document.write("sum of "+a+" and "+b+" is "+c+"<br/>");
// 
// var c = a-b 
// document.write("subraction of "+ a +" and "+b+" is "+c + "<br>");
// var c = a*b 
// document.write("multiplication of "+ a +" and "+b+" is "+c + "<br>" );
// var  c = a/b 
// document.write("division of "+ a +" and "+b+" is "+c + "<br>" );
// var c = a%b 
// document.write(" modulus of " + a+ " and "+b+" is " + c + "<br>" );
// 
// var a 
// document.write("Value after variable declaration is: " + a + "</br>");
// a = 5
// document.write("Initial value: " + a + "</br>");
// a++
// document.write("Value after increment is: " + a + "</br>");
// a= a+7
// document.write("Value after addition is: " +a+ "</br>");
// a--
// document.write("Value after decrement is: " +a+ "</br>");
// a = a%3
// document.write("The remainder is: " +a+ "</br>");
// 
// var a = 600;
// var totalPrice = a*5;
// document.write("Total cost to buy 5 tickets to a movie is " + totalPrice +"PKR <br>");
// 
// document.write("<h1> Table of 4 </h1>");
// document.write(
//     "4 x 1 =" +4*1+ "<br>" +
//     "4 x 2 =" +4*2+ "<br>" +
//     "4 x 3 =" +4*3+ "<br>" +
//     "4 x 4 =" +4*4+ "<br>" +
//     "4 x 5 =" +4*5+ "<br>" +
//     "4 x 6 =" +4*6+ "<br>" +
//     "4 x 7 =" +4*7+ "<br>" +
//     "4 x 8 =" +4*8+ "<br>" +
//     "4 x 9 =" +4*9+ "<br>" +
//     "4 x 10 =" +4*10+ "<br>"
// );
// 
// var c = 25;
// var f =(c* 9/5)+32;
// document.write(c+"<sup>0</sup>C is "+f+"<sup>0</sup>F ");
// var f = 70;
// var c =(f-32) * 5/9;
// document.write("<br/>"+f+"<sup>0</sup>C is "+c+"<sup>0</sup>C ");
// 
// var item1 = 650;
// var item2 = 100;
// var quantityitem1 = 3
// var quantityitem2 = 7
// var scharges = 100
// var totalcost = item1*quantityitem1+item2*quantityitem2+scharges;

// document.write(
//     "<h1> Shopping Card </h1>"+
//     "Price of item 1 is "+item1+
//     "<br/>Quantity of item 1 is "+quantityitem1+
//     "<br/> Price of item 2 is "+item2+
//     "<br/>Quantity of item 2 is "+quantityitem2+
//     "<br/>Shipping Charges" +scharges+
//     "<br/> <br/> <br/>Total cost of your order is : "+totalcost
// );
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = 804/980 *100;
// document.write(
//     "<h1> Marks Sheet </h1>" +
//     "Total marks :" +totalMarks+
//     "<br/>Marks obtained :" +marksObtained+
//     " <br/> Percentage :" +percentage
// );
// 
// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius;

// document.write (
//     "<h1>The Geometrizer </h1>"
//     +"Radius of a circle :" +radius+
//     "<br/> The circumference is : "+circumference+
//     "<br/> The area is : "+area
// );
// 
// var num = 1;
// num = ((num+5)*10)/2;
// document.write(num);
// 
// var currentYear = 2020;
// var birthYear = 2001;
// var age = currentYear-birthYear;
// document.write("<h1>Age Calculator</h1>Current Year: "+currentYear+"</br>Birth Year: "+birthYear+"</br>Current Age"+age);
// 
// ===========================================================chapter 6-9=================================
// var a = 10;
// document.write(
//     "Result: <br/> The value of a is:" +a+
//     "<br/> -------------------------------"+

//     "<br/><br/> The value of ++ a is:"+(++a)+
//          "<br/>  Now the value of a is:"+a+

//     "<br/><br/> The value of a++ is:"+(a++)+
//          "<br/>  Now the value of a is:"+a+

//     "<br/><br/> The value of  --a is:"+(--a)+
//          "<br/>  Now the value of a is:"+a+

//     "<br/><br/> The value of a-- is:"+(a--)+
//          "<br/>  Now the value of a is:"+a 
//         );
// 
// var a = 6;
// var b = 2;
// var result = --a - --b + ++b + b--;
// document.write(" a is ="+a);
// document.write("<br/> b is = "+b);
// document.write("<br/> result is ="+result +"</br> </br>");
// 
// var userName = prompt("Please enter your Name");
// alert("Good Morning" + " " +userName);
// 
// var tableNo = prompt("Please enter a number for Table","5");
// var i = Number(tableNo);
// var num = 1
// document.write(
//     i+" x "+num+" = "+ (i*num++)+"<br/>"+
//     i+" x "+num+" = "+ (i*num++)+"<br/>"+
//     i+" x "+num+" = "+ (i*num++)+"<br/>"+
//     i+" x "+num+" = "+ (i*num++)+"<br/>"+
//     i+" x "+num+" = "+ (i*num++)+"<br/>"+
//     i+" x "+num+" = "+ (i*num++)+"<br/>"+
//     i+" x "+num+" = "+ (i*num++)+"<br/>"+
//     i+" x "+num+" = "+ (i*num++)+"<br/>"+
//     i+" x "+num+" = "+ (i*num++)+"<br/>"+
//     i+" x "+num+" = "+ (i*num++)+"<br/>"
// );

// alert("wellcome");
// rollno=prompt("enter your roll no","");
// name=prompt("enter your name","");
// english=prompt("enter your english marks","");
// urdu=prompt("enter your urdu marks","");
// computer=prompt("enter your computer marks","");
// confirm = confirm("Are you sure !");
// total=300;
// obtain=eval(english)+eval(urdu)+eval(computer);
// percentage=obtain*100/total;
// average=obtain/3;
// if (percentage>=33) {
// result="pass";
// } else {
//    result="fail";
// }
// if (percentage>=80){
//    grade="A one" ;
// } else if (percentage>=70){
//    grade="A";
// } else if(percentage>=60){
//    grade="B+";
// } else if (percentage>=50){
//    grade="c";
// } else if (percentage>=40){
//    grade="D";
// } else {
//    grade="F";
// }
// if(confirm==true){
//     document.write('<h1 align="center"><font color="red">Result card</font> </h1> <br><table border="1" width="400" align="center"><tr><td width="150">Roll no</td><td> '+ rollno +'</td></tr><tr><td width="150">Name</td><td> '+ name +'</td></tr><tr><td width="150">English</td><td>' + english + '</td></tr><tr><td width="150">Urdu</td><td> '+ urdu +'</td></tr><tr><td width="150">computer</td><td> '+ computer +'</td></tr><tr><td width="150">total marks</td><td> '+ total +'</td></tr><tr><td width="150">Obtained Marks</td><td> '+ obtain +'</td></tr><tr><td width="150">Percentage</td><td> '+ percentage +'</td></tr><tr><td width="150">Average</td><td> '+ average +'</td></tr><tr><td width="150">Pass/Fail</td><td> '+ result +'</td></tr><tr><td width="150">Grade</td><td> '+ grade +'</td></tr></table>');
//    }
//    else {
//           document.write('<h1>Result not found</h1>')
//    }
// 
// ==================================chapter 9-11 =================================
// 
// var cityName = prompt("Enter Your City Name");
// if (cityName === "karachi"){
//     alert("Welcome to city of lights")
// }

// var gender = prompt("Enter Your Gender");
// if (gender === "male"){
//     alert("Good Morning Sir")
// }
// if (gender === "female"){
//     alert("Good Morning Ma'am")
// }

// var lightColor = prompt("Enter Traffic Signal Light Color");
//  if (lightColor === "red"){
//      alert("Must Stop")
//  }
//  if (lightColor ==="yellow"){
//     alert("Ready to move")
// }
// if (lightColor ==="green"){
//     alert("Move now")
// }

// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// =================================== chapter 12-13====================
// var number1 = +prompt("Enter first Integar");
// var number2 = +prompt("Enter second Integar");
// if (number1> number2) {
//     alert(number1 + " is larger than" + number2)
// }
// else if (number1 < number2 ) {
//     alert(number2 + " is larger than" + number1)
// }
//  else alert(number1 + " and " + number2 + " are equal");
// 
// var number = +prompt("Enter a number");
//  if (number > 0 ) {
//     alert("The given number is positive")
// }
// else if (number < 0 ) {
//     alert("The given number is negative")
// }
// else alert( "The given number is zero");

// var char = prompt("Enter a character in small character");
// if (char === "a" || char === "e"|| char === "i"|| char === "o"|| char === "u" ) {
//     alert("true")
// }
// else alert("false");

// var password = "0000";
// var uPassword = prompt("Enter your password");
// if (uPassword === ""){
//     alert("please enter your password");
// }
// else if (uPassword === password) {
//     alert("correct! the password you entered matches the original password");
// }
// else alert("incorrect password");

// / var greeting;
// var hour = 13;
// if (hour <18) {
//     greeting = "good day";
// }
// else greeting = "good evening";

// ===============================chapter 14-16==========================
// var literalArray = [];

// var objectArray = [];

// var stringsArray = ["syed","usama","ali"];

// var numbersArray = [1,2,3,4,5];

// var booleanArray = [true,false];

// var mixedArray = ["usama",1971,true];

// var eduArray = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// document.write("<h1>Qualification</h1>")
// for (var i = 0; i <=7; i++){
//     document.write(i+1+" "+eduArray[i]+"<br/>");
// }

// var phoneModel = ["apple","samsung","motorla","nokia","sony & haier"]
// document.write(
//     "<select>"+
//     "<option>"+phoneModel[0]+"</option>"+
//     "<option>"+phoneModel[1]+"</option>"+
//     "<option>"+phoneModel[2]+"</option>"+
//     "<option>"+phoneModel[3]+"</option>"+
//     "<option>"+phoneModel[4]+"</option>"+
//     "</select>"
// );

// ========================================chapter 17-20=========================

// for (var i = 1; i <= 10; i++){
//     document.write(i+"<br/>")
// }

// var table = +prompt("Enter a number");
// var length = +prompt("Enter length for multiplication table" );
// document.write("Multiplication Table of " +table+"<br/> length "+length+ "<br/>")
// for(var i = 1; i <= length; i++){
//     document.write(table+" x "+i+" = "+table*i+"<br/>")
// }

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// var arr = fruits.length;
// for(var i = 0; i <arr; i++){
//     document.write(i +fruits[i]+"<br/>");
// }

// var arr = [24,53,78,91,12];
// var max = Math.max.apply(Math,arr);
// document.write(
//     "Array items: "+arr+
//     "<br/> The largest number is " +max
// );

// var arr = [24,53,78,91,12];
// var min = Math.min.apply(Math,arr);
// document.write(
//     "<br/> The samllest number is " +min
// );

// for(var i = 1; i<=100; i++){
//     if(i%5 === 0){
//         document.write(i+",")
//  }
// };

// ============= chapter 21-25===========
// task 1
// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var fname = prompt("Enter first name")
// var lname = prompt("enter last name")
// var fullname = fname+ " " + lname
// alert(fullname + " ,welcome sir how are you?")

// task 2
// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var model = prompt("favorite mobile phone model")
// alert("length of your model is " + model.length)

// task3
// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var sTring = "pakistan"
// document.write("index of n is : " + sTring.indexOf("n"))

// task 4
// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser .

// var str = "hello world"
// document.write("last inndex of l is : " + str.lastIndexOf("l"))

// task5
// Write a program to find the character at 3 rd index in the
// word “Pakistani” and display the result in your browser .

// var str = "Pakistani"
// document.write("character at third index is : " + str.charAt(3))

// task6
// Repeat Q1 using string concat() method.

// var fname = prompt("Enter first name")
// var lname = prompt("enter last name")
// var result = fname.concat(lname)
// alert(result + " ,welcome sir how are you?")

// task 7
// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var str = "Hyderabad"
// var res = str.replace("Hyder","Islam")
// document.write(res)

// task 8
// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var res = message.replace(/and/g,"&")
// document.write(res)

// task 9
// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var str = "472"
// document.write(str + " the number is string <br>")
// var num = parseInt(str)
// if (num === 472){
//     document.write(num + " the number is integer")
// }

// task 10
// Write a program that takes user input. Convert and
// show the input in capital letters.

// var inputs = prompt("enter text")
// document.write(inputs.toUpperCase())

// task11
// Write a program that takes user input. Convert and
// show the input in title case.

// var inputs = prompt("enter text")
// var inCap = inputs.slice(0,1)
// var inSmall = inputs.slice(1)
// var res = inCap.toUpperCase() + inSmall.toLowerCase()
// document.write(res)

// task 12
// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36
// var res = num.toString()
// var withoutdot = res.split('.').join("")
// document.write(withoutdot);

// task 13
// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var inputs = prompt("enter name")
// for (a=0;a<inputs.length;a++){
//     var ascii = inputs.charCodeAt(a)
//     if (ascii == 33 || ascii == 44 || ascii==46 || ascii == 64){   
//         alert("enter valid user name")
      
//     }
// }
  
// task 14
// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var A = ["cake","apple pie" ,"cookie" ,"chips" ,"patties" ]
// var user = prompt("please enter item you want")
// var search = user.toLowerCase()
// // document.write(search)
// if (search === A[0] || search === A[1]  || search === A[2]  || search === A[3]  || search === A[4]){
//  document.write(user + " is available at index " + A.indexOf(search))
// }
// else {
//     document.write(user + " not available")
// }

// task 15
// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password = prompt("enter password")

// if(password === "" || password.length<6 || password[0] >= 0  ){
//    alert("please enter a valid password")
// }
// var ascii = password.charCodeAt(a)
// for (a=0;a<password.length;a++){     
//         if (ascii == 33 || ascii == 44 || ascii==46 || ascii == 64 ){   
//             alert("please enter a valid password")        
//         }
//         else if (ascii < 65 || ascii > 122){
//             alert("please enter a valid password")
//         }
//         else if (ascii > 90 && ascii < 97){
//             alert("please enter a valid password")
//         }
//     }

// task 16
// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// var line = []
// line = university.split('')
// for (var i = 0; i < line.length; i++) {
// document.write(line[i] + "<br>")
// }

// task 17
// Write a program to display the last character of a user
// input.
// var user = prompt("user input")
// var a = user.length-1
// document.write(user.charAt(a))

// task 18
// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var sTring = "The quick brown fox jumps over the lazy dog"
// var lower = sTring.toLowerCase()

// var count = ((lower.match(/the/g) || []).length);
// document.write(lower+"<br>")
// document.write("the ocurances of the word 'the' are/is :  " + count)

// =================== chapter 26-30 ==============================
// 
// task 1
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var input = +prompt("enter +ve integer")
// document.write(input)
// document.write("<br>")
// document.write(Math.round(input))
// document.write("<br>")
// document.write(Math.floor(input))
// document.write("<br>")
// document.write(Math.ceil(input))
// document.write("<br>")

//  task 2
// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var input = +prompt("enter -ve integer")
// document.write(input)
// document.write("<br>")
// document.write(Math.round(input))
// document.write("<br>")
// document.write(Math.floor(input))
// document.write("<br>")
// document.write(Math.ceil(input))
// document.write("<br>")

// task 3
// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var input = +prompt("enter absolute to be value in integer")
// document.write(input)
// document.write("<br>")
// document.write(Math.abs(input))

// task 4

// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
// var num = Math.random() * 7
// var dice = Math.floor(num)
// document.write("Dice value is " + dice)

//  task 5
// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var num = Math.random() * 2
// var toss = Math.floor(num)
// if (toss === 0){
//     document.write("heads")
// }
// else{
//     document.write("tails")
// }

// task 6
// Write a program that shows a random number between 1
// and 100 in your browser.

// var num = (Math.random() * 99 )+ 1
// var between = Math.floor(num)
//   document.write(between)
// 

// task 8
// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


// var num = (Math.random() * 7)+ 2
// var check = Math.floor(num)
// var usec = +prompt("enter no b/w 1 to 10")
// if (usec == check){
//     document.write("Correct guess")
// }
// else{
//     document.write("try Again")
// }

// ====================== chapter 31-34================================

//  task 1
// Write a program that displays current date and time in
// your browser.

// var a = new Date()
// document.write(a)

// task 2
// Write a program that alerts the current month in words.
// For example December.

// var a = new Date()
// var b = a.getMonth()
// if (b == 0){
//     document.write("january")
// }
// else if (b == 1){
//     document.write("February")
// }
// else if (b == 2){
//     document.write("March")
// }
// else if (b == 3){
//     document.write("April")
// }
// else if (b == 4){
//     document.write("May")
// }
// else if (b == 5){
//     document.write("June")
// }
// else if (b == 6){
//     document.write("July")
// }
// else if (b == 7){
//     document.write("August")
// }
// else if (b == 8){
//     document.write("SEPTEMBER")
// }
// else if (b == 9){
//     document.write("OCTOBER")
// }
// else if (b == 10){
//     document.write("NOVEMBER")
// }
// else if (b == 11){
//     document.write("DECEMBER")
// }

// task 3
// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var a = new Date()
// var b = a.getDay()

// if (b == 0){
//     document.write("Sun")
//     }
//     else if (b == 1){
//         document.write("mon")
//     }
//     else if (b == 2){
//         document.write("tues")
//     }
//     else if (b == 3){
//         document.write("wed")
//     }
//     else if (b == 4){
//         document.write("thurs")
//     }
//     else if (b == 5){
//         document.write("fri")
//     }
//     else if (b == 6){
//         document.write("Sat")
//     }

// task 4
// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var a = new Date()
// var b = a.getDay()
// if(b==0 || b == 6){
//     document.write("It’s Fun day")
// }
// else{
//     document.write("no fun day")
// }


// task 5
// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16 th of the month
// else shows “Last days of the month”.

// var a = new Date()
// var b = a.getDate()
// document.write(b + "<br>")
// if(b <16){
//     document.write("First fifteendays of the month")
// }
// else{
//     document.write("Last days of the month")
// }

// task 6
// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var a = new Date()
// var b= a.getTime()
// var c = b / 60000
// document.write("Elapsed miliseconds since january 1, 1970: "+ b + "<br>")
// document.write("Elapsed minutes since januray 1, 1970: " + c)

// task 7
// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var a = new Date()
// var b = a.getHours()
// if (b < 12) {
//     alert("Its AM")
// }
// else alert ("its PM")

// task 8
// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var a = new Date("Decemer 31, 2020")
// document.write("Later Date " + a)

// task 13
// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var a = +prompt("Enter your age");
// var b = 2020 - a;
// document.write("Your age is " + a + "<br>");
// document.write("Your birth year is " + b);

// ===================== chp 35-38======================

// task 1
// Write a function that displays current date & time in your
// browser.

// function datetime(){
//     var dt = new Date();
//     document.write(dt);
// }
// datetime();

// task 2
// Write a function that takes first & last name and then it
// greets the user using his full name.

// function wellcome () {
//     var fName = prompt("Enter your first name")
//     var lName = prompt("Enter your last name")
//     var full = fName + "  " + lName
//     alert("Greetings sir " + full)
// }
// wellcome();


// // task 3
// // Write a function that adds two numbers (input by user)
// // and returns the sum of two numbers.

// function sum(){
//     var fnum = +prompt("Enter your first number")
//     var snum = +prompt("Enter your second number")
//     var total = fnum + snum
//     alert(total)

// }
// sum()

// task 9
// Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// var height = prompt("Enter the height of rectangle")
// var width = prompt("Enter the width of rectangle")

// function area(height,  width) {
//     return height * width;
// }
// document.write("The area of rectangle is " + area(height, width) + " units ")

// ================ assignment 38 - 42=================

// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
// var a = +prompt("enter no");
// var b = +prompt("enter power no")
// function power(a,b){

//  return Math.pow(a,b)
// }
// alert(power(a,b));

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// To determine whether a year is a leap year, follow these steps:

// If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
// If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
// The year is a leap year (it has 366 days).
// The year is not a leap year (it has 365 days).

// year = +prompt("enter year");
// function checkYear(year){
// if(year%4 === 0){
//         alert(year + " is a leap year")
// }
// else {
//     alert(year + " is not a leap year")
// }
// return 0;
// }
// checkYear(year);

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// var a = 5;
// var b =5;
// var c = 5;

// function s(a,b,c){
// s1 =(a+b+c)/2
//  return  s1
// }
// s(a,b,c);
// function area(){
//   aa=s1*(s1-a)*(s1-b)*(s1-c)
//   Math.sqrt(aa)
//   return aa
// }
// area(s1,a,b,c)
// document.write(s1)
// document.write("<br>")
// document.write(area(s1,a,b,c))

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// var a = +prompt("enter marks in sub 1 ")
// var b = +prompt("enter marks in sub 2")
// var c = +prompt("enter marks in sub 3")
// total = 300;
// function avg(){
//     av= (a+b+c)/3
//     return av
// }
// function per(){
// perceent = (av/total)*100
// return perceent
// }
// function mainFunction(){
//     avg(a,b,c);
//     per(av,total);
//     document.write(avg(a,b,c))
//     document.write("<br>")
//     document.write(per(av,total))
// }
// mainFunction(avg(),per())

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// ================= chapter 43 - 48===============================

// 1. Show an alert box on click on a link.
// in html file
{/* <a href="#" onclick="alert('hi')">link</a> */}

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.
// in html file
{/* <img src="./Chapter 1 to 67 (JS)/chapter52-57/images/others/1.jpg" onclick="alert('hi')" alt=""> */}

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.
{/* <script>
function del(){
    document.getElementById("del").innerHTML=''
}
</script>
<table border="1">
<tr id="del">
<td >Student </td><td onclick="del()">delete</td>
</tr>  
<tr id="del">
<td >Student </td><td onclick="del()">delete</td>
</tr>      <tr id="del">
<td >Student </td><td onclick="del()">delete</td>
</tr>      <tr id="del">
<td >Student </td><td onclick="del()">delete</td>
</tr>      <tr id="del">
<td >Student </td><td onclick="del()">delete</td>
</tr>      <tr id="del">
<td >Student </td><td onclick="del()">delete</td>
</tr>      <tr id="del">
<td >Student </td><td onclick="del()">delete</td>
</tr>      <tr id="del">
<td >Student </td><td onclick="del()">delete</td>
</tr>      <tr id="del">
<td >Student </td><td onclick="del()">delete</td>
</tr>      <tr id="del">
<td >Student </td><td onclick="del()">delete</td>
</tr>  
</table> */}
// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.
// on html file
{/* <script>
        function pic(){
    document.getElementById("ok").src = "./Chapter 1 to 67 (JS)/chapter52-57/images/others/1.jpg"
         }
         function pic1(){
    document.getElementById("ok").src = "./Chapter 1 to 67 (JS)/chapter52-57/images/others/10.jpg"
         }
         </script>
   <img id="ok" onmouseover="pic()" onmouseout="pic1()" src="./Chapter 1 to 67 (JS)/chapter52-57/images/others/10.jpg" alt=""></img> */}
// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.
// for html
// <head>
// <script>
// x=0;
// function abc(){
//     x++;
//     document.getElementById("change").innerHTML=x;
// }
// function abc1(){
//     x--;
//     document.getElementById("change").innerHTML=x;
// }
// </script>
// <button onclick="abc()">increment</button>
// <button onclick="abc1()">decrement</button>
// <h1 id="change">0</h1>
// </head>
// <body onload="abc3()"></body>

// ======================== chapter 49 - 52 ===================
// 1. Create a signup form and display form data in your web
// page on submission.

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

// =================== chapter 53 - 