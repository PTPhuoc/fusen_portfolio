"use client";

import { usePathname, useRouter } from "next/navigation";
import { useWebState } from "../store/WebState";
import { TextBar } from "../lib/Language";
import { useLanguage } from "../store/LanguageState";

export default function RightBar() {
  const router = useRouter();
  const rightBar = useWebState((state) => state.rightBar);
  const language = useLanguage((state) => state.language);
  const setLang = useLanguage((state) => state.toggleLang);
  const pathname = usePathname();
  const toggleRightBar = useWebState((state) => state.toggleRightBar);
  const setLoading = useWebState((state) => state.toggleLoading);
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
          if (pathname !== "/") {
            setLoading(true);
            router.push("/");
          }
        }}
      >
        About
      </button>
      <button
        className="text-white cursor-pointer p-5 bg-blueDark2 border-2 border-blueDark2 duration-200 ease-in hover:bg-white hover:text-blueDark2"
        onClick={() => {
          toggleRightBar();
          if (pathname !== "/experience") {
            setLoading(true);
            router.push("/experience");
          }
        }}
      >
        Experience
      </button>
      <button
        className="text-white cursor-pointer p-5 bg-blueDark2 border-2 border-blueDark2 duration-200 ease-in hover:bg-white hover:text-blueDark2"
        onClick={() => {
          toggleRightBar();
          if (pathname !== "/project") {
            setLoading(true);
            router.push("/project");
          }
        }}
      >
        Project
      </button>
      <div className="flex items-center justify-between p-1 bg-zinc-400">
        <svg
          className="w-10 h-10 p-1 ml-2 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M160 0c17.7 0 32 14.3 32 32l0 32 128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-9.6 0-8.4 23.1c-16.4 45.2-41.1 86.5-72.2 122 14.2 8.8 29 16.6 44.4 23.5l50.4 22.4 62.2-140c5.1-11.6 16.6-19 29.2-19s24.1 7.4 29.2 19l128 288c7.2 16.2-.1 35.1-16.2 42.2s-35.1-.1-42.2-16.2l-20-45-157.5 0-20 45c-7.2 16.2-26.1 23.4-42.2 16.2s-23.4-26.1-16.2-42.2l39.8-89.5-50.4-22.4c-23-10.2-45-22.4-65.8-36.4-21.3 17.2-44.6 32.2-69.5 44.7L78.3 380.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9l34.5-17.3c16.3-8.2 31.8-17.7 46.4-28.3-13.8-12.7-26.8-26.4-38.9-40.9L81.6 224.7c-11.3-13.6-9.5-33.8 4.1-45.1s33.8-9.5 45.1 4.1l10.2 12.2c11.5 13.9 24.1 26.8 37.4 38.7 27.5-30.4 49.2-66.1 63.5-105.4l.5-1.2-210.3 0C14.3 128 0 113.7 0 96S14.3 64 32 64l96 0 0-32c0-17.7 14.3-32 32-32zM416 270.8L365.7 384 466.3 384 416 270.8z" />
        </svg>
        <div className="flex items-center gap-1">
          <button
            className={`py-5 ${language === "vie" ? "bg-blueNormal" : "bg-zinc-500"} rounded-md text-[20px] w-15 text-center text-white font-bold cursor-pointer duration-200 ease-in hover:text-blueNormal hover:bg-white active:bg-blueNormal active:text-white`}
            onClick={() => {
              language !== "vie" && setLang("vie");
            }}
          >
            Vie
          </button>
          <button
            className={`py-5 ${language === "eng" ? "bg-blueNormal" : "bg-zinc-500"} rounded-md text-[20px] w-15 text-center text-white font-bold cursor-pointer duration-200 ease-in hover:text-blueNormal hover:bg-white active:bg-blueNormal active:text-white`}
            onClick={() => {
              language !== "eng" && setLang("eng");
            }}
          >
            Eng
          </button>
        </div>
      </div>
    </div>
  );
}
