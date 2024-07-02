'use client';
import React, { useState } from 'react';
import { Container, Title, Text, Button, Modal, Image, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import classes from './HeroAsesoramientos.module.css';
import logo from '../../assets/LogoEmpowering.avif';

export function HeroAsesoramientos() {
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
              <Text component="span" inherit variant="gradient" gradient={{ from: 'red', to: 'red' }}>ECF </Text> 
              <Text component="span" inherit variant="gradient" gradient={{ from: 'yellow', to: 'yellow' }}>Asesoramientos</Text>
            </Title>
            <Text className={classes.description} mt={30}>
              Nos dedicamos a empoderar comunidades con orientación experta y personalizada. Ofrecemos apoyo legal, impulsamos negocios sociales y organizamos talleres educativos.
            </Text>
            <Button
              variant="gradient"
              gradient={{ from: 'red', to: 'yellow' }}
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
            ¡Bienvenido a ECF Asesoramientos!
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
            Estamos encantados de tenerte aquí. Nuestra misión es proporcionarte la mejor orientación para alcanzar tu máximo potencial.
          </Text>
          <Button
            variant="gradient"
            gradient={{ from: 'red', to: 'yellow' }}
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

export default HeroAsesoramientos;
