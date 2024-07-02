'use client';
import React, { useState } from 'react';
import { Container, Title, Text, Button, Modal, Image, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import classes from './HeroSalud.module.css';
import logo from '../../assets/LogoEmpowering.avif';

export function HeroSalud() {
  const [opened, setOpened] = useState(false);

  const handleRegisterClick = () => {
    setOpened(true);
  };

  return (
    <Box className={classes.root}>
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={classes.inner}
        >
          <div className={classes.content}>
            <Title className={classes.title}>
              <Text component="span" inherit variant="gradient" gradient={{ from: 'yellow', to: 'yellow' }}>ECF </Text> 
              <Text component="span" inherit variant="gradient" gradient={{ from: 'blue', to: 'blue' }}>Ayuda tu Salud</Text>
            </Title>
            <Text className={classes.description} mt={30}>
              Promoveremos el acceso equitativo a servicios médicos y prácticas saludables mediante campañas de prevención, acceso a consultas médicas y programas de educación en salud.
            </Text>
            <Button
              variant="gradient"
              gradient={{ from: 'blue', to: 'blue' }}
              size="xl"
              className={classes.control}
              mt={40}
              onClick={handleRegisterClick}
            >
              Quiero Asesoría
            </Button>
          </div>
        </motion.div>
      </Container>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <Text
            size="xl"
            className={classes.modalTitle}
          >
            ¡Bienvenido a ECF Ayuda tu Salud!
          </Text>
        }
        centered
        size="lg"
        padding="xl"
        className={classes.modal}
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.modalContent}
        >
          <Image src={logo} alt="Logo" className={classes.logo} />
          <Text
            size="lg"
            className={classes.modalText}
          >
            Estamos encantados de tenerte aquí. Nuestra misión es promover el acceso equitativo a servicios médicos y prácticas saludables.
          </Text>
          <Button
            variant="gradient"
            gradient={{ from: 'blue', to: 'blue' }}
            size="md"
            radius="xl"
            className={classes.modalButton}
          >
            Solicitar Asesoría
          </Button>
        </motion.div>
      </Modal>
    </Box>
  );
}

export default HeroSalud;
