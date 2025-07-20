// casos de uso do item
// => criar um item
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    };
}
export default createItem
// => atualizar um item
async function updateItem(id, updatedData) {

}

// => deletar um item
async function deleteItem(id) {

}