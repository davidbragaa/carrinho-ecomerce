//quais ações meu carrinho pode fazer?

//casos de uso do carrinho
// =>adicionart item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
    
}
// =>remover item do carrinho
async function removeItem(userCart, item) {
    //1. Verifica se o item existe no carrinho
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //2. Se o item existir, remove do carrinho
    if (indexFound == -1) {
        console.log("Item found in cart, removing...");
        return
    }

    //3. Item maior que 0, remove o item, item = 1 deletar item
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        console.log(`Item ${item.name} quantity decreased by 1.`);
        return;
    }

    //4. Caso item  = 1 deletar o item
    if(userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

async function displayCart(userCart) {
    console.log("\n 🛒 Your Shopee Cart:");
    userCart.forEach((item, index) => {
        console.log(`${index}.  ${item.name}, R$: ${item.price}, Quantity: ${item.quantity}x | Subtotal: R$: ${item.subtotal()}`);
    });
}

// =>deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex(item => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    } else {
        console.log(`Item ${name} not found in cart.`);
    }   
}

// =>calcular o total
async function calculateTotal(userCart) {
    
    console.log("Shopee Cart TOTAL  IS:");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\n 🎁 R$: ${result.toFixed(2)}`);
}

export {
    addItem,
    removeItem,
    deleteItem,
    calculateTotal,
    displayCart
}