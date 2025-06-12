const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];


// Tasks:

// Easy
const inStockProducts = products.filter(({ inStock }) => inStock)
console.log(inStockProducts)

const bookProducts = products.filter(({ category }) => category === "Books")
console.log(bookProducts)


//Medium
const productNames = products.map(({ name }) => name)
console.log(productNames)

const productsWithPrice = products.map(({ name, price }) => (`${name} - $${price}`))
console.log(productsWithPrice)


//Hard
const totalPrice = products.reduce((sum, product) => sum + product.price, 0)
console.log(totalPrice)

const electronicProducts = products
    .filter(({ inStock, category }) => inStock && category === "Electronics")
    .map(({ name }) => name)
console.log(electronicProducts)