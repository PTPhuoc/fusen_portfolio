"use client";

import { useRouter } from "next/navigation";
import { useWebState } from "../store/WebState";

export default function RightBar() {
  const router = useRouter();
  const rightBar = useWebState((state) => state.rightBar);
  const toggleRightBar = useWebState((state) => state.toggleRightBar);
  return (
    <div
      className={
        "fixed z-10 flex flex-col right-0 gap-1 pt-25 w-1/2 bg-white duration-200 ease-in-out " +
        (rightBar ? "translate-x-0" : "translate-x-full")
      }
    >
      <button
        className="text-white cursor-pointer p-5 bg-blueDark2 border-2 border-blueDark2 duration-200 ease-in hover:bg-white hover:text-blueDark2"
        onClick={() => {
          toggleRightBar();
          router.push("/");
        }}
      >
        About
      </button>
      <button
        className="text-white cursor-pointer p-5 bg-blueDark2 border-2 border-blueDark2 duration-200 ease-in hover:bg-white hover:text-blueDark2"
        onClick={() => {
          toggleRightBar();
          router.push("/experience");
        }}
      >
        Exprience
      </button>
      <button
        className="text-white cursor-pointer p-5 bg-blueDark2 border-2 border-blueDark2 duration-200 ease-in hover:bg-white hover:text-blueDark2"
        onClick={() => {
          toggleRightBar();
          router.push("/project");
        }}
      >
        Project
      </button>
    </div>
  );
}
