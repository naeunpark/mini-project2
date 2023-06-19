let categoriesArray = [];
let listeners = [];

export const categoriesStore = {
    addCategory(item){
        let newItem = {
            id: item.id,
            name: item.name,
            image: item.image
        }
        categoriesArray = [...categoriesArray, newItem];
        emitChange();
    },
    subscribe(listener){
        listeners = [...listeners, listener];
        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    },
    getSnapShot(){
        return categoriesArray;
    }
}

function emitChange(){
    for(let listener of listeners){
        listener();
    }
}

fetch('https://api.escuelajs.co/api/v1/categories')
    .then(response => response.json())
    .then(json=>{
        json.forEach(element => {
            categoriesStore.addCategory(element);
        });
})
