"use client"
import { useState } from "react";
import Image from "next/image";
import { Button } from "./components/Button";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoGithub } from "react-icons/io5";
import ProjectCard from "./components/ProjectCard";
import SkillsCard from "./components/SkillsCard";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollWrapper from "./components/ScrollWrapper";
import Navbar from "./components/Navbar";
import { SiExpress, SiMongodb } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { PiFigmaLogo } from "react-icons/pi";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null)

  const skillIcons = [
    { id: 1, icon: <IoLogoHtml5 /> },
    { id: 2, icon: <IoLogoCss3 /> },
    { id: 3, icon: < IoLogoJavascript /> },
    { id: 4, icon: <IoLogoReact /> },
    { id: 5, icon: <RiTailwindCssFill /> },
    { id: 6, icon: <RiNextjsFill /> },
    { id: 7, icon: <DiNodejs /> },
    { id: 8, icon: <IoLogoGithub /> },
    { id: 9, icon: <FaGitAlt /> },
    { id: 10, icon: <SiExpress /> },
    { id: 11, icon: <SiMongodb /> },
    { id: 12, icon: <BiLogoTypescript /> },
    { id: 13, icon: <PiFigmaLogo /> }
  ]

  const openMail = () => {
    window.location.href = "#contact"
  };

  const openLinkedIn = () => {
    window.location.href = "#projects"
  };

  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* homesection */}
      <ScrollWrapper direction="down" ease="easeOut">
        <section id="home" className="text-gray-400 pt-10">
          <div className="container mx-auto flex px-10 pb-10 sm:pt-20 pt-[70px] items-center justify-center flex-col">
            <Image src="/images/my-image.jpg" alt="my-profile" width={250} height={250} className="mb-10 object-cover object-center rounded-full" />
            <div className="lg:w-2/3 gap-2 w-full">
              <h1 className="title-font md:text-center text-left sm:text-[28px] lg:text-[34px] text-[22px] mb-4 font-semibold font-mono text-white">Full-Stack MERN Developer building production-ready web applications</h1>
              <p className="leading-relaxed md:text-center text-left text-lg sm:text-xl lg:text-2xl mb-8 font-light font-mono">I build complete web apps — authentication, dashboards, APIs, and databases — for startups and small businesses that need real, working products.</p>
              <div className="flex sm:flex-row flex-col justify-center gap-4">
                <Button onClick={openMail} title="Hire Me" hoverTextSize="hover:text-xl" textSize="text-lg" size={40} bgColor="bg-indigo-500" textColor="text-white" hoverTextColor="hover:text-gray-300" hoverBgColor="hover:bg-gray-600" />
                <Button onClick={openLinkedIn} title="View Projects" hoverTextSize="hover:text-xl" textSize="text-lg" size={40} bgColor="bg-indigo-500" textColor="text-white" hoverTextColor="hover:text-gray-300" hoverBgColor="hover:bg-gray-600" />
              </div>
            </div>
          </div>
        </section>
      </ScrollWrapper>

      {/* aboutsection */}
      <ScrollWrapper direction="down" ease="easeOut">
        <section id="aboutme" className="text-gray-400 pt-10">
          <div className="container size mx-auto flex flex-col justify-center items-center py-10 px-10 gap-8">
            <h2 className="lg:text-4xl sm:text-3xl text-2xl text-white font-mono font-medium">ABOUT ME</h2>
            <ScrollWrapper direction="right" ease="easeInOut">
              <p className="lg:text-2xl sm:text-xl text-lg font-mono font-normal lg:px-16">
                I'm a Full-Stack Web Developer specializing in MERN Stack.
                I focus on building complete, production-ready web applications — including secure authentication, admin dashboards, backend APIs, and database design.
              </p>
            </ScrollWrapper>
            <ScrollWrapper direction="right" ease="easeInOut">
              <p className="lg:text-2xl sm:text-xl text-lg font-mono font-normal lg:px-16">
                I enjoy working on real-world problems where I can own both frontend and backend development and deliver features that actually work, not just demos.
              </p>
            </ScrollWrapper>
            <ScrollWrapper direction="right" ease="easeInOut">
              <p className="lg:text-2xl sm:text-xl text-lg font-mono font-normal lg:px-16">
                I'm currently looking for remote junior roles, contract work, or freelance opportunities where I can contribute & grow.
              </p>
            </ScrollWrapper>
          </div>
        </section>
      </ScrollWrapper>

      {/* skillsection */}
      <ScrollWrapper direction="up" ease="easeIn">
        <section id="skills" className="text-gray-400 pt-10">
          <div className="container mx-auto flex flex-col justify-center items-center py-10 px-10 gap-10">
            <h2 className="lg:text-4xl sm:text-3xl text-2xl text-center text-white font-mono font-medium">SKILLS</h2>

            <ScrollWrapper direction="left" ease="easeInOut">
              <div className="flex flex-wrap gap-14 items-center text-center justify-center ">
                {skillIcons.map((item) => (
                  <SkillsCard
                    key={item.id}
                    icon={item.icon}
                    isActive={activeIndex === item.id}
                    onClick={() => { setActiveIndex(item.id) }}
                  />
                ))}
              </div>
            </ScrollWrapper>
          </div>
        </section>
      </ScrollWrapper>

      {/* projectsection */}
      <ScrollWrapper direction="up" ease="easeIn">
        <section id="projects" className="pt-10">
          <div className=" w-full flex flex-col justify-center items-center py-10 px-10 gap-6">
            <h2 className="lg:text-4xl sm:text-3xl text-2xl text-white font-mono font-medium">PROJECTS</h2>
            <div className="flex items-center xl:justify-center sm:overflow-x-auto w-full sm:flex-row flex-col gap-6">
              <ScrollWrapper direction="down" ease="easeOut">
                <ProjectCard href={"https://github.com/chouglesafdar22/Modern-Ecommerce"} image="/images/modern_ecommerce.png" title="Modern Ecommerce" description="A full-stack e-commerce web application built using the MERN stack. This project focuses on implementing the core structure of an online store with frontend and backend integration. Tech Stack - Next.js / React, Node.js, Express.js, MongoDB, Tailwind CSS." />
              </ScrollWrapper>
              <ScrollWrapper direction="down" ease="easeOut">
                <ProjectCard href={"https://github.com/chouglesafdar22/Portfolio-Next.js-"} image="/images/portfolio-nextjs.png" title="Portfolio-Next.js" description="A personal developer portfolio website built using Next.js to showcase projects, skills, and contact information in a clean and responsive layout. Tech Stack - Next.js, React, Tailwind CSS" />
              </ScrollWrapper>
              <ScrollWrapper direction="down" ease="easeOut">
                <ProjectCard href={"https://github.com/chouglesafdar22/myTaskPlanner"} image="/images/myTaskPlanner.png" title="myTaskPlanner" description="A task planner web application designed to manage daily tasks and improve personal productivity. The application features a clean and responsive design aimed at improving task management for users. Tech Stack - React, Tailwind CSS" />
              </ScrollWrapper>
            </div>
          </div>
        </section>
      </ScrollWrapper>

      {/* contactsection */}
      <ScrollWrapper direction="down" ease="easeOut">
        <section id="contact" className="text-gray-400 pt-10">
          <div className="container mx-auto flex flex-col justify-center items-center py-10 px-10 gap-6">
            <h2 className="lg:text-4xl sm:text-3xl text-2xl text-white font-mono font-medium">LET'S WORK TOGETHER</h2>
            <p className="leading-relaxed md:text-center text-white text-left text-lg sm:text-xl lg:text-2xl font-light font-mono">Have a project idea or need a full-stack web developer?</p>
            <div className="flex justify-center items-center text-center">
              <ContactForm />
            </div>
          </div>
        </section>
      </ScrollWrapper>

      {/* Footer */}
      <Footer />
    </>
  );
}
