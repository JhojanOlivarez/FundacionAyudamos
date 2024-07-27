import React, { useState } from 'react';
import { Container, Title, Text, Box, SimpleGrid, Button, Modal, CloseButton, Image, Group } from '@mantine/core';
import { motion } from 'framer-motion';
import { useIntersection } from '@mantine/hooks';
import { FaHandsHelping, FaChalkboardTeacher, FaUsers, FaBriefcase, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa';
import styles from './HowHelpUs.module.css';

interface HelpOption {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  icon: React.ReactNode;
}

const helpOptions: HelpOption[] = [
  {
    title: "Redes de Apoyo",
    description: "Únete a nuestras redes de apoyo y ayuda a fortalecer la colaboración y el apoyo mutuo en la comunidad.",
    buttonText: "Quiero unirme a las redes",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpConecta/RedesApoyo.avif?t=2024-07-27T19%3A07%3A09.379Z",
    icon: <FaHandsHelping />,
  },
  {
    title: "Mentorías Personalizadas",
    description: "Conviértete en mentor y guía a individuos en su desarrollo personal y profesional.",
    buttonText: "Quiero ser mentor",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpConecta/Mentorias.avif",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Eventos Comunitarios",
    description: "Organiza y participa en eventos comunitarios para fomentar la integración y el intercambio cultural.",
    buttonText: "Quiero organizar eventos",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpConecta/Eventos.avif?t=2024-07-27T19%3A07%3A33.691Z",
    icon: <FaUsers />,
  },
  {
    title: "Conexión con Empleadores",
    description: "Ayuda a conectar a personas en busca de empleo con empleadores potenciales.",
    buttonText: "Quiero conectar empleadores",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpConecta/Emprendedores.avif?t=2024-07-27T19%3A07%3A52.271Z",
    icon: <FaBriefcase />,
  },
  {
    title: "Plataformas de Desarrollo",
    description: "Contribuye al desarrollo de plataformas que mejoren habilidades y conocimientos.",
    buttonText: "Quiero contribuir",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpConecta/Plataformas.avif?t=2024-07-27T19%3A08%3A12.388Z",
    icon: <FaLaptopCode />,
  },
  {
    title: "Grupos de Interés",
    description: "Forma parte de grupos de interés y fomenta el intercambio de ideas y proyectos en común.",
    buttonText: "Quiero unirme a un grupo",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpConecta/GruposInteres.avif?t=2024-07-27T19%3A08%3A22.673Z",
    icon: <FaProjectDiagram />,
  },
];

const HelpCard: React.FC<HelpOption & { index: number, onClick: () => void }> = ({ title, description, buttonText, image, icon, index, onClick }) => {
  const { ref, entry } = useIntersection({
    threshold: 0.5,
    rootMargin: '0px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: entry?.isIntersecting ? 1 : 0, scale: entry?.isIntersecting ? 1 : 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={styles.helpCard}
    >
      <Image src={image} alt={title} className={styles.helpImage} />
      <div className={styles.overlay} onClick={onClick}>
        <div className={styles.iconWrapper}>
          {icon}
        </div>
        <Title order={3} className={styles.helpTitle}>{title}</Title>
        <Text className={styles.helpText}>{description}</Text>
        <Button variant="light" className={styles.helpButton}>{buttonText}</Button>
      </div>
    </motion.div>
  );
};

const HowHelpUs: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<HelpOption | null>(null);
  const [generalModalOpen, setGeneralModalOpen] = useState(false);

  const handleCardClick = (option: HelpOption) => {
    setSelectedOption(option);
    setModalOpen(true);
  };

  const handleWhatsAppClick = () => {
    if (selectedOption) {
      const message = `Hola, quiero ser parte del ${selectedOption.title} y contribuir con Empowering.`;
      window.open(`https://wa.me/3226650405?text=${encodeURIComponent(message)}`, '_blank');
      setModalOpen(false);
    }
  };

  const handleGenericWhatsAppClick = () => {
    const message = `Hola, quiero saber más sobre cómo ayudar a través de ECF Conecta. Estoy muy interesado.`;
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
            ¿Cómo Puedes Ayudarnos?
          </Title>
        </motion.div>

        <Text className={styles.subtitle}>
          Hay muchas maneras en las que puedes contribuir a nuestra misión de mejorar la vida de las personas en nuestra comunidad. ¡Descubre cómo puedes ayudar!
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl" className={styles.helpGrid}>
          {helpOptions.map((option, index) => (
            <HelpCard key={index} {...option} index={index} onClick={() => handleCardClick(option)} />
          ))}
        </SimpleGrid>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="filled"
            color="blue"
            size="lg"
            className={styles.generalButton}
            onClick={() => setGeneralModalOpen(true)}
          >
            Quiero ECF Conecta
          </Button>
        </div>
      </Container>

      <Modal
        opened={modalOpen || generalModalOpen}
        onClose={() => {
          setModalOpen(false);
          setGeneralModalOpen(false);
        }}
        title={
          <Title order={3}>
            Más Información sobre <span className={styles.modalProgramTitle}>{selectedOption ? selectedOption.title : 'ECF Conecta'}</span>
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
            onClick={selectedOption ? handleWhatsAppClick : handleGenericWhatsAppClick}
            className={styles.modalButton}
          >
            Contactar por WhatsApp
          </Button>
        </div>
      </Modal>
    </Box>
  );
};

export default HowHelpUs;
