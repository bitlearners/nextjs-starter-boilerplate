import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "title",
    template: "%s | HealthCare Biodiversity",
  },
  description: 
    "The Dynamic & Powerful Blog",
    keywords: ["healthcare", "biodiversity", "blog", "other", "relevant", "keywords"],

};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} data-theme="abhi"> 
      <div>
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </body>

    </html>
  );
}
