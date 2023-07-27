import { useDispatch, useSelector } from "react-redux";
import { selectAllProductsInCart } from "@/features/shoppingCart/shoppingCartSlice";
import ShoppingCartItem from "./ShoppingCartItem";
import Button from "../helpers/Button";
import { clearCart, getTotalOfCart } from "@/features/shoppingCart/shoppingCartSlice";

const ShoppingCart = ({ shoppingCartOptions }) => {
  const handleCloseShoppingCart = () => {
    shoppingCartOptions.state.setState(false);
  };

  const shoppingCartProducts = useSelector(selectAllProductsInCart);
  const dispatch = useDispatch();

  let totalOfShoppingCart = 0;
  let content;

  if (shoppingCartProducts.length !== 0) {
    content = shoppingCartProducts.map((product) => {
      return <ShoppingCartItem product={product} />;
    });
    for(let product of shoppingCartProducts){
      totalOfShoppingCart += product.price * product.quantity;
    }
  } else {
    content = <></>;
  }

  const handleResetCartButtonClick = () => {
    dispatch(clearCart());
  }
  
  const resetCartButtonOptions ={
    secondary: true,
    title: "Clear cart",
    handleButtonClick: handleResetCartButtonClick,
  }

  return (
    <div className="">
      <div class="fixed top-0 left-0 right-0 z-50 w-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ">
        <div className="flex w-full h-full items-center justify-center bg-white/30 dark:bg-slate-800/80 backdrop-blur-lg rounded-md p-10">
          <div class=" w-full max-w-2xl max-h-full overflow-y-scroll">
            <div class=" bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Shopping Cart
                </h3>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                  onClick={() => handleCloseShoppingCart()}
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <div class="p-6 space-y-6">
                  {content}
                  <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                      <p>Total</p>
                      <p>${totalOfShoppingCart}</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Shipping and taxes calculated at checkout.</p>
                  </div>
                  <div class="flex gap-3 mx-2">
                    <button
                      data-modal-hide="defaultModal"
                      type="button"
                      class="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Continue to checkout
                    </button>
                    <button
                      data-modal-hide="defaultModal"
                      type="button"
                      class="w-1/2 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      onClick={()=>handleCloseShoppingCart()}
                    >
                      Continue shopping
                    </button>
                  </div>
                 <div className="w-100">
                 <Button options={resetCartButtonOptions}></Button>
                 </div>
                  <div class="mt-6 flex justify-center text-center text-sm text-gray-500"></div>
                </div>
              </div>
              <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"></div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ShoppingCart;
