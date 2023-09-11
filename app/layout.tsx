import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import ReactToast from "@/lib/configs/react-toast";
import "remixicon/fonts/remixicon.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HNGX Movie App - Benjamin Nkem",
  description: "HNGX Task 2 Movie App by Nkem Benjamin",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ReactToast />
        {children}
      </body>
    </html>
  );
}
