'use client';
import React, { useState, useEffect } from 'react';
import { Container, Title, Text, Button, Modal, Image, Box } from '@mantine/core';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import classes from './HeroEducacion.module.css';
import logo from '../../assets/LogoEmpowering.avif';

export function HeroEducacion() {
  const [opened, setOpened] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const handleRegisterClick = () => {
    setOpened(true);
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Box className={classes.root} ref={ref}>
      <motion.div 
        className={classes.overlay}
        style={{ 
          opacity: 1 - scrollY / 1000,
        }}
      />
      <Container size="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className={classes.inner}
        >
          <div className={classes.content}>
            <motion.div variants={itemVariants}>
              <Title className={classes.title}>
                <Text component="span" inherit variant="gradient" gradient={{ from: 'white', to: 'white' }}>ECF </Text>
                <Text component="span" inherit variant="gradient" gradient={{ from: 'green', to: 'lime' }}>Educación</Text>
              </Title>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Text className={classes.description} mt={30}>
                Mejora el acceso y la calidad de la educación en comunidades desfavorecidas a través de becas estudiantiles, programas de tutoría y acceso a tecnologías educativas.
              </Text>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="gradient"
                  gradient={{ from: 'green', to: 'lime' }}
                  size="xl"
                  className={classes.control}
                  mt={40}
                  onClick={handleRegisterClick}
                >
                  Quiero Participar
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
      <motion.div 
        className={classes.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span>Scroll</span>
      </motion.div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <Text size="xl" className={classes.modalTitle}>
            ¡Bienvenido a ECF Educación!
          </Text>
        }
        centered
        size="lg"
        padding="xl"
        className={classes.modal}
      >
        <motion.div 
          className={classes.modalContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={logo} alt="Logo" className={classes.logo} />
          <Text size="lg" className={classes.modalText}>
            Estamos encantados de tenerte aquí. Nuestra misión es cerrar la brecha educativa y proporcionar oportunidades a los jóvenes para prosperar.
          </Text>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="gradient"
              gradient={{ from: 'green', to: 'lime' }}
              size="md"
              radius="xl"
              className={classes.modalButton}
            >
              Solicitar Participación
            </Button>
          </motion.div>
        </motion.div>
      </Modal>
    </Box>
  );
}

export default HeroEducacion;
