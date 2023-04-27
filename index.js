const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false

}

// Modify the following properties in the customer object using bracket notation: 
// email to "Jak3Smith1992@email.com"

customer["email"] = "Jak3Smith1992@email.com";
console.log(customer["email"]);

// phone to 3195551234

customer["phone"] = 3195551234;
console.log(customer["phone"]);

// zipCode to "63132"

customer["zipCode"] = "63132";
console.log(customer["zipCode"]);

// favoriteFlavors to "coffee", "strawberry", and "matcha"

customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];
console.log(customer["favoriteFlavors"]);

//Delete the following properties in the customer object using the delete keyword.
// zipCode

delete customer["zipCode"];

// favoriteStore

delete customer["favoriteStore"];
console.table(customer);

// add: toppings, future flavors, and today's purchase cost. 
//Add the following key:values to the customer object using dot notation:
// toppings: "chocolate sprinkles", "wafer straws", and "gummy bears"
// futureFlavors: "mango"
// todaysPurchaseCost: 5.32

customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;
console.table(customer);


// In an array, print the keys in your survey. You should have the following:
// firstName
// lastName
// email
// phone
// favoriteFlavors
// cupSize
// firstVisit
// toppings
// futureFlavors
// todaysPurchaseCost

console.log(Object.keys(customer));