import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishlist = [];

console.log("Welcome to the your Shopee cart! 🛒");

const item1 = await createItem("Shoes", 100.99, 6);
const item2 = await createItem("Shirt", 50.49, 4);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item1);

await cartService.displayCart(myCart);

// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item2.name);

await cartService.calculateTotal(myCart);