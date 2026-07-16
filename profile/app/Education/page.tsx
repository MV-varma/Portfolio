'use client'
import { FaGraduationCap, FaSchool, FaCalendarAlt, FaMapMarkerAlt, } from "react-icons/fa";
import {useEffect, useRef} from "react"


export default function Education() {
  const degreeImg = [
    { id: 1, title: "College", color: "from-purple-900/40 to-indigo-900/40", src:"/images/clg.jpg"},
    { id: 2, title: "Code1", color: "from-purple-900/40 to-indigo-900/40", src:"/images/code.jpg"},
    { id: 3, title: "Code2", color: "from-purple-900/40 to-indigo-900/40", src:"/images/code2.jpg" },
  ];

  const HscImg = [
    { id: 1, title: "Junior College", color: "from-purple-900/40 to-indigo-900/40", src:"/images/jc.jpg"},
    { id: 2, title: "Image2", color: "from-purple-900/40 to-indigo-900/40", src:"/images/jc2.jpg" },
    { id: 3, title: "Image3", color: "from-purple-900/40 to-indigo-900/40", src:"/images/prism.jpg" },
  ];

  const degreescrollRef = useRef<HTMLDivElement>(null)
  const hscscrollRef = useRef<HTMLDivElement>(null)

  const degreeDir = useRef(1)
  const hscDir = useRef(1)

  useEffect(()=>{
    const scrollInterval = setInterval(()=>{
      const scrollContainer = (ref: React.RefObject<HTMLDivElement | null>, dirRef: {current:number})=>{
        if (ref.current){
          const {scrollLeft, scrollWidth, clientWidth} = ref.current
          if(scrollLeft + clientWidth >= scrollWidth- 10){
            dirRef.current=-1
          }else if(scrollLeft <= 5){
            dirRef.current=1
          }
          ref.current.scrollBy({left:200*dirRef.current,behavior:'smooth'})
        }
      }
      scrollContainer(degreescrollRef,degreeDir)
      scrollContainer(hscscrollRef,hscDir)
    },3000)
    return()=>clearInterval(scrollInterval)
  },[])


  return (
    <section id="Education" className="py-20 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent uppercase tracking-wider">
            Academic Background
          </h2>
          <div className="h-1 w-24 bg-purple-500 rounded-full mx-auto md:mx-0"></div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30 text-purple-400">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-wide text-white">
                    Bachelor of Science
                  </h3>
                  <p className="text-purple-400 font-mono text-sm tracking-widest uppercase">
                    Computer Science
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-400 font-medium">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt /> Mumbai University
                </span>
                <span className=" flex items-center gap-2 text-purple-300">
                  <FaCalendarAlt /> 2025 - Present
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Currently focusing on advanced programming methodologies, full-stack web technologies, and foundational data structures. Actively participating in tech committees, hackathons, and building logic frameworks for scalable applications.
            </p>
            <div className="flex flex-wrap gap-2">
              {["First Year", "Core CS"].map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded bg-gray-900 border border-gray-700 text-gray-300"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full overflow-hidden relative group">
            <div 
            ref={degreescrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 pb-4 no-scrollbar [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden ">
              {degreeImg.map((img) => (
                <div
                  key={img.id}
                  className={` w-[85vw] sm:w-70 md:w-[320px] h-60 flex-none rounded-2xl snap-center shrink-0 border border-purple-500/20 bg-linear-to-r ${img.color} backdrop-blur-sm flex items-center justify-center relative overflow-hidden transition-all shadow-lg hover:border-purple-500/50 `}
                >
                  <img
                  src={img.src}
                  alt={img.title}
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-60 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay">
                  </img>
                </div>
              ))}
            </div>
            <div className="absolute top-0 right-0 h-full w-12 bg-linear-to-l from-black to-transparent pointer-events-none"></div>
            <div className="absolute top-0 left-0 h-full w-12 bg-linear-to-r from-black to-transparent pointer-events-none lg:hidden z-10"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1 w-full overflow-hidden relative group">
            <div 
            ref={hscscrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 pb-4 no-scrollbar [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden">
              {HscImg.map((img) => (
                <div
                  key={img.id}
                  className={`w-[85vw] sm:w-70 md:w-[320px] h-55 flex-none rounded-2xl snap-center shrink-0 border border-gray-700 bg-linear-to-r ${img.color} backdrop-blur-sm flex items-center justify-center relative overflow-hidden transition-all shadow-lg hover:border-gray-500 `}
                >
                  <img
                  src={img.src}
                  alt={img.title}
                  className="absolute inset-0 w-full h-full object-cover object-60 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay">
                  </img>
                </div>
              ))}
            </div>
            <div className="absolute top-0 right-0 h-full w-12 bg-linear-to-l from-black to-transparent pointer-events-none"></div>
            <div className="absolute top-0 left-0 h-full w-12 bg-linear-to-r from-black to-transparent pointer-events-none lg:block"></div>
          </div>

          <div className="space-y-6 order-2 lg:order-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-900 rounded-lg border border-gray-700 text-gray-300">
                  <FaSchool className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">
                    Higher Secondary (HSC)
                  </h3>
                  <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
                    Science (PCMB) Stream
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-400 font-medium">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt /> Junior College
                </span>
                <span className="flex items-center gap-2 text-gray-300 ">
                  <FaCalendarAlt /> 2022 - 2024
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Completed high school with a strong foundation in mathematics and IT. Elected and served as Class Representative (CR), handling administrative bridging, managing student events, and developing core leadership and communication skills.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Mathematics", "Leadership", "IT"].map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm font-mono rounded bg-gray-900 border border-gray-800 text-gray-500"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}