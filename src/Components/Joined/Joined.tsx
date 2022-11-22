import React from "react";
import { Heading, Button } from "../Layouts";

const Joined: React.FC = () => {
  return (
    <section className="mt-20 bg-app-blue" id="contact">
      <div className="container flex flex-col gap-6 !py-20 mobile-lg:items-center">
        <p className="text-app-white text-center tracking-[3px] uppercase text-sm">
          35.000+ already joined
        </p>
        <Heading
          mode="h2"
          value="Stay up-to-date with what we're doing"
          className="!text-app-white text-center !lowercase first-letter:capitalize"
        />
        <div className="flex flex-col gap-3 mobile-lg:flex-row mobile-lg:items-center">
          <input
            type="email"
            placeholder="E-mail"
            className="h-10 px-2 rounded-lg"
          />
          <Button cl="red" value="contact us" />
        </div>
      </div>
    </section>
  );
};

export default Joined;
