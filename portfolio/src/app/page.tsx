import Image from "next/image";
import styles from "./page.module.css";
import Landing from "@/Components/Landing";
import AboutMe from "@/Components/AboutMe";
import SkillsGrid from "@/Components/SkillsGrid";
import Astronaut from "@/Components/Astranaut";
import EducationCard from "@/Components/Educationcard";
import ExperienceTimeline from "@/Components/Experience";
import ContactForm from "@/Components/ContactForm";

export default function Home() {
  return (
    <>
      <Astronaut />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Landing />
        <AboutMe />
        <SkillsGrid />
        <EducationCard />
        <ExperienceTimeline />
        <ContactForm />
      </main>
    </>
  );
}
