"use client";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaGitAlt, FaNodeJs } from "react-icons/fa";
import { IoLogoReact, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { SecondarySkillsCard } from "../components/SkillsCard";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiLinktree } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { PiFigmaLogo } from "react-icons/pi";
import ScrollWrapper from "../components/ScrollWrapper";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { LinkButton } from "../components/Button";
import { MdEmail } from "react-icons/md";
import { SiCalendly } from "react-icons/si";

export default function About() {
    const router = useRouter()

    return (
        <>
            <section className="flex flex-col w-full h-full gap-2.5">
                <ScrollWrapper direction="left" ease="easeInOut">
                    <div
                        onClick={() => router.back()}
                        className="flex justify-start items-start text-left hover:text-gray-300 cursor-pointer py-3.5 px-5 text-4xl">
                        <FaLongArrowAltLeft />
                    </div>
                </ScrollWrapper>
                <ScrollWrapper direction="fade" ease="circOut">
                    <div className="grid lg:grid-cols-2 grid-cols-1 py-0.5 gap-2.5 px-5">
                        <div className="flex flex-col justify-start gap-1">
                            <h1 className="title-font text-left sm:text-[28px] lg:text-[34px] text-[22px] font-semibold text-white">
                                Hii, I am Safdar Chougle
                            </h1>
                            <p className="leading-relaxed text-left text-lg sm:text-xl lg:text-2xl font-light">
                                I am a frontend-focused full-stack web developer who builds production-ready web applications using modern technologies.
                            </p>
                            <p className="leading-relaxed text-left text-lg sm:text-xl lg:text-2xl font-light">
                                I specialize in creating clean, user-friendly frontends and supporting them with secure authentication, admin dashboards, backend APIs, and well-structured databases.
                            </p>
                            <p className="leading-relaxed text-left text-lg sm:text-xl lg:text-2xl font-light">
                                I enjoy working on real-world problems where I can own features end-to-end and deliver applications that are fully functional, deployed, and ready for users — not just demos.
                            </p>
                            <p className="leading-relaxed text-left text-lg sm:text-xl lg:text-2xl font-light">
                                I am currently open to remote entry-level roles, contract work, or freelance opportunities, where I can contribute, learn, and grow.
                            </p>
                        </div>
                        <div className="flex justify-center items-center py-3">
                            <Image
                                src="/images/my-image.jpg"
                                alt="my-profile"
                                width={300}
                                height={300}
                                loading='eager'
                                unoptimized
                                className="object-cover object-center md:w-[600px] md:h-[500px] rounded-tr-[30px] rounded-bl-[30px] rounded-tl-[15px] rounded-br-[15px]"
                            />
                        </div>
                    </div>
                </ScrollWrapper>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center py-10 px-5 gap-10">
                        <ScrollWrapper direction="fade" ease="easeIn">
                            <h2 className="lg:text-4xl sm:text-3xl text-2xl text-white md:text-center text-left font-medium">SKILLS</h2>
                        </ScrollWrapper>
                        <ScrollWrapper direction="left" ease="easeInOut">
                            <div className="flex flex-col md:gap-14 gap-7 items-center justify-center">
                                <SecondarySkillsCard title={"FrontEnd"} icon1={<RiNextjsFill />} icon2={<IoLogoReact />} icon3={<BiLogoTypescript />} icon4={<RiTailwindCssFill />} />
                                <SecondarySkillsCard title={"Backend"} icon1={<FaNodeJs />} icon2={<SiExpress />} icon3={<SiMongodb />} />
                                <SecondarySkillsCard title={"Tools"} icon1={<IoLogoGithub />} icon2={<FaGitAlt />} icon3={<PiFigmaLogo />} />
                            </div>
                        </ScrollWrapper>
                    </div>
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
                    <ScrollWrapper direction="down" ease="easeOut" >
                        <div className="flex flex-col justify-center py-10 px-5 gap-6">
                            <h2 className="lg:text-4xl sm:text-3xl text-2xl text-white md:text-center text-left font-medium">
                                Contact
                            </h2>
                            <div className="flex flex-wrap md:justify-center justify-start gap-2">
                                <LinkButton href={"mailto:chouglesafdar22@gmail.com"} icon={<MdEmail />} title="Email" hoverTextSize="hover:text-xl" textSize="text-lg" size={40} bgColor="bg-indigo-500" textColor="text-white" hoverTextColor="hover:text-gray-300" hoverBgColor="hover:bg-gray-600" />
                                <LinkButton href={"https://linktr.ee/safdarchougle22"} icon={<SiLinktree />} title="Linktree" hoverTextSize="hover:text-xl" textSize="text-lg" size={40} bgColor="bg-indigo-500" textColor="text-white" hoverTextColor="hover:text-gray-300" hoverBgColor="hover:bg-gray-600" />
                                <LinkButton href={"https://www.linkedin.com/in/safdar-chougle"} icon={<IoLogoLinkedin />} title="LinkedIn" hoverTextSize="hover:text-xl" textSize="text-lg" size={40} bgColor="bg-indigo-500" textColor="text-white" hoverTextColor="hover:text-gray-300" hoverBgColor="hover:bg-gray-600" />
                                <LinkButton href={"https://github.com/chouglesafdar22"} icon={<IoLogoGithub />} title="GitHub" hoverTextSize="hover:text-xl" textSize="text-lg" size={40} bgColor="bg-indigo-500" textColor="text-white" hoverTextColor="hover:text-gray-300" hoverBgColor="hover:bg-gray-600" />
                                <LinkButton href={"https://calendly.com/chouglesafdar22/30min"} icon={<SiCalendly />} title="Schedule Call" hoverTextSize="hover:text-xl" textSize="text-lg" size={40} bgColor="bg-indigo-500" textColor="text-white" hoverTextColor="hover:text-gray-300" hoverBgColor="hover:bg-gray-600" />
                            </div>
                        </div>
                    </ScrollWrapper>
                </div>
            </section>
            <Footer />
        </>
    )
}