import { StarHalf, StarIcon } from "lucide-react";
import Link from "next/link";



export default function Home() {


  return (
    <div className="flex max-sm:flex-col items-center h-[80dvh] px-36 ">

      {/* left div */}
      <div
        className="sm:w-1/2 h-full w-svw max-sm:h-1/2 text-white "
      >
        {/* upper section */}
        <section>
          <h1
            className="text-3xl m-auto text-center tracking-tighter sm:text-5xl mt-16 leading-tight md:mt-32 font-bold "
          >Preserve your memories for the future.</h1>
          <p
            className="text-gray-300 mx-8 lg:mx-32 text-xs md:text-sm text-center text-wrap leading-normal"
          >Whether it's a future surprise, a goal reminder, or a message to your future self — we’ll make sure it arrives on time.</p>

        </section>
        {/* lower section */}
        <section className="mt-24" >
          <div className="flex flex-col sm:flex-row w-full">
            <div className="text-center w-1/2"  >
              <h1 className="text-4xl font-bold"  >100%</h1>
              <p className="text-sm text-gray-300 " >secure and reliable.</p>
            </div>
            <div className=" text-center w-1/2"  >
              <h1 className="text-4xl font-bold"  >20+</h1>
              <p className="text-sm text-gray-300 " >grabbed user attention.</p>
            </div>
          </div>
          <div>
            <h1 className="flex font-bold  size-44 justify-center w-full gap-1 mt-8" >
              <StarIcon fill="#FFFFFF" />
              <StarIcon fill="#FFFFFF" />
              <StarIcon fill="#FFFFFF" />
              <StarIcon fill="#FFFFFF" />
              <StarHalf fill="#FFFFFF" />
              <span className="mt-1" >4.5</span>
              <span className="text-xs mt-2 text-gray-400 " >Average user rating.</span>
            </h1>
          </div>

        </section>

      </div>
      {/*Right div*/}
      <div
        className="sm:w-1/2 h-full w-svw max-sm:h-1/2 bg-blue-500"
      ></div>

    </div>
  );
}
