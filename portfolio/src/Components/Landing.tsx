'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TypeAnimation } from 'react-type-animation';
import heroImg from '../../public/hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const skills = ['Flutter_Developer', 'React_Developer', 'Node.js_Developer', 'Java_Developer', 'Next.js_Developer'];


const Landing: React.FC = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
      },
    });

    gsap.from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 90%',
      },
    });
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 4,
        py: 8,
        position: 'relative',
        minHeight: '100vh',
        background: 'transparent',
        color: 'white',
      }}
    >

      {/* Text Section */}
      <Box
        ref={textRef}
        sx={{
          flex: 1,
          zIndex: 2,
          px: 4,
          py: 6,
        }}
      >
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Hey, I'm Harshal 👋
        </Typography>

        
        <Typography variant="h4" fontWeight={400} mb={2}>
          I am 
        </Typography>
        <Box>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            fontFamily: 'monospace',
            whiteSpace: 'pre',
            color: '#00E0FF',
          }}
        >
          <TypeAnimation
            sequence={[
              'Flutter_Developer', 4000,
              '', 500,
              'React_Developer', 4000,
              '', 500,
              'Next.js_Developer', 4000,
              '', 500,
              'Node.js_Developer', 4000,
              '', 500,
              'Java_Developer', 4000,
              '', 500,
            ]}
            speed={50}
            deletionSpeed={30}
            wrapper="span"
            repeat={Infinity}
          />
        </Typography>
        </Box>

        
      </Box>

      {/* Hero Image with Glow & Rotating Text */}
      <Box
  ref={imageRef}
  sx={{
    flex: 1,
    mt: { xs: 6, md: 0 },
    textAlign: 'center',
    transition: 'transform 0.4s ease',
    zIndex: 2,
    '&:hover': {
      transform: 'scale(1.05)',
    },
  }}
>
  <Box
    sx={{
      position: 'relative',
      width: '400px',
      height: '400px',
      margin: 'auto',
      '& .glow-border': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '3px solid #00E0FF',
        boxShadow: '0 0 20px rgba(0, 224, 255, 0.6)',
        animation: 'glowRotate 6s linear infinite',
        zIndex: 1,
      },
      '& .image-wrapper': {
        position: 'absolute',
        top: '8px',
        left: '8px',
        width: '384px',
        height: '384px',
        borderRadius: '50%',
        overflow: 'hidden',
        zIndex: 2,
      },
      '& .image-wrapper img': {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  objectFit: 'cover',
  transform: 'scale(1.1)',
  filter: 'grayscale(100%)',
  transition: 'filter 0.3s ease',
},
'&:hover .image-wrapper img': {
  filter: 'grayscale(0%)',
},

      '@keyframes glowRotate': {
        '0%': {
          transform: 'rotate(0deg)',
          boxShadow: '0 0 20px rgba(32, 10, 238, 0.4)',
        },
        '50%': {
          boxShadow: '0 0 35px rgba(0, 224, 255, 0.9)',
        },
        '100%': {
          transform: 'rotate(360deg)',
          boxShadow: '0 0 20px rgba(0, 224, 255, 0.4)',
        },
      },
      '@keyframes rotateText': {
        '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
        '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
      },
    }}
  >
    <Box className="glow-border" />
    <Box className="image-wrapper">
      <Image src={heroImg} alt="Harshal Hero" />
    </Box>
  </Box>
</Box>

    </Box>
  );
};

export default Landing;
