
import { ProductItem } from '@/types';

export function Product({ product }: { product: ProductItem }) {


    return (
        <li>
            <div className="group relative block overflow-hidden">
                <img
                    src={product.image} alt="some image"
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />
                <div className="relative border border-gray-100 bg-white p-6">
                    <p className="text-gray-700">{product.price}$</p>
                    <h3 className="mt-1.5 text-lg font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1.5 line-clamp-3 text-gray-700">{product.category}</p>
                    <form className="mt-4 flex gap-4">
                        <button

                            type="button"
                            className="block w-full rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                        >
                            Buy Now
                        </button>
                    </form>
                </div>
            </div>
        </li>
    );
}