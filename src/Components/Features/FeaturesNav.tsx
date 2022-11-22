import React from "react";

interface FeaturesNavType {
  ids: string[];
  activeId: string;
  handleTab: (id: string) => void;
}

const FeaturesNav: React.FC<FeaturesNavType> = ({
  ids,
  handleTab,
  activeId,
}) => {
  return (
    <nav className="w-full flex flex-col justify-between capitalize tablet:h-14 border-bottom-1 tablet:flex-row tablet:items-center desktop:w-1/2">
      {["simple bookmarking", "speady searching", "easy sharing"].map(
        (item, i) => (
          <button
            className={`hover:text-app-red h-full transition-[color] duration-200 font-medium w-full border-solid border-y border-x-0 border-app-gray py-4 ${
              activeId === ids[i]
                ? "border-bottom-2 border-b-app-red text-app-red"
                : ""
            }`}
            key={item}
            value={ids[i]}
            onClick={(e) => handleTab(e.currentTarget.value)}
          >
            <span className="h-full w-full flex justify-center items-center box-content">
              {item}
            </span>
          </button>
        )
      )}
    </nav>
  );
};

export default FeaturesNav;
