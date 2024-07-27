import React, { useState } from 'react';
import { Container, Title, Text, Button, Grid, Image } from '@mantine/core';
import { motion } from 'framer-motion';
import classes from './OurWork.module.css';

const workOptions = [
    { 
      title: 'ECP Asesoramientos', 
      description: 'En ECP Asesoramientos, nos dedicamos a proporcionar orientación experta y personalizada a las comunidades. Nuestro objetivo es empoderar a las personas mediante el acceso a información clave, capacitación y recursos. Ya sea a través de talleres educativos, asesorías legales, o consultorías de negocio, estamos comprometidos a ayudar a cada individuo a alcanzar su máximo potencial. Con un enfoque en la inclusión y la sostenibilidad, trabajamos en estrecha colaboración con ciudadanos, ONGs, administraciones públicas, empresas y entidades educativas para asegurar que cada asesoramiento tenga un impacto positivo y duradero.', 
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/OurWork/Asesora.avif?t=2024-07-27T18%3A17%3A58.824Z',
      link: '/programs/asesoramientos'
    },
    { 
      title: 'ECP Asistencia Integral', 
      description: 'ECP Asistencia Integras se centra en proporcionar un apoyo integral a aquellos en situaciones de vulnerabilidad. Entendemos que la pobreza multidimensional no solo es la falta de ingresos, sino también la carencia de acceso a servicios esenciales como vivienda, salud y educación. A través de nuestro modelo integral e interdisciplinario, cubrimos no solo las necesidades básicas, sino también brindamos herramientas y recursos que permiten a las personas superar sus condicionamientos. Generamos redes de apoyo y contactos, fomentando el empoderamiento de derechos y el acceso equitativo a oportunidades.', 
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/OurWork/AsistenciaIntegral.avif?t=2024-07-27T18%3A18%3A54.472Z',
      link: '/programs/asistenciaintegral'
    },
    { 
      title: 'ECP Ayuda tu Salud', 
      description: 'En ECP Ayuda tu Salud, promovemos el acceso equitativo a servicios médicos y prácticas saludables en las comunidades. Implementamos programas de salud comunitaria que mejoran la calidad de vida y fomentan el bienestar integral. Ofrecemos campañas de prevención, acceso a consultas médicas, y programas de educación en salud que abordan tanto aspectos físicos como mentales. Nuestro compromiso es asegurar que cada individuo tenga las herramientas necesarias para llevar una vida saludable y plena.', 
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/OurWork/Salud.avif?t=2024-07-27T18%3A19%3A27.748Z',
      link: '/programs/ayudatusalud'
    },
    { 
      title: 'ECP Educación', 
      description: 'ECP Educación se dedica a mejorar el acceso y la calidad de la educación en comunidades desfavorecidas. Creemos que la educación es la clave para el desarrollo sostenible y la equidad social. A través de iniciativas que incluyen becas, programas de tutoría, y acceso a tecnologías educativas, buscamos cerrar las brecha educativa y proporcionar a los jóvenes las oportunidades necesarias para prosperar. Fomentamos un ambiente de aprendizaje inclusivo y diverso que prepara a los estudiantes para los desafíos del futuro.', 
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/OurWork/Education.avif?t=2024-07-27T18%3A19%3A45.161Z',
      link: '/programs/educacion'
    },
    { 
      title: 'ECP Conecta', 
      description: 'ECP Conecta es nuestro programa de integración social que busca crear redes de colaboración y apoyo en la comunidad. Facilitamos el acceso a recursos, contactos y oportunidades que pueden transformar vidas. Ya sea conectando a individuos con potenciales empleadores, facilitando la participación en actividades comunitarias, o proporcionando acceso a plataformas de desarrollo personal, ECP Conecta trabaja para romper las barreras de la exclusión social. Promovemos la inclusión y el respeto por la diversidad.', 
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/EmpoweringFundation/OurWork/Conect2.avif?t=2024-07-27T18%3A19%3A47.542Z',
      link: '/programs/conecta'
    },
];

const OurWork: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState(workOptions[2]);

  return (
    <Container size="lg" className={classes.container}>
      <Title className={classes.mainTitle}>Nuestro trabajo</Title>
      <div className={classes.buttonsContainer}>
        {workOptions.map((work, index) => (
          <Button
            key={index}
            variant={selectedWork.title === work.title ? 'filled' : 'outline'}
            color="blue"
            size="md"
            radius="md"
            className={classes.workButton}
            onClick={() => setSelectedWork(work)}
          >
            {work.title}
          </Button>
        ))}
      </div>
      <Grid gutter={40} align="stretch">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <motion.div
            key={selectedWork.title}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={selectedWork.image} alt={selectedWork.title} className={classes.image} />
          </motion.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <motion.div
            key={selectedWork.description}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Title order={2} className={classes.workTitle}>{selectedWork.title}</Title>
            <Text className={classes.description}>{selectedWork.description}</Text>
          </motion.div>
        </Grid.Col>
      </Grid>
      <div className={classes.buttonContainer}>
        <a href={selectedWork.link} className={classes.learnMoreLink}>
          <Button 
            variant="filled" 
            color="red" 
            size="xl" 
            radius="md" 
            className={classes.learnMoreButton}
          >
            Conocer {selectedWork.title}
          </Button>
        </a>
      </div>
    </Container>
  );
};

export default OurWork;
