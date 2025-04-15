import Navbar from "./Navbar";

export default function Page({
  bgVariant = "list",
  children,
}: {
  bgVariant: "list" | "details";
  children: React.ReactNode;
}) {
  return (
    <div className={`bg-${bgVariant}`}>
      <Navbar />
      <main className="container-xl">{children}</main>
    </div>
  );
}
