import "@/styles/globals.css";
import { Cormorant } from "next/font/google";

import { UIProvider } from "@/context/ui/UIProvider";
import { CartProvider } from "@/context/cart/CartProvider";

import { NavBar } from "@/components/ui/NavBar";
import { Footer } from "@/components/ui/Footer";
import { SideBar } from "@/components/ui/SideBar";

const cormorant = Cormorant({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cormorant.className}>
        <CartProvider>
          <UIProvider>
            <NavBar />
            <SideBar />
            <div className="grid min-h-screen grid-rows-footer">
              <main>{children}</main>
              <Footer />
            </div>
          </UIProvider>
        </CartProvider>
      </body>
    </html>
  );
}
