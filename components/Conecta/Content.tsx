import React, { useState } from 'react';
import { Container, Title, Text, Box, SimpleGrid, Button, Modal, CloseButton } from '@mantine/core';
import { motion } from 'framer-motion';
import { useIntersection } from '@mantine/hooks';
import styles from './Content.module.css';

interface ConnectProgram {
  title: string;
  description: string;
  image: string;
}

const connectPrograms: ConnectProgram[] = [
  {
    title: "Redes de Apoyo",
    description: "Creamos redes de apoyo entre la comunidad para fortalecer la colaboración y el apoyo mutuo.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpConecta/RedesApoyo.avif?t=2024-07-27T19%3A07%3A09.379Z",
  },
  {
    title: "Mentorías Personalizadas",
    description: "Ofrecemos programas de mentoría personalizada para el desarrollo personal y profesional.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpConecta/Mentorias.avif",
  },
  {
    title: "Eventos Comunitarios",
    description: "Organizamos eventos comunitarios para promover la integración y el intercambio cultural.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpConecta/Eventos.avif?t=2024-07-27T19%3A07%3A33.691Z",
  },
  {
    title: "Conexión con Empleadores",
    description: "Facilitamos la conexión entre empleadores y personas en busca de empleo, promoviendo oportunidades laborales.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpConecta/Emprendedores.avif?t=2024-07-27T19%3A07%3A52.271Z",
  },
  {
    title: "Plataformas de Desarrollo",
    description: "Ofrecemos acceso a plataformas de desarrollo personal y profesional para mejorar habilidades y conocimientos.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpConecta/Plataformas.avif?t=2024-07-27T19%3A08%3A12.388Z",
  },
  {
    title: "Grupos de Interés",
    description: "Creamos grupos de interés para fomentar el intercambio de ideas y proyectos en común.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpConecta/GruposInteres.avif?t=2024-07-27T19%3A08%3A22.673Z",
  },
];

const ConnectCard: React.FC<ConnectProgram & { index: number, onClick: () => void }> = ({ title, description, image, index, onClick }) => {
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
      <Box className={styles.connectCard} onClick={onClick}>
        <img src={image} alt={title} className={styles.connectImage} />
        <Box className={styles.cardOverlay}>
          <Title order={3} className={styles.connectTitle}>{title}</Title>
          <Text className={styles.connectText}>{description}</Text>
          <Button variant="outline" className={styles.connectButton}>Quiero ser parte</Button>
        </Box>
      </Box>
    </motion.div>
  );
};

const ECFConecta: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<ConnectProgram | null>(null);
  const [generalModalOpen, setGeneralModalOpen] = useState(false);

  const handleCardClick = (program: ConnectProgram) => {
    setSelectedProgram(program);
    setModalOpen(true);
  };

  const handleWhatsAppClick = () => {
    if (selectedProgram) {
      const message = `Hola, quiero saber más sobre ${selectedProgram.title}. Estoy muy interesado en participar.`;
      window.open(`https://wa.me/3226650405?text=${encodeURIComponent(message)}`, '_blank');
      setModalOpen(false);
    }
  };

  const handleGenericWhatsAppClick = () => {
    const message = `Hola, quiero saber más sobre ECF Conecta. Estoy muy interesado en participar.`;
    window.open(`https://wa.me/3226650405?text=${encodeURIComponent(message)}`, '_blank');
    setGeneralModalOpen(false);
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
            Nuestra Misión en ECF Conecta
          </Title>
        </motion.div>

        <Text className={styles.subtitle}>
          En ECF Conecta, nos dedicamos a crear lazos fuertes dentro de la comunidad, promoviendo la colaboración y el apoyo mutuo a través de diversas iniciativas.
        </Text>

        <SimpleGrid 
          cols={{ base: 1, sm: 2, lg: 2 }} 
          spacing="xl" 
          className={styles.connectGrid}
        >
          {connectPrograms.map((program, index) => (
            <ConnectCard key={index} {...program} index={index} onClick={() => handleCardClick(program)} />
          ))}
        </SimpleGrid>

        <Box mt="xl" style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="filled"
            color="red"
            className={styles.generalButton}
            onClick={() => setGeneralModalOpen(true)}
            size="lg"
          >
            Quiero ECF Conecta
          </Button>
        </Box>
      </Container>

      <Modal
        opened={modalOpen || generalModalOpen}
        onClose={() => {
          setModalOpen(false);
          setGeneralModalOpen(false);
        }}
        title={
          <Title order={3}>
            Más Información sobre{' '}
            <span className={styles.modalProgramTitle}>
              {selectedProgram ? selectedProgram.title : 'ECF Conecta'}
            </span>
          </Title>
        }
        centered
        size="md"
      >
        <div className={styles.modalContent}>
          <CloseButton onClick={() => {
            setModalOpen(false);
            setGeneralModalOpen(false);
          }} className={styles.closeButton} />
          <img src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/LogoEmpowering.avif" alt="Logo" className={styles.modalLogo} />
          <Text size="md" ta="center">
            En Empowering Communities Foundation, ayudamos a toda nuestra comunidad a crecer en educación. Comunícate a nuestro WhatsApp y te daremos más información.
          </Text>
          <Button
            variant="filled"
            color="green"
            onClick={selectedProgram ? handleWhatsAppClick : handleGenericWhatsAppClick}
            className={styles.modalButton}
          >
            Contactar por WhatsApp
          </Button>
        </div>
      </Modal>
    </Box>
  );
};

export default ECFConecta;