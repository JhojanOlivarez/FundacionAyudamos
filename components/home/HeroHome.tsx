import React, { useState, useEffect } from 'react';
import { Container, Title, Button, Text, Box } from "@mantine/core";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import classes from "./HeroHome.module.css";

function HeroHome() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const [scrollY, setScrollY] = useState(0);

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
    <Box className={classes.hero} ref={ref}>
      <motion.div 
        className={classes.overlay}
        style={{ 
          opacity: 1 - scrollY / 500,
          background: `linear-gradient(180deg, 
            rgba(0, 0, 0, ${0.2 + scrollY / 1000}) 0%, 
            rgba(0, 0, 0, ${0.7 + scrollY / 1000}) 100%)`
        }}
      />
      <Container size="lg" className={classes.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants}>
            <Title className={classes.title}>
              Ayudar Depende De Todos
            </Title>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Text className={classes.description}>
              En nuestra fundación, creemos que cada persona tiene el poder de hacer una diferencia positiva en el mundo. Únete a nosotros y sé parte del cambio que quieres ver. Tu apoyo nos permite llevar esperanza y ayuda a quienes más lo necesitan.
            </Text>
          </motion.div>
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
                size="xl"
                radius="xl"
                className={classes.control}
              >
                Quiero Ayudar
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
      <motion.div 
        className={classes.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span>Scroll</span>
      </motion.div>
    </Box>
  );
}

export default HeroHome;