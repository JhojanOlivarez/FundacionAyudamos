import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaBook, FaLightbulb } from 'react-icons/fa';
import { Button } from '@mantine/core';
import styles from './HowWorks.module.css';

const HowWorks = () => {
  const areas = [
    {
      icon: <FaHandshake />,
      title: 'Colaboración Estratégica',
      description: 'Establecemos alianzas con ciudadanos, ONG, administraciones públicas, empresas y entidades educativas para maximizar el impacto de nuestros proyectos.',
      color: '#fd2000' // Red
    },
    {
      icon: <FaBook />,
      title: 'Desarrollo de Capacidades',
      description: 'Ofrecemos capacitación y recursos a las comunidades para que puedan asumir un papel activo en su propio desarrollo.',
      color: '#ffcc00' // Yellow
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovación Social',
      description: 'Implementamos soluciones innovadoras que abordan problemas complejos de manera eficiente y sostenible.',
      color: '#6599ff' // Blue
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={styles.container}
    >
      <div className={styles.header}>
        <motion.h2
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles.title}
        >
          ¿Cómo lo hacemos?
        </motion.h2>
        <p className={styles.description}>
          En ECF, abordamos los desafíos sociales a través de una metodología integral que incluye:
        </p>
      </div>
      <div className={styles.areas}>
        {areas.map((area, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className={styles.area}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={styles.icon}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.3, rotate: 360 }}
              transition={{ duration: 0.5 }}
              style={{ color: area.color }}
            >
              {area.icon}
            </motion.div>
            <h3 className={styles.areaTitle}>{area.title}</h3>
            <p className={styles.areaDescription}>{area.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <a href="/voluntariado" className={styles.link}>
          <Button
            variant="gradient"
            gradient={{ from: 'red', to: 'red',}}
            size="xl"
            className={styles.joinButton}
          >
            Ser Parte
          </Button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HowWorks;
