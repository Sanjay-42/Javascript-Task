
// 1. Create a variable and store your favorite food.

let favFood="Biriyani"
console.log(favFood);

// 2. Create a variable and store your mobile number.

let num=9876543210;
console.log(num);

// 3. Create a boolean variable with false value.

let val=false
console.log(val);

// 4. Create one undefined variable and print typeof.

let a;
console.log(typeof a);

// 5. Create one array with 6 animal names.

let arr=["Dog","Lion","Elephant","Tiger","Zebra","Leopard"]
console.log(arr);

// 6. Print second animal from array.

console.log(arr[1]);

// 7. Print last animal from array using length.

console.log(arr[arr.length-1]);

// 8. Create object with bike details (name, model, color).

let obj={
    name:"Royal Enfield",
    model:"Classic 360",
    color:"Black"
}
console.log(obj);

// 9. Print bike color from object.

console.log(obj.color);

// 10. Create two variables and subtract values.

let b=10
let c=5
console.log(b-c);

// 11. Create two variables and divide values.

let d=50;
let e=5
console.log(d/e);

// 12. Find 15 % 2.

console.log(15%2); //1

// 13. Find 2 ** 5.

console.log(2**5); //32

// 14. Create variable with 5 and use post increment.

let f=5
let f1=f++
console.log(f1); //5
console.log(f); //6

// 15. Create variable with 10 and use pre increment.

let g=10;
let g1=++g
console.log(g1);//11
console.log(g);//11

// 16. Create variable with 20 and use post decrement.

let h=20
let h1=h--
console.log(h1);//20
console.log(h);//19

// 17. Create variable with 50 and use pre decrement.

let i=50
let i1=--i
console.log(i1);//49
console.log(i);//49

// 18. Check 100 > 50.

console.log(100>50);//true

// 19. Check 25 < 10.

console.log(25<10);//false

// 20. Check 50 >= 50.

console.log(50>=50); //true

// 21. Check 30 <= 25.

console.log(30<=25); //false

// 22. Check 10 == "10".

console.log(10=="10");//true

// 23. Check 10 === "10".

console.log(10==="10");//false

// 24. Check 25 != "25".

console.log(25!="25");//false

// 25. Check 25 !== "25".

console.log(25!=="25");//true

// 26. Use AND operator:
//     10 > 5 && 20 > 15

console.log(10>5 && 20>15);//true

// 27. Use AND operator:
//     5 > 10 && 20 > 15

console.log(5>10 && 20>15);//false

// 28. Use OR operator:
//     5 > 10 || 20 > 15

console.log(5>10 && 20>15);//false

// 29. Use OR operator:
//     2 > 5 || 1 > 10

console.log(2>5 || 1>10);//false

// 30. Use NOT operator:
//     !(10 > 5)

console.log(!(10>5));//false

// 31. Use NOT operator:
//     !(5 > 10)

console.log(!(5>10));//true

// 32. Create ternary operator:
//     if 50 > 25 print "True"
//     else print "False"

(50>25)?console.log(true):console.log(false);//true

// 33. Create ternary operator:
//     if 18 >= 21 print "Adult"
//     else print "Minor"

18>=21?console.log("Adult"):console.log("Minor");

// 34. Create one array with 5 city names and print third city.

let city=["Chengalpattu","Bangalore","Chennai","Kanchipuram","Vellore"]
console.log(city[2]);

// 35. Create one object with employee details and print employee name.

let emp={
    eName:"Sanjay",
    eId:"101",
    eSalary:"45000"
}
console.log(emp.eName);

// 36. Create variable with string "100" and print typeof.

let str="100"
console.log(typeof str);//string

// 37. Create variable with number 100 and print typeof.

let v=100
console.log(typeof v);//number

// 38. Create one null variable and print it.

let n=null
console.log(n);

// 39. Create one array with mixed datatypes.

let arr1=[10,"Sanjay",true,null,undefined,NaN]
console.log(arr1);

// 40. Create object with student details:
//     name, mark, passed(boolean)

let student={
    name:"Sanjay",
    mark:"95",
    passed:true
}
console.log(student);
