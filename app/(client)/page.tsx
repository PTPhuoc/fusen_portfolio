"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AnimationDefault } from "../lib/animation";

export default function page() {
  const router = useRouter();
  
  useEffect(() => {
    const animationDefault = AnimationDefault()
    return () => animationDefault.disconnect();
  }, []);

  return (
    <div className="w-full pt-25 flex flex-col gap-10 items-center">
      <div className="w-[70%] max-xl:w-[80%] max-md:w-[95%] sm:min-w-100 pt-10 flex flex-wrap-reverse gap-5 items-center justify-center">
        <CldImage
          className="rounded-2xl shadow-2xl fromRight"
          src="https://res.cloudinary.com/dhjbseski/image/upload/v1772121178/about_postfolio_ropgnr.webp"
          alt="Sorry for your experience. It seems the cloud service has run out."
          width={500}
          height={300}
        ></CldImage>
        <div className="flex flex-col flex-1 sm:min-w-100">
          <h1 className="text-[80px] max-2xl:text-[60px] fromLeft">
            Hi, I'm Phan Tan Phuoc, a fullstack programmer in Viet Nam, Ho Chi
            Minh city.
          </h1>
          <p className="text-zinc-500 fromLeft sm:min-w-100">
            While I have a solid understanding of Back-End concepts, my primary
            expertise and greatest impact lie in Front-End development.
          </p>
        </div>
      </div>
      <div className="w-[70%] h-1 bg-blueDark2 rounded-2xl"></div>
      <div className="w-[70%] max-xl:w-[80%] min-w-100 flex flex-col p-5 rounded-2xl shadowDefault">
        <div className="text-[50px] font-bold fromRight">About Me</div>
        <div className="flex max-2xl:flex-wrap justify-center gap-5">
          <div className="flex flex-1 flex-col justify-between">
            <p className="flex-1 text-justify max-w fromRight min-w-100 max-md:p-5">
              I am a final-year student eagerly anticipating graduation, with a
              strong focus on building dynamic and high-performing web
              applications. My primary expertise lies in TypeScript, crafting
              intuitive user interfaces with React.js and Next.js. Beyond just
              writing code, I deeply care about the user experience and product
              success. I actively apply SEO best practices and smooth web
              animations to make applications both discoverable and engaging.
              While my heart is in the Front-End, my hands-on experience with
              Python, Django, and RESTful APIs (handling CRUD operations) allows
              me to seamlessly collaborate with Back-End teams and understand
              the full system architecture. Equipped with industry-standard
              tools like Git, Figma, and Postman, I am industry-ready and highly
              motivated to contribute to a forward-thinking development team.
            </p>
            <div className="flex gap-10 items-stretch max-md:px-5">
              <p className="flex items-center fromRight">More Infor:</p>
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
                className="w-20 h-20 cursor-pointer fromRight"
                href={"https://www.instagram.com/tanphuocphan370/"}
                target="_blank"
              >
                <svg
                  className="w-20 h-20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <defs>
                    <linearGradient
                      id="instagramGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#d000ff" />
                      <stop offset="50%" stopColor="#bd3600" />
                      <stop offset="100%" stopColor="#eddd53" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#instagramGradient)"
                    d="M194.4 211.7a53.3 53.3 0 1 0 59.2 88.6 53.3 53.3 0 1 0 -59.2-88.6zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12-18.1-7.1-57.6-6.8-83.1-6.5-4.1 0-7.9 .1-11.2 .1s-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2 0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2 2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5 4.1 0 7.9-.1 11.2-.1s7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5 6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83 0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83-2.7-6.9-6.8-13.1-12-18.4l0 .2zm-67.1 44.5c18.1 12.1 30.6 30.9 34.9 52.2s-.2 43.5-12.3 61.6c-6 9-13.7 16.6-22.6 22.6s-19 10.1-29.6 12.2c-21.3 4.2-43.5-.2-61.6-12.3s-30.6-30.9-34.9-52.2 .2-43.5 12.2-61.6 30.9-30.6 52.2-34.9 43.5 .2 61.6 12.2l.1 0zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1 2.6-7.1 5.2-9.8 6.1-4.5 9.8-5.2 7.6-.4 11.1 1.1 6.5 3.9 8.6 7 3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2-3.9 3.2-6.2 4.2-4.8 1.5-7.3 1.5c-3.8 0-7.5-1.1-10.6-3.2l-.1 0zM448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM357 389c-18.7 18.7-41.4 24.6-67 25.9-26.4 1.5-105.6 1.5-132 0-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132 1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0 25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9-1.3 25.6-7.1 48.3-25.8 67l0 .1z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <CldImage
            className="rounded-2xl shadow-2xl fromLeft"
            src="https://res.cloudinary.com/dhjbseski/image/upload/v1772121587/about_postfolio_pc_oj7p1v.webp"
            alt="Sorry for your experience. It seems the cloud service has run out."
            width={500}
            height={300}
          ></CldImage>
        </div>
      </div>
      <div className="w-[70%] h-1 bg-blueDark2 rounded-2xl"></div>
      <div className="relative 2xl:overflow-hidden max-2xl:h-100 max-xl:h-120 max-lg:h-130 max-xl:w-[80%] w-[70%] min-w-100 items-center rounded-2xl shadowDefault">
        <CldImage
          className="rounded-2xl shadow-2xl fromTop"
          src="https://res.cloudinary.com/dhjbseski/image/upload/v1771987749/HCMUNRE_TruSo_1_h0xhwz.jpg"
          alt="Sorry for your experience. It seems the cloud service has run out."
          width={2000}
          height={200}
        ></CldImage>
        <div className="absolute w-full top-0 p-5 flex flex-col bg-[rgba(255,255,255,0.3)] gap-5 items-center">
          <p className="text-[50px] font-bold text-blueDark2 fromTop">
            Education
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
              University of Natural Resources and Environment
            </p>
          </div>
          <p className="w-full font-bold text-white fromRight max-2xl:text-black">
            2021 - 2025
          </p>
          <p className="w-full text-white fromRight max-2xl:text-black">
            Faculty of Information Technology
          </p>
          <p className="w-full text-white fromRight max-2xl:text-black">
            GPA: 2.88/4
          </p>
        </div>
      </div>
      <div className="w-[70%] h-1 bg-blueDark2 rounded-2xl"></div>
      <div className="w-[70%] max-xl:w-[80%] flex flex-col gap-5">
        <div className="text-[50px] font-bold text-blueDark2 fromRight">
          Soft Skill
        </div>
        <div className="flex max-2xl:flex-wrap gap-5 items-stretch">
          <div className="flex flex-1 flex-col gap-5 p-5 shadowDefault rounded-2xl fromTop md:min-w-100">
            <div className="flex items-center self-start bg-[#0C6478] rounded-full">
              <div className="w-20 h-20 bg-[#CFF3FF] flex justify-center items-center rounded-full">
                <svg
                  className="w-14 h-14 fill-blueDark1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm96 312c0 25-12.7 47-32 59.9l0 92.1c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-92.1C172.7 359 160 337 160 312l0-40c0-53 43-96 96-96s96 43 96 96l0 40zM96 32a56 56 0 1 1 0 112 56 56 0 1 1 0-112zm16 240l0 32c0 32.5 12.1 62.1 32 84.7l0 75.3c0 1.2 0 2.5 .1 3.7-8.5 7.6-19.7 12.3-32.1 12.3l-32 0c-26.5 0-48-21.5-48-48l0-56.6C12.9 364.4 0 343.7 0 320l0-32c0-53 43-96 96-96 12.7 0 24.8 2.5 35.9 6.9-12.6 21.4-19.9 46.4-19.9 73.1zM368 464l0-75.3c19.9-22.5 32-52.2 32-84.7l0-32c0-26.7-7.3-51.6-19.9-73.1 11.1-4.5 23.2-6.9 35.9-6.9 53 0 96 43 96 96l0 32c0 23.7-12.9 44.4-32 55.4l0 56.6c0 26.5-21.5 48-48 48l-32 0c-12.3 0-23.6-4.6-32.1-12.3 0-1.2 .1-2.5 .1-3.7zM416 32a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
                </svg>
              </div>
              <p className="font-bold text-white px-5">Team Work</p>
            </div>
            <p>
              Thanks to my full-stack awareness and familiarity with tools like
              Figma, Git, and Postman, I can communicate and collaborate
              seamlessly with UI/UX Designers and Back-End Developers.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-5 p-5 shadowDefault rounded-2xl fromTop md:min-w-100">
            <div className="flex items-center self-start bg-[#0C6478] rounded-full">
              <div className="w-20 h-20 bg-[#CFF3FF] flex justify-center items-center rounded-full">
                <svg
                  className="w-14 h-14 fill-blueDark1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M120 56c0-30.9 25.1-56 56-56l24 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32l-32 0c-29.8 0-54.9-20.4-62-48-.7 0-1.3 0-2 0-44.2 0-80-35.8-80-80 0-18 6-34.6 16-48-19.4-14.6-32-37.8-32-64 0-30.9 17.6-57.8 43.2-71.1-7.1-12-11.2-26-11.2-40.9 0-44.2 35.8-80 80-80l0-24zm272 0l0 24c44.2 0 80 35.8 80 80 0 15-4.1 29-11.2 40.9 25.7 13.3 43.2 40.1 43.2 71.1 0 26.2-12.6 49.4-32 64 10 13.4 16 30 16 48 0 44.2-35.8 80-80 80-.7 0-1.3 0-2 0-7.1 27.6-32.2 48-62 48l-32 0c-17.7 0-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32l24 0c30.9 0 56 25.1 56 56z" />
                </svg>
              </div>
              <p className="font-bold text-white px-5">Continuous Learning</p>
            </div>
            <p>
              Tech evolves rapidly, and so do I. I am a self-driven learner,
              always eager to research and adopt new web technologies to build
              better and faster applications.
            </p>
          </div>
        </div>
        <div className="flex max-2xl:flex-wrap gap-5 items-stretch">
          <div className="flex flex-1 flex-col gap-5 p-5 shadowDefault rounded-2xl fromTop md:min-w-100">
            <div className="flex items-center self-start bg-[#0C6478] rounded-full">
              <div className="w-20 h-20 shrink-0 bg-[#CFF3FF] flex justify-center items-center rounded-full">
                <svg
                  className="w-14 h-14 fill-blueDark1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M133.8 36.3c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 158 47 153L7 113C-2.3 103.6-2.3 88.4 7 79S31.6 69.7 41 79l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zm0 160c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 318 47 313L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM64 376a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
                </svg>
              </div>
              <p className="font-bold text-white px-5">Design-First Approach</p>
            </div>
            <p>
              I believe in 'measure twice, cut once'. I always take the time to
              analyze requirements, map out the logic, and plan the architecture
              before writing the first line of code.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-5 p-5 shadowDefault rounded-2xl fromTop md:min-w-100">
            <div className="flex items-center self-start bg-[#0C6478] rounded-full">
              <div className="w-20 h-20 shrink-0 bg-[#CFF3FF] flex justify-center items-center rounded-full">
                <svg
                  className="w-14 h-14 fill-blueDark1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M264 48l112 0c4.4 0 8 3.6 8 8l0 40-128 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-80 0c-35.3 0-64 28.7-64 64l0 96 305 0c33.8-29.9 78.3-48 127-48 28.6 0 55.6 6.2 80 17.4l0-65.4c0-35.3-28.7-64-64-64l-80 0 0-40c0-30.9-25.1-56-56-56L264 0c-30.9 0-56 25.1-56 56zm80 296c-17.7 0-32-14.3-32-32l0-16-192 0 0 112c0 35.3 28.7 64 64 64l193.4 0c-11.2-24.4-17.4-51.4-17.4-80 0-16.6 2.1-32.7 6-48l-22 0zm352 48a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM496 320c8.8 0 16 7.2 16 16l0 48 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16z" />
                </svg>
              </div>
              <p className="font-bold text-white px-5">Time Management</p>
            </div>
            <p>
              I am highly adaptable and thrive in fast-paced environments. I
              manage tight deadlines effectively by breaking down complex tasks
              and prioritizing them logically.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[70%] h-1 bg-blueDark2 rounded-2xl"></div>
      <div className="w-[70%] max-2xl:w-[80%] flex flex-col gap-5">
        <div className="text-[50px] font-bold text-blueDark2 fromRight">
          See More
        </div>
        <div className="flex gap-5 items-center fromTop">
          <button
            className="flex flex-1 p-5 justify-center items-center bg-[#73DEFF] text-blueDark2 rounded-2xl scale-100 duration-200 ease-in-out hover:bg-[#007DA3] hover:text-white hover:scale-105 hover:shadow-2xl active:scale-100"
            onClick={() => router.push("/exprience")}
          >
            <p className="text-[30px] font-bold">EXPRIENCE</p>
          </button>
          <button
            className="flex flex-1 p-5 justify-center items-center bg-[#73DEFF] text-blueDark2 rounded-2xl scale-100 duration-200 ease-in-out hover:bg-[#007DA3] hover:text-white hover:scale-105 hover:shadow-2xl active:scale-100"
            onClick={() => router.push("/project")}
          >
            <p className="text-[30px] font-bold">PROJECT</p>
          </button>
        </div>
      </div>
    </div>
  );
}
