import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" my-5 onload: animate-zoom-in xl:mx-28">
      <div className="flex flex-col items-center sm:mx-5">
        <h1 className="text-3xl text-center mx-12">
          Welcome to our AI-Generated Interview Mocker
        </h1>

        <h2 className="text-2xl">Start Your journy here!</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 m-10 md:justify-around">
        <div className="flex flex-col items-center justify-center bg-gray-50 p-5">
          <h2 className="text-2xl m-2">Enjoy it and Feel free</h2>
          <img
            className="my-5"
            src="/Top-Interview.jpg"
            alt="welcome"
            style={{
              width: "100%",
              borderRadius: "6px",
              margin: "auto",
              marginTop: "10px",
            }}
          />
          <h2 className="mt-5">
            Feel at ease and let your natural confidence shine through. Embrace
            the opportunity to share your story and experiences. This is your
            moment to engage in a meaningful conversation. Just try to enjoy
            your interview and make the most of it.
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-50 p-5">
          <h2 className="text-2xl m-2">Preparing is the key</h2>
          <img
            className="my-5"
            src="/Interview Prep Image.jpg"
            alt="welcome"
            style={{
              width: "100%",
              borderRadius: "6px",
              margin: "auto",
              marginTop: "10px",
            }}
          />
          <h2 className="mt-5">
            Preparing for an interview can be nerve-wracking, but with the right
            mindset and a few key strategies, you can set yourself up for
            success. Whether you're applying for your dream job or just looking
            to improve your interview skills.
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-50 p-5">
          <h2 className="text-2xl m-2">Be confident</h2>
          <img
            className="my-5"
            src="/Be confidet.jpg"
            alt="welcome"
            style={{
              width: "100%",
              borderRadius: "6px",
              margin: "auto",
              marginTop: "10px",
            }}
          />
          <h2 className="mt-5">
            Confidence during an interview is crucial—it can significantly
            influence the impression you leave on the interviewer. Confidence
            isn’t about having all the answers; it’s about how you present
            yourself and approach the conversation.
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-50 p-5">
          <h2 className="text-2xl m-2">Set up every thing before</h2>
          <img
            className="my-5"
            src="/preparing-online.jpg"
            alt="welcome"
            style={{
              width: "100%",
              borderRadius: "6px",
              margin: "auto",
              marginTop: "10px",
            }}
          />
          <h2 className="mt-5">
            Test your technology beforehand to avoid any technical glitches
            during the online interview. Ensure your internet connection is
            stable, your microphone and camera are working. and familiarize
            yourself with the video conferencing platform.
          </h2>
        </div>
      </div>
      <div className="flex justify-end items-end my-3 md:m-6">
        <Link href={"/dashboard"}>
          <Button className="mr-10">Let's Start</Button>
        </Link>
      </div>
    </main>
  );
}
