"use client";

import { useEffect } from "react";
import { AnimationDefault } from "@/app/lib/animation";
import Link from "next/link";
export default function page() {
  
  useEffect(() => {
    const animationDefault = AnimationDefault();
    return () => animationDefault.disconnect();
  }, []);

  return (
    <div className="w-full pt-25 flex flex-col gap-10 items-center">
      <div className="w-[70%] max-2xl:w-[80%] max-md:w-[95%] flex items-center gap-5 pt-10 fromTop">
        <p className="text-blueDark2 font-bold">10/2025 - 12/2025</p>
        <div className="flex-1 h-1 bg-blueDark2 rounded-2xl"></div>
      </div>
      <Link
        className="group relative overflow-hidden w-[70%] max-2xl:w-[80%] max-md:w-[95%] flex items-center justify-between p-5 rounded-2xl shadowDefault fromTop"
        href={"/project/total_job"}
      >
        <div className="absolute -translate-x-full top-0 left-0 w-full h-full bg-blueDark2 duration-300 ease-in-out group-hover:-translate-x-1/5 group-active:translate-x-0"></div>
        <div className="flex flex-col z-1 duration-200 ease-in-out group-hover:text-white max-w-200 max-2xl:max-w-100">
          <p className="font-bold">
            DEVELOPING AN ONLINE RECRUITMENT SYSTEM USING MACHINE LEARNING
            APPLICATIONS TO DETECT FRAUDULENT RECRUITMENT
          </p>
          <p className="text-start">Graduation Project</p>
        </div>
        <svg
          className="w-20 h-20 shrink-0 z-1 fill-blueDark2 group-active:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
        >
          <path d="M247.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L179.2 256 41.9 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
      </Link>
      <div className="w-[70%] max-2xl:w-[80%] max-md:w-[95%] flex items-center gap-5 pt-10 fromTop">
        <p className="text-blueDark2 font-bold">11/2024 - 12/2024</p>
        <div className="flex-1 h-1 bg-blueDark2 rounded-2xl"></div>
      </div>
      <Link
        className="group relative overflow-hidden w-[70%] max-2xl:w-[80%] max-md:w-[95%] flex items-center justify-between p-5 rounded-2xl shadowDefault fromTop"
        href={"/project/appointment"}
      >
        <div className="absolute -translate-x-full top-0 left-0 w-full h-full bg-blueDark2 duration-300 ease-in-out group-hover:-translate-x-1/5 group-active:translate-x-0"></div>
        <div className="flex flex-col z-1 duration-200 ease-in-out group-hover:text-white max-w-100">
          <p className="font-bold">BUILD A WEBSITE FOR APPOINTMENT BOOKING</p>
          <p className="text-start">Internship Project</p>
        </div>
        <svg
          className="w-20 h-20 z-1 fill-blueDark2 shrink-0 group-active:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
        >
          <path d="M247.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L179.2 256 41.9 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
      </Link>
    </div>
  );
}
