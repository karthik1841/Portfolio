import React, { useState, useEffect, useRef } from 'react';

const projects = [
  {
    name: 'AI Analytics Copilot',
    title: (
      <>
        AI ANALYTICS <span className="font-light italic text-gray-300 lowercase font-serif">copilot</span><br />
        AUTONOMOUS DATA ANALYST
      </>
    ),
    description: "An AI-powered analytics platform that allows users to upload datasets and provide natural-language instructions. The system automatically profiles datasets, validates data, creates analysis plans, executes analysis using Python/Pandas/NumPy, generates visualizations, and produces comprehensive insights and reports with production-oriented architecture.",
    technologies: "Python, FastAPI, Pandas, NumPy, Scikit-learn, LLMs, React, PostgreSQL, Redis, Docker",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    github: "https://github.com/karthik1841"
  },
  {
    name: 'AI Personal Companion',
    title: (
      <>
        AI PERSONAL<br />
        COMPANION
      </>
    ),
    description: "An AI-powered personal companion designed to understand natural-language conversations, maintain contextual interactions, provide personalized assistance, and support automated task execution. Features LLM-powered conversational interaction, context management, personalized assistance, AI workflows, and tool-based task execution with FastAPI backend and React frontend.",
    technologies: "Python, LLMs, LangChain, FastAPI, React.js, MongoDB",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    github: "https://github.com/karthik1841"
  },
  {
    name: 'AI Agent & Multi-Agent Automation',
    title: (
      <>
        AI AGENT &<br />
        MULTI-AGENT AUTOMATION
      </>
    ),
    description: "A collection of AI agent workflows designed for task decomposition, reasoning, tool-based execution, automation, and multi-agent collaboration. Features AI agents, multi-agent systems, task decomposition, reasoning workflows, tool calling, automated task execution, LLM API integration, structured outputs, and modular agent architecture.",
    technologies: "Python, LangChain, AutoGen, CrewAI, LLM APIs",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
    github: "https://github.com/karthik1841"
  },
  {
    name: 'Crop Prediction Platform',
    title: (
      <>
        CROP PREDICTION &<br />
        YIELD PREDICTION PLATFORM
      </>
    ),
    description: "Machine learning platform for crop recommendation and agricultural yield prediction using soil, weather, environmental, and regional parameters. Features data preprocessing, feature encoding, missing-value handling, model training, model evaluation, prediction, and an interactive Streamlit interface.",
    technologies: "Python, Scikit-learn, Pandas, NumPy, Random Forest, Streamlit",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000&auto=format&fit=crop",
    github: "https://github.com/karthik1841"
  },
  {
    name: 'Plant Disease Detection',
    title: (
      <>
        PLANT DISEASE<br />
        DETECTION SYSTEM
      </>
    ),
    description: "Computer vision application for detecting plant diseases from leaf images using deep learning. Features image classification using Xception and DenseNet121 architectures, disease prediction, and an interactive Streamlit interface for agricultural applications.",
    technologies: "Python, TensorFlow, Keras, Xception, DenseNet121, Streamlit",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop",
    github: "https://github.com/karthik1841"
  },
  {
    name: 'AI-Powered HRMS',
    title: (
      <>
        AI-POWERED<br />
        HRMS PLATFORM
      </>
    ),
    description: "Employee management platform supporting employee records, authentication, role-based access, attendance, and organizational workflows. Built as a full-stack application with React.js frontend, Node.js/Express.js backend, MongoDB/Firebase database, REST APIs, and JWT authentication.",
    technologies: "React.js, Node.js, Express.js, MongoDB/Firebase, REST APIs, JWT",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",
    github: "https://github.com/karthik1841"
  }
];

const Project = () => {
  return (
    <div id="project" className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16">

      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-12 lg:gap-0 mb-20 lg:mb-32">

        {/* Left Giant Title */}
        <div className="w-full lg:w-7/12 overflow-visible">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-3 whitespace-nowrap">
            Selected
            <span className="font-light italic text-gray-300 lowercase font-serif pr-4 pt-2 md:pt-4">work</span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-8">
            AI Engineer and Full Stack Developer building LLM-powered applications, intelligent agents, analytics systems, and production-oriented software.
          </p>
          <a href="https://github.com/karthik1841" target="_blank" rel="noopener noreferrer" className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black font-medium text-xs md:text-sm hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center gap-2">
            GitHub
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Projects List - Alternating Layout */}
      <div className="flex flex-col gap-24 lg:gap-40 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={proj.name} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-12 lg:gap-16 w-full group`}>

              {/* Image Side */}
              <div className="w-full lg:w-6/12 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-sm">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-5/12 flex flex-col items-start">
                <span className="text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-6">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-6">
                  {proj.description}
                </p>
                <p className="text-gray-500 text-xs md:text-sm font-light mb-8">
                  <span className="text-[#ccff00]">Technologies:</span> {proj.technologies}
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="cursor-pointer px-6 py-2.5 rounded-full border border-white/30 text-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2">
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Project;
