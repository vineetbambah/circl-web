'use client'
import { Maitree, Macondo, Overpass_Mono, Oleo_Script } from "next/font/google";
import Image from "next/image";
const maitree = Maitree({
  subsets: ["latin"],
  variable: "--font-maitree",
  weight: ["400", "500", "600", "700"],
});
const macondo = Macondo({
  subsets: ["latin"],
  variable: "--font-macondo",
  weight: ["400"],
});
const overpass_mono = Overpass_Mono({
  subsets: ["latin"],
  variable: "--font-overpass-mono",
  weight: ["400", "500", "600", "700"],
});
const oleo_script = Oleo_Script({
  subsets: ["latin"],
  variable: "--font-oleo-script",
  weight: ["400"],
});


export default function Home() {
  return (
    <>
      <div className=" flex flex-col items-center bg-[#212121] max-h-fit min-h-screen z-10 bg-[url('/banner.png')] py-12 bg-blend-overlay  md:bg-cover md:bg-center bg-fixed">
        <h1 className={`text-4xl text-white w-2/6 text-center mt-24 ${maitree.className} `}>stop losing important messages in <span className="font-medium text-[#25D366]">WhatsApp</span> <span className={macondo.className}>c</span><span className={oleo_script.className}>h</span><span className={overpass_mono.className}>a</span><span className={macondo.className}>o</span><span className={macondo.className}>s</span></h1>
        <div className="flex flex-col items-center border-1 p-2 rounded-lg border-[#24E030] mt-10">
          <p className={`md:text-xl text-[#24E030] text-center`}> launching sooner than you expect</p>
        </div>
        <div className="flex flex-col items-center mt-20">
          <h1 className="text-6xl text-white">circl</h1>
          <p className="text-white text-sm md:w-3/6 text-center mt-2">Never let a crucial follow-up get buried in the endless scroll. <span className="hidden md:inline">Get reminders directly within your WhatsApp conversations.</span></p>
          <Image src='/chat.png' alt="chat" width={400} height={400} className=" w-3/4 md:w-1/4 hover:scale-105 duration-200 mt-10" />
        </div>
        <div className="flex flex-col items-center mt-10">
          <button className="bg-[#24E030] hover:bg-[#24E030]/90 font-bold text-black cursor-pointer p-4 rounded-xl   mt-10" onClick={() => { window.open('https://tally.so/r/3NE1kW', '_blank') }}>Join Waitlist</button>
          <p className="text-white text-center mt-2 cursor-pointer hover:underline ">Know our story</p>
        </div>
      </div>
    </>
  );
}