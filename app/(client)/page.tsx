"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AnimationDefault } from "../lib/animation";
import { useWebState } from "../store/WebState";
import { TextBar, TextAbout } from "../lib/Language";
import { useLanguage } from "../store/LanguageState";

export default function page() {
  const setLoading = useWebState((state) => state.toggleLoading);
  const language = useLanguage((state) => state.language);
  const router = useRouter();

  useEffect(() => {
    setLoading(false);
    let animationDefault: any;
    const time = setTimeout(() => {
      animationDefault = AnimationDefault();
    }, 1000);

    return () => {
      clearTimeout(time);
      if (animationDefault) animationDefault.disconnect();
    };
  }, []);

  return (
    <div className="w-full pt-25 flex flex-col gap-10 items-center">
      <div className="w-[70%] max-xl:w-[80%] max-md:w-[95%] sm:min-w-100 pt-10 flex flex-wrap-reverse gap-5 items-center justify-center">
        <div className="relative w-120 h-170 max-lg:w-full">
          <CldImage
            className="absolute object-cover rounded-2xl shadow-2xl fromRight"
            src="https://res.cloudinary.com/dhjbseski/image/upload/v1772121178/about_postfolio_ropgnr.webp"
            alt="Sorry for your experience. It seems the cloud service has run out."
            fill
          ></CldImage>
        </div>

        <div className="flex flex-col flex-1 sm:min-w-100">
          <h1 className="text-[80px] max-2xl:text-[60px] fromLeft">
            {TextAbout[language].title}
          </h1>
          <p className="text-zinc-500 fromLeft sm:min-w-100">
            {TextAbout[language].subTitle}
          </p>
        </div>
      </div>
      <div className="w-[70%] max-xl:w-[80%] max-md:w-[95%] h-1 bg-blueDark2 rounded-2xl fromTop"></div>
      <div className="w-[70%] max-xl:w-[80%] max-md:w-[95%] min-w-100 max-sm:min-w-90 flex flex-col p-5 rounded-2xl shadowDefault">
        <div className="text-[50px] font-bold fromRight">
          {TextAbout[language].about.name}
        </div>
        <div className="flex max-2xl:flex-wrap justify-center gap-5">
          <div className="flex flex-1 flex-col justify-between">
            <p className="flex-1 text-justify fromRight">
              {TextAbout[language].about.content}
            </p>
            <div className="flex gap-10 max-sm:gap-5 items-stretch">
              <p className="px-5 h-20 flex items-center shrink-0 font-bold bg-zinc-400 text-white rounded-xl fromRight ">
                {TextAbout[language].about.moreInfor}:
              </p>
              <Link
                className="w-20 h-20 fill-blue-500 cursor-pointer fromRight"
                href={"https://www.facebook.com/phan.tan.phuoc.883243/"}
                target="_blank"
              >
                <svg
                  className="w-20 h-20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l98.2 0 0-145.8-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 145.8 129 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
                </svg>
              </Link>
              <Link
                className="w-20 h-20 fill-blue-600 cursor-pointer fromRight"
                href={"https://www.linkedin.com/in/tân-phước-phan-407a73330"}
                target="_blank"
              >
                <svg
                  className="w-20 h-20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="relative w-100 h-100 max-lg:w-full">
            <CldImage
              className="absolute object-cover rounded-2xl shadow-2xl fromLeft"
              src="https://res.cloudinary.com/dhjbseski/image/upload/v1772121587/about_postfolio_pc_oj7p1v.webp"
              alt="Sorry for your experience. It seems the cloud service has run out."
              fill
            ></CldImage>
          </div>
        </div>
      </div>
      <div className="w-[70%] max-xl:w-[80%] max-md:w-[95%] h-1 bg-blueDark2 rounded-2xl fromTop"></div>
      <div className="w-[70%] max-xl:w-[80%] max-md:w-[95%] flex flex-col">
        <p className="text-[50px] font-bold text-blueDark2 fromRight">
          {TextAbout[language].skill.name}
        </p>
        <div className="flex gap-5 justify-center flex-wrap">
          <div className="flex-1 gap-5 flex sm:min-w-100 min-w-90 ">
            <div className="flex-1 gap-3 flex flex-col items-stretch">
              <p className="py-5 text-center text-white font-bold rounded-xl bg-[#0C6478] fromBottom">
                {TextAbout[language].skill.language}
              </p>
              <div className="flex gap-3 flex-col overflow-auto no-scroll max-h-50 fromTop">
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  JavaScript
                </p>
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  TypeScript
                </p>
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  Python
                </p>
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  HTML/CSS
                </p>
              </div>
            </div>
            <div className="flex-1 gap-3 flex flex-col items-stretch">
              <p className="py-5 text-center text-white font-bold rounded-xl bg-[#0C6478] fromBottom">
                FrontEnd
              </p>
              <div className="flex gap-3 flex-col overflow-auto no-scroll max-h-50 fromTop">
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  ReactJS
                </p>
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  NextJS
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 gap-5 flex sm:min-w-100 min-w-90">
            <div className="flex-1 gap-3 flex flex-col items-stretch">
              <p className="py-5 text-center text-white font-bold rounded-xl bg-[#0C6478] fromBottom">
                BackEnd
              </p>
              <div className="flex gap-3 flex-col overflow-auto no-scroll max-h-50 fromTop">
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  ExpressJS
                </p>
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  Django
                </p>
              </div>
            </div>
            <div className="flex-1 gap-3 flex flex-col items-stretch">
              <p className="py-5 text-center text-white font-bold rounded-xl bg-[#0C6478] fromBottom">
                {TextAbout[language].skill.other}
              </p>
              <div className="flex gap-3 flex-col overflow-auto no-scroll max-h-50 fromTop">
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  Tailwind CSS
                </p>
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  Redux
                </p>
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  Zustand
                </p>
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  Axios
                </p>
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  Bcrypt
                </p>
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  JWT
                </p>
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  Websocket
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 gap-5 flex sm:min-w-100 min-w-90">
            <div className="flex-1 gap-3 flex flex-col items-stretch">
              <p className="py-5 text-center text-white font-bold rounded-xl bg-[#0C6478] fromBottom">
                {TextAbout[language].skill.tool}
              </p>
              <div className="flex gap-3 flex-col overflow-auto no-scroll max-h-50 fromTop">
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  Git/Github
                </p>
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  Figma
                </p>
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  Jira
                </p>
              </div>
            </div>
            <div className="flex-1 gap-3 flex flex-col items-stretch">
              <p className="py-5 text-center text-white font-bold rounded-xl bg-[#0C6478] fromBottom">
                {TextAbout[language].skill.database}
              </p>
              <div className="flex gap-3 flex-col overflow-auto no-scroll max-h-50 fromTop">
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  SQL Server
                </p>
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  PostGreSQL
                </p>
                <p className="py-3 text-center text-[#0C6478] font-bold rounded-xl bg-zinc-200">
                  MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] max-xl:w-[80%] max-md:w-[95%] h-1 bg-blueDark2 rounded-2xl fromTop"></div>
      <div className="relative overflow-hidden h-130 max-sm:min-w-90 w-[70%] max-xl:w-[80%] max-md:w-[95%] min-w-100 items-center rounded-2xl shadowDefault">
        <div className="w-full h-50">
          <CldImage
            className="absolute object-cover rounded-2xl shadow-2xl fromTop"
            src="https://res.cloudinary.com/dhjbseski/image/upload/v1771987749/HCMUNRE_TruSo_1_h0xhwz.jpg"
            alt="Sorry for your experience. It seems the cloud service has run out."
            fill
          ></CldImage>
        </div>
        <div className="absolute w-full h-full top-0 p-5 max-sm:p-2 flex flex-col bg-[rgba(166,166,166,0.4)] gap-5 items-center">
          <p className="text-[50px] font-bold text-blueDark2 fromTop">
            {TextAbout[language].education.name}
          </p>
          <div className="w-full flex gap-5 items-center p-5 bg-[#0C6478] rounded-2xl fromLeft">
            <CldImage
              className="fromRight"
              src="https://res.cloudinary.com/dhjbseski/image/upload/v1771958960/Logo-truong-hcmunre_vqyxlx.png"
              alt="Sorry for your experience. It seems the cloud service has run out."
              width={100}
              height={100}
            ></CldImage>
            <p className="text-[30px] font-bold text-white fromRight">
              {TextAbout[language].education.schoolName}
            </p>
          </div>
          <p className="w-full font-bold text-white fromRight">
            2021 - 2025
          </p>
          <p className="w-full text-white fromRight">
            {TextAbout[language].education.major}
          </p>
          <p className="w-full text-white fromRight">
            GPA: 3.1/4
          </p>
        </div>
      </div>
      <div className="w-[70%] max-xl:w-[80%] max-md:w-[95%] h-1 bg-blueDark2 rounded-2xl fromTop"></div>
      <div className="w-[70%] max-xl:w-[80%] max-md:w-[95%] flex flex-col gap-5">
        <p className="text-[50px] font-bold text-blueDark2 fromRight">
          {TextAbout[language].softSkill.name}
        </p>
        <div className="flex max-2xl:flex-wrap gap-5 items-stretch">
          <div className="flex flex-1 flex-col gap-5 p-5 shadowDefault rounded-2xl fromTop min-w-100 max-sm:min-w-90">
            <div className="flex items-center bg-[#0C6478] rounded-full">
              <div className="w-20 h-20 bg-[#CFF3FF] flex justify-center items-center rounded-full">
                <svg
                  className="w-14 h-14 fill-blueDark1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm96 312c0 25-12.7 47-32 59.9l0 92.1c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-92.1C172.7 359 160 337 160 312l0-40c0-53 43-96 96-96s96 43 96 96l0 40zM96 32a56 56 0 1 1 0 112 56 56 0 1 1 0-112zm16 240l0 32c0 32.5 12.1 62.1 32 84.7l0 75.3c0 1.2 0 2.5 .1 3.7-8.5 7.6-19.7 12.3-32.1 12.3l-32 0c-26.5 0-48-21.5-48-48l0-56.6C12.9 364.4 0 343.7 0 320l0-32c0-53 43-96 96-96 12.7 0 24.8 2.5 35.9 6.9-12.6 21.4-19.9 46.4-19.9 73.1zM368 464l0-75.3c19.9-22.5 32-52.2 32-84.7l0-32c0-26.7-7.3-51.6-19.9-73.1 11.1-4.5 23.2-6.9 35.9-6.9 53 0 96 43 96 96l0 32c0 23.7-12.9 44.4-32 55.4l0 56.6c0 26.5-21.5 48-48 48l-32 0c-12.3 0-23.6-4.6-32.1-12.3 0-1.2 .1-2.5 .1-3.7zM416 32a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
                </svg>
              </div>
              <p className="font-bold text-white px-5">
                {TextAbout[language].softSkill.teamWork.name}
              </p>
            </div>
            <p>{TextAbout[language].softSkill.teamWork.content}</p>
          </div>
          <div className="flex flex-1 flex-col gap-5 p-5 shadowDefault rounded-2xl fromTop min-w-100 max-sm:min-w-90">
            <div className="flex items-center bg-[#0C6478] rounded-full">
              <div className="w-20 h-20 bg-[#CFF3FF] flex justify-center items-center rounded-full">
                <svg
                  className="w-14 h-14 fill-blueDark1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M120 56c0-30.9 25.1-56 56-56l24 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32l-32 0c-29.8 0-54.9-20.4-62-48-.7 0-1.3 0-2 0-44.2 0-80-35.8-80-80 0-18 6-34.6 16-48-19.4-14.6-32-37.8-32-64 0-30.9 17.6-57.8 43.2-71.1-7.1-12-11.2-26-11.2-40.9 0-44.2 35.8-80 80-80l0-24zm272 0l0 24c44.2 0 80 35.8 80 80 0 15-4.1 29-11.2 40.9 25.7 13.3 43.2 40.1 43.2 71.1 0 26.2-12.6 49.4-32 64 10 13.4 16 30 16 48 0 44.2-35.8 80-80 80-.7 0-1.3 0-2 0-7.1 27.6-32.2 48-62 48l-32 0c-17.7 0-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32l24 0c30.9 0 56 25.1 56 56z" />
                </svg>
              </div>
              <p className="font-bold text-white px-5">
                {TextAbout[language].softSkill.CL.name}
              </p>
            </div>
            <p>{TextAbout[language].softSkill.CL.content}</p>
          </div>
        </div>
        <div className="flex max-2xl:flex-wrap gap-5 items-stretch">
          <div className="flex flex-1 flex-col gap-5 p-5 shadowDefault rounded-2xl fromTop min-w-100 max-sm:min-w-90">
            <div className="flex items-center bg-[#0C6478] rounded-full">
              <div className="w-20 h-20 shrink-0 bg-[#CFF3FF] flex justify-center items-center rounded-full">
                <svg
                  className="w-14 h-14 fill-blueDark1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M133.8 36.3c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 158 47 153L7 113C-2.3 103.6-2.3 88.4 7 79S31.6 69.7 41 79l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zm0 160c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 318 47 313L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM64 376a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
                </svg>
              </div>
              <p className="font-bold text-white px-5">
                {TextAbout[language].softSkill.DFA.name}
              </p>
            </div>
            <p>{TextAbout[language].softSkill.DFA.content}</p>
          </div>
          <div className="flex flex-1 flex-col gap-5 p-5 shadowDefault rounded-2xl fromTop min-w-100 max-sm:min-w-90">
            <div className="flex items-center bg-[#0C6478] rounded-full">
              <div className="w-20 h-20 shrink-0 bg-[#CFF3FF] flex justify-center items-center rounded-full">
                <svg
                  className="w-14 h-14 fill-blueDark1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M264 48l112 0c4.4 0 8 3.6 8 8l0 40-128 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-80 0c-35.3 0-64 28.7-64 64l0 96 305 0c33.8-29.9 78.3-48 127-48 28.6 0 55.6 6.2 80 17.4l0-65.4c0-35.3-28.7-64-64-64l-80 0 0-40c0-30.9-25.1-56-56-56L264 0c-30.9 0-56 25.1-56 56zm80 296c-17.7 0-32-14.3-32-32l0-16-192 0 0 112c0 35.3 28.7 64 64 64l193.4 0c-11.2-24.4-17.4-51.4-17.4-80 0-16.6 2.1-32.7 6-48l-22 0zm352 48a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM496 320c8.8 0 16 7.2 16 16l0 48 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16z" />
                </svg>
              </div>
              <p className="font-bold text-white px-5">
                {TextAbout[language].softSkill.TM.name}
              </p>
            </div>
            <p>{TextAbout[language].softSkill.TM.content}</p>
          </div>
        </div>
      </div>
      <div className="w-[70%] max-xl:w-[80%] max-md:w-[95%] h-1 bg-blueDark2 rounded-2xl fromTop"></div>
      <div className="w-[70%] max-2xl:w-[80%] flex flex-col gap-5">
        <div className="text-[50px] font-bold text-blueDark2 fromRight">
          {TextAbout[language].seeMore}
        </div>
        <div className="flex gap-5 items-stretch fromTop">
          <button
            className="flex flex-1 p-5 justify-center items-center bg-[#73DEFF] text-blueDark2 rounded-2xl scale-100 duration-200 ease-in-out hover:bg-[#007DA3] hover:text-white hover:scale-105 hover:shadow-2xl active:scale-100"
            onClick={() => {
              setLoading(true);
              router.push("/experience");
            }}
          >
            <p className="text-[30px] font-bold">
              {TextBar[language].experience}
            </p>
          </button>
          <button
            className="flex flex-1 p-5 justify-center items-center bg-[#73DEFF] text-blueDark2 rounded-2xl scale-100 duration-200 ease-in-out hover:bg-[#007DA3] hover:text-white hover:scale-105 hover:shadow-2xl active:scale-100"
            onClick={() => {
              setLoading(true);
              router.push("/project");
            }}
          >
            <p className="text-[30px] font-bold">{TextBar[language].project}</p>
          </button>
        </div>
      </div>
    </div>
  );
}
