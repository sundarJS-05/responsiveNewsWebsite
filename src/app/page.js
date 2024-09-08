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

        <section className="w-[45%]">
          <img  src='https://www.pexels.com/photo/silver-imac-apple-magic-keyboard-and-magic-mouse-on-wooden-table-38568/' /> 

          <div className='flex'>
            {/* inner LEFT */}
            <h3 className="w-1/2 text-4xl"> news article 1</h3>


            {/* inner RIGHT */}
            <div>

              <p className="w-1/2 text-3xl">
                STARTING LINES...

              </p>

              <button className="py-4 bg-sky-600 text-white"> READ FURTHER.... </button>
            </div>


          </div>
        </section>


        {/* RIGHT section */}

        <div className="bg-slate-900 text-white w-full">
          <h3> NEXT NEWS...</h3>

          <section className="flex gap-5">
            <p> 2nd news summary</p>

            <article>  2nd news main content</article>
          </section>



        </div>

      </div>

      {/* CARD sections */}

      <section className="flex justify-between gap-6">

        <Card/>

      </section>

      </main>
      
    </div>

  );
}


function Card(){
  return (
    <div>
      <img src='https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?auto=compress&cs=tinysrgb&w=400'/>

    // right section
    <h2> 01</h2>
    <p> News snippet 1</p>

    </div>
  )
}