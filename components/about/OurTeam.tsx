import React from 'react';
import { Paper, Text, Title, Grid, Container, Box, Image } from '@mantine/core';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useIntersection } from '@mantine/hooks';
import classes from './OurTeam.module.css';
import Logo from '@/assets/LogoEmpowering.avif';

interface CardProps {
  image: string;
  name: string;
  position: string;
  linkedin: string;
  email: string;
  index: number;
}

function TeamMember({ image, name, position, linkedin, email, index }: CardProps) {
  const { ref, entry } = useIntersection({
    threshold: 0.2,
    rootMargin: '0px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={entry?.isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Paper shadow="lg" radius="md" className={classes.card}>
        <Image
          src={image}
          alt={name}
          className={classes.image}
          radius="md"
        />
        <div className={classes.content}>
          <Title order={3} className={classes.name}>{name}</Title>
          <Text className={classes.position}>{position}</Text>
          <div className={classes.social}>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={classes.icon} />
            </a>
            <a href={`mailto:${email}`}>
              <FaEnvelope className={classes.icon} />
            </a>
          </div>
        </div>
        <Image src={Logo} alt="Logo" className={classes.watermark} />
      </Paper>
    </motion.div>
  );
}

const data = [
  {
    image: '/assets/Members/Person1.avif',
    name: 'John Doe',
    position: 'Director Ejecutivo',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    email: 'john.doe@example.com',
  },
  {
    image: '/assets/Members/Person2.avif',
    name: 'Jane Smith',
    position: 'Coordinadora de Proyectos',
    linkedin: 'https://www.linkedin.com/in/janesmith',
    email: 'jane.smith@example.com',
  },
  {
    image: '/assets/Members/Person3.avif',
    name: 'Michael Johnson',
    position: 'Especialista en Marketing',
    linkedin: 'https://www.linkedin.com/in/michaeljohnson',
    email: 'michael.johnson@example.com',
  },
  {
    image: '/assets/Members/Person4.avif',
    name: 'Emily Davis',
    position: 'Diseñadora Gráfica',
    linkedin: 'https://www.linkedin.com/in/emilydavis',
    email: 'emily.davis@example.com',
  },
];

function OurTeam() {
  return (
    <Box className={classes.wrapper}>
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title className={classes.sectionTitle}>Nuestro Equipo</Title>
        </motion.div>
        <Grid gutter={40}>
          {data.map((member, index) => (
            <Grid.Col key={member.name} span={{ base: 12, sm: 6, md: 3 }}>
              <TeamMember {...member} index={index} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default OurTeam;