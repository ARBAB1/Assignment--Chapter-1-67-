// // Task Number :1
// var firstName = prompt("Enter your first name : ");
// var lastName = prompt("Enter your last name : ");
// alert("Welcome "+ firstName + " " +lastName);

// // Task Number : 2

// var favMobile = prompt("Your favourite mobile phone model : ");
// var lengthOfmobile = favMobile.length;
// document.write("<br> My favourite phone is : "+ favMobile);
// document.write("<br> Lenght of a string is : "+ lengthOfmobile);

// // Task Number: 3
// var country = "Pakistani";
// var indx = country.indexOf("n");
// document.write("<br><br> String : "+country);
// document.write("<br> Index of 'n' : "+ indx);

// // Task Number : 4
// var str = "Hello World";
// var indx = str.lastIndexOf("l");
// document.write("<br><br> String : "+ str);
// document.write("<br> Last index of 'l' : "+ indx);


// // Task Number : 5
// var country = "Pakistani";
// var indx = country.charAt(3);
// document.write("<br><br> String : "+country);
// document.write("<br> Character at index 3 : "+ indx);


// // Task Number : 6
// var firstName = prompt("Enter your first name : ");
// var lastName = prompt("Enter your last name : ");
// var fullName = firstName + " " +lastName ;
// alert("Welcome "+ fullName);

// // Task Number : 7

// var city = "Hyderabad";
// var replaceCity ; 
// for(i=0;i<=city.length ; i++)
// {
//     if (city.slice(i,i+5) === "Hyder"){
//         replaceCity = city.slice(0,i)+"Islam"+city.slice(i+5);
        
//     }
// }
// document.write("<br> City : "+city);
// document.write("<br> After replacement : " + replaceCity);

// // Task Number : 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g,"&")
// document.write("<br>" + newMessage);

// // Task Number : 9
// var value = "472";
// document.write("<br> Value : "+ value);
// document.write("<br> Type : "+ typeof value);
// var a = Number(value);

// document.write("<br> Value : "+ a);
// document.write("<br> Type : "+ typeof a);

// // Task Number : 10
// var input = prompt("Enter any word : ");
// document.write("<br> User input : "+ input);
// document.write("<br> Upper Case : "+ input.toUpperCase());

// // Task Number : 11
// var input = prompt("Enter any word : ");
// var firstLetter = input.slice(0,1).toUpperCase();
// var otherLetter = input.slice(1).toLowerCase();
// document.write("<br> User input : "+ input);
// document.write("<br> Title Case : "+ firstLetter+otherLetter);

// // Task Number : 12
// var num = 35.36;
// var conStr = num.toString();
// var newStr;
// for (i = 0 ; i<=conStr.length-1; i++){
//     if (conStr.slice(i,i+1)==="."){
//         newStr=conStr.slice(0,i)+conStr.slice(i+1);
//     }
// }
// document.write("<br> Number : "+num);
// document.write("<br> Result : "+newStr);

// // Task Number : 13
// var userName = prompt("Enter user name : ");
// var symbol = ["@","!",",","."];
// for(i = 0 ; i <= symbol.length;i++){
//     for (j=0;j<=userName.length;j++){
//        if(userName.slice(j,j+1)===symbol[i])
//        alert("Please enter a valid username ");


//     }
// }

// // Task Number : 14
// var A = ["cake","apple pie","cookie","chips","patties"];
// var B = A.toString();
// B = B.toLowerCase();
// var flag = false;
// var userSearch = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am ?  ");
// var input = userSearch.toLowerCase();
// for (i=0;i<=B.length;i++){
//     if (input==B.slice(i,i+userSearch.length)){
//         document.write("<br> "+ userSearch + " is <b>available</b> at index "+ (A.indexOf(input)) +" in our bakery.")
//         flag = true;
//     }
// }
// if(flag === false){
//     document.write("We are sorry. "+ userSearch + " is <b>not available </b> in our bakery.")
// }

// // Task Number : 15
// var password = prompt("Enter password : ");
// var i = 0;
// var flag2 = false;
// var fnum = parseInt(password.slice(0,1));
// if (password.length>=6){
//     if (isNaN(fnum) == true ){
//         while(i<=password.length-1){
//             if(((password.charCodeAt(i))>33) && ((password.charCodeAt(i))<127)){
//                 flag2=true;
//                     i++;
//                 }
//             if(((password.charCodeAt(i))>!33) && ((password.charCodeAt(i))<!127)){
//                     flag2=false;
//                         break;
//                              }
//                 }

//                 if (flag2==true){

//                     alert("Password Confirm");

//                 }


//                 if (flag2==false){

//                     alert("Enter valid password.");
    

//                 }

//     }


//     else {
//                 alert("Password shoud be start from alphabet");
//         }

//     }

// // Task Number : 16
// var university = "University Of Karachi";
// for (var i=0;i<=university.length-1;i++){
//     document.write("<br> "+university[i]);
// }


// // Task Number : 17
// var str ="The quick brown fox jumps over the lazy dog"
// var strLower = str.toLowerCase();
// var num = 0;
// var i = 0;
// while( i <= strLower.length-1){
// if(strLower.slice(i,i+3)==="the"){
//     num++;
// }
// i++;
// }
// document.write("<br> There are "+num+" occurence of the word 'the'.");




// // Chapter 26 to 30 
// // Task No: 1
// var num = +prompt("Enter number : ");
// document.write("<br> number : "+num);
// document.write("<br> roundoff : "+Math.round(num));
// document.write("<br> floor values : "+Math.floor(num));
// document.write("<br> ceil values : "+Math.ceil(num));

// // Task Number : 2
// var num = +prompt("Enter number : ");
// document.write("<br> number : "+num);
// document.write("<br> roundoff : "+Math.round(num));
// document.write("<br> floor values : "+Math.floor(num));
// document.write("<br> ceil values : "+Math.ceil(num));

// // Task Number : 3
// var num = prompt("Enter a negative value or any number to check its absolute value : ");
// document.write("<br>The absolute value of "+ num + " is "+Math.abs(num));

// // Task Number : 4
// document.write("<br> random dice value : "+ Math.ceil(Math.random()*6) );
// document.write("<br> random dice value : "+ Math.ceil(Math.random()*6) );

// // Task Number : 5
// let toss = Math.ceil(Math.random()*2);
// let tossName ;
// if (toss == 2){
//     tossName = "Tail";
// }
// if (toss == 1){
//     tossName = "Head";
// }
// document.write(toss+"<br>");
// document.write("<br> random coin value : "+ tossName );


// // Task Number : 6 
// document.write("<br> random number between 1 and 100 : "+ Math.ceil(Math.random()*100) );


// // Task Number : 7
// let weight = prompt("Enter your weight in kilograms : ");
// let newWeight;
// let flag = false;       

// for(i = 0 ; i<= weight.length;i++){

//     if (weight.slice(i,i+1)=="k"){
//     newWeight=weight.slice(0, i);
//     flag = true;}

// }

// if (flag == false){
//     newWeight = weight;
// }
// document.write("<br> The weight of a user is "+newWeight+" kilograms");

// // Task Number : 8

// let guess = prompt("Enter any number between 1 and 10");
// let checkNum = Math.ceil(Math.random()*10);
// if (guess == checkNum){
//     alert("Congratulation you win!");
// }
// else {
//     alert("Try Again!");
// }



// // Chapter 31-34
// // Task no. 1
// var rightnow = new Date();
// document.write("<br>"+rightnow);


// // Task no.2
// var mon = ["January", "February","March", "April","May", "June","July", "August","September", "October","November","December"];
// var monthDate  = new Date();
// var currentMonth = monthDate.getMonth();
// document.write("<br> Current month :"+mon[currentMonth]);


// // Task no.3
// var currentDay = new Date();
// var tod = currentDay.toString();
// alert(" Today is " + tod.slice(0,4));



// // Task no.4
// var currentDay = new Date();
// var tod = currentDay.toString();
// if(tod.slice(0,4)==Sat || tod.slice(0,4)==Sun){
//     alert(" Its fun day!" );

// }


// // Task no.5
// var currentDay = new Date();
// var tod = currentDay.getDate();
// if(tod<16){
//     alert("First fifteen days of the month" );
// }
// else {
//     alert("Last days of the month" );
// }

// // Task no.6
// var currentDay = new Date();
// var tod = currentDay.getDate();
// document.write("<br> Current Date : "+ tod);
// var miliSec = currentDay.getTime();
// document.write("<br> Elapsed milliseconds since January 1,1970 : "+miliSec);
// document.write("<br> Elapsed minutes since January 1,1970 : "+(miliSec/(1000*60)));



// // Task no.7
// var currentDay = new Date();
// var tod = currentDay.getHours();
// if(tod<12){
//     alert("Its AM" );
// }
// else {
//     alert("Its PM" );
// }

// // Task no.8
// var laterDate = new Date("Thu Dec 31 2020 00:00:00 GMT+0500 (PKT)");
// document.write("<br> Later date : "+laterDate);

// // Task no.9
// var ramzan = new Date(2015, 05, 18 , 00,00,00);
// var ramzanTime = ramzan.getTime();
// var currentT = new Date();
// var ramzanTotal =Math.floor((((currentT.getTime()-ramzanTime))/(1000*60*60*24)));
// document.write("<br>"+ramzanTotal+" days have passed since 1st Ramzan,2015" );


// // Task no.10
// var ramzan = new Date("Sat Dec 05 2015 22:50:16 GMT+0500 (PKT)");
// var ramzanTime = ramzan.getTime();
// var currentT = new Date();
// var ramzanTotal =Math.floor(((currentT.getTime())-ramzanTime)/(1000));
// document.write("<br> On reference date Sat Dec 05 2015 22:50:16 GMT+0500 (PKT) , "+ramzanTotal+" seconds had passed since beginning of 2015" );


// // Task no.11
// var current = new Date();
// document.write("<br> current date : "+current);
// var currentS = current.toString();
// var cuHour = current.getHours()-1;
// document.write("<br> 1 hour ago, it was "+currentS.slice(0,15)+" " +cuHour+ currentS.slice(18));


// // Task No. 12
// var current = new Date();
// document.write("<br> current date : "+current);
// var currentS = current.toString();
// var cuHour = current.getFullYear()-100;
// document.write("<br> 1 hour ago, it was "+currentS.slice(0,11)+" " +cuHour+ currentS.slice(15));

// // Task No. 13
// var age = prompt("Enter birth date i.e Jan 1,1970");
// var ageDate = new Date(age.toString());
// var current = new Date();
// var newCurrentTime = current.getTime();
// var ageYear = Math.floor((newCurrentTime-ageDate.getTime())/(1000*60*60*24*30*12));
// alert("Your age is "+ageYear);
// alert("Your birthyear is "+(current.getFullYear()-ageYear));

// // Task No.14
// var customerName = prompt("Enter customer name :");
// var month = prompt("Enter Month :");
// var numOfUnits = +prompt("Enter number of units : ");
// var chargesPerUnit = +prompt("Enter charges per unit : ");
// var netAmountWithInDueDate = numOfUnits*chargesPerUnit;
// var lateSurcharge = +prompt("Enter late payment surcharge : ");
// var grossAmountAfterDueDate = netAmountWithInDueDate+lateSurcharge;
// document.write("<br> Customer Name : <b>"+customerName+"</b>");
// document.write("<br> Month : <b>"+month+"</b>");
// document.write("<br> Number of units : <b>"+numOfUnits+"</b>");
// document.write("<br> Charges per unit : <b>"+chargesPerUnit+"</b>");
// document.write("<br><br>Net Amount Payable (within Due Date) : <b>"+netAmountWithInDueDate+"</b>");
// document.write("<br> Late payment surcharge : <b>"+lateSurcharge+"</b>");
// document.write("<br> Gross Amount Payable (after Due Date) : <b>"+grossAmountAfterDueDate+"</b>");


// // Chapter 35-38
// // Task No. 1
// function timefunc (){
// var now = new Date();
// document.write("<br>"+now);
// }
// timefunc();


// // Task No. 2
// function fullName(firstName, lastName){
//     alert("Welcome "+firstName+" " +lastName);
// }
// var firstName =  prompt("Enter your first name : ");
// var lastName = prompt("Enter your last name : ");
// fullName(firstName, lastName);

// // Task No.3
// function sum(){
//     return alert("sum of "+a +" and "+b+" is "+(a+b));
// }
// var a = +prompt("Enter first number : ");
// var b = +prompt("Enter Second number : ");
// sum(a,b);


// // Task No.4
// var a = +prompt("Enter first number : ");
// var o = prompt("Enter operator : ");
// var b = +prompt("Enter second number : ");
// function cal(a,o,b){

//     if (o=="+"){
//         return alert(a+"+"+b + " = "+(a+b));
//     }
    
//     else if (o=="-"){
//         return alert(a+"-"+b + " = "+(a-b));
//     }
    
//     else if (o=="*"){
//         return alert(a+"*"+b + " = "+(a*b));
//     }
    
//     else if (o=="/"){
//         return alert(a+"/"+b + " = "+(a/b));
//     }
    
//     else if (o=="%"){
//         return alert(a+"%"+b + " = "+(a+b));
//     }
// }
// cal(a,o,b);

// // Task No.5
// var sqrnum = +prompt("Enter number to sqaure : ");
// function sqr(sqrnum){
//     return alert(Math.pow(sqrnum,2));
// }
// sqr(sqrnum);


// // Task Number : 6
// var x = +prompt("Enter number to get factorial value : ");
// function factorial(x){
//  if (x==0){
//      return 1;
//  } 
 
//      return x* factorial(x-1);
//  }
// var fac = factorial(x);
// alert("Factorial of "+x+" = "+fac);


// // Task number : 7
// var start = +prompt("Enter start number : ");
// var end = +prompt("Enter end number : ");

// function countline (start, end){
//     for (var i=start;i<=end;i++){
//         document.write("<br>"+i);
//     }
// }

// countline(start,end);


// Task Number : 8

// var base = +prompt("Enter base : ");
// var perpendicular = +prompt("Enter perpendicular : ");
// function Sqr(num){
//     return Math.pow(num,2);
// }
// function hypotenuse (base,perpendicular){
//     return alert(+(((Sqr(base))+(Sqr(perpendicular)))));
//  }
// hypotenuse(base,perpendicular);

// // Task Number : 9
// var w = prompt("Enter width : ");
// var h = prompt("Enter height : ");
// function area(width, height){
//     return document.write("<br> Area of a rectangle : "+ (width*height));
// }
// area(4,7);
// area(w,h);

// // Task Number :10
// var word = prompt("Enter word : ");
// function check (word){
//     var antiword=word.split("").reverse().join("");

//     if (word==antiword){
//        alert("It's Palindrome word");
//     }
//     else{
//         alert("It's not Palindrome word");
//     }
// }
// check(word);


// // Task Number : 11
// var str = "the quick brown fox";
// function cap(str){
//     str= str.split(" ");
//     for (var i=0;i<str.length;i++){
//     str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    
// }   
// str = str.join(" ");

// return document.write(str); 

// }
// cap(str);
 

// // Task Number : 12
// var str = prompt("Enter any string : ");

// function stringLengthCheck(){
// str = str.split(" ");
// var greatStr =0;
// for (var i = 0;i<str.length;i++){
//         if (str[i].length>greatStr){
//              greatStr = str[i].length;
//              var hi = str[i];
//         }  
//   }
// document.write(hi);
// }
// stringLengthCheck(str);

// // Task Number : 13
// function occurence(){
// var str = prompt("Enter any string : ");
// str = str;
// var letter = prompt ("Enter any letter to check its occurence : ");
// var h = 0;
// for (var i = 0 ; i<= str.length;i++){
//     if (letter == str[i]){
//         h++;
//     }
// }
// document.write("<br> The occurrence of "+ letter + " is " + h +" times in the string "+ str );
// }
// occurence();


// // Task Number :14
// var r = +prompt("Enter radius of the circle : ");
// function calCircumference(r){
//     document.write("<br> The circumference is " + (2*3.142*r));

// }


// function calArea(r){
//     document.write("<br> The Area is " + (3.142*(Math.pow(r,2))));

// }
// calArea(r);
// calCircumference(r);

// // Chapter 38 to 42
// // Task Number : 1
// function powerCustom(){
//     var a = prompt("Enter number : ");
//     var b = prompt("Enter power value : ");
//     document.write("<br> The value of "+a+ " raised to the "+ b+ " is "+Math.pow(a,b));
// }
// powerCustom();

// // Task Number  : 2
// function leapYear(){
//     var year = +prompt("Enter year : ");
//     if ((year%400==0) || ((year%4==0) && (year%100!=0))){
//         document.write("<br> "+ year +" is leap year.");
//     }
//     else {
//                 document.write("<br> "+ year + " is not leap year ");
//         }
// }
// leapYear();

// // Task Number : 3
// function sideCalc(a,b,c){
//     var s = (a+b+c)/2;
//     return s;
// }
// function triangle(a,b,c){
// var area = side*(side-a)*(side-b)*(side-c);
// return area;
// }
// var a = +prompt("Enter triangle first side : ");
// var b = +prompt("Enter triangle second side : ");
// var c = +prompt("Enter triangle third side : ");
// var side = sideCalc(a,b,c);
// var result = triangle(a,b,c);

// document.write("<br> The triangle area is " + result );

// // Task Number : 4
// function calPer(a,b,c){
//     var per = ((a+b+c)/300)*100;
//     return per;
// }
// function average(a,b,c){
//     var avg = (a+ b + c)/3;
//     return avg;
// }
// function mainFunction (a,b,c){
//     document.write("<br> Subject 1 Marks :  "+a);
//     document.write("<br> Subject 2 Marks :  "+b);
//     document.write("<br> Subject 3 Marks :  "+c);
//     document.write("<br> Average :  "+average(a,b,c));
//     document.write("<br> Percentage :  "+calPer(a,b,c) + " %");
// }
// var a = +prompt("Enter first subject marks : ");
// var b = +prompt("Enter second subject  marks : ");
// var c = +prompt("Enter third subject marks : ");
// mainFunction(a,b,c);


// // Task Number : 5
// var str  = prompt("Enter any string : ");
// var letters = prompt("Enter letter to find its position : ");
// function ind(str,letters){
//     var pos;
//     for (var i=0;i<str.length;i++){
//         if (letters==str[i]){
//             pos = i;
//             return pos;

//         }
//     }
// }
// var fin = ind(str, letters);
// document.write("<br> The position of " + letters + " is "+ fin);

// // Task Number : 6
// // var str = prompt("Enter your string : ");
// function delVowels(){
// var str = prompt("Enter your string to delete vowels from it : ");
// str = str.toLowerCase();
// var vowel = ["a","e","i","o","u"];
// for (var i=0; i<=vowel.length; i++){
//     for(var j = 0 ; j<=str.length;j++){
//         if (str.slice(j,j+1)==vowel[i]){
//             str = str.slice(0,j)+" "+str.slice(j+1);
//             // str=+str.slice(j,j+1);
//             // document.write(str);

//         }
//     }
// }
// document.write(str);
// }
// delVowels();

// // Task Number: 7
// function checkVowelOccurence(str){
// var vowel = ["a","e","i","o","u"];
// var occurence = [];
// for (var i = 0 ; i<=vowel.length;i++){
//     for (var j= 0 ; j<=vowel.length;j++){
//         for(var k = 0 ; k<=str.length;k++){

//             switch(str.slice(k,k+2)){
//             case vowel[i]+vowel[j]:
//             occurence += vowel[i]+vowel[j];
//             }
//         }
//     }
// }
// document.write(occurence);
// }
// var str =prompt("Enter your string to check double vowel occurence :");
// checkVowelOccurence(str);

// // Task Number : 8
// var distance = prompt("Enter your distance in km : ");
// function conMeter(distance){
//     distance = (distance*1000);
//     return distance;
// }
// function confeet(distance){
//     distance = (distance*1000);
//     return distance;
// }
// function conInches(distance){
//     distance = (distance*1000);
//     return distance;
// }
// function conCenteMeter(distance){
//     distance = (distance*1000);
//     return distance;
// }
// document.write("<br> "+conMeter(distance) + " meter. ");
// document.write("<br> "+ confeet(distance )+ " feet. ");
// document.write("<br> "+ conInches(distance)+ " inches. ");
// document.write("<br> "+ conCenteMeter(distance)+ " centimeter. ");

// // Task Number : 9 
// function over(){
// var overTime = +prompt("Enter total working hours to calculate overtime : ");
// var overTimePerHour = 12;
// var extraPay = 0;
// if (overTime>40){
//     extraPay = (overTime-40)*12;
//     document.write("<br>You got extra pay of " + extraPay + " Rupees");
// }
// else {document.write("<br> You dont got any extra pay. ")}
// }
// over();

// // Task Number : 10 
// var amount = prompt("Enter your amount to withdraw! : ");
// var hun = parseInt(((parseInt(amount))/100));
// var fif = parseInt((amount - (100*hun))/50);
// var ten = parseInt(      (amount - ((100*hun)+(fif*50)) )/10     );
// document.write("<br> <b>You will have "+ hun + " hundred notes, "+ fif + " fifty notes, "+ ten+" ten notes</b>");

// Chapter 43 to 48-------------------------------------------------------------------------------
// Task Number : 1 at html
// Task Number : 2 at html 
// Task Number : 3 
// function deleteRow(a){
//  var name = document.getElementById(a);
//   console.log(name.value);
//   name.innerHTML = "";

// }
// // Task number 5
// var num = 0;
// function increase(){
//     var inc = document.getElementById("counter");
//     inc.innerHTML = ++num ;
// }
// function decrease(){
//     var inc = document.getElementById("counter");
//     inc.innerHTML = --num ;
// }

// // Chapter 49 to 52 
// // Task Number 1
// function form(){
//     var f = document.getElementById("form1");
//     f.className = "hidden";
//     var tableDiv = document.getElementById("tableDiv");
//     tableDiv.className="";
//     var thanks = document.getElementById("thanks");
//     thanks.innerHTML = "Thank you for submitting your form... <br>Following information has been recorded"
//     var name = document.getElementById("name");
//     var a = name.value;
//     var nameNew = document.getElementById("nameNew");
//      nameNew.innerHTML = a;
//     console.log(nameNew.value);

//     var mobile = document.getElementById("mobile");
//     var mobileNew = document.getElementById("mobileNew");
//     var m = mobile.value;
//     mobileNew.innerHTML = m;
    


//     var qualification = document.getElementById("qualification");
//     var q = qualification.value;
//     var qualificationNew = document.getElementById("qualificationNew");
//     qualificationNew.innerHTML = q;

//     var address = document.getElementById("address");
//     var ad = address.value;
//     var addressNew = document.getElementById("addressNew");
//     addressNew.innerHTML = ad;

//     var emailNew = document.getElementById("emailNew");
//     var email = document.getElementById("email");
//     // var e = ;
//     // Right to left value dalti hai 
//      emailNew.innerHTML = email.value;
// }



// // Task Number 2:
// function read(paraId,readId){
//     var para = document.getElementById(paraId);
//     var an = para.getElementsByTagName("a")
//     // Tag Array use karta hai isilye array use kia hai
//     an[0].className = "hidden";
//     var para1 = document.getElementById(readId);
//     para1.className="";
    
// }

// // Task Number 3:
// var saveId = "";
// function deleteRow(rowId){
//     var delRow = document.getElementById(rowId);
//     delRow.innerHTML =""
// }
// function edit(rowId){
//     // Class name hidden sy hat gaya
//     var editField = document.getElementById("editField");
//     editField.className = "";
// // table k data ki value fetch hui
//     var r = document.getElementById(rowId);
//     var val = r.getElementsByTagName('td');
//     console.log(val[1].innerHTML);
//     var a = val[1].innerHTML;
//     var b = val[2].innerHTML;
//     // table ki value field me set hui
//     var inpValue = editField.getElementsByTagName('input');
//     inpValue[0].value = a;
//     inpValue[1].value = b;
//     saveId = rowId;
//     console.log(saveId)
// }
// console.log(saveId)
// // Global variable banaya function k parameter me same id pass karnay k lye
// function save(saveId){
//     var editField = document.getElementById("editField");
//     var inpValue = editField.getElementsByTagName('input');
//     a = inpValue[0].value;
//     b = inpValue[1].value; 
//     console.log(saveId);
//     var r = document.getElementById(saveId);
//     var val = r.getElementsByTagName('td');
//     val[1].innerHTML =a;
//     val[2].innerHTML =b;

    
    
//      editField.className = "hidden";
// }

// function cancel() {
//     var editField = document.getElementById("editField");
//     editField.className = "hidden";
// }

// // Chapter 53-58
// // Task Number :1

// var imgPathArr = ["images/others/5.jpg","images/others/6.jpg","images/others/7.png","images/others/8.jpg"];
// var modal = document.getElementById("modal");
// var imgInner = document.getElementById("modal-img")

// var a;

// var imgAr = document.getElementById("imgAr");
// for (var i=0;i<=imgPathArr.length-1;i++){
//     a = "onOpenImage("+i+")";
//     imgAr.innerHTML += "<img class='format'id='"+i+"'src='"+imgPathArr[i]+"'onclick='"+a+"'></img>"

// }
// function onOpenImage(i){
//     var imgId = document.getElementById(i);
//     imgInner.src = imgPathArr[i];
//     modal.className ="modal modal-open";
    
// }
// function onCloseImage(){
//     modal.className = "modal-close ";
//     setTimeout(timer,550);
// }
// function timer(){
//     imgInner.src ="";
// }

// // Task Number : 2
// var para = document.getElementById("para");
// var size = 10;
// function fontIncrease(){

//     para.style.fontSize =(size+"px");
//     size+=10;
// }
// function fontDecrease(){

//     para.style.fontSize =(size+"px");
//     size=size-10;
// }

// -------------------------------Chapter 59-67----------------------------------------------------
// Task Number 1:
var mainContent = document.getElementById("main-content");

// // Task Number 2:
for(var i = 0;i<=mainContent.childNodes.length-1;i++){
        document.write("<br> "+ mainContent.childNodes[i].innerHTML);
    }
    
    


// Task Number 3:
    var render = mainContent.getElementsByClassName("render");
    console.log(render);
    for(var i = 0;i<=render.length-1;i++){
        var a = render[i].innerText;
        document.write("<br> "+ a);
        // console.log(render[i].innerText);
    }

    // Task Number 4:
    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var email = document.getElementById("email");
    firstName.value = "Syed";
    lastName.value = "Arbab";
    email.value = "syedarbabalishah@gmail.com";





// Task Number 5: 
var ntype = document.getElementById("form-content");
document.write("<br> Node type of form-content :"+ ntype.nodeType);

// Task Number 6:
var lastNametype = document.getElementById("lastName");
var lastNameChild = lastNametype.childNodes[0];
document.write("<br> Node type of form-content :"+ lastName.nodeType+" and node type of its child id is "+lastNameChild.nodeType);

// Task Number 7
lastNameChild.nodeValue = "Arbab";
document.write("<br> node value of id:lastName after change is " + lastNameChild.nodeValue);

// Task Number 8
var mainContent = document.getElementById("main-content");
document.write("<br> First child value of main-content Id: "+ mainContent.firstChild.innerHTML);
document.write("<br> Last child value of main-content Id: "+mainContent.lastChild.innerHTML);


// Task Number 9

document.write("<br> Next sibling value of lastName Id : "+ lastNametype.nextSibling.innerHTML);
document.write("<br> Previous sibling value of lastName Id : "+ lastNametype.previousSibling.innerHTML);

// Task Number 10
 
document.write("<br> Parent node of email id: "+email.parentNode.innerHTML);
document.write("<br> Node type of element having id='email' is : "+email.nodeType)








































































































































































































































































































































































































































































































































































































