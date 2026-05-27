// Real-Time JavaScript Tasks (API + Async + Array Methods)
// 1. E-Commerce Product Filter
// Using the same API:
// https://fakestoreapi.com/products/
// Task:
// Fetch all products
// Filter products whose:
// price > 100
// category = "electronics"
// Print:
// title
// price
// Expected Concept:
// fetch()
// filter()
// forEach()

let api="https://fakestoreapi.com/products/"
fetch(api).then((resp)=>{
    // console.log(resp);
    return resp.json()
}).then((data)=>{
    // console.log(data);
    let filteredData=data.filter((c,i,t)=>{
        return c.price>100 && c.category=="electronics"
    })
    filteredData.forEach((c,i,t)=>{
        console.log(c);
    })  
})

// 2. Online Shopping Cart Total
// Task:
// Create an array:
// let cart = [
//   {product:"Shoes", price:2000, qty:2},
//   {product:"Watch", price:1500, qty:1},
//   {product:"Bag", price:1000, qty:3}
// ]
// Calculate:
// Total bill amount
// Expected Output:
// 8500
// Use:
// reduce()

let cart = [
  {product:"Shoes", price:2000, qty:2},
  {product:"Watch", price:1500, qty:1},
  {product:"Bag", price:1000, qty:3}
]
let res1=cart.reduce((acc,c,i,t)=>{
    return acc+(c.price*c.qty)
},0)
console.log(res1);


// 3. Employee Salary Dashboard
// Task:
// Filter employees whose salary is greater than 40000.
// let employees = [
//   {name:"John", salary:25000},
//   {name:"Sam", salary:50000},
//   {name:"Ravi", salary:45000},
//   {name:"Kumar", salary:30000}
// ]
// Output:
// Sam
// Ravi
// Use:
// filter()
// map()

let employees = [
  {name:"John", salary:25000},
  {name:"Sam", salary:50000},
  {name:"Ravi", salary:45000},
  {name:"Kumar", salary:30000}
]
let res2=employees.filter((c,i,t)=>{
    return c.salary>40000
}).map((c,i,t)=>{
    return c.name
})
console.log(res2);

// 4. Food Delivery App
// Task:
// Find first restaurant rating greater than 4.5
// let hotels = [
//   {hotel:"A2B", rating:4.1},
//   {hotel:"KFC", rating:4.7},
//   {hotel:"Dominos", rating:4.3}
// ]
// Use:
// find()

let hotels = [
  {hotel:"A2B", rating:4.1},
  {hotel:"KFC", rating:4.7},
  {hotel:"Dominos", rating:4.3}
]
let res3=hotels.find((c,i,t)=>{
    return c.rating>4.5
})
console.log(res3);

// 5. Student Pass/Fail System
// Task:
// Check all students passed or not.
// let marks = [45,67,89,90,34]
// Condition:
// pass mark = 35
// Use:
// every()

let marks = [45,67,89,90,34]
let res4=marks.every((c,i,t)=>{
    return c>=35
})
console.log(res4);

// 6. OTP Verification System
// Task:
// Check whether entered OTP exists.
// let otpList = [1234,4567,7890,9876]
// Use:
// includes()

let otpList = [1234,4567,7890,9876]
console.log(otpList.includes(1234));

// 7. Movie Booking Timer
// Task:
// Create countdown from 10 to 0 using:
// setInterval()
// clearInterval()
// Expected Output:
// 10
// 9
// 8
// ...
// 0
// Booking Closed

let count=10;
let res5=setInterval(()=>{
    console.log(count)
    count--;
    if(count<0)
    {
        console.log("Booking Closed");
        clearInterval(res5)
    }
},1000)

// 8. Instagram Like Counter
// Task:
// Every second increase likes count.
// Likes : 1
// Likes : 2
// Likes : 3
// Stop after 10 likes.
// Use:
// setInterval()
// clearInterval()

let like=1
let res6=setInterval(()=>{
    console.log("Likes : "+like);
    like++
    if(like>10)
    {
        clearInterval(res6)
    }
},1000)

// 9. Login Authentication
// Task:
// Check:
// username
// password
// let username = "admin"
// let password = "12345"
// Condition:
// both correct → Login Success
// otherwise → Invalid Credentials
// Use:
// if else
// logical operator

let username = "admin"
let password = "12345"
if(username=="admin" && password=="12345")
{
    console.log("Login Success"); 
}
else
{
    console.log("Invalid Credentials"); 
}

// 10. Weather App Simulation
// Task:
// Create Promise manually.
// Condition:
// If internet = true → resolve("Weather Data")
// else reject("No Internet")
// Use:
// Promise
// resolve
// reject
// then
// catch

let internet=false;
let weather=new Promise((res,rej)=>{
    if(internet)
    {
        res("Weather Data");
    }
    else
    {
        rej("No Internet");
    }
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

// Mini Project Level Tasks
// 11. Amazon Product Search
// Task:
// Search products containing word "shirt"
// Use:
// filter()
// includes()

let products = ["White shirt","Black Shoes","Blue shirt","Watch","Formal shirt"];
let res7=products.filter((c,i,t)=>{
    return c.includes("shirt")
})
console.log(res7);


// 12. YouTube Video Duration
// Task:
// Calculate total watch time.
// let videos = [10,20,30,40]
// Use:
// reduce()

let videos = [10,20,30,40]
let res8=videos.reduce((acc,c,i,t)=>{
    return acc+c
},0)
console.log(res8);


// 13. Swiggy Order Status
// Task:
// Use switch statement.
// Placed
// Preparing
// Out for Delivery
// Delivered
// Print suitable message.

let status="Out of Delivery"
switch(status)
{
    case "Placed":console.log("Your order is placed");
    break;
    case "Preparing":console.log("Your order is preparing");
    break;
    case "Out of Delivery":console.log("Your order is out of delivery");
    break;
    case "Delivered":console.log("Your order is delivered");
    break;
    default: console.log("Check your Status");
    break
}

// 14. WhatsApp Chat Analyzer
// Task:
// Count total messages.
// let chats = ["hi","hello","where","ok","bye"]
// Use:
// length
// loop

let chats = ["hi","hello","where","ok","bye"]
let count=0
for(let i=0;i<=chats.length-1;i++)
{
    count++
}
console.log(count);

// 15. Netflix Age Restriction
// Task:
// If age >= 18:
// show movie
// Else:
// access denied
// Use:
// ternary operator
// age >= 18 ? "watch movie" : "access denied"

let age=17;
age>=18?console.log("watch movie"):console.log("access denied");


// Advanced Real-Time Tasks
// 16. Flipkart Product Sorting
// Task:
// Sort products by price low to high.
// let prices = [1200,450,9999,2500,700]
// Use:
// sort((a,b)=>a-b)

let prices = [1200,450,9999,2500,700]
let res9=prices.sort((l,h)=>{
    return l-h
})
console.log(res9);


// 17. Employee Attendance
// Task:
// Convert:
// ["present","absent","present"]
// Into object count:
// {
//  present:2,
//  absent:1
// }
// Use:
// reduce()

let attendence=["present","absent","present"]
let res10=attendence.reduce((acc,c,i,t)=>{
    if(acc[c])
    {
        acc[c]++
    }
    else
    {
        acc[c]=1
    }
    return acc;
},{})
console.log(res10);


// 18. Banking System
// Task:
// Create:
// deposit()
// withdraw()
// checkBalance()
// Using functions.

let balance=10000;
function deposit(amount){
    balance=balance+amount
    console.log("Deposit ",amount);
    
}
function withdraw(amount){
    if(amount<=balance)
    {
        balance=balance-amount
        console.log("Withdraw ",amount);
    }
    else
    {
        console.log("Insufficient Balance");
    }   
}
function checkBalance(amount){
    console.log("Balance ",balance); 
}
deposit(1000)
withdraw(3000)
checkBalance()

// 19. Zomato Rating Checker
// Task:
// Check any hotel rating below 3.
// Use:
// some()

let ratings=[
    {
    name:"Udupi",
    rating:3.0
    },
    {
    name:"Saravana Bhavan",
    rating:4.5
    },
    {
    name:"Five Star",
    rating:2.5
    },
    {
    name:"Punjabi Dhaba",
    rating:2.7
    },
    {
    name:"RR Biriyani",
    rating:3.2
    }
]
let res11=ratings.some((c,i,t)=>{
    return c.rating<3
})
console.log(res11);


// 20. Real API Product Table
// Task:
// Fetch API and print:
// title
// price
// image
// Inside HTML cards dynamically.
// Concepts:
// fetch()
// DOM
// map()
// template literal

let api1 = "https://fakestoreapi.com/products/";
fetch(api1).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let product=data.map((value)=>{
        return `<div style="
        height:350px;
        padding:10px;
        width:250px;
        border:2px solid black;
        display:inline-block;
        gap:20px;
        margin-left:20px;
        ">
        <img src="${value.image}" width="100px">
        <h2>${value.title}</h2>
        <h3>${value.price}</h3>
        </div>`
    })
    document.getElementById("root").innerHTML=product.join("")
})


// Challenge Task 🔥
// 21. Build Small E-Commerce Logic
// Features:
// Fetch products
// Filter by category
// Sort by price
// Search product
// Add to cart
// Total calculation
// Concepts Covered:
// fetch
// async
// array methods
// DOM
// events
// functions
// objects
// loops
// higher order functions

let api2="https://fakestoreapi.com/products";
let carts = [];

async function getProducts()
{
    let resp = await fetch(api2);
    let data = await resp.json();
    console.log(data);

    let electronics=data.filter((c,i,t)=>{
        return c.category=="electronics";
    });
    console.log(electronics);

    let sorted=data.sort((l,h)=>{
        return l.price - h.price;
    });
    console.log(sorted);

    let search = data.filter((c,i,t)=>{
        return c.title.toLowerCase().includes("shirt");
    });
    console.log(search);
    carts.push(data[0]);
    carts.push(data[1]);
    console.log(carts);

    let total = carts.reduce((acc,c,i,t)=>{
        return acc + c.price;
    },0);
    console.log("Total :", total);
}
getProducts();