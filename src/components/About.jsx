import React, { useEffect, useRef } from 'react';
import aboutImage from '../assets/about_section/about_section.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const frontendSkills = ["React.js", "Next.js", "React Native", "JavaScript", "HTML", "CSS", "Tailwind CSS"];
const backendSkills = ["Python", "FastAPI", "Node.js", "Express.js", "REST APIs", "JWT Authentication"];
const aiSkills = ["LLMs", "LangChain", "AutoGen", "CrewAI", "RAG", "AI Agents", "Multi-Agent Systems", "Prompt Engineering", "Scikit-learn", "TensorFlow"];
const mlSkills = ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Pandas", "NumPy", "Keras", "XGBoost"];
const dbSkills = ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"];
const toolsSkills = ["Git", "GitHub", "Docker", "GitHub Actions", "Postman", "Streamlit", "Linux"];

const aboutWords = [
  { text: "I'm" },
  { text: "Karthik", className: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400" },
  { text: "Palli." },
  { text: "A" }, { text: "2026" }, { text: "Computer" }, { text: "Science" }, { text: "graduate" }, { text: "focused" }, { text: "on" }, { text: "AI" }, { text: "engineering" }, { text: "and" }, { text: "full-stack" }, { text: "product" }, { text: "development." },
  { text: "I" }, { text: "build" }, { text: "complete" }, { text: "AI" }, { text: "products" }, { text: "rather" }, { text: "than" }, { text: "simple" }, { text: "demos," }, { text: "with" }, { text: "experience" }, { text: "across" },
  { text: "LLM-powered" }, { text: "applications," },
  { text: "AI" }, { text: "agents," },
  { text: "analytics" }, { text: "systems," },
  { text: "and" }, { text: "production-oriented" }, { text: "software." },
  { text: "I" }, { text: "focus" }, { text: "on" }, { text: "building" }, { text: "reliable," }, { text: "deployable" }, { text: "AI" }, { text: "solutions" }, { text: "using" },
  { text: "Python,", className: "text-white font-medium" },
  { text: "FastAPI,", className: "text-white font-medium" },
  { text: "LangChain,", className: "text-white font-medium" },
  { text: "and" }, { text: "modern" }, { text: "AI" }, { text: "technologies." }
];

const About = () => {
  const textRef = useRef(null);
  const introMobileRef = useRef(null);
  const introDesktopRef = useRef(null);

  useEffect(() => {
    const headings = [introMobileRef.current, introDesktopRef.current];
    
    headings.forEach((heading) => {
      if (heading) {
        gsap.fromTo(
          heading,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    if (textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { color: '#52525b', opacity: 0.2 },
        {
          color: '#ffffff',
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
            end: 'bottom 50%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" className="min-h-screen bg-[#050505] text-white pt-24 pb-0 px-6 md:px-16 flex flex-col justify-between relative overflow-hidden">


      <div className="max-w-7xl mx-auto w-full z-10">

        {/* Mobile Intro Text (Visible only on mobile/tablet) */}
        <h2 ref={introMobileRef} className="lg:hidden text-center text-[18vw] md:text-[8rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none mb-10 md:mb-16">
          About
        </h2>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start pl-0 lg:pl-20">
            <img
              src={aboutImage}
              alt="About"
              className="w-48 md:w-56 lg:w-64 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col justify-center space-y-8 z-10 w-full px-4 md:px-0">
            {/* Desktop Intro Text (Visible only on desktop) */}
            <h2 ref={introDesktopRef} className="hidden lg:block text-[11rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none">
              About
            </h2>
            <div className="relative bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/[0.07] transition-colors duration-300 text-center lg:text-left">
              <p ref={textRef} className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed font-light">
                {aboutWords.map((wordObj, index) => (
                  <React.Fragment key={index}>
                    <span className={`word ${wordObj.className || ''}`}>
                      {wordObj.text}
                    </span>
                    {index < aboutWords.length - 1 && " "}
                  </React.Fragment>
                ))}
              </p>
            </div>

            {/* Education */}
            <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10">
              <h3 className="text-white font-bold text-lg mb-3">Education</h3>
              <p className="text-gray-300 text-sm md:text-base">
                <span className="text-white font-medium">B.Tech Computer Science Engineering, 2026</span><br/>
                Madanapalle Institute of Technology and Science
              </p>
            </div>

            {/* Location */}
            <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10">
              <h3 className="text-white font-bold text-lg mb-3">Location</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Bengaluru, India <span className="text-gray-500">|</span> Open to Hyderabad
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Scrolling Skills Marquee */}
      <div className="flex flex-col border-t border-white/5 bg-[#030303] py-4 mt-auto -mx-6 md:-mx-16">
        {/* First Row */}
        <div className="flex overflow-hidden whitespace-nowrap mb-2">
          <div className="flex animate-marquee w-max">
            {[...frontendSkills, ...frontendSkills, ...frontendSkills, ...frontendSkills].map((item, i) => (
              <div key={`front-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Second Row */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee-reverse w-max">
            {[...backendSkills, ...backendSkills, ...backendSkills, ...backendSkills].map((item, i) => (
              <div key={`back-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Third Row */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee w-max">
            {[...aiSkills, ...aiSkills, ...aiSkills, ...aiSkills].map((item, i) => (
              <div key={`ai-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Fourth Row */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee-reverse w-max">
            {[...mlSkills, ...mlSkills, ...mlSkills, ...mlSkills].map((item, i) => (
              <div key={`ml-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Fifth Row */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee w-max">
            {[...dbSkills, ...dbSkills, ...dbSkills, ...dbSkills].map((item, i) => (
              <div key={`db-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Sixth Row */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee-reverse w-max">
            {[...toolsSkills, ...toolsSkills, ...toolsSkills, ...toolsSkills].map((item, i) => (
              <div key={`tools-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
