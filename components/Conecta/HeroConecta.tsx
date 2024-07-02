'use client';
import React, { useState } from 'react';
import { Container, Title, Text, Button, Modal, Image, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import classes from './HeroConecta.module.css';
import logo from '../../assets/LogoEmpowering.avif';

export function HeroConecta() {
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
              <Text component="span" inherit variant="gradient" gradient={{ from: 'white', to: 'white' }}>ECF </Text> 
              <Text component="span" inherit variant="gradient" gradient={{ from: 'magenta', to: 'magenta' }}>Conecta</Text>
            </Title>
            <Text className={classes.description} mt={30}>
              Programa de integración social que crea redes de colaboración y apoyo en la comunidad, facilitando acceso a recursos, contactos y oportunidades.
            </Text>
            <Button
              variant="gradient"
              gradient={{ from: 'magenta', to: 'magenta' }}
              size="xl"
              className={classes.control}
              mt={40}
              onClick={handleRegisterClick}
            >
              Quiero Participar
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
            ¡Bienvenido a ECF Conecta!
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
            Estamos encantados de tenerte aquí. Nuestra misión es romper barreras de exclusión social y promover la inclusión y el respeto por la diversidad.
          </Text>
          <Button
            variant="gradient"
            gradient={{ from: 'blue', to: 'magenta' }}
            size="md"
            radius="xl"
            className={classes.modalButton}
          >
            Solicitar Participación
          </Button>
        </motion.div>
      </Modal>
    </Box>
  );
}

export default HeroConecta;
