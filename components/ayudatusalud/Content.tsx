import React, { useState } from 'react';
import { Container, Title, Text, Box, SimpleGrid, Button, Overlay, Modal, CloseButton } from '@mantine/core';
import { motion } from 'framer-motion';
import { useIntersection } from '@mantine/hooks';
import styles from './Content.module.css';

interface HealthService {
  title: string;
  text: string;
  image: string;
}

const healthServices: HealthService[] = [
  {
    title: "Consultas Médicas Gratuitas",
    text: "Proporcionamos acceso a consultas médicas gratuitas para aquellos que no tienen acceso a servicios de salud. Nuestro equipo de profesionales está disponible para atender una amplia variedad de necesidades médicas, desde chequeos generales hasta atención especializada.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/ECFSalud/ConsultasMedicas.avif?t=2024-07-27T18%3A52%3A01.916Z",
  },
  {
    title: "Campañas de Vacunación",
    text: "Organizamos campañas de vacunación para proteger a la comunidad contra enfermedades prevenibles.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/ECFSalud/Vacunaciones.avif?t=2024-07-27T18%3A52%3A15.808Z",
  },
  {
    title: "Charlas de Educación en Salud",
    text: "Ofrecemos charlas educativas sobre temas de salud y bienestar para mejorar la calidad de vida.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/ECFSalud/CharlasSalud.avif?t=2024-07-27T18%3A52%3A31.216Z",
  },
  {
    title: "Exámenes de Salud Preventivos",
    text: "Realizamos exámenes de salud preventivos para la detección temprana de enfermedades.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/ECFSalud/Examenes.avif?t=2024-07-27T18%3A52%3A40.239Z",
  },
  {
    title: "Terapias Físicas y Rehabilitación",
    text: "Proporcionamos servicios de terapia física y rehabilitación para ayudar en la recuperación de lesiones.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/ECFSalud/Movilidad.avif?t=2024-07-27T18%3A52%3A50.509Z",
  },
  {
    title: "Asesoramiento Nutricional",
    text: "Ofrecemos asesoramiento nutricional para promover una alimentación saludable.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/ECFSalud/Alimentacion.avif?t=2024-07-27T18%3A53%3A08.064Z",
  },
];

const HealthCard: React.FC<HealthService & { index: number, onClick: () => void }> = ({ title, text, image, index, onClick }) => {
  const { ref, entry } = useIntersection({
    threshold: 0.5,
    rootMargin: '0px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={entry?.isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Box className={styles.healthCard} onClick={onClick}>
        <Overlay color="#000" opacity={0.5} zIndex={1} />
        <div className={styles.content}>
          <Title order={3} className={styles.healthTitle}>{title}</Title>
          <Text className={styles.healthText}>{text}</Text>
          <Button variant="light" className={styles.healthButton}>Más Información</Button>
        </div>
        <img src={image} alt={title} className={styles.healthImage} />
      </Box>
    </motion.div>
  );
};

const ECFAyudaSalud: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<HealthService | null>(null);

  const handleCardClick = (service: HealthService) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleWhatsAppClick = () => {
    if (selectedService) {
      const message = `Hola, quiero más información sobre ${selectedService.title}. Estoy muy interesado.`;
      window.open(`https://wa.me/3226650405?text=${encodeURIComponent(message)}`, '_blank');
      setModalOpen(false);
    }
  };

  return (
    <Box className={styles.wrapper}>
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title className={styles.mainTitle}>
            Nuestra Misión en ECF Ayuda Salud
          </Title>
        </motion.div>

        <Text className={styles.subtitle}>
          En ECF Ayuda Salud, nos dedicamos a proporcionar servicios de salud y bienestar a la comunidad. Nuestro objetivo es mejorar la calidad de vida de las personas a través de la educación, la prevención y el acceso a servicios de salud esenciales.
        </Text>

        <SimpleGrid 
          cols={{ base: 1, sm: 1, md: 2 }} 
          spacing="xl" 
          className={styles.healthGrid}
        >
          {healthServices.map((service, index) => (
            <HealthCard key={index} {...service} index={index} onClick={() => handleCardClick(service)} />
          ))}
        </SimpleGrid>
      </Container>

      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title={`Más Información sobre ${selectedService?.title}`}
        centered
        size="md"
    
      >
        <div className={styles.modalContent}>
          <CloseButton onClick={() => setModalOpen(false)} className={styles.closeButton} />
          <img src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/LogoEmpowering.avif" alt="Logo" className={styles.modalLogo} />
          <Text size="md" ta="center">{selectedService?.text}</Text>
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
    </Box>
  );
};

export default ECFAyudaSalud;
