import "@/styles/globals.css";
import { Cormorant } from "next/font/google";

import { NavBar } from "@/components/ui/NavBar";
import { Footer } from "@/components/ui/Footer";
import { SideBar } from "@/components/ui/SideBar";
import { UIProvider } from "@/context/ui/UIProvider";

const cormorant = Cormorant({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UIProvider>
      <html lang="en">
        <body className={cormorant.className}>
          <NavBar />
          <SideBar />
          <div className="grid min-h-screen grid-rows-footer">
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </UIProvider>
  );
}
