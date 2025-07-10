"use client";
import { ArrowBigRightDashIcon, Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const Question = () => {
  const QusAns = [
    {
      question: "What is E-Timecapsule?",
      answer:
        "E-Timecapsule is a digital platform that allows you to create and schedule messages, images, or media to be delivered or unlocked at a specific future date.",
    },
    {
      question: "Is my data private and secure?",
      answer:
        "Yes, all your content is securely stored with end-to-end protection. Only you or your chosen recipient can access the capsule when it's unlocked.",
    },
    {
      question: "Can I send a capsule to someone else?",
      answer:
        "Absolutely! You can share capsules with friends or family by entering their email. They’ll receive it once the scheduled unlock date arrives.",
    },
    {
      question: "What kind of content can I include in a capsule?",
      answer:
        "You can include text, images, videos, or even files. We support multiple formats to help you preserve memories your way.",
    },
    {
      question: "Can I edit a capsule after creating it?",
      answer:
        "You can edit a capsule until it is locked. Once it reaches the scheduled date, it becomes read-only and gets delivered or unlocked automatically.",
    },
    {
      question: "Do I need to log in to use E-Timecapsule?",
      answer:
        "Yes, you need to create an account to manage your capsules securely and ensure that they are sent only to the intended recipients.",
    },
    {
      question: "How will I know when a capsule is opened?",
      answer:
        "You’ll receive an email notification when your capsule is opened, along with a confirmation that it was delivered on time.",
    },
    {
      question: "Is there a limit to how many capsules I can create?",
      answer:
        "Currently, there is no limit on the number of capsules you can create. However, large media files may be subject to storage limits.",
    },
  ];
  const [openindex, setopenindex] = useState(null);

  return (
    <div className="min-h-[90dvh] w-[80dvw] md:mt-16 mx-auto">
      <h1 className="text-3xl md:text-6xl font-semibold tracking-tighter leading-snug text-center text-white ">
        {" "}
        Frequently Asked <br /> Question{" "}
      </h1>
      <div className="h-full w-full text-white " >
        {QusAns.map((QA, index) => {
            return(
          <div key={index} className="border-b p-4  ">
            <button
              onClick={() => {
                setopenindex(openindex == index ? null : index);
              }}
              className="flex justify-between w-full text-left text-lg font-medium"
            >
              <span>{QA.question}</span>
              {openindex === index ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            {openindex === index && (
              <p className="mt-2 text-gray-300">{QA.answer}</p>
            )}
          </div>
            )
        })}
      </div>
      <h1 className="text-xl sm:text-3xl  font-semibold tracking-tighter leading-snug text-center flex mt-16 justify-center items-center text-white ">
       Have any other question contact here. 
      </h1>
    </div>
  );
};

export default Question;
