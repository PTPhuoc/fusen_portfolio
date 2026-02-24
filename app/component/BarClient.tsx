"use client";

import { useRouter } from "next/navigation";

export default function BarClient() {
  const router = useRouter();
  return (
    <div className="fixed z-50 w-full h-25 bg-white flex justify-center items-center shadowDefault">
      <div className="w-[70%] flex justify-between items-center">
        <div>
          <button
            className="font-bold text-[40px] text-blueNormal cursor-pointer"
            onClick={() => router.push("/")}
          >
            FUsen
          </button>
        </div>
        <div className="flex gap-10 items-center">
          <button className="cursor-pointer" onClick={() => router.push("/")}>
            About
          </button>
          <button
            className="cursor-pointer"
            onClick={() => router.push("/experience")}
          >
            Experience
          </button>
          <button
            className="cursor-pointer"
            onClick={() => router.push("/project")}
          >
            Project
          </button>
        </div>
      </div>
    </div>
  );
}
