"use client";

import { useRouter, usePathname } from "next/navigation";

export default function BarClient() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="fixed z-50 w-full h-25 bg-white flex justify-center items-center shadowDefault">
      <div className="w-[70%] flex justify-between items-center">
        <div>
          <button
            disabled={pathname === "/"}
            className="font-bold text-[40px] text-blueNormal cursor-pointer"
            onClick={() => router.push("/")}
          >
            FUsen
          </button>
        </div>
        <div className="flex gap-10 items-center max-sm:hidden">
          <button
            disabled={pathname === "/"}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          >
            About
          </button>
          <button
            disabled={pathname === "/experience"}
            className="cursor-pointer"
            onClick={() => router.push("/experience")}
          >
            Experience
          </button>
          <button
            disabled={pathname === "/project"}
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
