
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Background from "./component/Background";
import Sidebar from "./component/Sidebar";
import { usePathname } from "next/navigation";
import GameProvider, { useGame } from "./contexts/gameContext";
import GameOfTheYear from "./component/GameOfTheYear";
import GameTrailer from "./component/GameTrailer";

const inter = Poppins({subsets : ["latin"],weight:"400" });

export const metadata: Metadata = {
  title: "Rawg IO Clone",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`overflow-x-hidden w-full bg-slate-600 text-slate-300 ${inter.className}`}>
        <GameProvider>
          <Navbar />
          <Background />
          <div className="mx-5 lg:mx-44 flex gap-5 lg:gap-0 items-start mt-8 mb-32 lg:mt-14">
            <Sidebar />
            {children}   
          </div>
            <GameOfTheYear />
            <GameTrailer />
        </GameProvider>
        
      </body>
    </html>
  );
}
