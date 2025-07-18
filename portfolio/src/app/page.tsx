import Image from "next/image";
import styles from "./page.module.css";
import Landing from "@/Components/Landing";
import AboutMe from "@/Components/AboutMe";

export default function Home() {
  return (
    <>
    <Landing/>
    <AboutMe/>
    </>
  );
}
