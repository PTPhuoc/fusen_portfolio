"use client";

import { useRouter, usePathname } from "next/navigation";
import { useWebState } from "../store/WebState";

export default function BarClient() {
  const toggleRightBar = useWebState((state) => state.toggleRightBar);
  const setLoading = useWebState((state) => state.toggleLoading);
  const rightBar = useWebState((state) => state.rightBar);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="fixed z-50 w-full h-25 bg-white flex justify-center items-center shadowDefault">
      <div className="w-[70%] max-2xl:w-[80%] flex justify-between items-center">
        <div>
          <button
            disabled={pathname === "/"}
            className="font-bold text-[40px] text-blueNormal cursor-pointer"
            onClick={() => {
              setLoading(true);
              router.push("/");
            }}
          >
            FUsen
          </button>
        </div>
        <div className="flex gap-10 items-center max-sm:hidden">
          <button
            disabled={pathname === "/"}
            className="cursor-pointer"
            onClick={() => {
              setLoading(true);
              router.push("/");
            }}
          >
            About
          </button>
          <button
            disabled={pathname === "/experience"}
            className="cursor-pointer"
            onClick={() => {
              setLoading(true);
              router.push("/experience");
            }}
          >
            Experience
          </button>
          <button
            disabled={pathname === "/project"}
            className="cursor-pointer"
            onClick={() => {
              setLoading(true);
              router.push("/project");
            }}
          >
            Project
          </button>
        </div>

        <button
          className="w-15 h-15 flex justify-center items-center rounded-full cursor-pointer md:hidden bg-white duration-200 ease-in hover:bg-zinc-400 hover:fill-white"
          onClick={toggleRightBar}
        >
          {rightBar ? (
            <svg
              className="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z" />
            </svg>
          ) : (
            <svg
              className="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
