"use client"

import "../component/BarClient";
import BarClient from "../component/BarClient";
import Footer from "../component/Footer";
import Loading from "../component/Loading";
import RightBar from "../component/RightBar";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BarClient />
      <RightBar/>
      <Loading/>
      <div className="flex flex-col gap-10 items-center">
        {children}
        <Footer />
      </div>
    </>
  );
}
