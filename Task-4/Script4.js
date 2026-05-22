// Task 1 — Smart Attendance Checker
// Concept:
// if else
// logical operator
// function
// Scenario:
// A student can enter exam hall only if:
// attendance >= 75
// fees paid = true
// Expected:
// Allowed for Exam
// Otherwise:
// Not Allowed


function smartAttendence(attendance,paid)
{
    if(attendance>=75 && paid==true)
    {
        console.log("Allowed for Exam");
    }
    else
    {
        console.log("Not Allowed");   
    }
}
smartAttendence(80,false)


// Task 2 — Mobile Password Strength Checker
// Concept:
// string
// conditions
// Requirement:
// Check password:
// minimum 8 characters
// should contain number
// should contain uppercase
// Example:
// Abc12345
// Output:
// Strong Password

function mobilePassword(password)
{
    if(password.length >=8 && /[0-9]/.test(password) && /[A-Z]/.test(password))
    {
        console.log("Strong Password");
    }
    else
    {
        console.log("Weak Password");
    }
}
mobilePassword("Abc12345")

// Task 3 — Find Second Largest Number
// Concept:
// loop
// conditions
// variables
// Input:
// [10,50,80,20,90,70]
// Output:
// 80

let arr=[10,50,80,20,90,70]
let lar=0;
let sec=0;
for(let i=0;i<=arr.length;i++)
{
    if(arr[i]>lar)
    {
        sec=lar
        lar=arr[i]
    }
}
console.log(sec);


// Task 4 — Bus Seat Booking System
// Concept:
// array
// loop
// conditions
// Requirement:
// Create 10 seats.
// If seat booked:
// Seat Already Booked
// Else:
// Seat Booked Successfully

let seat = [1,2,3,4,5,6,7,8,9,10];
let bookedSeat=5;
if (seat[bookedSeat-1]=="Booked") 
{
    console.log("Seat Already Booked");
} 
else 
{
    seat[bookedSeat-1]="Booked";
    console.log("Seat Booked Successfully");
}


// Task 5 — ATM Cash Withdraw Logic
// Concept:
// function
// return
// conditions
// Rules:
// balance = 10000
// user cannot withdraw more than balance
// minimum balance should maintain 1000
// Example:
// Withdraw:
// 9500
// Output:
// Insufficient Balance

function atmWithdraw(balance,withdraw)
{
    if(withdraw<=balance && balance-withdraw>=1000)
    {
        return "Withdraw Successfull"
    }
    else
    {
        return "Insufficient Balance"
    }
}
console.log(atmWithdraw(10000,9500));


// Task 6 — Product Search Engine
// Concept:
// array
// for of
// string methods
// Requirement:
// Search product from array.
// Example:
// ["iphone","samsung","realme","oppo"]
// Search:
// realme
// Output:
// Product Found

let product=["iphone","samsung","realme","oppo"]
let search="realme"

for(let a of product)
{
    if(a==search)
    {
        console.log("Product Found");
        break;
    }
}

// Task 7 — Voting Eligibility System
// Concept:
// nested if
// logical operators
// Rules:
// Person can vote only if:
// age >= 18
// has voter id
// citizenship = Indian

let age=25;
let voterId=true
let citizenship="Indian"
if(age>=18)
{
    if(voterId==true)
    {
        if(citizenship=="Indian")
        {
            console.log("Eligible for Vote");
        }
        else
        {
            console.log("Not Eligible for Vote");
        }
    }
    else
    {
        console.log("Not Eligible for Vote");
    }
}
else
{
    console.log("Not Eligible for Vote");
}

// Task 8 — Online Food Order Bill
// Concept:
// function
// parameters
// arithmetic operators
// Requirement:
// Calculate:
// food price
// GST
// delivery charge
// discount
// Final Output:
// Total Bill : ₹450

function onlineFood(price,GST,deliveryCharge,discount)
{
    let total=(price+GST+deliveryCharge)-discount;
    console.log(total);
    
}
onlineFood(380,20,100,50)


// Task 9 — Reverse Word Without reverse()
// Concept:
// loop
// string
// Input:
// javascript
// Output:
// tpircsavaj

let str="javascript"
let final=""
for(let i=str.length-1;i>=0;i--)
{
    final=final+str.charAt(i);
}
console.log(final);

// Task 10 — Mini Instagram Like System
// Concept:
// variable
// function
// ternary operator
// Requirement:
// When user clicks like:
// Liked ❤️
// Else:
// Like 🤍
// Also maintain total likes count.

let totalLikes=0;
function instagramLike(userLikes)
{
    userLikes?console.log("Liked ❤️"):console.log("Like 🤍");
    if(userLikes)
    {
        totalLikes++
    }  
    console.log(totalLikes);
}
instagramLike(true)