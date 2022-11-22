import React from "react";
import { Heading, Button, Text } from "../Layouts";

const HeroDetails: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-6 h-[max-content] tablet:items-start desktop:w-9/12">
      <Heading value="a simple bookmark manager" mode="h1" />
      <Text>
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </Text>
      <div className="flex items-center gap-6">
        <Button cl="blue" value="get it on chrome" />
        <Button cl="gray" value="get it on firefox" />
      </div>
    </div>
  );
};

export default HeroDetails;
