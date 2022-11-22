import React from "react";

interface BurgerBTNType {
  handleNav: () => void;
  isOpen: boolean;
}

const BurgerBTN: React.FC<BurgerBTNType> = ({ handleNav, isOpen }) => {
  return (
    <button
      onClick={handleNav}
      className="fixed top-4 right-3 z-40 tablet:hidden"
    >
      {!isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
          <path
            fill={isOpen ? "#ffffff" : "#242A45"}
            fillRule="evenodd"
            d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
          />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15">
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
          />
        </svg>
      )}
    </button>
  );
};

export default BurgerBTN;
