import Image from "next/image";
import image from "../../images/Untitled.jpg";

export default function login() {
  return (
    <>
      <form>
        <input> email </input>
      </form>
      <Image src={image} alt="gif" width={100} height={100} />;
    </>
  );
}