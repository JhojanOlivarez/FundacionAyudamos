import React, { useState } from 'react';
import { Container, Title, Text, Grid, Card, Image, Button, Box, Overlay, Center } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineFileSearch, AiOutlineSafety, AiOutlineUser } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import styles from './DataSalud.module.css';
import Logo from '@/assets/LogoEmpowering.avif';

const benefits = [
  {
    title: 'Información Centralizada',
    description: 'Acceso a todos tus registros médicos en un solo lugar.',
    image: '/assets/DataSalud/InformacionCentralizada.avif',
  },
  {
    title: 'Resumen Fácil de Entender',
    description: 'Información médica clara y resumida para una mejor comprensión.',
    image: '/assets/DataSalud/InformesRecomendacion.avif',
  },
  {
    title: 'Seguridad',
    description: 'Tus datos están protegidos con las mejores medidas de seguridad.',
    image: '/assets/DataSalud/ProteccionDatos.avif',
  },
  {
    title: 'Mejor Atención Médica',
    description: 'Facilita el acceso a tu información para una atención médica óptima.',
    image: '/assets/DataSalud/MejorAtencion.avif',
  },
];

const steps = [
  {
    title: 'Paso 1: Recopilación Inicial de Datos',
    description: 'Recolección de Documentos, Digitalización, Ingreso Seguro de Datos, Extracción de Información.',
    image: '/assets/DataSalud/RecopilacionDatos.avif',
    icon: AiOutlineFileSearch,
  },
  {
    title: 'Paso 2: Análisis Preliminar de Datos',
    description: 'Inteligencia Artificial, Búsqueda de Patrones, Detección de Riesgos, Seguimiento de Progreso.',
    image: '/assets/DataSalud/AnalisisPreliminar.avif',
    icon: AiOutlineSafety,
  },
  {
    title: 'Paso 3: Interacción con el Paciente',
    description: 'Entrevista Personalizada, Diálogo Interactivo, Registro Preciso, Validación de Datos.',
    image: '/assets/DataSalud/RecopilacionDatoss.avif',
    icon: AiOutlineUser,
  },
  {
    title: 'Paso 4: Análisis Integral de Datos',
    description: 'Consolidación de Datos, Análisis Avanzado, Predicción y Simulación, Generación de Insights.',
    image: '/assets/DataSalud/AnalisisIntegral.avif',
    icon: AiOutlineFileSearch,
  },
  {
    title: 'Paso 5: Compilación de Informes y Recomendaciones',
    description: 'Generación de Informe, Visualizaciones Interactivas, Recomendaciones Personalizadas, Compartir Seguro.',
    image: '/assets/DataSalud/InformesFaciles.avif',
    icon: AiOutlineSafety,
  },
];

const DataSalud: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={styles.wrapper}>
      <Container size="xl" className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title order={1} className={styles.mainTitle}>
            ¡Simplifica tu Historia Médica con Data-Salud!
          </Title>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Title order={2} className={styles.subTitle}>¿Qué es Data-Salud?</Title>
          <Text className={styles.text}>
            Data-Salud es un sistema innovador que centraliza y simplifica tu historial médico, permitiendo un acceso rápido y seguro a tu información de salud.
          </Text>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Title order={2} className={styles.subTitle}>Beneficios Clave</Title>
          <Grid gutter="xl">
            {benefits.map((benefit, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card shadow="sm" radius="md" className={styles.benefitCard}>
                    <Card.Section>
                      <Image src={benefit.image} alt={benefit.title} height={200} />
                    </Card.Section>
                    <Title order={3} className={styles.cardTitle}>{benefit.title}</Title>
                    <Text className={styles.cardText}>{benefit.description}</Text>
                  </Card>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.processSection}
        >
          <Title order={2} className={styles.subTitle}>¿Cómo Funciona?</Title>
          <Grid gutter="xl" align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image src={steps[activeStep].image} alt={steps[activeStep].title} radius="md" />
                </motion.div>
              </AnimatePresence>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box className={styles.stepInfo}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Title order={3} className={styles.stepTitle}>{steps[activeStep].title}</Title>
                    <Text className={styles.stepDescription}>{steps[activeStep].description}</Text>
                  </motion.div>
                </AnimatePresence>
                <Box className={styles.stepNavigation}>
                  {steps.map((_, index) => (
                    <Button
                      key={index}
                      variant={index === activeStep ? "filled" : "outline"}
                      onClick={() => setActiveStep(index)}
                      className={styles.stepButton}
                    >
                      {index + 1}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Grid.Col>
          </Grid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Box className={styles.ctaSection}>
            <Title order={2} className={styles.ctaTitle}>¡Obtén tu perfil por solo 50,000 pesos!</Title>
            <Button size="xl" className={styles.ctaButton}>Quiero Mi Perfil</Button>
          </Box>
        </motion.div>
      </Container>
    </div>
  );
};

export default DataSalud;