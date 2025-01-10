"use client";
import React, { useState } from "react";
import {
  //   Activity,
  BookOpen,
  Briefcase,
  Code,
  FileText,
  MessageCircle,
  Mail,
  //   Award,
  ChevronDown,
  //   ExternalLink,
  Terminal,
  GraduationCap,
  Book,
  Menu,
  //   Laptop,
  //   FlaskConical,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [expandedCards, setExpandedCards] = useState<{
    [key: string]: boolean;
  }>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const skills = {
    languages: ["C++", "Python", "HTML", "CSS", "JavaScript"],
    ml: [
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "Transformers",
      "LangChain",
      "scikit-learn",
      "NLTK",
    ],
    databases: ["MongoDB", "SQL", "ClickHouse", "MongoDB Atlas"],
    frameworks: [
      "ReactJS",
      "ExpressJS",
      "Node.js",
      "Socket IO",
      "Bootstrap 5",
      "REST APIs",
      "Chakra UI",
      "WordPress",
    ],
    tools: ["VSCode", "PyCharm", "GitHub"],
  };

  const experience = [
    {
      id: "iitpatna",
      title: "Senior AI Researcher",
      company: "AI-NLP-ML Research Lab IIT Patna",
      date: "July 2024 - Present",
      details: [
        "Led development of CultSportQA benchmark with 94% accuracy in cultural bias detection",
        "Implemented novel fine-tuning pipelines improving cross-cultural understanding by 8.5%",
        "Pioneered RCMS approach reducing summarization time by 40%",
        "Enhanced model performance by 18% through innovative few-shot learning",
      ],
    },
    {
      id: "aiinternship",
      title: "Computer Vision/ML Full Stack Developer",
      company: "Hum1AI",
      date: "Dec 2024 - Present",
      details: [
        "Built Meta human avatar flows and machine learning workflows for LLM projects across AWS, NVIDIA, and GCP platforms",
        "Fine-tuned models on domain-specific data, integrated function calling, and customized workflows to enhance model performance",
        "Worked with Hum1AI ML platform to build visualization tools and streamline the MLOps pipeline for large-scale AI projects",
        "Implemented best MLOps practices, ensuring automation, data privacy, scalability, and system validation for efficient production deployment",
      ],
    },
    {
      id: "airesearcher",
      title: "AI Researcher",
      company: "AI-NLP-ML Research Lab IIT Patna",
      date: "January 2024 - July 2024",
      details: [
        "Developed the MMRSUM dataset with 2000+ annotated threads, leading to a 12% improvement in multimodal summarization accuracy",
        "Enhanced model performance by 18% using few-shot learning and optimized chain-of-thought prompting techniques",
        "Contributed to multimodal research by creating novel techniques and frameworks for effective data handling and model training",
        "Led collaboration with senior researchers to publish findings and integrate improvements into state-of-the-art systems",
      ],
    },

    {
      id: "appsmagnet",
      title: "Backend Developer & AI Researcher",
      company: "Apps Magnet Mumbai",
      date: "July 2023 - December 2023",
      details: [
        "Reduced data processing time by 65% through optimized API integration",
        "Improved article summarization accuracy by 25%",
        "Achieved 92% user satisfaction rate in image generation",
      ],
    },
  ];

  const research = [
    {
      id: "cultsportqa",
      title:
        "CultSportQA: A Benchmark for Addressing Cultural Bias in LLMs and VLMs Through Regional Sports Knowledge",
      date: "August 2024 - October 2024",
      conference:
        "Submitted to 47th European Conference On Information Retrieval (ECIR 2025)",
      details: [
        "Created 40,000+ multilingual MCQs on culturally-specific sports for LLM/VLM evaluation",
        "Fine-tuned state-of-the-art VLMs/LLMs using few-shot and chain-of-thought techniques",
        "Achieved significant improvements in cultural bias detection and cross-cultural understanding",
      ],
    },
    {
      id: "multimodal",
      title:
        "Beyond Text: Unlocking Multimodal Magic: Unveiling the Power of Multimodal Discourse Summarization",
      date: "May 2024 - July 2024",
      conference:
        "Submitted to 31st International Conference on Computational Linguistics (COLING 2025)",
      details: [
        "Developed MMRSUM/HMMRSUM datasets for multimodal and code-mixed summarization",
        "Engineered RCMS approach, outperforming benchmarks by 6%",
        "Pioneered innovative approaches in multimodal discourse summarization",
      ],
    },
    {
      id: "food_recognition",
      title:
        "Assessing Various Vision-Language Model Performances for Food Recognition and Recipe Generation",
      date: "June 2024",
      conference:
        "Submitted to International Research Journal of Multidisciplinary Technovation (IRJMT 2024)",
      details: [
        "Evaluated 5 VLMs using zero-shot prompting for food tasks",
        "Identified domain-specific fine-tuning needs for culinary applications",
      ],
    },
    {
      id: "affective_computing",
      title:
        "Affective Computing Through IoT, Sensors, and Other Wearable Devices",
      date: "May 2024",
      details: [
        "Developing real-time emotion detection using IoT wearables and embedded sensors",
        "Architecting AI models for privacy-preserving, personalized mental health analytics",
      ],
    },
    {
      id: "smart_bins",
      title:
        "Smart Bins, Smarter Cities: IoT-Driven Waste Collection with Real-Time Sensing and Methane Mapping",
      date: "April 2024",
      conference:
        "Submitted to International Research Journal of Multidisciplinary Technovation (IRJMT 2024)",
      details: [
        "Optimized collection routes using IoT sensors, reducing trucks by 20%",
        "Implemented real-time methane mapping for targeted waste management",
      ],
    },
    {
      id: "timeline_insights",
      title:
        "Timely Insights: Leveraging LLMs for Timeline Driven Meeting Summarization",
      date: "March 2024 - May 2024",
      conference:
        "Submitted to 31st International Conference on Computational Linguistics (COLING 2025)",
      details: [
        "Implemented novel chunking and knowledge graph integration for TLMS",
        "Evaluated 7 LLMs on timeline-based summarization tasks",
      ],
    },
    {
      id: "botland",
      title: "BotLand: Tailoring LLaMA Language Model for Customised Chat",
      date: "March 2024",
      conference:
        "Published in Third International Conference on Networking, Communication and Computing Technology (NCCT 2024)",
      details: [
        "Integrated LLM-based generation with advanced information retrieval",
        "Developed adaptive user interface for iterative refinement",
      ],
    },
    {
      id: "education_llm",
      title:
        "Exploring the Efficacy of Large Language Models in the Educational Domain: An Empirical Study",
      date: "January 2024 - March 2024",
      details: [
        "Critically evaluated 5 different LLMs on various education tasks such as text generation, Classification, Grammatical error correction, and Automatic Essay Grading utilizing 6 different datasets",
        "Implemented few-shot learning and chain-of-thought prompting for enhanced performance",
      ],
    },
  ];

  const projects = [
    {
      id: "smart-bins-project",
      title: "Smart Bins: IoT-Enabled Waste Management",
      date: "May 2024",
      details: [
        "Decreased collection costs by 35% through real-time monitoring",
        "Optimized routes resulting in 20% reduction in carbon emissions",
        "Implemented comprehensive IoT sensor network",
      ],
      technologies: ["IoT", "Python", "Real-time Analytics"],
    },
    {
      id: "voice-assistant",
      title: "AI Voice Assistant for Developers",
      date: "April 2024",
      details: [
        "Integrated multi-modal task execution reducing development time by 40%",
        "Achieved 85% accuracy in voice command interpretation",
        "Implemented advanced natural language understanding",
      ],
      technologies: ["Python", "NLP", "Speech Recognition"],
    },
    {
      id: "botland",
      title: "BotLand: Advanced Conversational AI Platform",
      date: "March 2024",
      details: [
        "Achieved 45% improvement in response relevancy through custom NLP pipeline",
        "Reduced API latency by 60% through optimized prompt engineering",
      ],
      technologies: ["NLP", "Python", "API Optimization"],
    },
    {
      id: "medibuddy",
      title: "Medibuddy: AI-Driven Medical Data Extraction",
      date: "February 2024",
      details: [
        "Developed OCR/NLP pipeline with 92% accuracy in medical data extraction",
        "Reduced manual data entry time by 75% through automated processing",
      ],
      technologies: ["OCR", "NLP", "Python"],
    },
    {
      id: "scinexus",
      title: "SciNexus: Open-Source Project Matchmaking Platform",
      date: "January 2024",
      details: [
        "Developed MERN-stack platform for open-source project matchmaking",
        "Leveraged NASA dataset for scientific collaboration marketplace",
      ],
      technologies: ["MERN", "JavaScript", "NASA Dataset"],
    },
    {
      id: "connect",
      title: "Connect: Real-time Communication Platform",
      date: "December 2023",
      details: [
        "Built real-time communication platform using Socket.io and MongoDB",
        "Implemented end-to-end encryption for secure data transmission",
      ],
      technologies: ["Socket.io", "MongoDB", "Encryption"],
    },
  ];

  const renderSkillSection = (title: string, items: string[]) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item} variant="secondary" className="text-sm">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Made responsive */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-8 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Hrushik Mehta</h1>
          <h2 className="text-xl md:text-2xl mb-6">
            AI Researcher & ML Full Stack Developer
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hrushikmehta22@gmail.com"
              className="flex items-center space-x-2 hover:text-blue-200"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hrushik-mehta-668a9221b/"
              className="flex items-center space-x-2 hover:text-blue-200"
            >
              <MessageCircle size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/hrushh22"
              className="flex items-center space-x-2 hover:text-blue-200"
            >
              <Code size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          {/* Mobile Menu Button */}
          <div className="md:hidden py-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-2"
            >
              <Menu size={24} />
              <span>Menu</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 py-4">
              {[
                { id: "about", icon: FileText, label: "About" },
                { id: "experience", icon: Briefcase, label: "Experience" },
                { id: "research", icon: BookOpen, label: "Publications" },
                { id: "projects", icon: Terminal, label: "Projects" },
                { id: "skills", icon: Code, label: "Skills" },
              ].map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveSection(id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors w-full md:w-auto ${
                    activeSection === id
                      ? "bg-blue-100 text-blue-800"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Made responsive */}
      <main className="container mx-auto px-4 py-6 md:py-12">
        {/* About Section */}
        <section
          className={`space-y-4 md:space-y-8 ${
            activeSection === "about" ? "" : "hidden"
          }`}
        >
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent className="text-sm md:text-base">
              {/* eslint-disable react/no-unescaped-entities */}
              <p className="text-gray-600 leading-relaxed">
                I'm an AI Researcher and ML Full Stack Developer with a focus on
                natural language processing, computer vision, and multimodal AI
                systems. Currently pursuing my B.Tech in Artificial Intelligence
                and Data Science at Dwarkadas J. Sanghvi College of Engineering,
                I've contributed to cutting-edge research in cultural bias
                detection, multimodal summarization, and educational AI
                applications.
              </p>
              {/* eslint-disable react/no-unescaped-entities */}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <GraduationCap size={24} />
                <CardTitle>Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    Dwarkadas J. Sanghvi College Of Engineering
                  </h3>
                  <p className="text-gray-600">
                    B.Tech in Artificial Intelligence and Data Science
                  </p>
                  <p className="text-gray-500">2021 – 2025 | CGPA: 7.46</p>
                  <p className="text-gray-600">
                    Minors in Industry 4.0 & IoT | CGPA: 8.00
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section
          className={`space-y-4 md:space-y-6 ${
            activeSection === "experience" ? "" : "hidden"
          }`}
        >
          {experience.map((job) => (
            <Card key={job.id} className="w-full">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">
                  {job.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {job.company} | {job.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 md:pl-6 space-y-2 text-sm md:text-base">
                  {job.details.map((detail, index) => (
                    <li key={index} className="text-gray-600">
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Research Section */}
        <section
          className={`space-y-4 md:space-y-6 ${
            activeSection === "research" ? "" : "hidden"
          }`}
        >
          <div className="mb-4 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center">
              <Book className="mr-2" />
              Publications & Research
            </h2>
          </div>
          {research.map((project) => (
            <Card key={project.id}>
              <CardHeader
                className="cursor-pointer"
                onClick={() => toggleCard(project.id)}
              >
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg md:text-xl">
                    {project.title}
                  </CardTitle>
                  <ChevronDown
                    className={`transform transition-transform ${
                      expandedCards[project.id] ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <CardDescription className="text-sm">
                  {project.date}
                  {project.conference && (
                    <span className="block md:inline md:ml-2">
                      | {project.conference}
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              {expandedCards[project.id] && (
                <CardContent>
                  <ul className="list-disc pl-4 md:pl-6 space-y-2 text-sm md:text-base">
                    {project.details.map((detail, index) => (
                      <li key={index} className="text-gray-600">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </section>

        {/* Projects Section */}
        <section
          className={`space-y-6 ${
            activeSection === "projects" ? "" : "hidden"
          }`}
        >
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  {project.details.map((detail, index) => (
                    <li key={index} className="text-gray-600">
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Skills Section */}
        <section className={`${activeSection === "skills" ? "" : "hidden"}`}>
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              {renderSkillSection("Programming Languages", skills.languages)}
              {renderSkillSection("Machine Learning & AI", skills.ml)}
              {renderSkillSection("Databases", skills.databases)}
              {renderSkillSection("Frameworks & Libraries", skills.frameworks)}
              {renderSkillSection("Tools & Technologies", skills.tools)}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
