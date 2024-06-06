import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaBook, FaLightbulb, FaBalanceScale } from 'react-icons/fa';
import styles from './HowWorks.module.css';

const HowWeDo = () => {
  const areas = [
    {
      icon: <FaHandshake />,
      title: 'Colaboración Estratégica',
      description: 'Establecemos alianzas con ciudadanos, ONG, administraciones públicas, empresas y entidades educativas para maximizar el impacto de nuestros proyectos.',
    },
    {
      icon: <FaBook />,
      title: 'Desarrollo de Capacidades',
      description: 'Ofrecemos capacitación y recursos a las comunidades para que puedan asumir un papel activo en su propio desarrollo.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovación Social',
      description: 'Implementamos soluciones innovadoras que abordan problemas complejos de manera eficiente y sostenible.',
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.area}
          >
            <div className={styles.icon}>{area.icon}</div>
            <h3 className={styles.areaTitle}>{area.title}</h3>
            <p className={styles.areaDescription}>{area.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HowWeDo;