import { useState } from 'react';
import { CardGroup } from '@/components/CardGroup';
import { products } from '@/faker';
import { CartModal } from '@/components/CartModal';




const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);


  const openCart = () => {
    setIsCartOpen(true);
  };
  const closeCart = () => {
    setIsCartOpen(false);
  };
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSort(e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
        prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category]
    );
  };



  const filteredProducts = products
      .filter((product) => {
        if (selectedCategories.length === 0) return true;
        return selectedCategories.includes(product.category);
      })
      .sort((a, b) => {
        if (selectedSort === 'Price, ASC') return a.price - b.price;
        if (selectedSort === 'Price, DESC') return b.price - a.price;
        if (selectedSort === 'Title, ASC') return a.name.localeCompare(b.name);
        if (selectedSort === 'Title, DESC') return b.name.localeCompare(a.name);
        return 0;
      });

  return (
      <section>
        <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-white">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
          </header>

          <button onClick={openCart} className="text-black mt-4 px-4 py-2 bg-gray-800  rounded">
            Open Cart
          </button>

          <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <div className="hidden space-y-4 lg:block">
              <div>

                <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm text-black" onChange={handleSortChange}>
                  <option value="">Sort By</option>
                  <option value="Title, DESC">Title, DESC</option>
                  <option value="Title, ASC">Title, ASC</option>
                  <option value="Price, DESC">Price, DESC</option>
                  <option value="Price, ASC">Price, ASC</option>
                </select>
              </div>

              <div>
                <p className="block text-xs font-medium text-gray-700">Filters</p>
                <div className="mt-1 space-y-2">
                  {uniqueCategories.map((category) => (
                      <label key={category} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="size-5 rounded border-gray-300"
                            onChange={() => handleCategoryChange(category)}
                            checked={selectedCategories.includes(category)}
                        />
                        <span className="text-sm font-medium text-gray-700">{category}</span>
                      </label>
                  ))}
                </div>
              </div>


            </div>

            <div className=" lg:col-span-3 me-[200px]">
              <CardGroup products={filteredProducts} />
            </div>
          </div>
        </div>

        <CartModal isOpen={isCartOpen} onClose={closeCart} />
      </section>
  );
}
