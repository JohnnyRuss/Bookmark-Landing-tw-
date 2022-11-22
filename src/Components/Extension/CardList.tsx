import React from "react";
import { Heading, Figure, Button } from "../Layouts";

const browsers = [
  {
    id: "browser--1",
    title: "add to chrome",
    v: "62",
    img: "/assets/logo-chrome.svg",
  },
  {
    id: "browser--2",
    title: "add to firefox",
    v: "55",
    img: "/assets/logo-firefox.svg",
  },
  {
    id: "browser--3",
    title: "add to opera",
    v: "46",
    img: "/assets/logo-opera.svg",
  },
];

const CardList: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 tablet-lg:flex-row">
      {browsers.map((item, i) => (
        <div
          key={item.id}
          className={`shadow-lg flex flex-col gap-5 justify-center items-center h-80 p-5 rounded-lg`}
        >
          <Figure
            src={item.img}
            alt={item.title}
            className="!w-[80px] !h-[80px] aspect-square"
          />
          <Heading mode="h3" value={item.title} />
          <span className="text-app-grayish-blue">
            Minimum vesrsion {item.v}
          </span>
          <div className="mt-auto border-dotted border-0 border-t-4 border-app-grayish-blue pt-4">
            <Button value="Add & Install Extension" cl="blue" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
