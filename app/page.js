import Link from "next/link";



export default function Home() {


  return (
    <div className="flex max-sm:flex-col items-center h-[80dvh]  w-full">

      {/* left div */}
      <div
        className="sm:w-1/2 h-full w-svw max-sm:h-1/2 text-white  bg-pink-500"
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
        <section>
          <div className="">
            <div></div>
            <div></div>
          </div>
          <div></div>

        </section>

      </div>
      {/*Right div*/}
      <div
        className="sm:w-1/2 h-full w-svw max-sm:h-1/2 bg-blue-500"
      ></div>

    </div>
  );
}
