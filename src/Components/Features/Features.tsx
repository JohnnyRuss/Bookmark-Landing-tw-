import React, { useState } from "react";
import { Heading, Text } from "../Layouts";
import FeaturesNav from "./FeaturesNav";
import FeaturesTab from "./FeaturesTab";

const tabs = [
  {
    id: "tab--1",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    img: "/assets/illustration-features-tab-1.svg",
    title: "bookmark in one click",
  },
  {
    id: "tab--2",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    img: "/assets/illustration-features-tab-2.svg",
    title: "Intelligent search",
  },
  {
    id: "tab--3",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    img: "/assets/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
  },
];

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(tabs[0]);

  function handleTab(id: string) {
    setActiveFeature(tabs.find((tab) => tab.id === id)!);
  }

  return (
    <section className="mt-28" id="features">
      <div className="container flex flex-col items-center gap-8">
        <Heading mode="h2" value="features" />
        <Text className="tablet:!text-center desktop:w-1/3">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </Text>
        <FeaturesNav
          ids={tabs.map((tab) => tab.id)}
          handleTab={handleTab}
          activeId={activeFeature.id}
        />
        <FeaturesTab activeFeature={activeFeature} />
      </div>
    </section>
  );
};

export default Features;
