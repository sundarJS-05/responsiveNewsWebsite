import Image from "next/image";
import Navbar from "./components/Navbar";
import {desktopimg} from "@/assets/images/image-web-3-mobile.jpg"

export default function Home() {
  return (

    <div className="min-h-screen w-full">  


      <main className="flex flex-col gap-5 max-w-6xl  mx-auto">
      
      <Navbar/>

      <div>
        {/* LEFT section */}

        <section>
          <Image  src={desktopimg}  alt="desktop img" /> 
        </section>


        {/* RIGHT section */}

      </div>



      </main>
      
    </div>

  );
}
