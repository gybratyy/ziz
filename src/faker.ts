import {faker} from '@faker-js/faker';
import {ProductItem} from "@/types";

// Function to generate a random product
const generateProduct = (id:number)=> {
    let product:ProductItem = {
        id: id,
        name: faker.commerce.productName(),
        category: faker.commerce.department(),
        price: parseInt(faker.commerce.price()),
        quantity: 1,
        image: faker.image.url() // You can also use other faker image methods
    };
    return product
}

// Generate multiple products
function generateProducts(count:number) {
    const products:ProductItem[] = [];
    for (let i = 1; i <= count; i++) {
        products.push(generateProduct(i));
    }
    return products;
}

// Example: Generate 30 products
export const products = generateProducts(5);

