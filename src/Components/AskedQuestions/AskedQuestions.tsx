import React, { useState } from "react";
import { Heading, Text, Button } from "../Layouts";
import Tab from "./Tab";

interface AskedQuestionsType {}

interface QuestionType {
  id: string;
  question: string;
  answer: string;
}

const questions = [
  {
    id: "question--1",
    question: "What is Bookmark?",
    answer:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: "question--2",
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: "question--3",
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: "question--4",
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

const AskedQuestions: React.FC<AskedQuestionsType> = (props) => {
  const [activeTab, setActiveTab] = useState<QuestionType | null>(null);

  function handleTab(id: string) {
    if (!id) return;

    const tabToActive = questions.find((q) => q.id === id);

    if (!tabToActive) return;

    if (id === activeTab?.id) return setActiveTab(null);

    setActiveTab(tabToActive);
  }

  return (
    <section className="mt-20">
      <div className="container flex flex-col items-center gap-8">
        <Heading mode="h2" value="frequently asked questions" />
        <Text className="text-center tablet:w-1/2 tablet:!text-center desktop:w-1/3">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </Text>
        <Tab
          questions={questions}
          activeTab={activeTab}
          handleTab={handleTab}
        />
        <Button cl="blue" value="more info" />
      </div>
    </section>
  );
};

export default AskedQuestions;
