import Image from "next/image";
import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import Container from "./components/Container";
// import ""

export default function Home() {
  return (
    <div>
      <div className="flex">
      <Drawer/> 
      <div className="w-[100%]">
      <Navbar/>
      <Container/>
      </div>
      </div>

    </div>
  );
}
