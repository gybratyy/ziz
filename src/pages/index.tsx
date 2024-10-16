
import {CardGroup} from "@/components/CardGroup";
import {products} from "@/faker";


export default function Home() {
  return (



  <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-white">
      <header>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

        <p className="mt-4 max-w-md text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
          dicta incidunt est ipsam, officia dolor fugit natus?
        </p>
      </header>

      <div className="mt-8 block lg:hidden">
        <button
            className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
        >
          <span className="text-sm font-medium"> Filters & Sorting </span>

          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 rtl:rotate-180"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
        <div className="hidden space-y-4 lg:block">
          <div>
            <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700"> Sort By </label>

            <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm">
              <option>Sort By</option>
              <option value="Title, DESC">Title, DESC</option>
              <option value="Title, ASC">Title, ASC</option>
              <option value="Price, DESC">Price, DESC</option>
              <option value="Price, ASC">Price, ASC</option>
            </select>
          </div>

          <div>
            <p className="block text-xs font-medium text-gray-700">Filters</p>

            <div className="mt-1 space-y-2">
              <details
                  className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary
                    className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                >
                  <span className="text-sm font-medium"> Category </span>

                  <span className="transition group-open:-rotate-180">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
                </summary>

                <div className="border-t border-gray-200 bg-white">
                  <header className="flex items-center justify-between p-4">
                    <span className="text-sm text-gray-700"> 0 Selected </span>

                    <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                      Reset
                    </button>
                  </header>

                  <ul className="space-y-1 border-t border-gray-200 p-4">
                    <li>
                      <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="FilterInStock"
                            className="size-5 rounded border-gray-300"
                        />

                        <span className="text-sm font-medium text-gray-700"> Electronics </span>
                      </label>
                    </li>

                    <li>
                      <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="FilterPreOrder"
                            className="size-5 rounded border-gray-300"
                        />

                        <span className="text-sm font-medium text-gray-700"> Toys </span>
                      </label>
                    </li>

                    <li>
                      <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="FilterOutOfStock"
                            className="size-5 rounded border-gray-300"
                        />

                        <span className="text-sm font-medium text-gray-700"> Books </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </details>

              <details
                  className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary
                    className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                >
                  <span className="text-sm font-medium"> Price </span>

                  <span className="transition group-open:-rotate-180">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
                </summary>

                <div className="border-t border-gray-200 bg-white">
                  <header className="flex items-center justify-between p-4">
                    <span className="text-sm text-gray-700"> The highest price is $600 </span>

                    <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                      Reset
                    </button>
                  </header>

                  <div className="border-t border-gray-200 p-4">
                    <div className="flex justify-between gap-4">
                      <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">$</span>

                        <input
                            type="number"
                            id="FilterPriceFrom"
                            placeholder="From"
                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        />
                      </label>

                      <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">$</span>

                        <input
                            type="number"
                            id="FilterPriceTo"
                            placeholder="To"
                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </details>


            </div>
          </div>
        </div>
        <CardGroup products={products}/>
      </div>
    </div>
  </section>
  );
}
