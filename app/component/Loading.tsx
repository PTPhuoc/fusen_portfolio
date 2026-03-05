"use client";
import { useEffect, useState } from "react";
import { useWebState } from "../store/WebState";

export default function Loading() {
  const webLoading = useWebState((state) => state.loading);
  const [circleIn, setCircleIn] = useState(false);
  const [isClose, setIsClose] = useState(false);

  useEffect(() => {
    if (!webLoading) {
      const time1 = setTimeout(() => {
        setCircleIn(false);
      }, 500);
      const time2 = setTimeout(() => {
        setIsClose(true);
      }, 1000);
      return () => {
        clearTimeout(time1);
        clearTimeout(time2);
      };
    } else {
      setCircleIn(true);
      setIsClose(false);
    }
  }, [webLoading]);

  return (
    <div
      className={`fixed w-full h-screen flex justify-center items-center bg-white ${isClose ? "-z-1 opacity-0" : "z-60 opacity-100"} duration-1000 ease-out`}
    >
      <div
        className={`flex ${circleIn ? "w-50 h-50 rounded-full bg-zinc-200" : "w-full h-full rounded-none bg-zinc-50"} items-center justify-center duration-500 ease-out`}
      >
        <div
          className={`${circleIn ? "opacity-100" : "opacity-0"} duration-500 ease-in`}
        >
          <p className="text-[100px] font-bold gradient-text">Fu</p>
        </div>
      </div>
    </div>
  );
}
