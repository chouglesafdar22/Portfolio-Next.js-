"use client"
import { useState } from "react";
import Image from "next/image";
import { Button, IconButton } from "./components/Button";
import { FaGitAlt, FaNodeJs } from "react-icons/fa";
import { IoLogoReact, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import ProjectCard from "./components/ProjectCard";
import SkillsCard from "./components/SkillsCard";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollWrapper from "./components/ScrollWrapper";
import Navbar from "./components/Navbar";
import { SiExpress, SiMongodb, SiLinktree } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { PiFigmaLogo } from "react-icons/pi";
import { FaLaptopCode, FaUserCheck } from "react-icons/fa";
import Link from "next/link";

export default function Home() {

  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* homesection */}
      <ScrollWrapper direction="down" ease="easeOut">
        <section id="home" className="text-gray-400 md:pt-[110px] pt-12 flex w-full">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-0.5 px-5 pb-8 w-full sm:pt-20 pt-16 justify-center">
            <div className="flex justify-center items-center">
              <Image
                src="/images/my-image.jpg"
                alt="my-profile"
                width={300}
                height={300}
                loading='eager'
                unoptimized
                className="mb-6 object-cover object-center md:w-[350px] lg:h-[350px] rounded-tr-[30px] rounded-bl-[30px] rounded-tl-[15px] rounded-br-[15px]"
              />
            </div>
            <div className="flex flex-col justify-items-start gap-2.5">
              <h1 className="title-font text-left sm:text-[28px] lg:text-[34px] text-[22px] font-semibold text-white">Frontend-Focused Full-Stack Web Developer</h1>
              <p className="leading-relaxed text-left text-lg sm:text-xl lg:text-2xl font-light">I build complete, production-ready web applications for startups and small businesses — from clean frontends to authentication, dashboards, APIs, and databases.</p>
              {/* <Link href={"/about"} className="text-blue-700 hover:underline hover:text-gray-400">more</Link> */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-row justify-start gap-4">
                  <Button href={"#contact"} icon={<FaUserCheck />} title="Hire Me" hoverTextSize="hover:text-xl" textSize="text-lg" size={40} bgColor="bg-indigo-500" textColor="text-white" hoverTextColor="hover:text-gray-300" hoverBgColor="hover:bg-gray-600" />
                  <Button href={"#projects"} icon={<FaLaptopCode />} title="Projects" hoverTextSize="hover:text-xl" textSize="text-lg" size={40} bgColor="bg-indigo-500" textColor="text-white" hoverTextColor="hover:text-gray-300" hoverBgColor="hover:bg-gray-600" />
                </div>
                <div className="flex flex-row justify-start gap-4">
                  <IconButton href={"https://www.linkedin.com/in/safdar-chougle"} icon={<IoLogoLinkedin />} hoverTextSize="hover:text-xl" textSize="text-2xl" size={40} bgColor="bg-indigo-500" textColor="text-white" hoverTextColor="hover:text-gray-300" hoverBgColor="hover:bg-gray-600" />
                  <IconButton href={"https://github.com/chouglesafdar22"} icon={<IoLogoGithub />} hoverTextSize="hover:text-xl" textSize="text-2xl" size={40} bgColor="bg-indigo-500" textColor="text-white" hoverTextColor="hover:text-gray-300" hoverBgColor="hover:bg-gray-600" />
                  <IconButton href={"https://linktr.ee/safdarchougle22"} icon={<SiLinktree />} hoverTextSize="hover:text-xl" textSize="text-2xl" size={40} bgColor="bg-indigo-500" textColor="text-white" hoverTextColor="hover:text-gray-300" hoverBgColor="hover:bg-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollWrapper>

      {/* skillsection */}
      <section id="skills" className="text-gray-400 pt-14 flex justify-center w-full">
        <div className="flex flex-col justify-center py-10 px-5 gap-10">
          <ScrollWrapper direction="fade" ease="easeIn">
            <h2 className="lg:text-4xl sm:text-3xl text-2xl text-white md:text-center text-left font-medium">SKILLS</h2>
          </ScrollWrapper>
          <ScrollWrapper direction="left" ease="easeInOut">
            <div className="flex flex-col md:gap-14 gap-7 items-center justify-center">
              <SkillsCard title={"FrontEnd"} icon1={<RiNextjsFill />} icon2={<IoLogoReact />} icon3={<BiLogoTypescript />} icon4={<RiTailwindCssFill />} />
              <SkillsCard title={"Backend"} icon1={<FaNodeJs />} icon2={<SiExpress />} icon3={<SiMongodb />} />
              <SkillsCard title={"Tools"} icon1={<IoLogoGithub />} icon2={<FaGitAlt />} icon3={<PiFigmaLogo />} />
            </div>
          </ScrollWrapper>
        </div>
      </section>

      {/* projectsection */}
      <section id="projects" className="pt-14 flex w-full">
        <div className="container mx-auto flex flex-col justify-center py-12 px-5 gap-6">
          <ScrollWrapper direction="fade" ease="easeIn">
            <h2 className="lg:text-4xl sm:text-3xl text-2xl text-white md:text-center text-left font-medium">PROJECTS</h2>
          </ScrollWrapper>
          <div className="flex items-center w-full flex-wrap justify-center gap-11">
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

      {/* contactsection */}
      <ScrollWrapper direction="down" ease="easeOut" >
        <section id="contact" className="text-gray-400 pt-14 flex w-full">
          <div className="container mx-auto flex flex-col justify-center py-10 px-5 gap-6">
            <h2 className="lg:text-4xl sm:text-3xl text-2xl text-white md:text-center text-left font-medium">LET WORK TOGETHER</h2>
            <p className="leading-relaxed md:text-center text-white text-left text-lg sm:text-xl lg:text-2xl font-light">Have a project idea or need a frontend-focused full-stack web developer?</p>
            <div className="flex justify-center items-center text-center">
              <ContactForm />
            </div>
          </div>
        </section>
      </ScrollWrapper >

      {/* Footer */}
      < Footer />
    </>
  );
}
