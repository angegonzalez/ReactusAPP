import { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllProducts,
  fetchProducts,
  incrementActualPage,
} from "@/features/products/productsSlice";
import { RequestStatus } from "@/types/RequestStatus";
import ProductCard from "./ProductCard";

import ProductLoadingCard from "./ProductLoadingCard";

const Products = () => {
  const dispatch = useDispatch();
  const productsStatus = useSelector((state) => state.products.status);
  const hasNextPage = useSelector((state) => state.products.hasNextPage);
  const actualPage = useSelector((state) => state.products.actualPage);

  const products = useSelector(selectAllProducts);
  const intersectionObserver = useRef();

  const lastProductRef = useCallback(
    (product) => {
      if (productsStatus === RequestStatus.LOADING) return;
      if (intersectionObserver.current)
        intersectionObserver.current.disconnect();
      if (productsStatus === RequestStatus.SUCCEEDED) {
        intersectionObserver.current = new IntersectionObserver((products) => {
          if (products[0].isIntersecting && hasNextPage) {
            dispatch(incrementActualPage());
            dispatch(fetchProducts());
          }
        });
      }
      if (product) intersectionObserver.current.observe(product);
    },
    [productsStatus, hasNextPage]
  );

  useEffect(() => {
    if (productsStatus === RequestStatus.IDLE) {
      dispatch(fetchProducts(actualPage));
    }
  }, [productsStatus, dispatch, products]);

  let content;
  let loading;

  if (productsStatus === RequestStatus.LOADING) {
    loading = <ProductLoadingCard />;
  }

  content = products.map((product, i) => {
    if (products.length === i + 1) {
      return (
        <ProductCard ref={lastProductRef} key={product.id} product={product} />
      );
    }
    return <ProductCard key={product.id} product={product} />;
  });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-6 m-10">
      {content}
      {loading}
    </div>
  );
};

export default Products;
