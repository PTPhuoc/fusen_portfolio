"use client";
import { useRouter, usePathname } from "next/navigation";
import { useWebState } from "../store/WebState";
export default function Footer() {
  const setLoading = useWebState((state) => state.toggleLoading);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="z-5 w-full bg-blueDark2 flex justify-center items-center">
      <div className="w-[70%] max-2xl:w-[80%] flex flex-col gap-5 py-5">
        <div className="flex items-center">
          <div className="rounded-full border-2 border-white">
            <p className="text-[40px] font-bold text-white sm:p-20 max-sm:p-10">
              FUsen
            </p>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <p className="font-bold text-white">Menu</p>
            <button
              className={
                "text-white cursor-pointer" + (pathname === "/" && " underline")
              }
              onClick={() => {
                setLoading(true);
                router.push("/");
              }}
            >
              About
            </button>
            <button
              className={
                "text-white cursor-pointer" +
                (pathname === "/experience" && " underline")
              }
              onClick={() => {
                setLoading(true);
                router.push("/experience");
              }}
            >
              Exprience
            </button>
            <button
              className={
                "text-white cursor-pointer" +
                (pathname === "/project" && " underline")
              }
              onClick={() => {
                setLoading(true);
                router.push("/project");
              }}
            >
              Project
            </button>
          </div>
        </div>
        <div className="w-full h-1 bg-white rounded-2xl"></div>
        <p className="text-white">
          Copyright © FUsen | Designed by Phan Tan Phuoc - Powered by Vercel
        </p>
      </div>
    </div>
  );
}
