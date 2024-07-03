import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Image, Title, Text, Button, Container, Modal, TextInput, Textarea, CloseButton, Box, Center } from '@mantine/core';
import styles from './TypesVoluntariado.module.css';
import Logo from '@/assets/LogoEmpowering.avif';

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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCardClick = (opportunity: Opportunity) => {
    setSelectedOpportunity(opportunity);
    setModalOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    const message = `Hola, soy ${formData.name}. Mi email es ${formData.email}. Estoy interesado en el voluntariado de ${selectedOpportunity?.title}. ${formData.message}`;
    window.open(`https://wa.me/573226650405?text=${encodeURIComponent(message)}`, '_blank');
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
            onClick={() => handleCardClick({ title: 'ECF Conecta', description: '', image: '' })}
          >
            Quiero Ser ECF Conecta
          </Button>
        </div>
      </motion.div>

      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title={`¿Quieres pertenecer al voluntariado ${selectedOpportunity?.title}?`}
        centered
        size="md"
        classNames={{ title: styles.modalTitle }}
      >
        <Box className={styles.modalContent}>
          <CloseButton onClick={() => setModalOpen(false)} className={styles.closeButton} />
          <Center>
            <Image src={Logo} alt="Logo" className={styles.modalLogo} />
          </Center>
          <Text className={styles.modalText}>
            En Empowering Communities Foundation, ayudamos a toda nuestra comunidad a crecer en educación. Comunícate a nuestro WhatsApp y te daremos más información.
          </Text>
          <TextInput
            label="Nombre"
            placeholder="Tu nombre"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Email"
            placeholder="Tu email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            label="Mensaje"
            placeholder="¿Por qué quieres ser voluntario?"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button fullWidth className={styles.modalButton} onClick={handleSubmit}>
            Enviar solicitud
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default TypesVoluntariado;
