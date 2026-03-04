"use client";

import { AnimationDefault } from "@/app/lib/animation";
import { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";
import { CircleChevronRight, CircleDot } from "lucide-react";
import Link from "next/link";
import { useWebState } from "@/app/store/WebState";

export default function page() {
  const [expandImage, setExpandImage] = useState(false);
  const setLoading = useWebState((state) => state.toggleLoading);
  
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
      <div className="w-[70%] max-2xl:w-[80%] max-md:w-[95%] flex flex-col gap-5 pt-10">
        <div className="flex justify-between max-md:flex-wrap">
          <div className="flex flex-col">
            <p className="text-[30px] fromRight">Graduation Project</p>
            <p className="text-[40px] font-bold fromRight">
              DEVELOPING AN ONLINE RECRUITMENT SYSTEM USING MACHINE LEARNING
              APPLICATIONS TO DETECT FRAUDULENT RECRUITMENT
            </p>
          </div>
          <div className="flex gap-10 shrink-0">
            <div className="flex flex-col">
              <p className="text-[30px] font-bold fromLeft">My Role</p>
              <p className="fromLeft">Full-Stack</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[30px] font-bold  fromLeft">Time Line</p>
              <p className="fromLeft">10/2025 - 12/2025</p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-150 fromTop">
          <CldImage
            className="absolute shadow-2xl object-cover"
            src="https://res.cloudinary.com/dhjbseski/image/upload/v1772120151/total_job_Image_zei9q7.png"
            alt="Sorry for your experience. It seems the cloud service has run out."
            fill
          ></CldImage>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5 fromTop">
            <p className="text-[30px] italic">Project Overview</p>
            <div className="flex-1 h-1 bg-blueDark2 rounded-2xl"></div>
          </div>
          <p className="fromTop">
            A comprehensive backend system for a multi-role job platform that
            serves three distinct user types: Job Seekers, Employers, and
            Administrators. The system handles complex business workflows from
            user registration to job matching and platform management.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5 fromTop">
            <p className="text-[30px] italic">Key Features & Business Logic</p>
            <div className="flex-1 h-1 bg-blueDark2 rounded-2xl"></div>
          </div>
          <p>
            A complete job recruitment platform with Next.js frontend and Django
            backend (SQL Server), serving Job Seekers, Employers, and
            Administrators.
          </p>

          <ul className="space-y-5">
            <li className="flex flex-col justify-center">
              <p className="flex items-center gap-5">
                <CircleChevronRight
                  size={30}
                  className="shrink-0 max-md:hidden fromRight"
                />{" "}
                <span className="font-bold fromLeft">
                  Authentication & User Management
                </span>
              </p>
              <ul className="pl-10">
                <li className="flex items-center gap-5">
                  <CircleDot
                    size={30}
                    className="shrink-0 max-md:hidden fromRight"
                  />{" "}
                  <p className="fromLeft">
                    Multi-role Registration Separate: flows for Job Seekers,
                    Employers, and Admins with role-specific data collection
                  </p>
                </li>
                <li className="flex items-center gap-5">
                  <CircleDot
                    size={30}
                    className="shrink-0 max-md:hidden fromRight"
                  />
                  <p className="fromLeft">
                    JWT Authentication: Secure login with token storage and
                    automatic logout on expiry
                  </p>
                </li>
                <li className="flex items-center gap-5">
                  <CircleDot
                    size={30}
                    className="shrink-0 max-md:hidden fromRight"
                  />
                  <p className="fromLeft">
                    Role-Based Access Different dashboards and permissions for
                    each user type
                  </p>
                </li>
              </ul>
            </li>
            <li className="flex flex-col justify-center">
              <p className="flex items-center gap-5">
                <CircleChevronRight
                  size={30}
                  className="shrink-0 max-md:hidden fromRight"
                />{" "}
                <span className="font-bold fromLeft">Job Seeker Module</span>
              </p>
              <ul className="pl-10">
                <li className="flex items-center gap-5">
                  <CircleDot
                    size={30}
                    className="shrink-0 max-md:hidden fromRight"
                  />{" "}
                  <p className="fromLeft">
                    Profile Management: Create/update education, experience,
                    skills
                  </p>
                </li>
                <li className="flex items-center gap-5">
                  <CircleDot
                    size={30}
                    className="shrink-0 max-md:hidden fromRight"
                  />
                  <p className="fromLeft">
                    Job Search: Filter by location, salary, industry, job type
                    with pagination
                  </p>
                </li>
                <li className="flex items-center gap-5">
                  <CircleDot
                    size={30}
                    className="shrink-0 max-md:hidden fromRight"
                  />
                  <p className="fromLeft">
                    Apply to Jobs: One-click apply with duplicate prevention
                    check
                  </p>
                </li>
                <li className="flex items-center gap-5">
                  <CircleDot
                    size={30}
                    className="shrink-0 max-md:hidden fromRight"
                  />
                  <p className="fromLeft">
                    Track Applications: Monitor status (Pending → Reviewed →
                    Interview → Hired/Rejected)
                  </p>
                </li>
                <li className="flex items-center gap-5">
                  <CircleDot
                    size={30}
                    className="shrink-0 max-md:hidden fromRight"
                  />
                  <p className="fromLeft">
                    Save Jobs: Bookmark interesting positions for later
                  </p>
                </li>
              </ul>
            </li>
            <li className="flex flex-col justify-center">
              <p className="flex items-center gap-5">
                <CircleChevronRight
                  size={30}
                  className="shrink-0 max-md:hidden fromRight"
                />{" "}
                <span className="font-bold fromLeft">Employer Module</span>
              </p>
              <ul className="pl-10">
                <li className="flex items-center gap-5">
                  <CircleDot
                    size={30}
                    className="shrink-0 max-md:hidden fromRight"
                  />{" "}
                  <p className="fromLeft">
                    Company Profile: Manage company info, logo, verification
                    status
                  </p>
                </li>
                <li className="flex items-center gap-5">
                  <CircleDot
                    size={30}
                    className="shrink-0 max-md:hidden fromRight"
                  />
                  <p className="fromLeft">
                    Job Posting: Create, edit, close listings with auto-expiry
                    dates
                  </p>
                </li>
                <li className="flex items-center gap-5">
                  <CircleDot
                    size={30}
                    className="shrink-0 max-md:hidden fromRight"
                  />
                  <p className="fromLeft">
                    Candidate Management: View applicants, update statuses, add
                    notes
                  </p>
                </li>
                <li className="flex items-center gap-5">
                  <CircleDot
                    size={30}
                    className="shrink-0 max-md:hidden fromRight"
                  />
                  <p className="fromLeft">
                    Recruitment Analytics: Track views, applications, conversion
                    rates
                  </p>
                </li>
              </ul>
            </li>
            <li className="flex flex-col justify-center">
              <p className="flex items-center gap-5">
                <CircleChevronRight
                  size={30}
                  className="shrink-0 max-md:hidden fromRight"
                />{" "}
                <span className="font-bold fromLeft">Admin Module</span>
              </p>
              <ul className="pl-10">
                <li className="flex items-center gap-5">
                  <CircleDot
                    size={30}
                    className="shrink-0 max-md:hidden fromRight"
                  />{" "}
                  <p className="fromLeft">
                    User Management: Approve/suspend accounts, view activity
                    logs
                  </p>
                </li>
                <li className="flex items-center gap-5">
                  <CircleDot
                    size={30}
                    className="shrink-0 max-md:hidden fromRight"
                  />
                  <p className="fromLeft">
                    Job Moderation: Review and approve/reject new job postings
                  </p>
                </li>
                <li className="flex items-center gap-5">
                  <CircleDot
                    size={30}
                    className="shrink-0 max-md:hidden fromRight"
                  />
                  <p className="fromLeft">
                    Category Management: Manage industries, locations, job types
                  </p>
                </li>
                <li className="flex items-center gap-5">
                  <CircleDot
                    size={30}
                    className="shrink-0 max-md:hidden fromRight"
                  />
                  <p className="fromLeft">
                    Platform Stats: Dashboard with users, jobs, applications,
                    trends
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5 fromTop">
            <p className="text-[30px] italic">Technical Implementation</p>
            <div className="flex-1 h-1 bg-blueDark2 rounded-2xl"></div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="fromTop">
              <span className="font-bold">Frontend (Client) </span>
              is built with Next.js, utilizing the App Router for efficient
              client-side routing and server-side rendering where needed. CSS
              Modules provide component-scoped styling with a responsive,
              mobile-first approach. State management relies on React hooks,
              while fetch API connects seamlessly to backend REST endpoints. JWT
              tokens handle authentication persistence across sessions.
            </p>
            <div className="fromTop">
              <Link
                className="group flex flex-1 p-3 gap-5 items-center bg-[#73DEFF] text-blueDark2 rounded-2xl scale-100 duration-200 ease-in-out hover:bg-[#007DA3] hover:text-white hover:scale-105 hover:shadow-2xl active:scale-100"
                href={"https://github.com/PTPhuoc/total_job_FE.git"}
                target="_blank"
              >
                <div className="flex justify-center items-center w-15 h-15 rounded-full bg-white duration-200 ease-in-out group-hover:bg-blueDark2 group-hover:fill-white">
                  <svg
                    className="w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </div>
                <p>View Frontend Repo</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="fromTop">
              <span className="font-bold">Backend (Server) </span>
              leverages Django and Django REST Framework to create a robust API
              layer. Microsoft SQL Server stores data in a normalized schema
              with complex relationships between users, job postings,
              applications, and saved jobs. JWT authentication with role-based
              permissions secures all endpoints. Custom validation in Django
              serializers enforces business rules, while SMTP integration
              triggers email notifications for applications and status changes.
            </p>
            <div className="fromTop">
              <Link
                className="group flex flex-1 p-3 gap-5 items-center bg-[#73DEFF] text-blueDark2 rounded-2xl scale-100 duration-200 ease-in-out hover:bg-[#007DA3] hover:text-white hover:scale-105 hover:shadow-2xl active:scale-100"
                href={"https://github.com/PTPhuoc/total_job_BE.git"}
                target="_blank"
              >
                <div className="flex justify-center items-center w-15 h-15 rounded-full bg-white duration-200 ease-in-out group-hover:bg-blueDark2 group-hover:fill-white">
                  <svg
                    className="w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </div>
                <p>View Backend Repo</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="fromTop">
              <span className="font-bold">Database </span>
              Designed a comprehensive relational database consisting of 9 core
              tables to manage hospital operations, including employee
              management, scheduling, and patient appointments.
            </p>
            <div className="fromTop">
              <div
                className={`group relative w-full duration-200 ease-in-out ${expandImage ? "xl:h-250 md:h-150 max-md:h-100" : "h-25"}`}
                onClick={() => setExpandImage(!expandImage)}
              >
                <CldImage
                  className={`absolute shadow-2xl ${expandImage ? "object-contain" : "object-cover"}  `}
                  src="https://res.cloudinary.com/dhjbseski/image/upload/v1772124178/class_dirgam_total_job_tb0ukp.png"
                  alt="Sorry for your experience. It seems the cloud service has run out."
                  fill
                ></CldImage>
                <div
                  className={`absolute w-full h-full flex items-center justify-center z-1 p-5 rounded-2xl opacity-0 duration-200 ease-in-out group-hover:opacity-100 group-hover:bg-[rgba(255,255,255,0.7)]`}
                >
                  <p>{expandImage ? "Zoom Out" : "Zoom In"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5 fromTop">
            <p className="text-[30px] italic">Achievements</p>
            <div className="flex-1 h-1 bg-blueDark2 rounded-2xl"></div>
          </div>
          <p className="fromTop">
            Completed in 3 month from database design to fully functional UI.
            Implemented a complex multi-role system with 20+ RESTful API
            endpoints handling real business logic. Designed a normalized SQL
            Server schema with 8+ tables ensuring data integrity. Achieved
            responsive mobile-first design across all devices. Implemented
            secure JWT authentication with role-based access control. Created a
            complete recruitment workflow with zero duplicate application bugs.
            Maintained production-ready code with proper error handling and
            validation throughout.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5 fromTop">
            <p className="text-[30px] italic">Challenges & Solutions</p>
            <div className="flex-1 h-1 bg-blueDark2 rounded-2xl"></div>
          </div>
          <p className="fromTop">
            Complex database relationships were solved with normalized SQL
            Server schema and Django ORM optimizations. Multi-role
            authentication was implemented using JWT with custom middleware
            checking permissions per request. Duplicate applications were
            prevented through backend validation with clear frontend feedback.
            Job search performance was optimized with query indexing and
            pagination. Real-time updates were achieved via dashboard refetch on
            focus. Responsive dashboards used CSS Grid and Flexbox with
            mobile-first approach. Token management challenges were resolved
            with secure storage and refresh interceptors. The Next.js App Router
            learning curve was overcome through documentation study and best
            practices.
          </p>
        </div>
      </div>
    </div>
  );
}
