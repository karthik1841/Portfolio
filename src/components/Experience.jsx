import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    company: 'Enkonix Software Services Pvt. Ltd.',
    role: 'Full Stack Developer Intern',
    duration: '6 months',
    location: 'Bengaluru, India',
    description: [
      'Developed real-world web applications including HRMS, Employee Management System, Task Assignment System, and Exam Portal',
      'Used React.js, Node.js, Express.js, Firebase, REST APIs, and database technologies',
      'Built and integrated backend APIs with JWT authentication and role-based access control',
      'Worked on database operations, validation, debugging, testing, and performance improvements',
      'End-to-end application development from frontend implementation and API integration to testing and deployment',
      'Used Git and GitHub for development and collaboration'
    ]
  },
  {
    company: 'MotionCut',
    role: 'Machine Learning Intern',
    duration: '2024',
    location: 'Remote',
    description: [
      'Developed machine learning solutions for soil classification and crop prediction',
      'Used Python, Pandas, NumPy, and Scikit-learn',
      'Performed data preprocessing, feature engineering, model training, evaluation, and prediction using agricultural datasets',
      'Worked with classification and prediction workflows using real-world agricultural data'
    ]
  }
];

const Experience = () => {
  const titleRef = useRef(null);
  const itemRefs = useRef([]);

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

    itemRefs.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  return (
    <section id="experience" className="min-h-screen bg-[#050505] text-white pt-12 pb-12 md:pb-24 px-6 md:px-16 flex flex-col relative overflow-hidden">
      
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row items-start justify-start w-full mt-0 z-0 pb-12">
        <h2 ref={titleRef} className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[1.1] md:leading-[0.9]">
          EXPERIENCE
        </h2>
      </div>

      {/* Experience Timeline */}
      <div className="z-10 relative w-full max-w-5xl mx-auto">
        {experienceData.map((exp, index) => (
          <div 
            key={index}
            ref={(el) => itemRefs.current[index] = el}
            className="relative pl-8 md:pl-12 pb-12 md:pb-16 border-l-2 border-white/20 last:border-0"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 top-0 w-4 h-4 md:w-5 md:h-5 bg-[#ccff00] rounded-full -translate-x-1/2 transform"></div>
            
            {/* Experience Card */}
            <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/[0.07] transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-0">
                  {exp.company}
                </h3>
                <span className="text-[#ccff00] text-sm md:text-base font-medium">
                  {exp.duration}
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-white font-medium text-lg">
                  {exp.role}
                </p>
                <p className="text-gray-400 text-sm">
                  {exp.location}
                </p>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                    <span className="text-[#ccff00] mt-1.5 text-xs">■</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Leadership Section */}
      <div className="w-full max-w-5xl mx-auto mt-12 md:mt-16">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Leadership</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <h4 className="text-white font-bold text-lg mb-2">Technical Head — Data Oracle Club</h4>
            <p className="text-gray-400 text-sm mb-3">2023–2025</p>
            <p className="text-gray-300 text-sm">Led technical sessions and hands-on workshops covering programming, data analytics, and problem-solving.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <h4 className="text-white font-bold text-lg mb-2">Technical Head — D'FESTA</h4>
            <p className="text-gray-400 text-sm mb-3">2023–2025</p>
            <p className="text-gray-300 text-sm">Led technical events and coordinated with students and organizers to ensure successful execution of technical programs.</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Experience;