"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAiModal";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

function AddNewInterview() {
  //states to hold aome values
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [jesonResponse, setJesonResponse] = useState([]);

  //to get users detail who loged in into our wbsite
  const { user } = useUser();

  // additional state to mantain the loading when data is fatching from Gemini API
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExperience);
    const InputPrompt =
      "job Position: " +
      jobPosition +
      ", job Description: " +
      jobDesc +
      ", Years of Experiance:" +
      jobExperience +
      "besed on this prompt give me " +
      process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
      " breif interview questions along with answers in JSON format. give me questions and answers field on JSON array";

    const result = await chatSession.sendMessage(InputPrompt);
    const MockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    console.log(JSON.parse(MockJsonResp));
    setJesonResponse(MockJsonResp);

    if (MockJsonResp) {
      const resp = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jesonMockResp: MockJsonResp,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD-MM-yyyy"),
        })
        .returning({ mockId: MockInterview.mockId });
      console.log("Inserted Id: ", resp);
      if (resp) {
        setOpenDialog(false);
      }
    } else {
      console.log("ERROR");
    }
    setLoading(false);
  };
  // const onSubmit = async (e) => {
  //   setLoading(true);
  //   e.preventDefault();
  //   console.log(jobPosition, jobDesc, jobExperience);

  //   const InputPrompt =
  //     "job Position: " +
  //     jobPosition +
  //     ", job Description: " +
  //     jobDesc +
  //     ", Years of Experiance:" +
  //     jobExperience +
  //     "based on this prompt give me " +
  //     process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
  //     " brief interview questions along with answers in JSON format. give me questions and answers field in JSON";

  //   // Get response from the Gemini API using the chat session
  //   const result = await chatSession.sendMessage(InputPrompt);
  //   let MockJsonResp = await result.response.text();

  //   // Clean up the response
  //   MockJsonResp = MockJsonResp.replace("```json", "") // Remove markdown-like formatting
  //     .replace("```", "");

  //   // Parse the JSON response and ensure it's an array
  //   let parsedResponse;
  //   try {
  //     parsedResponse = JSON.parse(MockJsonResp);

  //     // Check if it's already an array, if not, convert to an array
  //     if (!Array.isArray(parsedResponse)) {
  //       // Assuming you want to extract array from object
  //       parsedResponse = Object.values(parsedResponse);
  //     }

  //     console.log(parsedResponse); // Log the resulting array
  //   } catch (error) {
  //     console.error("Failed to parse JSON:", error);
  //   }

  //   setLoading(false);
  // };

  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary 
                    hover:scale-105 hover:shadow-md
                    cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {" "}
              You are now interviewing. Tell us more about your self
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>
                    Add some details about your job position/role, job
                    description and years of experience
                  </h2>
                  <div className="mt-7 my-3">
                    <label>Job Role/Position</label>
                    <Input
                      placeholder="E.g   FullStack Developer"
                      required
                      onChange={(event) => setJobPosition(event.target.value)}
                    />
                  </div>
                  <div className=" my-3">
                    <label>Job Description/Tech Stack(in short)</label>
                    <Textarea
                      placeholder="E.g   React, nodejs, Mysql, Angular, ..etc"
                      required
                      onChange={(event) => setJobDesc(event.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label>Years of Experience</label>
                    <Input
                      placeholder="E.g   5"
                      type="number"
                      max="30"
                      required
                      onChange={(event) => setJobExperience(event.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end">
                  <Button
                    onClick={() => setOpenDialog(false)}
                    type="button"
                    variant="ghost"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin" />
                        'Generating from Ai'
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
