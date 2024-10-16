// types.ts

// Define the ProductItem interface (already provided)
export interface ProductItem {
    id: number;
    name: string;
    category: string;
    price: number;
    quantity: number;
    image: string;
}

export interface CartState {
    cart: ProductItem[];
    addToCart: (product: ProductItem) => void;
    removeFromCart: (id: number) => void;
    changeQuantity: (id: number, quantity: number) => void;
}
