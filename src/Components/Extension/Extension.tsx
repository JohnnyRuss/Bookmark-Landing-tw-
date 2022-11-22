import React from "react";
import { Heading, Text } from "../Layouts";
import CardList from "./CardList";

const Extension: React.FC = () => {
  return (
    <section className="mt-28" id="extensions">
      <div className="container flex flex-col items-center gap-8">
        <Heading mode="h2" value="download the extension" />
        <Text className="text-center tablet:w-1/3 tablet:!text-center">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </Text>
        <CardList />
      </div>
    </section>
  );
};

export default Extension;
