import { Header } from "@/components/header/Header";
import { ThemeProvider } from "@/contexts/theme/ThemeProvider";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
}
