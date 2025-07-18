'use client';

import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import heroImg from '../../public/hero2.jpg'; // Ensure this image is inside the /public folder

const AboutMe: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        py: 6,
        mt: 4,
        mb: 4,
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        sx={{
          backgroundColor: 'transparent',
          borderRadius: '16px',
          color: '#fff',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: '30px',
          maxWidth: '1000px',
          width: '100%',
          mx: 'auto',
          px: 2,
        }}
      >
        {/* Left Hero Image */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 200 }}
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            width: isMobile ? '100%' : '300px',
            flexShrink: 0,
          }}
        >
          <Image
            src={heroImg}
            alt="About Me"
            width={300}
            height={300}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </motion.div>

        {/* Right Description */}
        <Box
          component={motion.div}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          sx={{
            maxWidth: '700px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            mx: 'auto',
          }}
        >
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
            About Me
          </Typography>

          <Typography variant="body1">
            👋 Hi! I'm Harshal — a passionate full-stack developer who loves to bring ideas to life through clean and scalable code.
          </Typography>

          <Typography variant="body1">
            I specialize in crafting responsive web applications using modern JavaScript frameworks like React and Next.js.
          </Typography>

          <Typography variant="body1">
            Beyond coding, I enjoy exploring new technologies, contributing to open-source, and building side projects that solve real-world problems.
          </Typography>

          <Typography variant="body1">
            In my free time, you'll find me sketching UI ideas, reading tech blogs, or playing chess ♟️.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
