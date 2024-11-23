import React from "react";

function page() {
  return (
    <div>
      <div className="flex flex-col items-center bg-gray-50">
        <h2 className="my-5 text-xl">How this app works?</h2>
        <div className="flex flex-col items-center w-5/6 onload: animate-zoom-in ">
          <p className="text-start border rounded-lg m-5 p-5 w-3/4">
            In this application has an employee can train and prepare him/her
            self for an interview. when a user goes to dashboard, signUp/signIn
            page apears. the user can continue with Google or Github. then, if
            the user Successfully loged in into the application, he/she can
            create new interview. when a user enter some personal information
            about the field of study, based on thhat information the System
            generates 5 interview questions.
            <br />
            Then when the respondat is ready for the interview and press start,
            the webcam and micro phone get opend. Then by clicking "Record
            answer" You can start to answer all the questions. After trying all
            of the question you can see the correct answer, feedback and your
            rating.
          </p>
          <p className="text-start border rounded-lg m-5 p-5 w-3/4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, veritatis? Ipsa, aliquam voluptatibus non optio at
            corrupti earum accusantium minus accusamus vero libero
            exercitationem omnis corporis modi hic commodi fuga! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Asperiores voluptas ab,
            ipsum accusamus commodi cum nulla natus eos, laborum alias non
            dolor! Corrupti at, sit pariatur exercitationem officiis quia
            expedita.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
