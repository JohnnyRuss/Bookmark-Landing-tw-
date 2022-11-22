import React, { Fragment } from "react";

interface QuestionType {
  id: string;
  question: string;
  answer: string;
}

interface TabType {
  questions: QuestionType[];
  handleTab: (id: string) => void;
  activeTab: QuestionType | null;
}

const Tab: React.FC<TabType> = ({ questions, activeTab, handleTab }) => {
  return (
    <div className="w-full tablet:w-3/4 desktop:w-1/2">
      {questions.map((q) => (
        <React.Fragment key={q.id}>
          <button
            value={q.id}
            onClick={(e) => handleTab(e.currentTarget.value)}
            className="w-full p-3 flex items-center justify-between border-solid border-0 border-t border-t-app-gray  hover:text-app-red"
          >
            <span>{q.question}</span>
            <img
              src="/assets/icon-arrow.svg"
              alt="tab btn arrow icon"
              className={`block transition-all ${
                activeTab?.id === q.id ? "rotate-reverse" : ""
              }`}
            />
          </button>
          {activeTab?.id === q.id && (
            <div className="p-3 text-app-grayish-blue animate-move-bottom">{q.answer}</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Tab;
