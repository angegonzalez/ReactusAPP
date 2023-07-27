import { useEffect } from "react";

const Alert = ({ alertOptions }) => {
  useEffect(() => {
    setTimeout(() => {
      alertOptions.state.setState(false);
    }, 2000);
  }, []);
  return (
    <div
      className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 relative top-3 bottom-0 max-w-md"
      role="alert"
    >
      <span className="font-medium">Success!</span> Product added to the
      shopping cart!
    </div>
  );
};

export default Alert;
