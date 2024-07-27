import React, { useState, useEffect } from 'react';
import { Container, Title, Text, Box, Avatar, Card, Group, Button, Transition } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronLeft, IconChevronRight, IconQuote } from '@tabler/icons-react';
import styles from './ECFEducationTestimonials.module.css';

interface Testimony {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  program: string;
  region: string;
}

const testimonies: Testimony[] = [
  {
    id: 1,
    name: "Ana María Gómez",
    role: "Estudiante de Ingeniería",
    image:"https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpEducacion/TestimonioAna.avif?t=2024-07-27T19%3A00%3A36.692Z",
    quote: "Gracias a la beca de ECF Educación, pude cumplir mi sueño de estudiar ingeniería. Su apoyo ha sido fundamental en mi desarrollo académico y personal.",
    program: "Becas Educativas",
    region: "Antioquia"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Emprendedor",
    image:"https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpEducacion/TestimonioCarlos.avif?t=2024-07-27T19%3A00%3A45.203Z",
    quote: "Los cursos de desarrollo personal me dieron las herramientas que necesitaba para lanzar mi propio negocio. Estoy eternamente agradecido con ECF.",
    program: "Cursos de Desarrollo Personal",
    region: "Valle del Cauca"
  },
  {
    id: 3,
    name: "Lucía Martínez",
    role: "Estudiante de Secundaria",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpEducacion/TestimonioLucia.avif?t=2024-07-27T19%3A00%3A52.517Z",
    quote: "El programa de tutorías me ayudó a mejorar mis calificaciones y mi confianza. Ahora me siento preparada para enfrentar cualquier desafío académico.",
    program: "Programas de Tutoría",
    region: "Cundinamarca"
  },
  // Añade más testimonios según sea necesario
];

const ECFEducationTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimony = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
  };

  const prevTestimony = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonies.length) % testimonies.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextTestimony();
    }, 10000); // Cambia automáticamente cada 10 segundos

    return () => clearInterval(intervalId);
  }, []);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  return (
    <Box className={styles.wrapper}>
      <Container size="xl">
        <Title className={styles.title}>Voces de Transformación</Title>
        <Text className={styles.subtitle}>
          Descubre cómo ECF Educación está cambiando vidas en toda Colombia.
        </Text>

        <div className={styles.testimonialContainer}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className={styles.testimonialWrapper}
            >
              <Card className={styles.testimonialCard}>
              
                <Text className={styles.quote}>{testimonies[currentIndex].quote}</Text>
                <Group variant="apart" align="center" className={styles.testimonialFooter}>
                  <Avatar src={testimonies[currentIndex].image} size={100} radius="xl" className={styles.avatar} />
                  <div className={styles.authorInfo}>
                    <Text fw={700} size="lg">{testimonies[currentIndex].name}</Text>
                    <Text size="sm" color="dimmed">{testimonies[currentIndex].role}</Text>
                    <Text size="sm" className={styles.program}>{testimonies[currentIndex].program}</Text>
                    <Text size="xs" className={styles.region}>{testimonies[currentIndex].region}</Text>
                  </div>
                </Group>
              </Card>
            </motion.div>
          </AnimatePresence>

          <Button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevTestimony}>
            <IconChevronLeft size={24} />
          </Button>
          <Button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextTestimony}>
            <IconChevronRight size={24} />
          </Button>
        </div>

        <div className={styles.progressBar}>
          {testimonies.map((_, index) => (
            <div
              key={index}
              className={`${styles.progressDot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </Container>
    </Box>
  );
};

export default ECFEducationTestimonials;