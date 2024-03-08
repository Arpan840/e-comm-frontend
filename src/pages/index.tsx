import Image from "next/image";
import { Inter } from "next/font/google";
import TopNavbar from "@/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
     <TopNavbar/>
    </main>
  );
}
