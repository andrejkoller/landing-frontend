import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import "@/app/globals.css";
import { ThemeProvider } from "@/contexts/theme/ThemeProvider";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <Header />
      <main className="mainContent">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
