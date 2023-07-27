import DropdownsSorting from "./DropdownsSorting";
import Button from "./Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  orderProductsByIDAscending,
  orderProductsByIDDescending,
  orderProductsByPriceAscending,
  orderProductsByPriceDescending,
  orderProductsByRatingAscending,
  orderProductsByRatingDescending,
  orderProductsByTitleAscending,
  orderProductsByTitleDescending,
} from "@/features/products/productsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ActionsBar = ({shoppingCartOptions}) => {
  const [sortingField, setsortingField] = useState("Sort by");
  const [orderField, setorderField] = useState("Order");
  const dispatch = useDispatch();

  const primaryDropdownSortingOptions = {
    options: ["ID", "Title", "Price", "Rating"],
    primary: true,
    state: {
      state: sortingField,
      setState: setsortingField,
    },
  };
  const secondaryDropdownSortingOptions = {
    options: ["Ascending", "Descending"],
    secondary: true,
    state: {
      state: orderField,
      setState: setorderField,
    },
  };

  const handleSortButtonClick = () => {
    if (sortingField === "" || orderField === "") return;
    switch (sortingField) {
      case "ID":
        switch (orderField) {
          case "Ascending":
            dispatch(orderProductsByIDAscending());
            break;
          case "Descending":
            dispatch(orderProductsByIDDescending());
            break;
          default:
            break;
        }
        break;
      case "Title":
        switch (orderField) {
          case "Ascending":
            dispatch(orderProductsByTitleAscending());
            break;
          case "Descending":
            dispatch(orderProductsByTitleDescending());
            break;
          default:
            break;
        }
        break;
      case "Price":
        switch (orderField) {
          case "Ascending":
            dispatch(orderProductsByPriceAscending());
            break;
          case "Descending":
            dispatch(orderProductsByPriceDescending());
            break;
          default:
            break;
        }
        break;
      case "Rating":
        switch (orderField) {
          case "Ascending":
            dispatch(orderProductsByRatingAscending());
            break;
          case "Descending":
            dispatch(orderProductsByRatingDescending());
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  };

  const handleResetSortingButtonClick = () => {
    setsortingField("Sort by");
    setorderField("Order");
  };

  const handleOpenShoppingCart = () => {
    shoppingCartOptions.state.setState(!shoppingCartOptions.state.state);
  }


  const sortButtonOptions = {
    primary: true,
    title: "Sort",
    handleButtonClick: handleSortButtonClick,
  };

  const resetButtonOptions = {
    secondary: true,
    title: "Reset sorting",
    handleButtonClick: handleResetSortingButtonClick,
  };
  
  const goShoppingCartButtonOptions = {
    third: true,
    title: "Go to shopping cart",
    handleButtonClick: handleOpenShoppingCart,
  }

  return (
    <div className="flex flex-wrap justify-between mx-5 gap-2">
      <div className="flex flex-wrap gap-2 md:gap-5">
        <DropdownsSorting options={primaryDropdownSortingOptions} />
        <DropdownsSorting options={secondaryDropdownSortingOptions} />
        <Button options={sortButtonOptions} />
        <Button options={resetButtonOptions} />
      </div>

      <div className="flex" onClick={ ()=> handleOpenShoppingCart()}>
        <Button options={goShoppingCartButtonOptions} className="absolute"/>
        <div className=" absolute  animate-ping inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75" ></div>
        <span className="absolute inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </div>
    </div>
  );
};

export default ActionsBar;
