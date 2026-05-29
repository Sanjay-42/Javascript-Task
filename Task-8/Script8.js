// API Link
// let apiLink = "https://fakestoreapi.com/products";
// Beginner Level
// Task 1: Print All Products
// Fetch all products and print them.
// Output:
// Title : ...
// Price : ...

let apiLink = "https://fakestoreapi.com/products"
fetch(apiLink).then((resp)=>{
    return resp.json()
}).then((data)=>{
    data.forEach((c,i,t)=>{
        console.log(c.title);
        console.log(c.price);
    })
})


// Task 2: Print Only Product Titles
// Output:
// Product 1
// Product 2
// Product 3
// Use:
// forEach()
// or
// map()

let apiLink2 = "https://fakestoreapi.com/products"
fetch(apiLink2).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res1=data.map((c,i,t)=>{
        return c.title
    })
    console.log(res1);
})


// Task 3: Print Total Products
// Output:
// Total Products : 20

let apiLink3 = "https://fakestoreapi.com/products"
fetch(apiLink3).then((resp)=>{
    return resp.json()
}).then((data)=>{
    console.log("Total Products -> ",data.length);
})

// Task 4: Print All Categories
// Output:
// electronics
// jewelery
// men's clothing
// women's clothing

let apiLink4 = "https://fakestoreapi.com/products"
fetch(apiLink4).then((resp)=>{
    return resp.json()
}).then((data)=>{
    console.log(data);
    
    data.forEach((c,i,t)=>{
        console.log(c.category);
    })
})


// Task 5: Print Products Above $50
// Use:
// filter()
// Output:
// Product A - 109
// Product B - 250

let apiLink5 = "https://fakestoreapi.com/products"
fetch(apiLink5).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res2=data.filter((c,i,t)=>{
        return c.price>50
    })
    res2.forEach((c,i,t)=>{
        console.log(c.title+" - "+c.price);
    })
})

// Intermediate Level
// Task 6: Print Products Below $50
// Use:
// filter()

let apiLink6 = "https://fakestoreapi.com/products"
fetch(apiLink6).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res2=data.filter((c,i,t)=>{
        return c.price<50
    })
    res2.forEach((c,i,t)=>{
        console.log(c.title+" - "+c.price);
    })
})

// Task 7: Find First Product Above $100
// Use:
// find()
// Output:
// {
//  title:"...",
//  price:109
// }

let apiLink7 = "https://fakestoreapi.com/products"
fetch(apiLink7).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res3=data.find((c,i,t)=>{
        return c.price>100
    })
        console.log(res3.title);
        console.log(res3.price);
})


// Task 8: Search Product
// let searchText = "shirt";
// Find matching products.
// Use:
// includes()
// filter()

let apiLink8 = "https://fakestoreapi.com/products"
fetch(apiLink8).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res4=data.filter((c,i,t)=>{
        return c.title.toLowerCase().includes("shirt")
    })
    console.log(res4);
    
})


// Task 9: Count Electronics Products
// Output:
// Electronics Count : 6

let apiLink9 = "https://fakestoreapi.com/products"
let count=0;
fetch(apiLink9).then((resp)=>{
    return resp.json()
}).then((data)=>{
    data.forEach((c,i,t)=>{
    if(c.category==="electronics"){
        count++
    }
    })
    console.log("Electronics Count ",count)
})


// Task 10: Print Highest Price Product
// Use:
// sort()
// or
// reduce()

let apiLink10 = "https://fakestoreapi.com/products"
fetch(apiLink10).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res5=data.reduce((acc,c,i,t)=>{
       return acc.price>c.price?acc:c
    })
    console.log(res5);
})

// Task 11: Print Lowest Price Product
// Use:
// sort()
// or
// reduce()

let apiLink11 = "https://fakestoreapi.com/products"
fetch(apiLink11).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res6=data.reduce((acc,c,i,t)=>{
        return acc.price<c.price?acc:c
    })
    console.log(res6);
})

// Task 12: Calculate Total Price of All Products
// Use:
// reduce()
// Output:
// Total Price : XXXX

let apiLink12 = "https://fakestoreapi.com/products"
fetch(apiLink12).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res7=data.reduce((acc,c,i,t)=>{
        return acc+c.price
    },0)
    console.log(res7);
})

// Task 13: Calculate Average Product Price
// Output:
// Average Price : XXX

let apiLink13 = "https://fakestoreapi.com/products"
fetch(apiLink13).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res8=data.reduce((acc,c,i,t)=>{
        return acc+c.price / data.length
    },0)
    console.log(res8);
})


// Task 14: Print Product With Highest Rating
// Output:
// Title : ...
// Rating : 4.9

let apiLink14 = "https://fakestoreapi.com/products"
fetch(apiLink14).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res9=data.reduce((acc,c,i,t)=>{
        return acc.rating.rate>c.rating.rate?acc:c
    })
    console.log("Rating ",res9.rating.rate);
})


// Task 15: Print Product With Lowest Rating
// Output:
// Title : ...
// Rating : 2.1

let apiLink15 = "https://fakestoreapi.com/products"
fetch(apiLink15).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res10=data.reduce((acc,c,i,t)=>{
        return acc.rating.rate<c.rating.rate?acc:c
    })
    console.log("Rating ",res10.rating.rate);
})


// Advanced Level
// Task 16: Category Wise Product Count
// Output:
// electronics : 6
// jewelery : 4
// men's clothing : 4
// women's clothing : 6
// Use:
// reduce()

let apiLink16 = "https://fakestoreapi.com/products"
fetch(apiLink16).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res11=data.reduce((acc,c,i,t)=>{
        if(acc[c.category])
        {
            acc[c.category]++
        }
        else
        {
            acc[c.category]=1
        }
        return acc
    },{})
    console.log(res11);
})


// Task 17: Create Discounted Products
// Apply 10% discount.
// Output:
// [
//  {
//   title:"...",
//   oldPrice:100,
//   newPrice:90
//  }
// ]
// Use:
// map()

let apiLink17 = "https://fakestoreapi.com/products"
fetch(apiLink17).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res11=data.map((c,i,t)=>{
        return {
            title:c.title,
            oldprice:c.price,
            newprice:c.price-(c.price*0.1)
        }
    })
    console.log(res11);
})


// Task 18: Sort Products Low To High
// Use:
// sort((a,b)=>a.price-b.price)

let apiLink18 = "https://fakestoreapi.com/products"
fetch(apiLink18).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res12=data.sort((l,h)=>{
        return l.price-h.price
    })
    console.log(res12);
})


// Task 19: Sort Products High To Low
// Use:
// sort((a,b)=>b.price-a.price)

let apiLink19 = "https://fakestoreapi.com/products"
fetch(apiLink19).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res13=data.sort((l,h)=>{
        return h.price-l.price
    })
    console.log(res13);
})


// Task 20: Check Any Product Above $500
// Use:
// some()
// Output:
// true

let apiLink20 = "https://fakestoreapi.com/products"
fetch(apiLink20).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res14=data.some((c,i,t)=>{
        return c.price>500
    })
    console.log(res14);
})


// Task 21: Check All Products Above Rating 3
// Use:
// every()
// Output:
// true / false

let apiLink21 = "https://fakestoreapi.com/products"
fetch(apiLink21).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res15=data.every((c,i,t)=>{
        return c.rating.rate>3
    })
    console.log(res15);
})


// Task 22: Print Top 5 Costliest Products
// Output:
// Product A
// Product B
// Product C
// Product D
// Product E

let apiLink22 = "https://fakestoreapi.com/products"
fetch(apiLink22).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res16=data.sort((l,h)=>{
        return h.price-l.price
    }).slice(0,5).forEach((c,i,t)=>{
        console.log(c.title +" "+c.price);
    })
})


// Task 23: Print Top 5 Rated Products
// Sort by rating and print first 5.

let apiLink23 = "https://fakestoreapi.com/products"
fetch(apiLink23).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res17=data.sort((l,h)=>{
        return h.rating.rate-l.rating.rate
    }).slice(0,5).forEach((c,i,t)=>{
        console.log(c.title +" "+c.rating.rate);
    })
})


// Task 24: Group Products By Category
// Output:
// {
//  electronics:[...],
//  jewelery:[...],
//  men's clothing:[...]
// }

let apiLink24 = "https://fakestoreapi.com/products"
fetch(apiLink24).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res18=data.reduce((acc,c,i,t)=>{
       if(acc[c.category])
       {
        acc[c.category].push(c)
       }
       else
       {
        acc[c.category]=[c]
       }
       return acc;
    },{})
    console.log(res18);
})


// Task 25: Convert Product Prices To INR
// Assume:
// 1 USD = 85 INR
// Output:
// Title : ...
// Price : ₹8500

let apiLink25 = "https://fakestoreapi.com/products"
fetch(apiLink25).then((resp)=>{
    return resp.json()
}).then((data)=>{
    data.forEach((c,i,t)=>{
        let INR=c.price*85;
        console.log("Title ",c.title);
        console.log("Price ",INR);
    })
})

// Real-Time Company Tasks
// Task 26: Amazon Product Filter
// Conditions:
// Price < 500
// Rating > 4
// Category = electronics
// Output matching products.

let apiLink26 = "https://fakestoreapi.com/products"
fetch(apiLink26).then((resp)=>{
    return resp.json()
}).then((data)=>{
    data.forEach((c,i,t)=>{
        if(c.price <500 && c.rating.rate >4 && c.category=="electronics")
        {
            console.log(c);  
        }
    })
})


// Task 27: Best Seller Product
// Find:
// Highest Rating

let apiLink27 = "https://fakestoreapi.com/products"
fetch(apiLink27).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let res19=data.reduce((acc,c,i,t)=>{
        return acc.rating.rate>c.rating.rate?acc:c
    })
    console.log("Title ",res19.title);
    console.log("Rating ",res19.rating.rate);
})


// Task 28: Product Analytics Dashboard
// Output:
// Total Products :
// Total Categories :
// Highest Price Product :
// Lowest Price Product :
// Average Price :
// Best Rated Product :

let apiLink28 = "https://fakestoreapi.com/products"
fetch(apiLink28).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let products=data.length;

    let category=[...new Set(data.map((c,i,t)=>{
        return c.category;
    }))]

    let high=data.reduce((acc,c,i,t)=>{
        return acc.price>c.price?acc:c
    })

    let low=data.reduce((acc,c,i,t)=>{
        return acc.pric<c.price?acc:c
    })

    let total=data.reduce((acc,c,i,t)=>{
        return acc+c.price
    },0)
    let avg=total/data.length

    let rating=data.reduce((acc,c,i,t)=>{
        return acc.rating.rate>c.rating.rate?acc:c
    })

    console.log("Total Products : ",products);
    console.log("Total Categories : ",category);
    console.log("Highest Price Product :",high);
    console.log("Lowest Price Product :",low);
    console.log("Average Price :",avg); 
    console.log("Best Rated Product :",rating);
})

// Task 29: Inventory Report
// Output:
// Expensive Products :
// Affordable Products :
// Electronics :
// Jewellery :
// Mens Clothing :
// Womens Clothing :

let apiLink29 = "https://fakestoreapi.com/products"
fetch(apiLink29).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let expensive=data.reduce((acc,c,i,t)=>{
        return acc.price>c.price?acc:c
    })

    let affordable=data.reduce((acc,c,i,t)=>{
        return acc.price<c.price?acc:c
    })

    let electronics=data.filter((c,i,t)=>{
        return c.category=="electronics"
    })

    let jewelery=data.filter((c,i,t)=>{
        return c.category=="jewelery"
    })

    let mens=data.filter((c,i,t)=>{
        return c.category=="men's clothing"
    })

    let womens=data.filter((c,i,t)=>{
        return c.category=="women's clothing"
    })
    console.log("Expensive Products :",expensive)
    console.log("Affordable Products :",affordable)
    console.log("Electronics :",electronics)
    console.log("Jewellery :",jewelery)
    console.log("Mens Clothing :",mens)
    console.log("Womens Clothing :",womens)
})


// Task 30: Complete Admin Dashboard (Interview Level)
// Build a report:

// TOTAL PRODUCTS :
// TOTAL CATEGORIES :
// TOTAL PRICE :
// AVERAGE PRICE :

// HIGHEST PRICE PRODUCT :
// LOWEST PRICE PRODUCT :

// BEST RATED PRODUCT :
// LOWEST RATED PRODUCT :

// PRODUCTS ABOVE $100 :
// PRODUCTS BELOW $50 :

// CATEGORY COUNTS :

let apiLink30 = "https://fakestoreapi.com/products"
fetch(apiLink30).then((resp)=>{
    return resp.json()
}).then((data)=>{
    let products=data.length;

    let category=[...new Set(data.map((c,i,t)=>{
        return c.category;
    }))]

    let high=data.reduce((acc,c,i,t)=>{
        return acc.price>c.price?acc:c
    })

    let low=data.reduce((acc,c,i,t)=>{
        return acc.price<c.price?acc:c
    })

    let total=data.reduce((acc,c,i,t)=>{
        return acc+c.price
    },0)
    let avg=total/data.length

    let hrating=data.reduce((acc,c,i,t)=>{
        return acc.rating.rate>c.rating.rate?acc:c
    })

    let lrating=data.reduce((acc,c,i,t)=>{
        return acc.rating.rate<c.rating.rate?acc:c
    })

    let aprice=data.filter((c,i,t)=>{
        return c.price>100
    })

    let lprice=data.filter((c,i,t)=>{
        return c.price<50
    })

    let count=data.reduce((acc,c,i,t)=>{
        if(acc[c.category])
        {
            acc[c.category]++
        }
        else
        {
            acc[c.category]=1
        }
        return acc
    },{})

    console.log("TOTAL PRODUCTS :",products);
    console.log("TOTAL CATEGORIES : ",category);
    console.log("TOTAL PRICE :",total);
    console.log("AVERAGE PRICE :",avg); 
    console.log("HIGHEST PRICE PRODUCT :",high);
    console.log("LOWEST PRICE PRODUCT :",low);
    console.log("BEST RATED PRODUCT :",hrating);
    console.log("LOWEST RATED PRODUCT :",lrating);
    console.log("PRODUCTS ABOVE $100 :",aprice);
    console.log("PRODUCTS BELOW $50 :",lprice);
    console.log("CATEGORY COUNTS :",count);
})

