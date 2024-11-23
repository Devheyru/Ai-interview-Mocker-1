"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();
  useEffect(() => {
    GetFeedback();
  }, []);
  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);
    console.log(result);
    setFeedbackList(result);
  };

  return (
    <div className="p-10">
      {feedbackList?.length == 0 ? (
        <h2 className="font-bold text-xl text-gray-500">
          No interview feedback found
        </h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-500">
            Congratulations!
          </h2>
          <h2 className="font-bold text-2xl">
            Here is your interview feedback
          </h2>

          <h2 className="text-primary text-lg my-3">
            Your overall interview rating: <strong>7/10</strong>
          </h2>

          <h2 className="text-sm text-gray-500">
            find bellow interview question with <b>correct answer, </b>
            <b>Your answer </b>
            and <b>feedback </b>for improvement
          </h2>
          {feedbackList &&
            feedbackList.map((item, index) => (
              <Collapsible key={index} className="mt-10">
                <CollapsibleTrigger className="p-2 bg-green-200 rounded-lg my-2 text-left flex justify-between gap-7 w-full">
                  view correct answer for Question {index + 1}
                  <ChevronsUpDown className="h-5 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-5">
                    <h2 className="text-red-500 p-2 border rounded-lg">
                      <strong>Rating: {item.rating}</strong>
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
                      <strong>Your Answer: {item.userAns}</strong>
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
                      <strong>Correct Answer: {item.correctAns}</strong>
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-primary">
                      <strong>Feedback: {item.feedback}</strong>
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </>
      )}
      <Button onClick={() => router.replace("/dashboard")}>
        Go to Dashboard
      </Button>
    </div>
  );
}

export default Feedback;
