const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];


const footerLine = document.querySelector('footer p')
footerLine.innerHTML = "&copy; 2025 Keerthi Kelam"


// Easy

const productList = document.querySelector('#product-list')

const productItems = products.map(product => `<li>${product.name}</li>`)

productList.innerHTML = productItems.join("")


// Medium

// const productList = document.querySelector('#product-list')

const inStockProducts = products.filter(product => product.inStock)

const product_Items = inStockProducts.map(product => `
    <li class = "product-item">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    </li>
`)

productList.innerHTML = product_Items.join("")

// Hard

// const productList = document.querySelector('#product-list')

productList.innerHTML = ""

products.forEach(product => {
    const li = document.createElement("li")

    const h3 = document.createElement("h3")
    h3.textContent = product.name

    const p = document.createElement("p")
    p.textContent = `$${product.price}`

    li.appendChild(h3)
    li.appendChild(p)

    if(!product.inStock) {
        li.classList.add("out-of-stock")
    }

    li.classList.add(`category-${product.category.toLowerCase()}`)
    li.classList.add("product-item")

    productList.appendChild(li)
})

const totalValueInStock = products.reduce((total, product) => {
    return product.inStock ? total + product.price : total;
}, 0)

const totalDiv = document.createElement("div")
totalDiv.textContent = `Total Value of In-Stock Items: $${totalValueInStock}`
document.body.appendChild(totalDiv)