import React, { useState } from 'react';
import { Container, Title, Text, Box, SimpleGrid, Card, Button, Badge, Modal, CloseButton } from '@mantine/core';
import { motion } from 'framer-motion';
import { useIntersection } from '@mantine/hooks';
import styles from './Content.module.css';

interface EducationProgram {
  title: string;
  description: string;
  image: string;
  badge: string;
}

const educationPrograms: EducationProgram[] = [
  {
    title: "Becas Educativas",
    description: "Proporcionamos becas para estudiantes destacados que necesitan apoyo financiero para continuar su educación.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpEducacion/Becas.avif?t=2024-07-27T18%3A58%3A33.279Z",
    badge: "Oportunidad",
  },
  {
    title: "Programas de Tutoría",
    description: "Ofrecemos tutorías personalizadas para ayudar a los estudiantes a alcanzar su máximo potencial académico.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpEducacion/Tutorias.avif?t=2024-07-27T18%3A58%3A43.327Z",
    badge: "Apoyo",
  },
  {
    title: "Cursos de Desarrollo Personal",
    description: "Organizamos cursos que fortalecen habilidades blandas como la comunicación, el liderazgo y la resolución de conflictos.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpEducacion/Cursos.avif?t=2024-07-27T18%3A58%3A54.217Z",
    badge: "Crecimiento",
  },
  {
    title: "Capacitación Técnica",
    description: "Proveemos capacitación técnica en diversas áreas para mejorar la empleabilidad de los jóvenes.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpEducacion/CapacitacionTecnica.avif?t=2024-07-27T18%3A59%3A05.138Z",
    badge: "Futuro",
  },
  {
    title: "Acceso a Tecnología",
    description: "Facilitamos el acceso a herramientas tecnológicas y cursos de informática para preparar a los estudiantes para el mundo digital.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpEducacion/AccesoTecnologia.avif?t=2024-07-27T18%3A59%3A18.429Z",
    badge: "Innovación",
  },
  {
    title: "Apoyo Psicológico",
    description: "Brindamos apoyo psicológico para asegurar el bienestar emocional y mental de los estudiantes.",
    image: "https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/Programs/EcpEducacion/PsicologicoApoyo.avif?t=2024-07-27T18%3A59%3A32.106Z",
    badge: "Bienestar",
  },
];

const EducationCard: React.FC<EducationProgram & { index: number, onClick: () => void }> = ({ title, description, image, badge, index, onClick }) => {
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
      <Card shadow="lg" radius="lg" className={styles.educationCard} onClick={onClick}>
        <Box className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.educationImage} />
        </Box>
        <Box className={styles.cardContent}>
          <Badge className={styles.badge}>{badge}</Badge>
          <Title order={3} className={styles.educationTitle}>{title}</Title>
          <Text className={styles.educationText}>{description}</Text>
          <Button variant="outline" className={styles.educationButton}>Más Información</Button>
        </Box>
      </Card>
    </motion.div>
  );
};

const ECFEducation: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [generalModalOpen, setGeneralModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<EducationProgram | null>(null);

  const handleCardClick = (program: EducationProgram) => {
    setSelectedProgram(program);
    setModalOpen(true);
  };

  const handleWhatsAppClick = () => {
    if (selectedProgram) {
      const message = `Hola, quiero saber más sobre ${selectedProgram.title}. En Empowering ayudamos a toda nuestra comunidad a crecer en educación.`;
      window.open(`https://wa.me/3226650405?text=${encodeURIComponent(message)}`, '_blank');
      setModalOpen(false);
    }
  };

  const handleGeneralWhatsAppClick = () => {
    const message = `Hola, quiero saber más sobre ECP Educación. En Empowering ayudamos a toda nuestra comunidad a crecer en educación.`;
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
            Nuestra Misión en ECF Educación
          </Title>
        </motion.div>

        <Text className={styles.subtitle}>
          En ECF Educación, estamos comprometidos a proporcionar oportunidades educativas que transforman vidas. Nuestros programas están diseñados para apoyar a los estudiantes en cada paso de su camino educativo.
        </Text>

        <SimpleGrid 
          cols={{ base: 1, sm: 2, lg: 3 }} 
          spacing="xl" 
          className={styles.educationGrid}
        >
          {educationPrograms.map((program, index) => (
            <EducationCard key={index} {...program} index={index} onClick={() => handleCardClick(program)} />
          ))}
        </SimpleGrid>
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="filled"
            color="green"
            className={styles.generalButton}
            onClick={() => setGeneralModalOpen(true)}
            size="lg"
          >
            Quiero ECP Educación
          </Button>
        </div>
      </Container>

      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title={<span>Más Información sobre <strong>{selectedProgram?.title}</strong></span>}
        centered
        size="md"
      >
        <div className={styles.modalContent}>
          <CloseButton onClick={() => setModalOpen(false)} className={styles.closeButton} />
          <img src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/LogoEmpowering.avif" alt="Logo" className={styles.modalLogo} />
          <Text size="md" ta="center">
            {selectedProgram ? `En Empowering ayudamos a toda nuestra comunidad a crecer en educación. Comunicate a nuestro WhatsApp y te daremos más información sobre ${selectedProgram.title}.` : ''}
          </Text>
          <Button
            variant="filled"
            color="green"
            onClick={handleWhatsAppClick}
            className={styles.modalButton}
            size="lg"
          >
            Contactar por WhatsApp
          </Button>
        </div>
      </Modal>

      <Modal
        opened={generalModalOpen}
        onClose={() => setGeneralModalOpen(false)}
        title="Quiero ECP Educación"
        centered
        size="md"
      >
        <div className={styles.modalContent}>
          <CloseButton onClick={() => setGeneralModalOpen(false)} className={styles.closeButton} />
          <img src="/assets/LogoEmpowering.avif" alt="Logo" className={styles.modalLogo} />
          <Text size="md" ta="center">
            En Empowering ayudamos a toda nuestra comunidad a crecer en educación. Comunicate a nuestro WhatsApp y te daremos más información sobre ECP Educación.
          </Text>
          <Button
            variant="filled"
            color="green"
            onClick={handleGeneralWhatsAppClick}
            className={styles.modalButton}
            size="lg"
          >
            Contactar por WhatsApp
          </Button>
        </div>
      </Modal>
    </Box>
  );
};

export default ECFEducation;
