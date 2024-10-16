import {Product} from "@/components/Product";
import {ProductItem} from "@/types";

export function CardGroup({ products }: { products: ProductItem[] }) {
    return (
        <div className="lg:col-span-3">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <Product product={product} key={product.id} />
                ))}
            </ul>
        </div>
    )
}