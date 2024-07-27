import React from 'react';
import { Container, Title, Text, Box, Button, Popover, SimpleGrid, Group } from '@mantine/core';
import { motion } from 'framer-motion';
import { AiOutlineUserAdd, AiOutlineUpload, AiOutlineClockCircle, AiOutlineBell, AiFillAlert } from 'react-icons/ai';
import styles from './BannerDataSalud.module.css';

const steps = [
  {
    title: 'Regístrate',
    description: 'Crea tu cuenta en Data-Salud.',
    details: 'Accede a una plataforma segura y comienza a gestionar tu información médica.',
    icon: <AiOutlineUserAdd size={50} color="#4CAF50" />,
  },
  {
    title: 'Carga tus Archivos',
    description: 'Sube tus historias clínicas.',
    details: 'Sube todos tus documentos médicos en formato digital.',
    icon: <AiOutlineUpload size={50} color="#2196F3" />,
  },
  {
    title: 'Procesamiento de Datos',
    description: 'Tus datos serán procesados en 24 horas.',
    details: 'Nuestro sistema procesa tus datos de manera segura y eficiente.',
    icon: <AiOutlineClockCircle size={50} color="#FF9800" />,
  },
  {
    title: 'Notificación y Informe',
    description: 'Recibirás el estatus y el informe.',
    details: 'Te notificaremos cuando tu informe esté listo.',
    icon: <AiOutlineBell size={50} color="#F44336" />,
  },
  {
    title: 'Consultas con IA',
    description: 'Consulta con nuestra IA especialista.',
    details: 'Haz preguntas y recibe respuestas de nuestra IA especializada en medicina.',
    icon: <AiFillAlert size={50} color="#9C27B0" />,
  },
];

const DataSaludBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.bannerTitle}
        >
          <Title order={1} className={styles.title}>¡Simplifica tu Historia Médica con Data-Salud!</Title>
          <Text className={styles.description}>
            Sigue estos simples pasos para centralizar y gestionar tu información médica de manera fácil y segura.
          </Text>
        </motion.div>

        <SimpleGrid cols={5} spacing="lg" className={styles.steps}>
          {steps.map((step, index) => (
            <Popover key={index} width={300} position="top" withArrow shadow="md">
              <Popover.Target>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={styles.step}
                >
                  <Box className={styles.iconBox}>
                    {step.icon}
                  </Box>
                  <Title order={4} className={styles.stepTitle}>{step.title}</Title>
                  <Text className={styles.stepDescription}>{step.description}</Text>
                </motion.div>
              </Popover.Target>
              <Popover.Dropdown>
                <Text size="sm">{step.details}</Text>
              </Popover.Dropdown>
            </Popover>
          ))}
        </SimpleGrid>

        <div className={styles.ctaSection}>
          <Button size="lg" className={styles.ctaButton}>
            ¡Comienza Ahora!
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default DataSaludBanner;
