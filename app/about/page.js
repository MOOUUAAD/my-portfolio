"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const toolsRef = useRef(null);
  const toolsInView = useInView(toolsRef, { once: true, amount: 0.5 });

  const [educationInView, setEducationInView] = useState(false);
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEducationInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="h-full overflow-y-scroll overflow-x-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="p-12 lg:p-20 xl:p-28 xl:pb-3 pt-20 flex flex-col justify-between gap-40 ">
        <div className="mb-8">
          <h1 className="font-bold text-4xl py-4 text-center">ABOUT ME</h1>
          <p className="my-4 md:my-8 font-semibold text-center">
            An architect-minded developer passionate about building scalable,
            cloud-native solutions. <br/> I leverage full-stack expertise with modern
            frameworks and AWS infrastructure to deliver impactful products that
            drive digital transformation.
          </p>
        </div>

        <div className="my-8" ref={toolsRef}>
          <motion.h2
            className="font-bold text-4xl py-4 text-center"
            initial={{ x: "-130%" }}
            animate={toolsInView ? { x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            TOOLS:
          </motion.h2>
          <motion.div
            align="center"
            className="my-4 md:my-8"
            initial={{ x: "-130%" }}
            animate={toolsInView ? { x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <img src="https://skillicons.dev/icons?i=aws,next,react,tailwind,bootstrap,html,css,javascript,figma" />
            <br />
            <img src="https://skillicons.dev/icons?i=vite,typescript,nodejs,firebase,c,mysql,git,github" />
          </motion.div>
        </div>

<>
  <style jsx>{`
    @keyframes shimmer {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }

    .shimmer-blue {
      background: linear-gradient(
        90deg,
        transparent,
        rgba(59, 130, 246, 0.6),
        transparent
      );
      background-size: 200% 100%;
      animation: shimmer 4s ease-in-out infinite;
    }

    .shimmer-purple {
      background: linear-gradient(
        90deg,
        transparent,
        rgba(147, 51, 234, 0.6),
        transparent
      );
      background-size: 200% 100%;
      animation: shimmer 4s ease-in-out infinite;
      animation-delay: 1.3s;
    }

    .shimmer-green {
      background: linear-gradient(
        90deg,
        transparent,
        rgba(34, 197, 94, 0.6),
        transparent
      );
      background-size: 200% 100%;
      animation: shimmer 4s ease-in-out infinite;
      animation-delay: 2.6s;
    }
  `}</style>

  <div className="min-h-screen p-4 sm:p-8">
    <div className="my-14" ref={educationRef}>
      <motion.h1
        className="font-bold text-3xl md:text-4xl py-4 text-center text-white"
        initial={{ x: "-130%" }}
        animate={educationInView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
      >
        EDUCATION
      </motion.h1>

      {/* Main Container */}
      <div className="relative max-w-4xl mx-auto mt-12">
        {/* The Timeline Bar */}
        <div className="absolute left-6 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-green-400"></div>

        {/* Timeline Items Container */}
        <div className="relative">
          {/* Timeline Item 1 */}
          <div className="mb-12 md:mb-16 flex md:justify-normal">
            <div className="flex-grow-0 md:flex-grow">
              {/* This empty div helps with alignment on desktop */}
            </div>
            <div className="flex-shrink-0 w-full md:w-6/12 relative">
              <div className="flex items-center">
                {/* Icon */}
                <div className="absolute left-6 md:left-0 transform -translate-x-1/2 md:translate-x-0 md:-translate-x-1/2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center z-10 shadow-lg cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-xl hover:bg-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-white transition-all duration-300 hover:scale-110"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>

                {/* Content Card */}
                <motion.div
                  className="w-full ml-12 md:ml-0 md:w-10/12 md:ml-auto rounded-lg p-6 cursor-pointer transform transition-all duration-300 relative overflow-hidden group"
                  initial={{ x: "130%" }}
                  animate={educationInView ? { x: 0 } : {}}
                  transition={{ delay: 0.35 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div className="absolute inset-0 rounded-lg" initial={{ opacity: 0 }} animate={educationInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.8, duration: 1 }}>
                    <div className="absolute inset-0 rounded-lg border-2 border-blue-400"></div>
                    <div className="absolute top-0 left-0 w-full h-0.5 rounded-lg shimmer-blue"></div>
                    <div className="absolute top-0 right-0 w-0.5 h-full rounded-lg shimmer-blue"></div>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 rounded-lg shimmer-blue"></div>
                    <div className="absolute top-0 left-0 w-0.5 h-full rounded-lg shimmer-blue"></div>
                  </motion.div>
                  <div className="relative z-10">
                    <time className="font-mono italic text-white text-sm">2023-2026</time>
                    <div className="text-lg font-black text-white mt-2">Master's degree in Computer Science and Digitalisation</div>
                    <div className="text-white mt-1">Ecole Mohammadia d'Ingenieurs - Rabat</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="mb-12 md:mb-16 flex md:justify-normal">
            <div className="flex-shrink-0 w-full md:w-6/12 relative md:text-right">
              <div className="flex items-center">
                {/* Icon */}
                <div className="absolute left-6 md:left-auto md:right-0 transform -translate-x-1/2 md:translate-x-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center z-10 shadow-lg cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-xl hover:bg-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-white transition-all duration-300 hover:scale-110"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                {/* Content Card */}
                <motion.div
                  className="w-full ml-12 md:ml-0 md:w-10/12 md:mr-auto rounded-lg p-6 cursor-pointer transform transition-all duration-300 relative overflow-hidden group"
                  initial={{ x: "-130%" }}
                  animate={educationInView ? { x: 0 } : {}}
                  transition={{ delay: 0.45 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div className="absolute inset-0 rounded-lg" initial={{ opacity: 0 }} animate={educationInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 1.2, duration: 1 }}>
                    <div className="absolute inset-0 rounded-lg border-2 border-purple-400"></div>
                    <div className="absolute top-0 left-0 w-full h-0.5 rounded-lg shimmer-purple"></div>
                    <div className="absolute top-0 right-0 w-0.5 h-full rounded-lg shimmer-purple"></div>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 rounded-lg shimmer-purple"></div>
                    <div className="absolute top-0 left-0 w-0.5 h-full rounded-lg shimmer-purple"></div>
                  </motion.div>
                  <div className="relative z-10">
                    <time className="font-mono italic text-purple-400 text-sm">2021-2023</time>
                    <div className="text-lg font-black text-white mt-2">MPSI/MP</div>
                    <div className="text-purple-200 mt-1">CPGE Moulay Al-Hassan - Tanger</div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="flex-grow-0 md:flex-grow">
              {/* This empty div helps with alignment on desktop */}
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="mb-12 md:mb-16 flex md:justify-normal">
             <div className="flex-grow-0 md:flex-grow">
              {/* This empty div helps with alignment on desktop */}
            </div>
            <div className="flex-shrink-0 w-full md:w-6/12 relative">
              <div className="flex items-center">
                {/* Icon */}
                <div className="absolute left-6 md:left-0 transform -translate-x-1/2 md:translate-x-0 md:-translate-x-1/2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center z-10 shadow-lg cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-xl hover:bg-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-white transition-all duration-300 hover:scale-110"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                {/* Content Card */}
                <motion.div
                  className="w-full ml-12 md:ml-0 md:w-10/12 md:ml-auto rounded-lg p-6 cursor-pointer transform transition-all duration-300 relative overflow-hidden group"
                  initial={{ x: "130%" }}
                  animate={educationInView ? { x: 0 } : {}}
                  transition={{ delay: 0.55 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div className="absolute inset-0 rounded-lg" initial={{ opacity: 0 }} animate={educationInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 1.6, duration: 1 }}>
                    <div className="absolute inset-0 rounded-lg border-2 border-green-400"></div>
                    <div className="absolute top-0 left-0 w-full h-0.5 rounded-lg shimmer-green"></div>
                    <div className="absolute top-0 right-0 w-0.5 h-full rounded-lg shimmer-green"></div>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 rounded-lg shimmer-green"></div>
                    <div className="absolute top-0 left-0 w-0.5 h-full rounded-lg shimmer-green"></div>
                  </motion.div>
                  <div className="relative z-10">
                    <time className="font-mono italic text-green-400 text-sm">2021</time>
                    <div className="text-lg font-black text-white mt-2">Baccalaureat Sciences Maths</div>
                    <div className="text-green-200 mt-1">Lycee Abi Abbas Sebti - Tanger</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</>
      </div>
    </motion.div>
  );
};

export default About;
