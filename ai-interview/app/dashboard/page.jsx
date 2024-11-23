import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";

function Dashboard() {
  return (
    <div className="p-10 onload: animate-zoom-in">
      <h2 className="font-bold text-2xl onload: animate-zoom-in">Dasboard</h2>
      <h2 className="text-gray-500 onload: animate-zoom-in">
        Create and start your Ai mockup interview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 my-5 onload: animate-zoom-in">
        <AddNewInterview />
      </div>
      {/* Privious Interview List */}
      <div className="onload: animate-zoom-in">
        <InterviewList />
      </div>
    </div>
  );
}

export default Dashboard;
