const ProductLoadingCard = () => {
    return (  
        <div  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* <a href="#">
          <img
            className="p-8 rounded-t-lg"
          //   src="/docs/images/products/apple-watch.png"
            alt="product image"
          />
        </a> */}
        <div className="p-5 animate-pulse">
          <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded"></div>
          <div className="h-4 w-1/3 bg-slate-200 dark:bg-slate-700 rounded col-span-1 my-2"></div>
          {/* <div className="flex items-center mt-2.5 mb-5">
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
          </div> */}
          <div className="flex items-center justify-between">
          <div className="h-6 w-1/6 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
          <div className="h-6 w-1/3 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
          </div>
        </div>
      </div>
    );
}
 
export default ProductLoadingCard;