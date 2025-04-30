'use client'
import Image from "next/image";
import { Brain, MessageSquareIcon, Earth, KeyRound, CakeIcon, ScrollIcon, Lightbulb, MoveRightIcon} from "lucide-react";
import Banner from "@/app/banner.png";
import Waitlist from "./waitlist";
import { motion, useScroll, useTransform } from "motion/react";
const features = [
  {
    index: 1,
    icon: <MessageSquareIcon className="h-8 w-8" />,
    title: "Reminders Inside WhatsApp",
    description: "Stay in your workflow. No switching apps, no friction.",
  },
  {
    index: 2,
    icon: <Brain className="h-8 w-8" />,
    title: "Simple to Use",
    description: "Interact naturally with a chatbot, just like talking to a friend.",
  },
  {
    index: 3,
    icon: <Earth className="h-8 w-8" />,
    title: "Built for Real Life",
    description: "Designed by people who live in WhatsApp and needed a practical solution.",
  },
  {
    index: 4,
    icon: <KeyRound className="h-8 w-8" />,
    title: "Privacy First",
    description: "Your data is yours. We don't store your conversations.",
  },
  {
    index: 5,
    icon: <Brain className="h-8 w-8" />,
    title: "Boost Reliability",
    description: "Improve your follow-through on personal and professional communication.",
  },
];
const story = [
  {
    index:1,
    icon:<ScrollIcon className="h-16 w-16 text-green-400"/>,
    text:<p className="">Like you, we struggled with the volume of WhatsApp messages.</p>
  },
  {
    index:2,
    icon:<CakeIcon className="h-16 w-16 text-green-400"/>,
    text:<p className="">A missed follow-up on Vaibhav's birthday sparked the idea.</p>
  },
  {
    index:3,
    icon:<Lightbulb className="h-16 w-16 text-green-400"/>,
    text:<p className="">So <a href="https://x.com/vaibhav_gup01">Vaibhav</a> and <a href="https://x.com/vineetbambah">Vineet</a>   teamed up to build the simple tool we all desperately need.</p>
  }
]
export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const yPosition = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  return (
    
    <div className="text-black">
      <canvas id="noiseCanvas" className="absolute inset-0 w-full h-full pointer-events-none z-0"></canvas>
      <nav className="fixed left-1/2 transform -translate-x-1/2 w-3/4 top-1 p-4 rounded-sm backdrop-blur-lg z-10">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-4xl"> circl</h1>
        <Waitlist />
      </div>
      </nav>
      <main id="hero" className="flex min-h-screen flex-col items-center justify-between p-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center"
        >
          <Image
            src={Banner.src}
            alt="Banner"
            width={1920}
            height={1080}
            className="mt-8 opacity-80 scale-80 rounded-lg shadow-lg"
            priority
          />
          <motion.h1
            style={{ opacity, y: yPosition }}
            className="text-4xl md:text-7xl w-1/2 text-center absolute font-bold text-white"
          > Remember WhatsApp Chats That Matter
          </motion.h1>
          <motion.h2 className="text-2xl text-white mt-64 w-2/4 absolute
         font-semibold text-center"
            style={{ opacity, y: yPosition }}>
            Never let a crucial follow-up get buried in the endless scroll. Get reminders directly within your WhatsApp conversations.
          </motion.h2>
          <motion.div className="absolute mt-96">
            <Waitlist />
          </motion.div>
        </motion.div> 
      </main>
  
      {/* <section id="features" className="bg-white min-h-screen text-white py-24">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-7xl w-1/2 text-center mx-auto font-bold text-black">
          Why you need this?
        </motion.h1>
        <div className="grid my-20 grid-cols-3 mx-20 w-full gap-4 px-4 md:px-24">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex hover:bg-green-100/10 flex-col items-center justify-center shadow-black/10 shadow-sm hover:shadow-lg duration-100 p-4 md:flex-row md:space-x-8"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-black space-x-1 rounded-full">
              {feature.icon}
            </div>
            <div className="flex flex-col items-start justify-center p-4">
              <h3 className="text-2xl font-bold text-black">{feature.title}</h3>
              <p className="mt-2 text-lg text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
        </div>
      </section> */}
      
      <section id="story" className="flex flex-col justify-center items-center min-h-screen w-screen">
        <h1 className="text-6xl font-bold text-center mb-20">Built out of necessity</h1>
        <div id="storyTiles" className="space-x-2 w-3/4 p-2 grid grid-cols-5">
          {story.map((tile,index)=>(
             <>
             <div className="p-12 w-100 shadow-sm bg-green-50 hover:shadow-md duration-150">
               <div className="mb-20">{tile.icon}</div>
               <h1 className="text-2xl">{tile.text}</h1>
             </div>
         
             {index !==2 && (
                 <MoveRightIcon className="h-20 w-20 text-green-500 mt-20 m-auto"/>
             )}
           </>
          ))}
        </div>
      </section>
    </div>
  );
}