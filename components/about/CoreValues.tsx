import React from 'react';
import { Container, Title, Text, Paper, Box, SimpleGrid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { useIntersection } from '@mantine/hooks';
import { IconUserHeart, IconBulb, IconUsers, IconLeaf, IconHeart, IconBook, IconHandLoveYou, IconChartBar } from '@tabler/icons-react';
import styles from './CoreValues.module.css';

interface ValueItem {
  icon: React.ElementType;
  title: string;
  text: string;
  color: string;
}

const values: ValueItem[] = [
  { icon: IconUserHeart, title: 'Integridad', text: 'Actuamos con transparencia y honestidad en todas nuestras acciones.', color: '#FF6B6B' },
  { icon: IconUsers, title: 'Compromiso Social', text: 'Nos dedicamos profundamente a la causa del bienestar comunitario.', color: '#4ECDC4' },
  { icon: IconBulb, title: 'Innovación', text: 'Buscamos constantemente nuevas formas de abordar los desafíos sociales.', color: '#FFD93D' },
  { icon: IconUsers, title: 'Inclusión', text: 'Promovemos la igualdad y el respeto por la diversidad en todas nuestras iniciativas.', color: '#6A5ACD' },
  { icon: IconLeaf, title: 'Sostenibilidad', text: 'Trabajamos para asegurar que nuestros proyectos tengan un impacto positivo y duradero.', color: '#2ECC71' },
  { icon: IconHeart, title: 'Pasión', text: 'Nos apasiona lo que hacemos y nos dedicamos con entusiasmo a nuestra misión.', color: '#FF69B4' },
];

const approaches: ValueItem[] = [
  { icon: IconHandLoveYou, title: 'Colaboración Estratégica', text: 'Establecemos alianzas con ciudadanos, ONG, administraciones públicas, empresas y entidades educativas para maximizar el impacto de nuestros proyectos.', color: '#FF6B6B' },
  { icon: IconBook, title: 'Desarrollo de Capacidades', text: 'Ofrecemos capacitación y recursos a las comunidades para que puedan asumir un papel activo en su propio desarrollo.', color: '#4ECDC4' },
  { icon: IconBulb, title: 'Innovación Social', text: 'Implementamos soluciones innovadoras que abordan problemas complejos de manera eficiente y sostenible.', color: '#FFD93D' },
  { icon: IconChartBar, title: 'Evaluación y Mejora Continua', text: 'Evaluamos continuamente el impacto de nuestros proyectos y ajustamos nuestras estrategias para asegurar resultados óptimos.', color: '#6A5ACD' },
];

const ItemCard: React.FC<ValueItem & { index: number }> = ({ icon: Icon, title, text, color, index }) => {
  const { ref, entry } = useIntersection({
    threshold: 0.2,
    rootMargin: '0px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={entry?.isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Paper className={styles.card}>
        <div className={styles.iconWrapper} style={{ backgroundColor: color }}>
          <Icon size={48} stroke={2} className={styles.icon} />
        </div>
        <div className={styles.cardContent}>
          <Title order={3} className={styles.cardTitle}>{title}</Title>
          <Text className={styles.cardText}>{text}</Text>
        </div>
      </Paper>
    </motion.div>
  );
};

const CoreValues: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Box className={styles.wrapper}>
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title order={1} className={styles.mainTitle}>Nuestros Valores</Title>
        </motion.div>

        <Text className={styles.subtitle}>
          En nuestra empresa, nos guiamos por un conjunto de valores fundamentales que definen quiénes somos y cómo trabajamos:
        </Text>

        <SimpleGrid 
          cols={isMobile ? 1 : 3}
          spacing={isMobile ? "md" : "xl"}
          className={styles.grid}
        >
          {values.map((value, index) => (
            <ItemCard key={index} {...value} index={index} />
          ))}
        </SimpleGrid>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Title order={2} className={styles.sectionTitle}>Nuestro Enfoque</Title>
        </motion.div>

        <Text className={styles.subtitle}>
          Nuestro enfoque se basa en cuatro pilares fundamentales que guían nuestras acciones y estrategias:
        </Text>

        <SimpleGrid 
          cols={isMobile ? 1 : 2}
          spacing={isMobile ? "md" : "xl"}
          className={styles.grid}
        >
          {approaches.map((approach, index) => (
            <ItemCard key={index} {...approach} index={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CoreValues;