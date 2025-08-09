"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from "framer-motion";

const About = () => {
  const toolsRef = useRef();
  const toolsInView = useInView(toolsRef, { amount: 0.5 });

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
          <p className="my-4 md:my-8 font-semibold">
            An architect-minded developer passionate about building scalable,
            cloud-native solutions. I leverage full-stack expertise with modern
            frameworks and AWS infrastructure to deliver impactful products that
            drive digital transformation.{" "}
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
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .shimmer-blue {
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent);
          background-size: 200% 100%;
          animation: shimmer 4s ease-in-out infinite;
        }
        
        .shimmer-purple {
          background: linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.6), transparent);
          background-size: 200% 100%;
          animation: shimmer 4s ease-in-out infinite;
          animation-delay: 1.3s;
        }
        
        .shimmer-green {
          background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.6), transparent);
          background-size: 200% 100%;
          animation: shimmer 4s ease-in-out infinite;
          animation-delay: 2.6s;
        }
      `}</style>
      
      <div className="min-h-screen p-8 bg-gray-50">
        <div className="my-14" ref={educationRef}>
          <motion.h1
            className="font-bold text-4xl py-4 text-center text-gray-800"
            initial={{ x: "-130%" }}
            animate={educationInView ? { x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            EDUCATION
          </motion.h1>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-green-400"></div>
            
            {/* Timeline items */}
            <div className="relative">
              
              {/* First item - Right side */}
              <div className="flex items-center mb-16 relative">
                {/* Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center z-10 shadow-lg cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-xl hover:bg-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 text-white transition-all duration-300 hover:scale-110"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                
                {/* Content - Right side */}
                <motion.div
                  className="ml-auto w-5/12 bg-white rounded-lg p-6 shadow-xl border border-gray-200 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
                  initial={{ x: "130%" }}
                  animate={educationInView ? { x: 0 } : {}}
                  transition={{ delay: 0.35 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {/* Shimmer Border Lightning */}
                  <motion.div 
                    className="absolute inset-0 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={educationInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                  >
                    <div className="absolute inset-0 rounded-lg border-2 border-blue-400 border-opacity-30"></div>
                    <div className="absolute inset-0 rounded-lg shimmer-blue"></div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <time className="font-mono italic text-blue-500 text-sm">2023-2026</time>
                    <div className="text-lg font-black text-gray-800 mt-2">
                      Computer Science and Digitalisation
                    </div>
                    <div className="text-gray-600 mt-1">
                      Ecole Mohammadia d'Ingenieurs - Rabat
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Second item - Left side */}
              <div className="flex items-center mb-16 relative">
                {/* Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center z-10 shadow-lg cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-xl hover:bg-purple-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 text-white transition-all duration-300 hover:scale-110"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                
                {/* Content - Left side */}
                <motion.div
                  className="mr-auto w-5/12 bg-white rounded-lg p-6 shadow-xl border border-gray-200 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
                  initial={{ x: "-130%" }}
                  animate={educationInView ? { x: 0 } : {}}
                  transition={{ delay: 0.45 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {/* Shimmer Border Lightning */}
                  <motion.div 
                    className="absolute inset-0 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={educationInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                  >
                    <div className="absolute inset-0 rounded-lg border-2 border-purple-400 border-opacity-30"></div>
                    <div className="absolute inset-0 rounded-lg shimmer-purple"></div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <time className="font-mono italic text-purple-500 text-sm">2022-2023</time>
                    <div className="text-lg font-black text-gray-800 mt-2">MPSI/MP</div>
                    <div className="text-gray-600 mt-1">
                      CPGE Moulay Al-Hassan - Tanger
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Third item - Right side */}
              <div className="flex items-center mb-16 relative">
                {/* Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center z-10 shadow-lg cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-xl hover:bg-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 text-white transition-all duration-300 hover:scale-110"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                
                {/* Content - Right side */}
                <motion.div
                  className="ml-auto w-5/12 bg-white rounded-lg p-6 shadow-xl border border-gray-200 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
                  initial={{ x: "130%" }}
                  animate={educationInView ? { x: 0 } : {}}
                  transition={{ delay: 0.55 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {/* Shimmer Border Lightning */}
                  <motion.div 
                    className="absolute inset-0 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={educationInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.6, duration: 1 }}
                  >
                    <div className="absolute inset-0 rounded-lg border-2 border-green-400 border-opacity-30"></div>
                    <div className="absolute inset-0 rounded-lg shimmer-green"></div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <time className="font-mono italic text-green-500 text-sm">2021</time>
                    <div className="text-lg font-black text-gray-800 mt-2">
                      Baccalaureat Sciences Maths
                    </div>
                    <div className="text-gray-600 mt-1">
                      Lycee Abi Abbas Sebti - Tanger
                    </div>
                  </div>
                </motion.div>
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
