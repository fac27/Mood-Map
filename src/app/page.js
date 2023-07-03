import Link from "next/link";
import { josefinSans } from "@/utils/fonts";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <h1>Hello Moodster! 🤺</h1>
      <span className={josefinSans.className}>
        <Link href="login">Login</Link>
      </span>
      <Navbar />
    </>
  );
}
