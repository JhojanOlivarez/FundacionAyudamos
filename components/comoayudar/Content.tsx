import React, { useState } from 'react';
import { Container, Title, Text, Button, Image, Grid, Paper, Box, Tabs, Modal, Transition } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight, Activity, GraduationCap, Users, Building2, Phone } from 'lucide-react';
import classes from './content.module.css';
import Logo from '@/assets/LogoEmpowering.avif';

const donationDescription = `
  En Empowering Communities Foundation (ECF), nos dedicamos a mejorar la calidad de vida de las comunidades 
  vulnerables a través de diversos programas y proyectos. Tu donación puede ayudar a financiar nuestras 
  iniciativas de salud, educación, asistencia social y desarrollo comunitario. Cada contribución cuenta y 
  nos permite seguir adelante con nuestra misión de crear un impacto positivo y sostenible.
`;

const sections = [
  {
    value: 'salud',
    label: 'Salud y Bienestar',
    text: 'Con tu apoyo, podemos ofrecer consultas médicas gratuitas, campañas de salud y educación sobre hábitos saludables.',
    image: '/assets/Comoayudar/Saludybienestar.avif',
    icon: <Activity size={20} />,
    color: '#FF6B6B',
  },
  {
    value: 'educacion',
    label: 'Educación',
    text: 'Tus donaciones nos ayudan a proporcionar becas, tutorías y programas de formación técnica para estudiantes y adultos.',
    image: '/assets/Comoayudar/Educacion.avif',
    icon: <GraduationCap size={20} />,
    color: '#4ECDC4',
  },
  {
    value: 'asistencia',
    label: 'Asistencia Social',
    text: 'Apoyamos a las personas en situación de vulnerabilidad con alimentos, ropa y asesoramiento legal y financiero.',
    image: '/assets/Comoayudar/AsistenciaSocial.avif',
    icon: <Users size={20} />,
    color: '#45B7D1',
  },
  {
    value: 'desarrollo',
    label: 'Desarrollo Comunitario',
    text: 'Promovemos el desarrollo económico y social de las comunidades a través de proyectos sostenibles y colaborativos.',
    image: '/assets/Comoayudar/AsistenciaComunitaria.avif',
    icon: <Building2 size={20} />,
    color: '#FFA07A',
  },
];

const Content: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>('salud');
  const [modalOpen, setModalOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const handleTabChange = (value: string | null) => {
    setActiveTab(value);
  };

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/1234567890?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20ECF', '_blank');
  };

  return (
    <div className={classes.wrapper}>
      <Container size="xl" className={classes.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title order={1} className={classes.mainTitle}>
            Cómo Puedes Ayudar
          </Title>
        </motion.div>

        <Grid gutter={{ base: 'md', sm: 'xl' }}>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper className={classes.donationCard}>
                <Text size="lg" className={classes.donationText}>
                  {donationDescription}
                </Text>
                <Button className={classes.donateButton} leftSection={<Heart size={20} />}>
                  Quiero Donar
                </Button>
              </Paper>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="outline"
              className={classes.tabs}
            >
              <Tabs.List className={classes.tabsList}>
                {sections.map((section) => (
                  <Tabs.Tab
                    key={section.value}
                    value={section.value}
                    leftSection={section.icon}
                    className={classes.tabItem}
                  >
                    {section.label}
                  </Tabs.Tab>
                ))}
              </Tabs.List>

              <AnimatePresence mode="wait">
                {sections.map((section) => (
                  <Tabs.Panel key={section.value} value={section.value}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Paper className={classes.sectionCard} style={{ borderColor: section.color }}>
                        <Grid gutter="md">
                          <Grid.Col span={{ base: 12, sm: 7 }}>
                            <Title order={3} className={classes.sectionTitle} style={{ color: section.color }}>{section.label}</Title>
                            <Text className={classes.sectionText}>{section.text}</Text>
                          </Grid.Col>
                          <Grid.Col span={{ base: 12, sm: 5 }} className={classes.imageWrapper}>
                            <Transition mounted={hoveredSection === section.value} transition="fade" duration={400} timingFunction="ease">
                              {(styles) => (
                                <div style={styles} className={classes.imageOverlay}>
                                  <Text className={classes.overlayText}>Descubre más</Text>
                                </div>
                              )}
                            </Transition>
                            <Image
                              src={section.image}
                              alt={section.label}
                              radius="md"
                              className={classes.sectionImage}
                              onMouseEnter={() => setHoveredSection(section.value)}
                              onMouseLeave={() => setHoveredSection(null)}
                            />
                          </Grid.Col>
                        </Grid>
                      </Paper>
                    </motion.div>
                  </Tabs.Panel>
                ))}
              </AnimatePresence>
            </Tabs>
          </Grid.Col>
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Paper className={classes.ctaSection}>
            <Grid align="center">
              <Grid.Col span={{ base: 12, sm: 8 }}>
                <Title order={2} className={classes.ctaTitle}>Juntos Podemos Hacer la Diferencia</Title>
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 4 }} className={classes.ctaButtonWrapper}>
                <Button className={classes.ctaButton} rightSection={<ArrowRight size={18} />} onClick={() => setModalOpen(true)}>
                  Conoce Más
                </Button>
              </Grid.Col>
            </Grid>
          </Paper>
        </motion.div>

        <Modal
          opened={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Empowering Communities Foundation"
          size="lg"
          centered
          classNames={{ title: classes.modalTitle }}
        >
          <Box className={classes.modalContent}>
            <Image src={Logo} alt="ECF Logo" width={200} height={200} className={classes.modalLogo} />
            <Text size="lg" className={classes.modalText}>
              ¿Quieres saber más sobre cómo puedes contribuir a nuestra misión? Contáctanos directamente a través de WhatsApp para obtener información detallada sobre nuestros programas y cómo puedes involucrarte.
            </Text>
            <Button
              leftSection={<Phone size={20} />}
              className={classes.whatsappButton}
              onClick={handleWhatsAppRedirect}
            >
              Contactar por WhatsApp
            </Button>
          </Box>
        </Modal>
      </Container>
    </div>
  );
};

export default Content;