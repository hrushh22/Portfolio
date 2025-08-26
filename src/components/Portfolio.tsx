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
      title: "AI Researcher",
      company: "AI-NLP-ML Research Lab, IIT Patna",
      date: "Jan 2024 – July 2025",
      details: [
        "Developed multimodal summarization framework processing 7,130 Reddit discussion threads, improving SOTA performance by 6% on ROUGE and BERTScore metrics.",
        "Built timeline-based knowledge graph system for meeting summarization, achieving a 19% improvement on ROUGE-1 scores over baseline models, using REBEL-driven knowledge extraction.,
        "Benchmarked six instruction-tuned LLMs across educational datasets, identifying 21% performance gains through Chain-of-Thought prompting techniques for virtual tutoring applications.",
      ],
    },
    {
      id: "aiinternship",
      title: "Computer Vision/ML Full Stack Developer",
      company: "Hum1AI",
      date: "Dec 2024 - May 2025",
      details: [
        "Designed MetaHuman avatar generation pipeline on AWS/NVIDIA infrastructure, reducing production deployment time by 40% for production applications.",
        "Fine-tuned domain-specific LLMs with custom datasets, implemented function-calling and plugin-based visualization tools for data analysis workflows.",
        "Built end-to-end MLOps pipelines with automated model validation, ensuring reproducibility and 99.5% uptime of model deployments across development environments.",
      ],
    },

    {
      id: "appsmagnet",
      title: "Backend Developer & AI Researcher",
      company: "Apps Magnet",
      date: "July 2023 - Dec 2023",
      details: [
        "Reduced Facebook/Google Ads data processing pipeline latency by 65% through optimized API integrations and caching strategies for client analytics dashboard.",
        "Enhanced article summarization system accuracy by 25% using custom NLP pipelines with spaCy and NLTK, processing 10K+ articles daily for content aggregation platform.",
        "Implemented AI-powered image generation features using DALL-E integration, achieving 92% user satisfaction in A/B testing with 500+ users.",
      ],
    },
  ];

  const research = [
    {
      id: "multimodal",
      title:
        "From Conversations to Insights: A Multimodal Approach to Discussion Summarization",
      date: "May 2025 – July 2025",
      conference:
        "Accepted at The 19th International Conference on Document Analysis and Recognition (ICDAR 2025).",
      details: [
        "Introduced MMRSUM and HMMRSUM datasets (7,130 Reddit threads) and proposed RCMS, a five-stage summarization pipeline that outperformed SOTA models by up to 6% on ROUGE and BERTScore.",
        "Integrated CLIPScore-based relevance ranking to prioritize user comments, enriching summary quality with context-aware perspectives.",
      ],
    },
    {
      id: "food_recognition",
      title:
        "Evaluation of VLMs for Cross-Modal Culinary Tasks: Food Recognition and Recipe Generation",
      date: "January 2025 - March 2025",
      conference:
        "Accepted at The 16th International IEEE Conference on Computing, Communication and Networking Technologies (ICCCNT 2025).",
      details: [
       "Identified a negative correlation (r = −0.79) between recipe complexity and model performance, emphasizing the need for domain-specific fine-tuning in culinary AI.",
       "Evaluated 5 VLMs using Zero-Shot, One-Shot and Few-Shot methods",
      ],
    },
    
    {
      id: "smart_bins",
      title:
        "Smart Bins, Smarter Cities: IoT-Driven Waste Collection with Real-Time Sensing and Methane Mapping",
      date: "June 2024 - August 2024",
      conference:
        "Accepted at Mathematical Modelling of Engineering Problems (MMEP) journal, IIETA.",
      details: [
        "Developed TrashTech, an IoT-based smart bin system with methane and odor sensing, achieving 20% truck reduction and 12.2 tonnes CO2e annual savings per zone through real-time route optimization.",
        "Mapped real-time odor and methane levels to generate actionable pickup heatmaps and dynamic driver navigation using React Native mobile interface.",
      ],
    },
    {
      id: "timeline_insights",
      title:
        "Zero-knowledge Enhanced Adaptation Learning (ZEAL): A Framework for Verifiable Model Adaptation",
      date: "March 2025 - May 2025",
      conference:
        "Accepted at the 9th International Conference on Inventive Communication and Computational Technologies (ICICCT 2025).",
      details: [
        "Developed ZEAL framework using Zero-knowledge proofs and KZG polynomial commitments for verifiable GPT-2 model adaptation, achieving 46.2% loss reduction with 84.44-second proof generation and 0.303 compression ratio.",
        "Implemented privacy-preserving verification system producing 124,503 commitments with average polynomial degree 10.0, enabling secure model adaptation without exposing proprietary parameters or training data.",
      ],
    },
    {
      id: "botland",
      title: "BotLand: Tailoring LLaMA Language Model for Customised Chat",
      date: "April 2024 - June 2024",
      conference:
        "Published in Third International Conference on Networking, Communication and Computing Technology (NCCT 2024)",
      details: [
        "Fine-tuned LLaMA-2 7B with grouped multi-observer attention and KV caching for efficient, domain-adaptive chat; achieved 94.3% validation accuracy and 0.93 F1-score using ICSE-based educational dataset.",
        "Designed an iterative feedback loop with user profiling, improving response personalization in educational settings.",
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
