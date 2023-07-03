// import { josefinSans } from "@/utils/fonts";
import Navbar from "../components/Navbar";
import { getSessionServer } from "../lib/supabaseSession";

export default async function Home() {
  const user = await getSessionServer();
  return (
    <>
      <h1>Hello {user.email || "moodster"}! 🤺</h1>
      <Navbar />
    </>
  );
}
