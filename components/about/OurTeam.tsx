import { Paper, Text, Title, Grid } from '@mantine/core';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import classes from './OurTeam.module.css';

interface CardProps {
  image: string;
  name: string;
  position: string;
  linkedin: string;
  email: string;
}

function TeamMember({ image, name, position, linkedin, email }: CardProps) {
  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <div className={classes.imageWrapper}>
        <img src={image} alt={name} className={classes.image} />
      </div>
      <div className={classes.content}>
        <Title order={3} className={classes.name}>
          {name}
        </Title>
        <Text className={classes.position} size="sm">
          {position}
        </Text>
        <div className={classes.social}>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={classes.icon} />
          </a>
          <a href={`mailto:${email}`}>
            <FaEnvelope className={classes.icon} />
          </a>
        </div>
      </div>
    </Paper>
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
  // Agrega más miembros del equipo aquí
];

function OurTeam() {
  return (
    <div className={classes.section}>
      <Title className={classes.sectionTitle}>Nuestro Equipo</Title>
      <Grid gutter={30}>
        {data.map((member) => (
          <Grid.Col key={member.name} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <TeamMember {...member} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}

export default OurTeam;
