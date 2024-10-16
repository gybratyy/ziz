import { useCartStore } from '@/zustand/cartStore';
import { CartItem } from '@/components/CartItem';

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CartModal = ({ isOpen, onClose }: CartModalProps) => {
    const cart = useCartStore((state) => state.cart);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-11/12 max-w-lg p-6 rounded-lg shadow-lg">
                <button className="" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                        <path
                            d="M18,21H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12c1.657,0,3,1.343,3,3v12	C21,19.657,19.657,21,18,21z"
                            opacity=".35"/>
                        <path
                            d="M14.812,16.215L7.785,9.188c-0.384-0.384-0.384-1.008,0-1.392l0.011-0.011c0.384-0.384,1.008-0.384,1.392,0l7.027,7.027	c0.384,0.384,0.384,1.008,0,1.392l-0.011,0.011C15.82,16.599,15.196,16.599,14.812,16.215z"/>
                        <path
                            d="M7.785,14.812l7.027-7.027c0.384-0.384,1.008-0.384,1.392,0l0.011,0.011c0.384,0.384,0.384,1.008,0,1.392l-7.027,7.027	c-0.384,0.384-1.008,0.384-1.392,0l-0.011-0.011C7.401,15.82,7.401,15.196,7.785,14.812z"/>
                    </svg>

                </button>

                <h2 className="text-xl font-bold text-black">Your Cart</h2>
                {cart.length > 0 ? (
                    <ul className="space-y-4">
                        {cart.map((product) => (
                            <CartItem product={product} key={product.id}/>
                        ))}
                    </ul>
                ) : (
                    <p>Your cart is empty.</p>
                )}

                <div className="mt-6 space-y-4 text-center">
                    <a href="#"
                       className="block rounded bg-gray-700 px-5 py-3 text-sm text-white transition hover:bg-gray-600">
                    Checkout
                    </a>
                    <a href="#" className="inline-block text-sm text-gray-500 underline transition hover:text-gray-600">
                        Continue shopping
                    </a>
                </div>
            </div>
        </div>
    );
};
