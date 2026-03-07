"use client";

import { CldImage } from "next-cloudinary";
import { useEffect } from "react";
import Link from "next/link";
import { AnimationDefault } from "@/app/lib/animation";
import { useRouter } from "next/navigation";
import { useWebState } from "@/app/store/WebState";
import { useLanguage } from "@/app/store/LanguageState";
import { TextExp } from "@/app/lib/Language";
import { CircleChevronRight } from "lucide-react";

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
      <div className="w-[70%] max-2xl:w-[80%] max-md:w-[95%] flex items-center gap-5 pt-10">
        <p className="text-blueDark2 font-bold fromRight">11/2024 - 12/2024</p>
        <div className="flex-1 h-1 bg-blueDark2 rounded-2xl fromLeft"></div>
      </div>
      <div className="w-[70%] max-2xl:w-[80%] max-md:w-[95%] flex flex-col shadowDefault rounded-2xl">
        <div className="relative overflow-hidden rounded-2xl shadowDefault fromBottom">
          <CldImage
            className="absolute object-cover z-1"
            src="https://res.cloudinary.com/dhjbseski/image/upload/v1772033463/benh_vien_nhi_dong_building_o6ontx.jpg"
            alt="Sorry for your experience. It seems the cloud service has run out."
            fill
          ></CldImage>
          <div className="flex gap-5 items-center justify-between p-5">
            <div className="flex gap-5 items-center max-md:flex-wrap justify-center">
              <CldImage
                className="rounded-2xl shadow-2xl z-2"
                src="https://res.cloudinary.com/dhjbseski/image/upload/v1772033204/benh-vien-nhi-dong-icon_kr2aj4.png"
                alt="Sorry for your experience. It seems the cloud service has run out."
                width={100}
                height={100}
              ></CldImage>
              <p className="z-2 font-bold text-white text-[30px]">
                {TextExp[language].nameCompany}
              </p>
            </div>
            <Link
              href={"https://www.benhviennhi.org.vn/"}
              target="_blank"
              className="w-15 h-15 z-2 flex shrink-0 justify-center items-center rounded-full cursor-pointer bg-white duration-200 ease-in hover:bg-zinc-400 hover:fill-white"
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center p-5">
          <div className="flex flex-col gap-3 max-md:max-w-100">
            <p className="font-bold bg-blueDark2 px-2 rounded-md text-white fromRight">
              {TextExp[language].period}
            </p>
            <p className="fromRight">{TextExp[language].role}</p>
            <div className="flex items-center gap-3">
              <CircleChevronRight
                size={30}
                className="shrink-0 max-md:hidden fromRight"
              />
              <p className="text-justify fromRight">
                {TextExp[language].content[1]}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <CircleChevronRight
                size={30}
                className="shrink-0 max-md:hidden fromRight"
              />
              <p className="text-justify fromRight">
                {TextExp[language].content[2]}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <CircleChevronRight
                size={30}
                className="shrink-0 max-md:hidden fromRight"
              />
              <p className="text-justify fromRight">
                {TextExp[language].content[3]}
              </p>
            </div>
            <div className="fromRight">
              <button
                onClick={() => {
                  setLoading(true);
                  router.push("/project/appointment");
                }}
                className="flex flex-1 p-5 justify-center items-center bg-[#73DEFF] text-blueDark2 rounded-2xl scale-100 duration-200 ease-in-out hover:bg-[#007DA3] hover:text-white hover:scale-105 hover:shadow-2xl active:scale-100"
              >
                {TextExp[language].seeDetail}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 max-xl:flex-wrap min-w-100 max-sm:min-w-80">
            <div className="relative w-100 h-150 max-lg:w-full">
              <CldImage
                className="absolute object-cover 2xl:translate-y-10 rounded-2xl shadowDefault fromTop"
                src="https://res.cloudinary.com/dhjbseski/image/upload/v1772121589/exp_postfolio_2_bntcds.webp"
                alt="Sorry for your experience. It seems the cloud service has run out."
                fill
              ></CldImage>
            </div>
            <div className="relative w-100 h-150 max-lg:w-full">
              <CldImage
                className="absolute object-cover 2xl:-translate-y-10 z-1 rounded-2xl shadowDefault fromBottom"
                src="https://res.cloudinary.com/dhjbseski/image/upload/v1772121587/exp_postfolio_1_ltlxeh.webp"
                alt="Sorry for your experience. It seems the cloud service has run out."
                fill
              ></CldImage>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
