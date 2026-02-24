import "../component/BarClient";
import BarClient from "../component/BarClient";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BarClient />
      {children}
    </>
  );
}
