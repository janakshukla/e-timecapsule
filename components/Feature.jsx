import { Archive, Calendar, LockIcon, Mail, Share, Timer, VideoIcon } from "lucide-react";
import React from "react";

const Feature = () => {
  return (
    <div className="flex mt-16 items-center lg:gap-36 min-h-[80dvh] md:pt-16 lg:px-36">
      <div className="md:grid grid-cols-6 h-full w-full text-white grid-rows-7 gap-4">
        <div className="col-span-4  row-span-2 p-4 border rounded-md shadow-lg ">
          <Timer className=" size-10  rounded-md bg-red-300 text-red-800 p-2 " />
          <h1 className="text-xl font-bold tracking-tight leading-snug">
            Time-Locked Delivery
          </h1>
          <p className=" font-light text-xs lg:text-base  tracking-wide leading-tight">
            Schedule messages, images, or videos to unlock on a future date.
          </p>
        </div>
        <div className="col-span-2 row-span-2 col-start-5 p-4 border rounded-md shadow-lg ">
          {" "}
          <Mail className=" size-10  rounded-md bg-blue-300 text-blue-800 p-2 " />
          <h1 className="text-xl font-bold tracking-tight leading-snug">
          Email Notifications
          </h1>
          <p className=" font-light text-xs lg:text-base tracking-wide leading-tight">
          Automatically notify recipients when a capsule opens.
          </p>
        </div>
        <div className="col-span-2 row-span-3 row-start-3 p-4 border rounded-md shadow-lg ">
          {" "}
          <LockIcon className=" size-10  rounded-md bg-purple-300 text-purple-800 p-2 " />
          <h1 className="text-xl font-bold tracking-tight leading-snug">
          End-to-End Privacy
          </h1>
          <p className=" font-light text-xs lg:text-base tracking-wide leading-tight">
          Your memories are encrypted and secure — only you control the unlock time.
          </p>
        </div>
        <div className="col-span-2 row-span-2 col-start-3 p-4 border rounded-md shadow-lg row-start-3  ">
          <VideoIcon className=" size-10  rounded-md bg-violet-300 text-violet-800 p-2 " />
          <h1 className="text-xl font-bold tracking-tight leading-snug">
          Multimedia Support
          </h1>
          <p className=" font-light text-xs lg:text-base tracking-wide leading-tight">
          Attach text, images, videos, or files to your capsules.
          </p>
        </div>
        <div className="col-span-2 row-span-3 col-start-3 row-start-5 p-4 border rounded-md shadow-lg ">
          <Calendar className=" size-10  rounded-md bg-green-300 text-green-800 p-2 " />
          <h1 className="text-xl font-bold tracking-tight leading-snug">
          Smart Scheduler
          </h1>
          <p className=" font-light text-xs lg:text-base tracking-wide leading-tight">
          Choose dates like birthdays, anniversaries, or custom timelines.
          </p>
        </div>
        <div className="col-span-2 row-span-2 col-start-1 row-start-6 p-4 border rounded-md shadow-lg  ">
          <Share className=" size-10  rounded-md bg-orange-300 text-orange-800 p-2 " />
          <h1 className="text-xl font-bold tracking-tight leading-snug">
          Share with Loved Ones
          </h1>
          <p className=" font-light text-xs lg:text-base tracking-wide leading-tight">
          Send a capsule to friends, family, or even your future self.
          </p>
        </div>
        <div className="col-span-2 row-span-5 col-start-5 row-start-3 p-4 border rounded-md shadow-lg  ">
          <Archive className=" size-10  rounded-md bg-yellow-300 text-yellow-800 p-2 " />
          <h1 className="text-xl font-bold tracking-tight leading-snug">
          Capsule Preview
          </h1>
          <p className=" font-light text-xs lg:text-base tracking-wide leading-tight">
          See how your capsule will appear when it opens (only if allowed).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
