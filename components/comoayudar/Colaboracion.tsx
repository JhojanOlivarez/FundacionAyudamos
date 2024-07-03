import React, { useState } from 'react';
import { Container, Title, Text, Grid, Button, Image, Box, Modal, Center, Paper } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight, Phone, Gift, Pill, Apple, ToyBrick } from 'lucide-react';
import styles from './Colaboracion.module.css';
import Logo from '@/assets/LogoEmpowering.avif';

const items = [
  {
    title: 'Donación de Ropa',
    description: 'Ayuda a las personas necesitadas donando ropa en buen estado. Recibimos prendas para todas las edades y estaciones del año.',
    image: '/assets/Comoayudar/DonacionRopa.avif',
    icon: <Gift size={28} />,
    color: '#FF6B6B',
  },
  {
    title: 'Donación de Medicamentos',
    description: 'Colabora con medicamentos que no uses y que estén en buen estado. Aseguramos que lleguen a quienes más los necesitan.',
    image: '/assets/Comoayudar/DonacionMedicamentos.avif',
    icon: <Pill size={28} />,
    color: '#4ECDC4',
  },
  {
    title: 'Donación de Alimentos',
    description: 'Dona alimentos no perecederos para ayudar a combatir el hambre en nuestra comunidad.',
    image: '/assets/Comoayudar/DonationComida.avif',
    icon: <Apple size={28} />,
    color: '#45B7D1',
  },
  {
    title: 'Donación de Juguetes',
    description: 'Trae alegría a los niños donando juguetes nuevos o usados en buen estado.',
    image: '/assets/Comoayudar/DanacionJuguetes.avif',
    icon: <ToyBrick size={28} />,
    color: '#FFA07A',
  },
];

const Colaboracion: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const openModal = (item: string) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/573107686345?text=Quiero%20donar%20a%20${encodeURIComponent(selectedItem || '')}`, '_blank');
  };

  return (
    <div className={styles.wrapper}>
      <Container size="xl" className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title order={1} className={styles.mainTitle}>Colabora con la Comunidad</Title>
          <Text size="lg" className={styles.description}>
            Tu ayuda es fundamental para mejorar la calidad de vida de nuestra comunidad. Aquí tienes algunas maneras en las que puedes colaborar:
          </Text>
        </motion.div>

        <Grid gutter="xl" className={styles.grid}>
          <AnimatePresence>
            {items.map((item, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper className={styles.card} shadow="md">
                    <div className={styles.cardImageWrapper} style={{ backgroundColor: item.color }}>
                      <Image src={item.image} alt={item.title} className={styles.image} />
                      <div className={styles.iconOverlay}>{item.icon}</div>
                    </div>
                    <Box className={styles.cardContent}>
                      <Title order={3} className={styles.cardTitle}>{item.title}</Title>
                      <Text className={styles.cardDescription}>{item.description}</Text>
                      <Center>
                        <Button 
                          className={styles.cardButton} 
                          onClick={() => openModal(item.title)}
                          leftSection={<Heart size={20} />}
                          style={{ backgroundColor: item.color }}
                        >
                          Quiero Donar
                        </Button>
                      </Center>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid.Col>
            ))}
          </AnimatePresence>
        </Grid>

        <Modal
          opened={modalOpen}
          onClose={closeModal}
          title={`¿Quieres donar a ${selectedItem}?`}
          centered
          size="lg"
          classNames={{ title: styles.modalTitle }}
        >
          <Center>
            <Image src={Logo} alt="Logo" className={styles.modalLogo} />
          </Center>
          <Text className={styles.modalText}>
            ¡Muchas gracias por querer ayudar! Serás redirigido a WhatsApp para continuar con tu donación.
          </Text>
          <Button 
            onClick={handleWhatsAppRedirect}
            fullWidth
            className={styles.modalButton}
            leftSection={<Phone size={20} />}
          >
            Ir a WhatsApp
          </Button>
        </Modal>
      </Container>
    </div>
  );
};

export default Colaboracion;