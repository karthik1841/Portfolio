import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: '01',
    title: 'AI ENGINEERING',
    description: 'I build complete AI products around LLMs and machine learning models, not just demos. I focus on practical AI systems including LLM-powered applications, intelligent agents, multi-agent automation, and production-oriented AI solutions.',
    capabilities: [
      'LLM-powered applications with LangChain',
      'AI Agents and Multi-Agent Systems',
      'RAG concepts and implementation',
      'Prompt Engineering and optimization',
      'Open-source LLM integration',
      'AI workflow automation'
    ],
    buttonText: 'VIEW PROJECTS'
  },
  {
    id: '02',
    title: 'MACHINE LEARNING',
    description: 'I develop machine learning solutions for real-world problems including classification, prediction, and data analysis using proven ML frameworks and agricultural datasets.',
    capabilities: [
      'Scikit-learn',
      'TensorFlow & Keras',
      'Deep Learning',
      'NLP and Computer Vision',
      'Data preprocessing and feature engineering',
      'Model training and evaluation'
    ]
  },
  {
    id: '03',
    title: 'FULL STACK DEVELOPMENT',
    description: 'I build production-oriented web applications from frontend to backend, including employee management systems, HRMS platforms, and real-world business applications.',
    capabilities: [
      'React.js & Next.js',
      'FastAPI & Node.js',
      'REST APIs with JWT authentication',
      'MongoDB & PostgreSQL',
      'End-to-end application development',
      'Testing and deployment'
    ]
  },
  {
    id: '04',
    title: 'AI ANALYTICS & DATA',
    description: 'I create AI-powered analytics platforms that automate data profiling, validation, analysis planning, and visualization generation through natural-language instructions.',
    capabilities: [
      'Automated dataset profiling',
      'Data validation and cleaning',
      'Natural-language analytics',
      'Pandas & NumPy analysis',
      'Visualization generation',
      'Production-oriented architecture'
    ]
  },
  {
    id: '05',
    title: 'BACKEND & APIS',
    description: 'I develop secure and scalable backend systems with well-structured APIs, efficient databases, and authentication mechanisms to power modern web applications.',
    capabilities: [
      'FastAPI',
      'Node.js & Express.js',
      'REST APIs',
      'JWT Authentication',
      'MongoDB & PostgreSQL',
      'Error handling and validation'
    ]
  },
  {
    id: '06',
    title: 'DEVOPS & TOOLS',
    description: 'I use modern development tools for version control, deployment, testing, and collaboration to ensure reliable and efficient software delivery.',
    capabilities: [
      'Git & GitHub',
      'Docker',
      'GitHub Actions',
      'Postman',
      'Streamlit',
      'Linux'
    ]
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const itemRefs = useRef([]);
  
  const titleRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);



  return (
    <section id="expertise" className="md:min-h-screen bg-[#050505] text-white pt-12 pb-12 md:pb-24 px-6 md:px-16 flex flex-col relative overflow-hidden">
      
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row items-end md:items-start justify-end w-full mt-0 z-0 pb-12">
        {/* Giant Title */}
        <div className="flex flex-col md:flex-row items-start justify-end gap-2 md:gap-4 lg:gap-8 pr-2 md:pr-0 text-right">
          <h2 ref={titleRef} className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[1.1] md:leading-[0.9] text-right">
            WHAT I<br/>BUILD
          </h2>
        </div>
      </div>

      {/* Accordion List */}
      <div className="z-10 relative mt-0 -mx-6 md:-mx-16 border-t border-white/20">
        {servicesData.map((service, index) => {
          const isHighlighted = activeIndex === index || (!isMobile && hoveredIndex === index);
          
          return (
          <div 
            key={service.id} 
            ref={(el) => itemRefs.current[index] = el}
            data-index={index}
            className={`border-b border-white/20 py-5 md:py-7 px-6 md:px-16 cursor-pointer transition-all duration-300 ease-in-out ${
              isHighlighted ? 'bg-[#ccff00]' : ''
            }`}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start">
              
              {/* Left Side: Number, Title & Capabilities */}
              <div className="flex items-start justify-between w-full lg:w-1/2 gap-2">
                <div className="flex items-start gap-3 md:gap-16 w-full min-w-0">
                  <div className="h-7 flex items-center md:h-10 flex-shrink-0">
                    <span className={`text-lg md:text-3xl font-medium transition-colors duration-300 ease-in-out leading-none ${
                      isHighlighted ? 'text-black' : 'text-white'
                    }`}>
                      {service.id}
                    </span>
                  </div>
                  <div className="flex flex-col w-full min-w-0">
                    <div className="h-7 flex items-center md:h-10">
                      <h3 className={`text-[11px] sm:text-sm md:text-xl lg:text-2xl font-black uppercase tracking-wide leading-none transition-colors duration-300 ease-in-out whitespace-nowrap overflow-hidden text-ellipsis ${
                        isHighlighted ? 'text-black' : 'text-white'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Expanded Capabilities */}
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${
                        activeIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-6 lg:pt-8 flex flex-col gap-3">
                        <ul className={`transition-colors duration-300 ease-in-out text-sm md:text-base font-light space-y-2 flex flex-col ${
                          isHighlighted ? 'text-black/80' : 'text-gray-300'
                        }`}>
                          {service.capabilities.map((cap, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className={`transition-colors duration-300 ease-in-out mt-1.5 opacity-70 text-[10px] ${
                                isHighlighted ? 'text-black' : 'text-[#ccff00]'
                              }`}>■</span>
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Arrow Icon */}
                <div className="h-7 flex items-center flex-shrink-0 lg:hidden">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`w-6 h-6 transition-all duration-300 ${
                      isHighlighted ? 'text-black' : 'text-[#ccff00]'
                    } ${activeIndex === index ? '-rotate-45' : 'rotate-45'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Right Side: Description, Button & Desktop Arrow */}
              <div className="flex flex-row gap-6 w-full lg:w-1/2 justify-between lg:justify-end relative items-start">
                
                {/* Expanded Description */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out flex flex-col items-start w-full ${
                    activeIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                   <div className="pt-4 md:pt-6 lg:pt-[72px] flex flex-col gap-6 w-full pr-0 lg:pr-12">
                     <p className={`transition-colors duration-300 ease-in-out text-base md:text-lg leading-relaxed max-w-lg font-light ${
                       isHighlighted ? 'text-black/80' : 'text-gray-300'
                     }`}>
                       {service.description}
                     </p>
                     {service.buttonText && (
                       <button className={`font-bold uppercase tracking-wider text-xs md:text-sm px-6 py-3 border transition-colors duration-300 ease-in-out flex items-center gap-2 mt-4 ${
                         isHighlighted ? 'bg-black text-[#ccff00] border-black' : 'bg-[#ccff00] text-black border-[#ccff00]'
                       }`}>
                         <span className="w-2 h-2 border-t border-l border-current"></span>
                         {service.buttonText}
                         <span className="w-2 h-2 border-b border-r border-current"></span>
                       </button>
                     )}
                   </div>
                </div>

                {/* Desktop Arrow Icon */}
                <div className="hidden lg:flex flex-shrink-0 h-10 items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`w-10 h-10 transition-all duration-300 ${
                      isHighlighted ? 'text-black' : 'text-[#ccff00]'
                    } ${activeIndex === index ? '-rotate-45' : 'rotate-45'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>

              </div>

            </div>
          </div>
          );
        })}
      </div>
      
    </section>
  );
};

export default Services;
