import React from "react";

function Questions() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-36 my-5">
        <div className="border rounded-lg m-5 px-3 pb-3 bg-gray-50">
          <h2 className="flex flex-col items-center font-bold text-2xl py-5 text-green-500 ">
            General Introduction
          </h2>

          <h2 className="pb-3 text-xl text-blue-950">
            Here are a few general introductions you can use either of them for
            an interview:
          </h2>
          <div className="onload: animate-zoom-in">
            <h2 className="my-5 text-sm">
              <strong className="text-blue-400 text-lg">
                Concise and Professional:
              </strong>
              "Hi, I'm [Your Name]. I have [Number] years of experience in
              [Industry/Field]. I'm excited about the opportunity to contribute
              my skills to [Company Name]."
            </h2>
            <h2 className="my-5 text-sm">
              <strong className="text-blue-400 text-lg">
                Highlighting Passion:
              </strong>
              "Hi, I'm [Your Name]. I've always been passionate about
              [Field/Industry]. With [Number] years of experience, I'm confident
              in my ability to [Skill/Quality]."
            </h2>
            <h2 className="my-5 text-sm">
              <strong className="text-blue-400 text-lg">
                Focusing on Achievements:
              </strong>
              "Hi, I'm [Your Name]. I've successfully [Achievement 1],
              [Achievement 2], and [Achievement 3]. I'm eager to bring my
              expertise to [Company Name]."
            </h2>
          </div>
        </div>
        <div className="border rounded-lg m-5 px-3 pb-3 bg-gray-50 ">
          <h2 className="flex flex-col items-center font-bold text-2xl py-5 text-green-500 ">
            General FQAs
          </h2>{" "}
          <h2 className="pb-3 text-xl text-blue-950">
            These are some common interview questions you might encounter:
          </h2>
          <div className="onload: animate-zoom-in">
            <h2 className="my-5 text-sm">
              <strong className="text-blue-400 text-lg">
                Tell me about yourself?{" "}
              </strong>
              A brief overview of your professional journey, highlighting key
              skills and experiences.
            </h2>
            <h2 className="my-5 text-sm">
              <strong className="text-blue-400 text-lg">
                Why are you interested in this position?{" "}
              </strong>
              Research the company and role, and explain how your skills and
              goals align with the company's mission.
            </h2>
            <h2 className="my-5 text-sm">
              <strong className="text-blue-400 text-lg">
                What are your strengths and weaknesses?{" "}
              </strong>
              Highlight your strengths, and provide examples of how you've used
              them. For weaknesses, discuss areas you're working on improving
              and how you've mitigated any negative impacts.
            </h2>
            <h2 className="my-5 text-sm">
              <strong className="text-blue-400 text-lg">
                What are your career goals?{" "}
              </strong>
              Share your long-term goals and how this position fits into your
              career path.
            </h2>
            <h2 className="my-5 text-sm">
              <strong className="text-blue-400 text-lg">
                How do you handle stress and pressure?{" "}
              </strong>
              Discuss effective stress management techniques and how you stay
              calm under pressure.
            </h2>

            <h2 className="my-5 text-sm">
              <strong className="text-blue-400 text-lg">
                Why should we hire you?{" "}
              </strong>
              Highlight your unique skills, experiences, and passion for the
              role.
            </h2>
          </div>
        </div>
      </div>
      <div className="border rounded-lg mt-5 mb-10 p-3 pb-3 bg-yellow-50 flex flex-col items-center">
        <div className="onload: animate-zoom-in hover:animate-zoom-in text-yellow-700 grid grid-cols-1  ">
          <div>
            <b>Remember </b>
            to tailor your answers to the specific job and company. Practice
            active listening, maintain eye contact, and speak clearly and
            confidently.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
