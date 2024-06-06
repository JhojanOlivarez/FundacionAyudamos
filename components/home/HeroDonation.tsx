import React from 'react';
import { Container, Title, Text, Button } from '@mantine/core';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import classes from './HeroDonation.module.css';

const HeroDonation: React.FC = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <section className={classes.heroSection}>
      <motion.div style={{ y: y1 }} className={classes.imageContainer}>
        <img src="/assets/DonacionHero.avif " alt="Hero Image" className={classes.image} />
        <div className={classes.overlay}></div>
      </motion.div>
      <Container size="lg" className={classes.contentContainer}>
        <Title className={classes.title}>Cada donación ayuda mucho</Title>
        <Text className={classes.subtitle}>Empowering Communities Foundation (ECF)</Text>
        <Button size="lg" radius="md" className={classes.donateButton}>
          DONE AHORA
        </Button>
      </Container>
    </section>
  );
};

export default HeroDonation;
