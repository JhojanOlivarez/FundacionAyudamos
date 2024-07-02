import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Image, Title, Text, Button, Container, Modal, CloseButton } from '@mantine/core';
import styles from './TypesVoluntariado.module.css';

interface Opportunity {
  title: string;
  description: string;
  image: string;
}

const opportunities: Opportunity[] = [
  {
    title: 'Voluntariado en Educación',
    description: 'Ayuda a mejorar el acceso a la educación en comunidades desfavorecidas a través de tutorías y programas de becas.',
    image: '/assets/voluntariado/VoluntariadoEducacion.avif',
  },
  {
    title: 'Voluntariado en Salud',
    description: 'Participa en campañas de salud y bienestar, proporcionando acceso a consultas médicas y educación en salud.',
    image: '/assets/voluntariado/VoluntariadoSalud.avif',
  },
  {
    title: 'Voluntariado en Asistencia Social',
    description: 'Apoya a personas en situaciones de vulnerabilidad proporcionando asistencia integral y recursos esenciales.',
    image: '/assets/voluntariado/VoluntariadoAsistenciaSocial.avif',
  },
];

const TypesVoluntariado: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);

  const handleCardClick = (opportunity: Opportunity) => {
    setSelectedOpportunity(opportunity);
    setModalOpen(true);
  };

  const handleWhatsAppClick = () => {
    if (selectedOpportunity) {
      const message = `Hola, quiero saber más sobre ${selectedOpportunity.title}. Estoy muy interesado en participar.`;
      window.open(`https://wa.me/3226650405?text=${encodeURIComponent(message)}`, '_blank');
      setModalOpen(false);
    }
  };

  const handleGeneralWhatsAppClick = () => {
    const message = `Hola, quiero ser parte de ECF Conecta en voluntariado.`;
    window.open(`https://wa.me/3226650405?text=${encodeURIComponent(message)}`, '_blank');
    setModalOpen(false);
  };

  return (
    <Container size="lg" className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.header}>
          <motion.h2
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.title}
          >
            Oportunidades de Voluntariado
          </motion.h2>
          <p className={styles.description}>
            Únete a nosotros y marca la diferencia en la vida de las personas a través de nuestras oportunidades de voluntariado.
          </p>
        </div>
        <div className={styles.areas}>
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className={styles.area}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(opportunity)}
            >
              <Card shadow="sm" p="lg" className={styles.card}>
                <Card.Section>
                  <Image src={opportunity.image} alt={opportunity.title} height={200} />
                </Card.Section>
                <Title order={3} className={styles.cardTitle}>{opportunity.title}</Title>
                <Text className={styles.cardDescription}>{opportunity.description}</Text>
                <Button variant="gradient" gradient={{ from: 'red', to: 'yellow' }} className={styles.cardButton}>
                  Participar
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className={styles.generalButtonContainer}>
          <Button
            variant="filled"
            color="green"
            size="lg"
            className={styles.generalButton}
            onClick={handleGeneralWhatsAppClick}
          >
            Quiero Ser ECF Conecta
          </Button>
        </div>
      </motion.div>

      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title={`Quieres pertenecer al voluntariado ${selectedOpportunity?.title}`}
        centered
        size="md"
      >
        <div className={styles.modalContent}>
          <CloseButton onClick={() => setModalOpen(false)} className={styles.closeButton} />
          <img src="/assets/LogoEmpowering.avif" alt="Logo" className={styles.modalLogo} />
          <Text size="md" ta="center">En Empowering Communities Foundation, ayudamos a toda nuestra comunidad a crecer en educación. Comunícate a nuestro WhatsApp y te daremos más información.</Text>
          <Button
            variant="filled"
            color="green"
            onClick={handleWhatsAppClick}
            className={styles.modalButton}
          >
            Contactar por WhatsApp
          </Button>
        </div>
      </Modal>
    </Container>
  );
};

export default TypesVoluntariado;
