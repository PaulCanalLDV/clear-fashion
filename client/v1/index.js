// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [{
  'name': 'Hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'Loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'ADRESSE',
  'url': 'https://adresse.paris/'
}];

console.table(MY_FAVORITE_BRANDS);
console.log(MY_FAVORITE_BRANDS[0]);



/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
// I can find on these e-shops
// 2. Log the variable

var link = 'https://www.loom.fr/products/le-t-shirt';
console.log(`Cheapest t-shirt can be find on: ${link}`);



/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file data.js
 * 👕
 */

// 🎯 TODO: Number of products
// 1. Create a variable and assign it the number of products
// 2. Log the variable

var number_of_products = marketplace.length;
console.log(`Number of products: ${number_of_products}`);

// 🎯 TODO: Brands name
// 1. Create a variable and assign it the list of brands name only
// 2. Log the variable
// 3. Log how many brands we have

var brands_name_set = new Set(marketplace.map(element => element.brand)); //set is used to have only one time a brand's name
var brands_name = Array.from(brands_name_set);
console.log(`Brands name: ${brands_name}`);
console.log(`Number of brands: ${brands_name.length}`);

// 🎯 TODO: Sort by price
// 1. Create a function to sort the marketplace products by price
// 2. Create a variable and assign it the list of products by price from lowest to highest
// 3. Log the variable

function sortPrice(a, b)
{
  return a.price - b.price;
}

var price_products = [...marketplace].sort(sortPrice); //the [...array] is used to copy the array, otherwise it would mutate the array
console.log("price_products");
console.log(price_products);

//More concise way
//var price_products = marketplace.sort((a, b) => a.price - b.price);
//console.log(price_products);

// 🎯 TODO: Sort by date
// 1. Create a function to sort the marketplace objects by products date
// 2. Create a variable and assign it the list of products by date from recent to old
// 3. Log the variable

var date_products = [...marketplace].sort((a, b) => b.date.replaceAll('-', '') - a.date.replaceAll('-', ''));
console.log("date_products");
console.log(date_products);

// 🎯 TODO: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
// 2. Log the list

var products_between_50_and_100 = marketplace.filter(element => element.price >= 50 && element.price <= 100);
console.log("products_between_50_and_100");
console.log(products_between_50_and_100);

// 🎯 TODO: Average Basket
// 1. Determine the average basket of the marketplace
// 2. Log the average

var average_basket = marketplace.reduce((a, b) => a + b.price, 0) / number_of_products;
console.log("average_basket");
console.log(average_basket);


/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };
//
// 2. Log the variable
// 3. Log the number of products by brands

const brands = {};
for (let i = 0; i < marketplace.length; i++)
{
  if (!(marketplace[i].brand in brands))
  {
    brands[marketplace[i].brand] = [];
  }
  brands[marketplace[i].brand].push(marketplace[i]);
}
console.log("brands");
console.log(brands);
console.log(`1083: ${brands["1083"].length}; aatise: ${brands["aatise"].length}; adresse: ${brands["adresse"].length}; dedicated: ${brands["dedicated"].length}; loom: ${brands["loom"].length}`)

// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
// 2. Log the sort

var brands_sorted_price = Object.keys(brands).map(key => [...brands[key]].sort((a, b) => b.price - a.price))
console.log("brand_sorted_price");
console.log(brands_sorted_price);

// 🎯 TODO: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
// 2. Log the sort

var brands_sorted_date = Object.keys(brands).map(key => [...brands[key]].sort((a, b) => a.date.replaceAll('-', '') - b.date.replaceAll('-', '')));
console.log("brand_sorted_date");
console.log(brands_sorted_date);



/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products

const brandsCopy = brands;
Object.keys(brandsCopy).map(key => brandsCopy[key].sort((a, b) => a.price - b.price));
var p90_brand = Object.keys(brandsCopy).map(key => brandsCopy[key][Math.round(brandsCopy[key].length*0.9) - 1].price);
console.log("p90_brand");
console.log(p90_brand);



/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.

function newProducts(object)
{
  var today = new Date().getTime();
  for (let i = 0; i < object.length; i++)
  {
    var date = new Date(object[i].released).getTime();
    if ((today - date)/86400000 > 14)
    {
      return false;
    }
  }
  return true;
}

console.log("newProducts");
console.log(newProducts(COTELE_PARIS));

// 🎯 TODO: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€

console.log("reasonablePriceShop");
console.log(COTELE_PARIS.every(element => element.price < 100));

// 🎯 TODO: Find a specific product
// 1. Find the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the product

console.log("specificProduct");
console.log(COTELE_PARIS.find(element => element.uuid == 'b56c6d88-749a-5b4c-b571-e5b5c6483131'));

// 🎯 TODO: Delete a specific product
// 1. Delete the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the new list of product

var elem = COTELE_PARIS.find(element => element.uuid == 'b56c6d88-749a-5b4c-b571-e5b5c6483131');
var indexElem = COTELE_PARIS.indexOf(elem);
console.log("deleteSpecificProduct");
COTELE_PARIS.splice(indexElem, 1);
console.log(COTELE_PARIS);

// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true
let jacket = blueJacket;

jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
// 2. What do you notice?

console.log("Before");
console.log("bluejacket");
console.log(blueJacket);
console.log("jacket");
console.log(jacket);

//They both have a property `favorite` set to true!

blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties

jacket = {...blueJacket};
jacket.favorite = true;

console.log("After");
console.log("bluejacket");
console.log(blueJacket);
console.log("jacket");
console.log(jacket);

//It is okay now.


/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage

localStorage.setItem('MY_FAVORITE_BRANDS', JSON.stringify(MY_FAVORITE_BRANDS)); //localStorage stores only strings, we have to use JSON.stringify.
console.log(localStorage);