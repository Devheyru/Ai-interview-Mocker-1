import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

function QuestionsSection({
  mockInterviewQuestion,
  activeQuestionIndex,
  setActiveQuestionIndex,
}) {
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, Your browser doesnt support text to speech");
    }
  };
  return (
    mockInterviewQuestion && (
      <div className="p-5 border rounded-lg my-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 cursor-pointer">
          {mockInterviewQuestion &&
            mockInterviewQuestion.map((questions, index) => (
              <h2
                className={`"cursor-pointer p-2 bg-secondary rounded-full 
                            text-sm text-center
                            "${
                              activeQuestionIndex == index &&
                              " bg-blue-500 text-white"
                            }`}
              >
                Question #{index + 1}
              </h2>
            ))}
        </div>
        <h2 className="my-5 text-md md:text-lg">
          {mockInterviewQuestion[activeQuestionIndex]?.question}
        </h2>
        <Volume2
          className="cursor-pointer"
          onClick={() =>
            textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)
          }
        />
        <div className="border rounded-lg p-5 bg-blue-100 mt-10 lg:mt-20">
          <h2 className="flex gap-2 items-center text-primary">
            <Lightbulb />
            <strong>Note: </strong>
          </h2>
          <h2 className="">{process.env.NEXT_PUBLIC_QUESTIONS_NOTE}</h2>
        </div>
      </div>
    )
  );
}

export default QuestionsSection;
