import SearchBar from "@/components/shopping_cart/SeachBar";
import Products from "../components/product/Products";
import ActionsBar from "@/components/helpers/ActionsBar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "../styles/globals.css";

const { Provider } = require("react-redux");
const { default: store } = require("../app/store");
import { useState } from "react";
import ShoppingCart from "@/components/shopping_cart/ShoppingCart";
import Head from "next/head";

const App = () => {
  const [openShoppingCart, setopenShoppingCart] = useState(false);

  const shoppingCartOptions = {
    state: {
      state: openShoppingCart,
      setState: setopenShoppingCart,
    },
  };
  return (
    <main>
      <Head>
        <title> 👨🏻‍💻 Reactus | An e-commerce platform for your necessities</title>
        <meta name="description" content="This is the main page of the app where you can find products and add them to a shopping cart an buy a world of possibilities "></meta>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Provider store={store}>
        <div className="h-full w-full min-h-screen dark:bg-slate-950 bg-gray-200">
          <div className="flex flex-col h-full">
            <SearchBar />
            <ActionsBar shoppingCartOptions={shoppingCartOptions} />
            <Products />
            {openShoppingCart ? (
              <ShoppingCart shoppingCartOptions={shoppingCartOptions} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </Provider>
    </main>
  );
};
export default App;
