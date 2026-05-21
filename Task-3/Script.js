// 1. Student Login Check
// Ask username and password using prompt().
// If username = "admin" and password = "1234"
// → print "Login Success"
// Else print "Invalid User"

let username=prompt("Enter the username?")
let password=prompt("Enter the password")
if(username=="admin" && password=="1234")
{
    console.log("Login Success");
}
else
{
    console.log("Invalid User");
}


// 2. ATM Balance System
// Create a variable balance = 5000
// Withdraw amount using prompt()
// If amount less than balance → "Withdraw Success"
// Else → "Insufficient Balance"

let balance=5000
let amount=prompt("Enter the Withdraw Amount")
if(amount<=balance)
{
    console.log("Withdraw Success");
}
else
{
    console.log("Insufficient Balance"); 
}


// 3. Traffic Signal Project
// Using switch
// "red" → stop
// "yellow" → ready
// "green" → go

let color="green"
switch(color)
{
    case "red":console.log("Stop");
    break;
    case "yellow":console.log("Ready");
    break;
    case "green":console.log("Go");
    break;
    default:console.log("Please wait for signal");
    break;
}


// 4. Age Eligibility Checker
// Take age from user.
// age >= 18 → "Eligible for Vote"
// Else → "Not Eligible"

let age=prompt("Enter your Age?")
if(age>=18)
{
    console.log("Eligible for Vote"); 
}
else
{
    console.log("Not Eligible");   
}


// 5. Shopping Discount System
// Take product price.
// Above 5000 → 20% discount
// Above 3000 → 10% discount
// Else → no discount

let price=7000
if(price>5000)
{
    console.log("20% discount = "+ price*0.2);
}
else if(price>3000)
{
    console.log("10% discount = "+ price*0.1);
}
else
{
    console.log("No Discount");
}

// 6. Password Strength Checker
// Check password length.
// length >= 8 → "Strong Password"
// Else → "Weak Password"

let password="abcd12345"
if(password.length >=8)
{
    console.log("Strong Password");
}
else
{
    console.log("Weak Password");
}

// 7. Mobile Battery Warning
// Take battery percentage.
// <= 10 → "Battery Low"
// <= 50 → "Battery Medium"
// Else → "Battery Full"

let percentage=85;
if(percentage <=10)
{
    console.log("Battery Low"); 
}
else if(percentage<=50)
{
    console.log("Battery Medium");  
}
else
{
    console.log("Battery Full");  
}

// 8. Employee Salary Bonus
// Create salary variable.
// salary >= 50000 → 15% bonus
// salary >= 30000 → 10% bonus
// Else → 5% bonus

let salary=15000
if(salary>=50000)
{
    console.log("15% bonus");
}
else if(salary>=30000)
{
    console.log("10% bonus");
}
else
{
    console.log("5% bonus");
}

// 9. Online Food Order
// Take order amount.
// Above 499 → "Free Delivery"
// Else → "Delivery Charge Added"

let orderAmt=600
if(orderAmt>499)
{
    console.log("Free Delivery");
}
else
{
    console.log("Delivery Charge Added");
}


// 10. Movie Ticket Booking
// Take age.
// Below 5 → Free ticket
// Below 18 → Child ticket
// Else → Adult ticket

let age1=21;
if(age1<5)
{
    console.log("Free ticket");
}
else if(age1<18)
{
    console.log("Child ticket");
}
else
{
    console.log("Adult ticket");
}

// 11. Instagram Likes Counter
// Using for loop
// Print:
// Like 1
// Like 2
// Like 3
// Like 4
// Like 5

for(let i=1;i<=5;i++)
{
    console.log("Like "+i);  
}

// 12. Countdown Timer
// Using while loop
// Print:
// 5
// 4
// 3
// 2
// 1
// Start

let n=5;
while(n>=1)
{
    console.log(n);
    n--
}
console.log("Start");

// 13. OTP Verification
// Create OTP = 1234
// Take input from user.
// Correct → "OTP Verified"
// Wrong → "Invalid OTP"

let otp=1234
let userOTP=prompt("Enter your OTP?")
if(otp==userOTP)
{
    console.log("OTP Verified"); 
}
else
{
    console.log("Invalid OTP"); 
}

// 14. E-commerce Cart Total
// Array:
// let cart = [200,500,1000,300]
// Find total cart value using loop.

let cart = [200,500,1000,300]
let sum=0;
for(let i=0;i<=cart.length-1;i++)
{
    sum=sum+cart[i]
}
console.log(sum);


// 15. Student Mark Grade System
// Take mark.
// 90+ → A Grade
// 70+ → B Grade
// 50+ → C Grade
// Else → Fail

let mark=90
if(mark>=90)
{
    console.log("A Grade"); 
}
else if(mark>=70)
{
    console.log("B Grade");
}
else if(mark>=50)
{
    console.log("C Grade");
}
else
{
    console.log("Fail");
}

// 16. Netflix Subscription Checker
// Boolean variable:
// let subscription = true
// true → "Watch Movie"
// false → "Buy Subscription"

let subscription=true
if(subscription==true)
{
    console.log("Watch Movie");
}
else
{
    console.log("Buy Subscription");
}

// 17. Product Stock Checker
// let stock = 0
// stock > 0 → "Product Available"
// Else → "Out of Stock"

let stock=0
if(stock>0)
{
    console.log("Product Available"); 
}
else
{
    console.log("Out of Stock");  
}

// 18. Weather App Condition
// Using switch
// "sunny" → "Go Outside"
// "rainy" → "Take Umbrella"
// "cold" → "Wear Jacket"

let weather="sunny"
switch(weather)
{
    case "sunny":console.log("Go Outside");
    break;
    case "rainy":console.log("Take Umbrella");
    break;
    case "cold":console.log("Wear Jacket");
    break;
    default:console.log("Tell me a weather condition");
    break;
}

// 19. User Profile Object
// Create object:
// let user = {
//    name : "Navi",
//    age : 20,
//    city : "Bangalore"
// }
// Print all values using for in loop.

let user = {
   name : "Navi",
   age : 20,
   city : "Bangalore"
}
for(let c in user)
{
    console.log(c,user[c]);
}

// 20. WhatsApp Chat Array
// Array:
// let chats = ["hi","hello","where are you","ok"]
// Print each message using for of loop.

let chats = ["hi","hello","where are you","ok"]
for(let d of chats)
{
    console.log(d); 
}
