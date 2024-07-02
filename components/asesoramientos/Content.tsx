import React from 'react';
import { Container, Title, Text, Paper, Box, SimpleGrid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { useIntersection } from '@mantine/hooks';
import classes from './Conten.module.css';
import { IconInfoCircle, IconBook, IconScale, IconBriefcase, IconUsers, IconHeart } from '@tabler/icons-react';

interface MissionPoint {
  icon: React.ElementType;
  title: string;
  text: string;
  color: string;
}

const missionPoints: MissionPoint[] = [
  {
    icon: IconInfoCircle,
    title: "Acceso a la Información",
    text: "Proporcionamos recursos claros y accesibles sobre temas relevantes para las comunidades.",
    color: '#FF6B6B'
  },
  {
    icon: IconBook,
    title: "Capacitación y Desarrollo",
    text: "Ofrecemos talleres educativos que abordan una amplia gama de temas para fortalecer capacidades.",
    color: '#4ECDC4'
  },
  {
    icon: IconScale,
    title: "Asesoramiento Legal",
    text: "Brindamos orientación experta y soluciones prácticas para una variedad de problemas legales.",
    color: '#45B7D1'
  },
  {
    icon: IconBriefcase,
    title: "Consultoría Estratégica",
    text: "Trabajamos con emprendedores y empresas locales para desarrollar estrategias de impacto positivo.",
    color: '#FFA07A'
  },
  {
    icon: IconUsers,
    title: "Colaboración Intersectorial",
    text: "Aprovechamos el poder de la colaboración para asegurar un impacto positivo y duradero.",
    color: '#98D8C8'
  },
  {
    icon: IconHeart,
    title: "Compromiso Comunitario",
    text: "Fomentamos la participación activa y el empoderamiento de las comunidades en su propio desarrollo.",
    color: '#FF9FF3'
  }
];

const MissionCard: React.FC<MissionPoint & { index: number }> = ({ icon: Icon, title, text, color, index }) => {
  const { ref, entry } = useIntersection({
    threshold: 0.5,
    rootMargin: '0px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={entry?.isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Paper
        shadow="md"
        p="xl"
        radius="lg"
        className={classes.missionCard}
      >
        <div>
          <Icon size={72} stroke={1.5} className={classes.missionIcon} style={{ color }} />
          <Title order={3} className={classes.missionTitle}>{title}</Title>
          <Text size="sm" className={classes.missionText}>{text}</Text>
        </div>
        <div className={classes.missionGradient} style={{ background: `linear-gradient(90deg, ${color} 0%, rgba(255,255,255,0) 100%)` }} />
      </Paper>
    </motion.div>
  );
};

const ECFMission: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Box className={classes.wrapper}>
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title className={classes.mainTitle}>
            Nuestra Misión en ECF Asesoramientos
          </Title>
        </motion.div>

        <Text className={classes.subtitle}>
          En ECF Asesoramientos, nos dedicamos a transformar vidas y fortalecer comunidades a través de acciones concretas y asesoramiento experto. Nuestra misión se sustenta en seis pilares fundamentales:
        </Text>

        <SimpleGrid 
          cols={isMobile ? 1 : 2}
          spacing={isMobile ? "md" : "xl"}
          className={classes.missionGrid}
        >
          {missionPoints.map((point, index) => (
            <MissionCard key={index} {...point} index={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ECFMission;
