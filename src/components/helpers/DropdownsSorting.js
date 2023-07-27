import React, { useState, useRef, useEffect } from "react";
import { primaryClass, secondaryClass } from "./Button";

const DropdownsSorting = ({ options }) => {
  const [hidden, sethidden] = useState(true);
  const dropdownRef = useRef(null);

  const handleHiddenMenu = () => {
    sethidden(!hidden);
  };

  const handleChangeDropdownTitle = (title) => {
    options.state.setState(title);
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (event) => {
    if(!dropdownRef.current.contains(event.target)){
      sethidden(true);
    }
  }

  const optionsDropdown = options.options.map((option, i) => {
    return (
      <li key={i}>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => handleChangeDropdownTitle(option)}
        >
          {option}
        </a>
      </li>
    );
  });

  return (
    <div className="">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className={options.primary ? primaryClass : secondaryClass}
        type="button"
        onClick={handleHiddenMenu}
      >
        {options.state.state}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
        <div
          id="dropdown"
          className={`z-50 backdrop-blur-md bg-white/30 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700/30 absolute left-0 top-0 ${
            hidden ? "hidden" : ""
          }`}
          ref={dropdownRef}
        >
          <ul
            className="py-2 text-xs md:text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {optionsDropdown}
          </ul>
        </div>
      </button>
    </div>
  );
};

export default DropdownsSorting;
