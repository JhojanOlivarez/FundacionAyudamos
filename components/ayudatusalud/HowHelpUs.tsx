import React, { useState } from 'react';
import { Container, Title, Text, Box, SimpleGrid, Button, Modal, CloseButton } from '@mantine/core';
import { motion } from 'framer-motion';
import styles from './HowHelpUs.module.css';

interface HelpOption {
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

const helpOptions: HelpOption[] = [
  {
    title: "Voluntariado",
    description: "Únete a nuestro equipo de voluntarios y contribuye con tu tiempo y habilidades para ayudar a la comunidad.",
    buttonText: "Quiero ser voluntario",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/ECFSalud/Voluntariados.avif?t=2024-07-27T18%3A56%3A00.824Z",
  },
  {
    title: "Donaciones de Ropa",
    description: "Ayúdanos donando ropa en buen estado para quienes más lo necesitan.",
    buttonText: "Quiero donar ropa",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/ECFSalud/DonarRopa.avif?t=2024-07-27T18%3A56%3A13.219Z",
  },
  {
    title: "Donaciones de Alimentos",
    description: "Contribuye con alimentos no perecederos para apoyar a las familias en situaciones de vulnerabilidad.",
    buttonText: "Quiero donar alimentos",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/ECFSalud/DonarComida.avif?t=2024-07-27T18%3A56%3A22.262Z",
  },
  {
    title: "Apoyo Económico",
    description: "Realiza una donación económica para apoyar nuestros programas y actividades.",
    buttonText: "Quiero donar dinero",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/ECFSalud/DonarDinero.avif?t=2024-07-27T18%3A56%3A32.816Z",
  },
  {
    title: "Materiales Escolares",
    description: "Dona útiles escolares para ayudar a los niños y jóvenes en su educación.",
    buttonText: "Quiero donar útiles",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/ECFSalud/DonarUtiles.avif?t=2024-07-27T18%3A56%3A43.150Z",
  },
  {
    title: "Medicamentos",
    description: "Contribuye con medicamentos para proporcionar atención médica a quienes lo necesitan.",
    buttonText: "Quiero donar medicamentos",
    image: "/assets/programs/ECPSalud/DonarMedicamentos.avif",
  },
];

const HelpCard: React.FC<HelpOption & { index: number, onClick: () => void }> = ({ title, description, buttonText, image, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Box className={styles.helpCard} onClick={onClick}>
        <img src={image} alt={title} className={styles.helpImage} />
        <div className={styles.cardContent}>
          <Title order={3} className={styles.helpTitle}>{title}</Title>
          <Text className={styles.helpText}>{description}</Text>
          <Button variant="outline" className={styles.helpButton}>{buttonText}</Button>
        </div>
      </Box>
    </motion.div>
  );
};

const HowHelpUs: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<HelpOption | null>(null);

  const handleCardClick = (option: HelpOption) => {
    setSelectedOption(option);
    setModalOpen(true);
  };

  const handleWhatsAppClick = (message: string) => {
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
            ¿Cómo Puedes Ayudarnos?
          </Title>
        </motion.div>

        <Text className={styles.subtitle}>
          Hay muchas maneras en las que puedes contribuir a nuestra misión de mejorar la vida de las personas en nuestra comunidad. ¡Descubre cómo puedes ayudar!
        </Text>

        <SimpleGrid 
          cols={{ base: 1, sm: 2, lg: 3 }} 
          spacing="xl" 
          className={styles.helpGrid}
        >
          {helpOptions.map((option, index) => (
            <HelpCard key={index} {...option} index={index} onClick={() => handleCardClick(option)} />
          ))}
        </SimpleGrid>

        <Button
          fullWidth
          size="xl"
          mt="xl"
          className={styles.helpButtonGeneral}
          onClick={() => handleWhatsAppClick("Quiero realizar una ayuda a la fundación Empowering")}
        >
          Quiero Ayudar
        </Button>
      </Container>

      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title={`Más Información sobre ${selectedOption?.title}`}
        centered
        size="md"
      >
        <div className={styles.modalContent}>
          <CloseButton onClick={() => setModalOpen(false)} className={styles.closeButton} />
          <img src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/LogoEmpowering.avif" alt="Logo" className={styles.modalLogo} />
          <Text size="md" ta="center">{selectedOption?.description}</Text>
          <Button
            variant="filled"
            color="green"
            onClick={() => handleWhatsAppClick(`Hola, quiero ayudar mediante ${selectedOption?.title}. Estoy muy interesado.`)}
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
