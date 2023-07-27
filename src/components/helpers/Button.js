export const primaryClass = `relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-6 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-100`;
export const secondaryClass = `relative text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-xs md:text-sm px-6 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:hover:text-white dark:text-gray-400 dark:border-gray-600  border border-gray-200 w-full flex justify-center h-100`;
export const thirdClass = `relative text-white bg-cyan-400 hover:bg-cyan-500 focus:ring-3 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-xs md:text-sm px-6 py-2.5 text-center inline-flex items-center dark:bg-indigo-900 dark:hover:bg-indigo-800 dark:focus:ring-emerald-700 dark:hover:text-gray-200 dark:text-gray-400 dark:border-indigo-950 border border-cyan-200 w-full flex justify-center h-100`;


const Button = ({ options }) => {

  let classToApply;

  if(options.primary){
    classToApply = primaryClass;
  }
  if(options.secondary){
    classToApply = secondaryClass;
  }
  if(options.third){
    classToApply = thirdClass;
  }

  return (
    <div className="">
      <button
        className={classToApply}
        type="button"
        onClick={options.handleButtonClick}
      >
        {options.title}
      </button>
    </div>
  );
};

export default Button;
