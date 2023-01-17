class Product {
    constructor(id, title, manufacture, price) {
        this.id = id;
        this.title = title;
        this.manufacture = manufacture;
        this.price = price;
    }
}

class Milk extends Product {
    constructor(id, title, manufacture, price, fat) {
        super(id, title, manufacture, price);
        this.fat = fat;
    }
}

class Chocolate extends Product {
    constructor(id, title, manufacture, price, kind) {
        super(id, title, manufacture, price);
        this.kind = kind;
    }
}

class Wine extends Product {
    constructor(id, title, manufacture, price, alcochol) {
        super(id, title, manufacture, price);
        this.alcochol = alcochol;
    }
}

// class Store
// products = [];
// add(product); - method should add unique products
// getAll(); – return array with all products
// getByType(type); - return array with products of type only
//  type = 'Milk' - only products instance of Milk
//  type = 'Chocolate' - only products instance of Chocolate
//  type = 'Wine' - only products instance of Wine

class Store {
    constructor() {
        this.products = [];
    }
    getAll(){
            return [...this.products];
        }

    add(product){
            this.products.push(product);
            if(this.products.find(i => i.id === product.id))
                return false;
            else {
                this.products.push(product);
                return true;
            }
    }


}

const store = new Store();
const product = new Product(111, 'bread', 'Harris', 35);
const milk = new Milk(112, 'milk', 'TuTu', 8.5, 15);
const chocolate = new Chocolate(113, 'chocolate', 'Rittersport', 14.6, 5);
const wine = new Wine(114, 'wine', 'Porto', 85, 14.6);

store.add(product);
store.add(milk);
store.add(chocolate);
store.add(wine);

console.log(store)

store.getAll().forEach(item => console.log(item));

function getByType(type) {
    let productsOfType = store.products.map(function (item){
        if(item.constructor.name === type) {
            productsOfType.push('item');
            return console.log(productsOfType);
        } else {
            return console.log('Type is not found!')
        }
    })
}

getByType('Milk');

console.log(milk.constructor.name);


