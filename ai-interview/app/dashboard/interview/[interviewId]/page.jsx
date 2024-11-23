"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState(null);
  const [webcamEnabled, setWebcamEnabled] = useState(false);
  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, []);
  /**
   * used to get interview detail by mockId/InterviewId from db
   */
  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    setInterviewData(result[0]);
    //console.log(interviewData);
  };
  return (
    <div className="my-10 ">
      <h2 className="font-bold text-2xl">Let's Get Startrd</h2>
      <div className="m-10 p-10 gap-10 rounded-lg border bg-teritery">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div className="flex flex-col my-5 gap-5">
            <div className="flex flex-col p-5 rounded-lg border gap-5">
              <h2 className="text-lg">
                <strong>Job role/Position: </strong>
                {interviewData ? interviewData.jobPosition : ""}
              </h2>
              <h2 className="text-lg">
                <strong>Job Description/Tech Stack: </strong>
                {interviewData ? interviewData.jobDesc : ""}
              </h2>
              <h2 className="text-lg">
                <strong>Years of experience: </strong>
                {interviewData ? interviewData.jobExperience : ""}
              </h2>
            </div>
            <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
              <h2 className="flex gap-2 items-center text-yellow-500">
                <Lightbulb /> <strong>Information</strong>
              </h2>
              <h2 className="mt-3 text-gray-600">
                {process.env.NEXT_PUBLIC_INFORMATION1}
                <br />
                {process.env.NEXT_PUBLIC_INFORMATION2}
              </h2>
            </div>
          </div>

          <div>
            {webcamEnabled ? (
              <Webcam
                onUserMedia={() => setWebcamEnabled(true)}
                onUserMediaError={() => webcamEnabled(false)}
                mirrored={true}
                style={{
                  height: 300,
                  width: 300,
                }}
              />
            ) : (
              <>
                <WebcamIcon className="h-72 w-full my-7 p-20 bg-gray-50 rounded-lg border" />

                <div className="flex flex-col items-center">
                  <h2 className="text-ce">
                    By Starting Interview you can enable the Webcam and
                    Microphone
                  </h2>{" "}
                </div>

                <div className="flex justify-end items-end my-3 md:my-6">
                  <Link
                    href={
                      "/dashboard/interview/" + params.interviewId + "/start"
                    }
                  >
                    <Button onClick={() => setWebcamEnabled(true)}>
                      start Interview
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interview;
