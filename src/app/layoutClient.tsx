import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import "@/app/globals.css";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="mainContent">{children}</main>
      <Footer />
    </>
  );
}
