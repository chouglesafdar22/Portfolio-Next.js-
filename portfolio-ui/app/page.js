"use client"
import { useState } from "react";
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { IoNewspaperOutline, IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { TbBrandLinktree } from "react-icons/tb";
import ProjectCard from "./components/ProjectCard";
import SkillsCard from "./components/SkillsCard";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollWrapper from "./components/ScrollWrapper";

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
    { id: 8, icon: <FaGitAlt /> },
    { id: 9, icon: <IoLogoGithub /> }
  ]

  const openResume = () => {
    window.open("https://drive.google.com/file/d/1gLYqrOAZsgn3dwrJp8D0-NT3NtmzgXHi/view?usp=drive_link", "_blank")
  }

  const openGitHub = () => {
    window.open("https://github.com/chouglesafdar22", "_blank")
  }

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/safdar-chougle-5a080729b/", "_balnk")
  }

  const openLinkTree = () => {
    window.open("https://linktr.ee/safdarchougle22?utm_source=linktree_admin_share", "_blank")
  }

  const moveToHome = () => {
    window.location.hash = "#home"
  }

  const openLink2 = () => {
    window.open("https://drive.google.com/file/d/1YcZDnSNS1TFVXC6_8KiSFUUeIUjTg8J9/view?usp=drive_link", "_blank")
  }

  const openLink3 = () => {
    window.open("https://drive.google.com/file/d/14TEwfDq9rmJyeYrWkGqIjCVkIlmYNhWt/view?usp=drive_link", "_blank")
  }

  return (
    <>
      {/* navbar */}
      <Sidebar />

      {/* homesection */}
      <ScrollWrapper direction="down" ease="easeOut">
        <section id="home" className="text-gray-400">
          <div className="container mx-auto flex px-10 pb-10 sm:pt-20 pt-[70px] text-center items-center justify-center flex-col">
            <Image src="/images/my-image.jpg" alt="my-profile" width={230} height={230} className="lg:w-2/5 md:w-2/5 mb-10 object-cover object-center rounded-full" />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl lg:text-5xl text-3xl mb-4 font-bold font-mono text-white">Safdar Chougle</h1>
              <p className="leading-relaxed text-lg sm:text-xl lg:text-2xl mb-8 font-light font-mono">FrontEnd Developer - Next.js, React.js, Tailwind CSS</p>
              <div className="flex sm:flex-row flex-col justify-center gap-4">
                <Button icon={<IoNewspaperOutline />} onClick={openResume} title="Resume" hoverTextSize="hover:text-xl" textSize="text-lg" size={40} bgColor="bg-indigo-500" hoverTextColor="hover:text-gray-300" textColor="text-white" hoverSize="hover:w-44" hoverBgColor="hover:bg-gray-600" />
                <Button icon={<FaGithub />} onClick={openGitHub} title="GitHub" hoverTextSize="hover:text-xl" textSize="text-lg" size={40} hoverSize="hover:w-44" bgColor="bg-indigo-500" textColor="text-white" hoverTextColor="hover:text-gray-300" hoverBgColor="hover:bg-gray-600" />
                <Button icon={<FaLinkedin />} onClick={openLinkedIn} title="LinkedIn" hoverTextSize="hover:text-xl" textSize="text-lg" size={40} hoverSize="hover:w-44" bgColor="bg-indigo-500" textColor="text-white" hoverTextColor="hover:text-gray-300" hoverBgColor="hover:bg-gray-600" />
                <Button icon={<TbBrandLinktree />} onClick={openLinkTree} size={40} bgColor="bg-indigo-500" title="LinkTree" textColor="text-white" hoverBgColor="hover:bg-gray-600" hoverSize="hover:w-44" hoverTextColor="hover:text-gray-300" textSize="text-lg" hoverTextSize="hover:text-xl" />
              </div>
            </div>
          </div>
        </section>
      </ScrollWrapper>

      {/* aboutsection */}
      <ScrollWrapper direction="down" ease="easeOut">
        <section id="about" className="text-gray-400">
          <div className="container size mx-auto flex flex-col justify-center items-center py-10 px-10 gap-8">
            <h2 className="lg:text-5xl sm:text-4xl text-3xl text-white font-mono font-medium">About</h2>
            <ScrollWrapper direction="right" ease="easeInOut">
              <p className="lg:text-2xl sm:text-xl text-lg font-mono font-normal lg:px-16">
                Hii, I’m Safdar Chougle, a final-year Bachelor of Computer Science student at the University of Mumbai. I specialize in frontend development and have hands-on experience with Next.js, React.js, and Tailwind CSS. I enjoy crafting responsive, clean, and user-friendly web applications that deliver great user experiences.
              </p>
            </ScrollWrapper>
            <ScrollWrapper direction="right" ease="easeInOut">
              <p className="lg:text-2xl sm:text-xl text-lg font-mono font-normal lg:px-16">
                I’m passionate about learning and constantly exploring new tools and technologies to grow as a developer. I’m always open to exciting projects, collaborations, and opportunities where I can contribute, learn, and make an impact. Feel free to connect or explore my work!
              </p>
            </ScrollWrapper>
          </div>
        </section>
      </ScrollWrapper>

      {/* projectsection */}
      <ScrollWrapper direction="up" ease="easeIn">
        <section id="projects">
          <div className=" w-full flex flex-col justify-center items-center py-10 px-10 gap-8">
            <h2 className="lg:text-5xl sm:text-4xl text-3xl text-white font-mono font-medium">Projects</h2>
            <div className="flex items-center xl:justify-center sm:overflow-x-auto w-full sm:flex-row flex-col gap-6">
              <ScrollWrapper direction="down" ease="easeOut">
                <ProjectCard onClick={moveToHome} image="/images/portfolio-nextjs.png" title="Portfolio-Next.js" description="I have built a fully responsive portfolio UI using Next.js to showcase my projects — both completed and upcoming. All buttons and cards are fully functional, and the UI is designed to work smoothly across desktop, tablet, and mobile devices." />
              </ScrollWrapper>
              <ScrollWrapper direction="down" ease="easeOut">
                <ProjectCard onClick={openLink2} image="/images/myTaskPlanner.png" title="myTaskPlanner" description="I created a simple yet efficient MyTaskPlanner UI using React.js, Tailwind CSS, and Vite as a learning project to enhance my front-end development skills. The application features a clean and responsive design aimed at improving task management for users." />
              </ScrollWrapper>
              <ScrollWrapper direction="down" ease="easeOut">
                <ProjectCard onClick={openLink3} image="/images/spotify-ui-clone.png" title="Spotify-UI Clone" description="I built a fully responsive Spotify UI Clone using HTML, CSS, and JavaScript as a learning project to strengthen my front-end development skills. This application is designed to work seamlessly across desktop, tablet, and mobile devices." />
              </ScrollWrapper>
            </div>
          </div>
        </section>
      </ScrollWrapper>

      {/* skillsection */}
      <ScrollWrapper direction="up" ease="easeIn">
        <section id="skills" className="text-gray-400">
          <div className="container mx-auto flex flex-col justify-center items-center py-10 px-10 gap-8">
            <h2 className="lg:text-5xl sm:text-4xl text-3xl text-white font-mono font-medium">Skills</h2>
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

      {/* contactsection */}
      <ScrollWrapper direction="down" ease="easeOut">
        <section id="contact" className="text-gray-400">
          <div className="container mx-auto flex flex-col justify-center items-center py-10 px-10 gap-8">
            <h2 className="lg:text-5xl sm:text-4xl text-3xl text-white font-mono font-medium">Contact</h2>
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
