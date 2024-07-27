import React, { useState } from 'react';
import { Container, Title, Text, Box, SimpleGrid, Image, Button, Modal, CloseButton } from '@mantine/core';
import { motion } from 'framer-motion';
import { useIntersection } from '@mantine/hooks';
import styles from './Content.module.css';

interface AssistanceService {
  title: string;
  text: string;
  image: string;
}

const assistanceServices: AssistanceService[] = [
  {
    title: "Apoyo Emocional y Psicológico",
    text: "Terapias gratuitas, grupos de apoyo, líneas de ayuda emocional disponibles para todas las personas en situación de vulnerabilidad. Estos servicios están diseñados para proporcionar apoyo emocional y psicológico a aquellos que lo necesitan.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpAsistenciaIntegral/ApoyoPsicologico.avif?t=2024-07-27T18%3A48%3A00.817Z",
  },
  {
    title: "Asistencia Alimentaria",
    text: "Bancos de alimentos y programas de nutrición que aseguran el acceso a comidas nutritivas y calientes. Nos enfocamos en garantizar que todas las personas tengan acceso a alimentos básicos y saludables.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpAsistenciaIntegral/Ayudaalimentaria.avif?t=2024-07-27T18%3A48%3A13.174Z",
  },
  {
    title: "Ayuda en Vivienda",
    text: "Apoyo para encontrar vivienda, refugios temporales y asistencia en casos de desalojo. Trabajamos para proporcionar soluciones habitacionales a quienes se enfrentan a la falta de vivienda.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpAsistenciaIntegral/Ayudavivienda.avif?t=2024-07-27T18%3A48%3A29.510Z",
  },
  {
    title: "Asesoramiento Legal",
    text: "Consultas legales gratuitas y talleres sobre derechos laborales y de vivienda. Brindamos orientación y asistencia legal para ayudar a las personas a comprender y ejercer sus derechos.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpAsistenciaIntegral/AsesoramientoLegal.avif?t=2024-07-27T18%3A48%3A42.014Z",
  },
  {
    title: "Educación y Capacitación",
    text: "Programas de alfabetización, cursos de habilidades técnicas y capacitación laboral para mejorar oportunidades de empleo. Nuestro objetivo es empoderar a las personas a través de la educación y el desarrollo de habilidades.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpAsistenciaIntegral/ApoyoEducativo.avif?t=2024-07-27T18%3A48%3A57.605Z",
  },
  {
    title: "Redes de Apoyo y Contacto",
    text: "Eventos comunitarios y redes de colaboración para fortalecer la comunidad y el apoyo mutuo. Fomentamos un sentido de comunidad y colaboración entre los miembros de la comunidad.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpAsistenciaIntegral/Apoyo.avif?t=2024-07-27T18%3A49%3A34.088Z",
  },
];

const AssistanceCard: React.FC<AssistanceService & { index: number, onClick: () => void }> = ({ title, text, image, index, onClick }) => {
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
      <Box className={styles.assistanceCard} onClick={onClick}>
        <Image src={image} alt={title} className={styles.assistanceImage} />
        <Title order={3} className={styles.assistanceTitle}>{title}</Title>
        <Text className={styles.assistanceText}>{text}</Text>
        <Button variant="outline" className={styles.assistanceButton}>Más Información</Button>
      </Box>
    </motion.div>
  );
};

const ECFAssistance: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<AssistanceService | null>(null);

  const handleCardClick = (service: AssistanceService) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleWhatsAppClick = () => {
    if (selectedService) {
      const message = `Hola, quiero saber más sobre ${selectedService.title}. Estoy muy interesado en participar.`;
      window.open(`https://wa.me/3226650405?text=${encodeURIComponent(message)}`, '_blank');
      setModalOpen(false);
    }
  };

  const handleGeneralWhatsAppClick = () => {
    const message = `Hola, quiero ser parte de ECF Asistencia Integral.`;
    window.open(`https://wa.me/3226650405?text=${encodeURIComponent(message)}`, '_blank');
    setModalOpen(false);
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
            Nuestra Misión en ECF Asistencia Integral
          </Title>
        </motion.div>

        <Text className={styles.subtitle}>
          Enfocados en apoyar integralmente a personas en situaciones de vulnerabilidad, cubriendo necesidades básicas y proporcionando herramientas para superar condicionamientos. Nuestro objetivo es fomentar el empoderamiento de derechos y el acceso equitativo a oportunidades, generando redes de apoyo y contactos.
        </Text>

        <SimpleGrid 
          cols={{ base: 1, sm: 2 }} 
          spacing="xl" 
          className={styles.assistanceGrid}
        >
          {assistanceServices.map((service, index) => (
            <AssistanceCard key={index} {...service} index={index} onClick={() => handleCardClick(service)} />
          ))}
        </SimpleGrid>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="blue"
            color="blue"
            size="lg"
            className={styles.generalButton}
            onClick={handleGeneralWhatsAppClick}
          >
            Quiero ECF Asistencia
          </Button>
        </div>
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
    </Box>
  );
};

export default ECFAssistance;
