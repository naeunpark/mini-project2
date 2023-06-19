let products = [];
let listeners = [];

export const productsStore = {
    addProduct(product){
        let newProduct = {
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image
        };
        products = [...products, newProduct];
        emitChange();
    },
    subscribe(listener){
        listeners = [...listeners, listener];
        return() => {
            listeners = listeners.filter( l => l !== listener)
        }
    },
    getSnapShot(){
        return products;
    }
}

function emitChange(){
    for(let listener of listeners){
        listener();
    }
}

fetch('https://api.escuelajs.co/api/v1/products')
.then(response => response.json())
.then(json => {json.forEach(element => {
    productsStore.addProduct(element);
});})