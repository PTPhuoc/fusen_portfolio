"use client";

import "../component/BarClient";
import BarClient from "../component/BarClient";
import Footer from "../component/Footer";
import Loading from "../component/Loading";
import RightBar from "../component/RightBar";
import { useWebState } from "../store/WebState";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setRightBar = useWebState((state) => state.toggleRightBar);
  const rightBar = useWebState((state) => state.rightBar);
  return (
    <>
      <BarClient />
      <RightBar />
      <Loading />
      <div
        className="flex flex-col gap-10 items-center"
        onClick={() => rightBar && setRightBar()}
      >
        {children}
        <Footer />
      </div>
    </>
  );
}
