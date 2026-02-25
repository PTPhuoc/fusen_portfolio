import "../component/BarClient";
import BarClient from "../component/BarClient";
import Footer from "../component/Footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BarClient />
      <div className="flex flex-col gap-10 items-center">
        {children}
        <Footer />
      </div>
    </>
  );
}
