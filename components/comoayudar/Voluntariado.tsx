import React from 'react';
import { Container, Title, Text, Button, Image, Grid, Paper } from '@mantine/core';
import { motion } from 'framer-motion';
import classes from './Voluntariado.module.css';

const stories = [
  {
    title: 'Salud y Bienestar en Comunidades Rurales',
    text: 'Nuestros voluntarios han llevado servicios médicos gratuitos a comunidades rurales, realizando consultas, distribuyendo medicamentos y educando sobre salud preventiva.',
    image: '/assets/Comoayudar/SaludVoluntariado.avif',
  },
  {
    title: 'Educación para Todos',
    text: 'A través de tutorías y programas de becas, nuestros voluntarios han ayudado a niños y adultos a acceder a una educación de calidad, abriendo puertas a nuevas oportunidades.',
    image: '/assets/Comoayudar/EducacionParaTodos.avif',
  },
  {
    title: 'Apoyo en Situaciones de Emergencia',
    text: 'Durante desastres naturales, nuestros voluntarios han brindado apoyo inmediato con alimentos, refugio y asistencia emocional a las familias afectadas.',
    image: '/assets/Comoayudar/ApoyoEmergencias.avif',
  },
];

const Voluntariado: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInHover = {
    initial: { opacity: 0.8 },
    animate: { opacity: 1, y: -10, transition: { duration: 0.3 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <motion.div {...fadeIn}>
          <Title className={classes.mainTitle}>Participa en Nuestros Voluntariados</Title>
          <Text className={classes.mainDescription}>
            Únete a nuestro equipo de voluntarios y ayúdanos a crear un impacto positivo en nuestras comunidades. Aquí te contamos algunas de las historias inspiradoras de nuestros voluntarios.
          </Text>
        </motion.div>

        <Grid gutter={50} className={classes.grid}>
          {stories.map((story, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <motion.div {...fadeInHover} whileHover="hover">
                <Paper className={classes.story}>
                  <motion.div className={classes.storyImageWrapper}>
                    <Image src={story.image} alt={story.title} className={classes.storyImage} />
                  </motion.div>
                  <Title order={4} className={classes.storyTitle}>{story.title}</Title>
                  <Text className={classes.storyText}>{story.text}</Text>
                </Paper>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>

        <motion.div {...fadeIn}>
          <Button 
            component="a" 
            href="/voluntariado" 
            size="lg" 
            radius="md" 
            className={classes.volunteerButton}
          >
            Quiero Ser Voluntario
          </Button>
        </motion.div>
      </Container>
    </div>
  );
};

export default Voluntariado;
