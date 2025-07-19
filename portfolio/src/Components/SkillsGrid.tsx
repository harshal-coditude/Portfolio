"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  LinearProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  SiReact,
  SiRedux,
  SiFirebase,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiGit,
  SiGithub,
  SiDigitalocean,
  SiNextdotjs,
  SiMysql,
  SiFigma,
  SiExpress,
  SiNodedotjs,
  SiMui,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const initialSkills = [
  { name: "React", icon: <SiReact />, rating: 90 },
  { name: "Redux", icon: <SiRedux />, rating: 85 },
  { name: "Firebase", icon: <SiFirebase />, rating: 75 },
  { name: "Flutter", icon: <SiFlutter />, rating: 80 },
  { name: "Material UI", icon: <SiMui />, rating: 70 },
  { name: "HTML", icon: <SiHtml5 />, rating: 95 },
  { name: "CSS", icon: <SiCss3 />, rating: 90 },
  { name: "JavaScript", icon: <SiJavascript />, rating: 88 },
  { name: "Python", icon: <SiPython />, rating: 60 },
  { name: "Java", icon: <FaJava />, rating: 55 },
  { name: "Git", icon: <SiGit />, rating: 80 },
  { name: "GitHub", icon: <SiGithub />, rating: 85 },
  { name: "DigitalOcean", icon: <SiDigitalocean />, rating: 50 },
  { name: "Next.js", icon: <SiNextdotjs />, rating: 78 },
  { name: "MySQL", icon: <SiMysql />, rating: 65 },
  { name: "Figma", icon: <SiFigma />, rating: 70 },
  { name: "Node.js", icon: <SiNodedotjs />, rating: 85 },
  { name: "Express", icon: <SiExpress />, rating: 75 },
];

const SkillsGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [skills, setSkills] = useState(initialSkills);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const i = Math.floor(Math.random() * skills.length);
      let j = Math.floor(Math.random() * skills.length);
      while (i === j) j = Math.floor(Math.random() * skills.length);
      setSkills((prev) => {
        const newSkills = [...prev];
        [newSkills[i], newSkills[j]] = [newSkills[j], newSkills[i]];
        return newSkills;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "transparent",
        minHeight: "100vh",
        pt: 6,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        color="white"
        mb={4}
        textAlign="center"
      >
        Skills
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : "repeat(6, 1fr)",
          gap: 2,
          px: 2,
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            layout
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Box
              sx={{
                width: 120,
                height: 120,
                borderRadius: "10px",
                backgroundColor: "#f5f5f5",
                margin: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: 3,
                cursor: "pointer",
                "&:hover": {
                  boxShadow: 6,
                },
                p: 1.5,
                textAlign: "center",
                position: "relative",
              }}
            >
              <Box sx={{ fontSize: 36, mb: 1, color: "#333" }}>
                {skill.icon}
              </Box>
              <Typography variant="body2" fontWeight={600} color="black">
                {skill.name}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={skill.rating}
                sx={{
                  mt: 1,
                  height: 6,
                  borderRadius: 5,
                  width: "80%",
                  backgroundColor: "#ddd",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              />
              {hoveredIndex === index && (
                <Typography
                  variant="caption"
                  sx={{
                    position: "absolute",
                    bottom: 8,
                    right: 10,
                    fontWeight: 600,
                    fontSize: "12px",
                    color: theme.palette.primary.main,
                    background: "#ffffffdd",
                    px: 0.8,
                    borderRadius: 1,
                  }}
                >
                  {skill.rating}%
                </Typography>
              )}
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default SkillsGrid;
