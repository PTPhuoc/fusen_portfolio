"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useEffect } from "react";

export default function page() {
  useEffect(() => {
    const element = document.querySelectorAll(
      ".fromLeft, .fromRight, .fromTop, .fromBottom",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        let lastClass = "";
        let count = 0;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentClass = [
              "fromLeft",
              "fromRight",
              "fromTop",
              "fromBottom",
            ].find((cls) => entry.target.classList.contains(cls));
            if (currentClass && currentClass === lastClass) {
              count++;
            } else {
              count = 0;
            }
            lastClass = currentClass ?? "";
            (entry.target as HTMLElement).style.setProperty(
              "--delay",
              `${count * 0.3}s`,
            );
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    element.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full pt-25 flex flex-col gap-10 items-center">
      <div className="w-[70%] pt-10 flex gap-5 items-center">
        <CldImage
          className="rounded-2xl shadow-2xl fromRight"
          src="https://res.cloudinary.com/dhjbseski/image/upload/v1771939695/about_postfolio_ifnyyq.jpg"
          alt="avata"
          width={500}
          height={300}
        ></CldImage>
        <div className="flex flex-col">
          <p className="text-[100px] fromLeft">
            Hi, I'm Phan Tan Phuoc, a fullstack programmer in Viet Nam, Ho Chi
            Minh city.
          </p>
          <p className="text-zinc-500 fromLeft">
            While I have a solid understanding of Back-End concepts, my primary
            expertise and greatest impact lie in Front-End development.
          </p>
        </div>
      </div>
      <div className="w-[70%] h-1 bg-blueDark2 rounded-2xl"></div>
      <div className="w-[70%] flex flex-col p-5 rounded-2xl shadowDefault">
        <div className="text-[50px] font-bold fromRight">About Me</div>
        <div className="flex gap-5">
          <div className="flex flex-col justify-between">
            <p className="text-justify fromRight">
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
            <div className="flex gap-10 items-center">
              <p className="fromRight">More Infor:</p>
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
            src="https://res.cloudinary.com/dhjbseski/image/upload/v1771955115/about_postfolio_pc_g4uv8w.jpg"
            alt="avata"
            width={500}
            height={300}
          ></CldImage>
        </div>
      </div>
      <div className="w-[70%] h-1 bg-blueDark2 rounded-2xl"></div>
      <div className="flex flex-col w-[70%] items-center  p-5 rounded-2xl shadowDefault">
        <p className="text-[50px] font-bold fromBottom">Education</p>
        <div className="w-full flex gap-5 items-center p-5 bg-[#06D7A0] rounded-2xl">
          <CldImage
            className="fromRight"
            src="https://res.cloudinary.com/dhjbseski/image/upload/v1771958960/Logo-truong-hcmunre_vqyxlx.png"
            alt="avata"
            width={100}
            height={100}
          ></CldImage>
          <p className="text-[30px] font-bold text-white fromRight">University of Natural Resources and Environment</p>
        </div>
        <p className="w-full fromRight">Faculty of Information Technology</p>
        <p className="w-full fromRight">GPA: 2.88/4</p>
      </div>
    </div>
  );
}
