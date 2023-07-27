const ShoppingCartItem = ({product}) => {
  return (
    <>
      <li class="flex py-6">
        <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          {/* <img
            src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            class="h-full w-full object-cover object-center"
          /> */}
        </div>

        <div class="ml-4 flex flex-1 flex-col">
          <div>
            <div class="flex justify-between text-base font-medium text-gray-900 dark:text-white">
              <h3>
                <a>{product.title}</a>
              </h3>
              <p class="ml-4">${product.price}</p>
            </div>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">{product.description}</p>
          </div>
          <div class="flex flex-1 items-end justify-between text-sm ">
            <p class="text-gray-500 dark:text-gray-300">Quantity: {product.quantity}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default ShoppingCartItem;
