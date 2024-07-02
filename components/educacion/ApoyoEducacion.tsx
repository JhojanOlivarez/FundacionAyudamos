import React, { useState } from 'react';
import { Container, Title, Text, Button, Grid, Card, ThemeIcon, Progress, NumberInput, Paper, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconHandFinger, IconChalkboard, IconUsers, IconBriefcase, IconCode, IconBulb, IconCoin, IconArrowRight } from '@tabler/icons-react';
import styles from './ApoyoEducacion.module.css';

interface ConnectaProgram {
  icon: React.ElementType;
  title: string;
  description: string;
  goal: number;
  current: number;
}

const connectaPrograms: ConnectaProgram[] = [
  { icon: IconHandFinger, title: "Redes de Apoyo", description: "Fortalece la colaboración comunitaria", goal: 50000, current: 35000 },
  { icon: IconChalkboard, title: "Mentorías Personalizadas", description: "Guía a individuos en su desarrollo", goal: 40000, current: 28000 },
  { icon: IconUsers, title: "Eventos Comunitarios", description: "Fomenta la integración cultural", goal: 30000, current: 15000 },
  { icon: IconBriefcase, title: "Conexión con Empleadores", description: "Une talento con oportunidades", goal: 45000, current: 30000 },
  { icon: IconCode, title: "Plataformas de Desarrollo", description: "Mejora habilidades y conocimientos", goal: 60000, current: 40000 },
  { icon: IconBulb, title: "Grupos de Interés", description: "Impulsa el intercambio de ideas", goal: 35000, current: 20000 },
];

const predefinedAmounts = [10000, 25000, 50000, 100000, 250000];

const ApoyoConecta: React.FC = () => {
  const [selectedPrograms, setSelectedPrograms] = useState<number[]>([]);
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleProgram = (index: number) => {
    setSelectedPrograms(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleDonationChange = (value: number) => {
    setDonationAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setDonationAmount(0);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const amount = donationAmount || (customAmount ? parseInt(customAmount, 10) : 0);
      alert(`¡Gracias por tu donación de $${amount.toLocaleString()} a ECF CONECTA!`);
      setSelectedPrograms([]);
      setDonationAmount(0);
      setCustomAmount('');
    }, 2000);
  };

  const totalDonation = donationAmount || (customAmount ? parseInt(customAmount, 10) : 0);

  return (
    <div className={styles.wrapper}>
      <Container size="xl">
        <Title className={styles.title}>Apoya ECF CONECTA</Title>
        <Text className={styles.subtitle}>
          Selecciona los programas que deseas apoyar y elige tu monto de donación para fortalecer nuestra red comunitaria.
        </Text>

        <Grid gutter="xl">
          {connectaPrograms.map((program, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  shadow="sm" 
                  padding="lg" 
                  radius="md" 
                  className={`${styles.programCard} ${selectedPrograms.includes(index) ? styles.selected : ''}`}
                  onClick={() => toggleProgram(index)}
                >
                  <ThemeIcon size={50} radius="md" variant="light" color="blue" className={styles.programIcon}>
                    <program.icon size={30} />
                  </ThemeIcon>
                  <Title order={3} className={styles.programTitle}>{program.title}</Title>
                  <Text size="sm" color="dimmed" className={styles.programDescription}>{program.description}</Text>
                  <Progress 
                    value={(program.current / program.goal) * 100} 
                    size="sm" 
                    radius="xl" 
                    className={styles.programProgress}
                  />
                  <Text size="xs" ta="right" mt={5}>
                    ${program.current.toLocaleString()} / ${program.goal.toLocaleString()}
                  </Text>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>

        {selectedPrograms.length > 0 && (
          <Paper shadow="md" radius="lg" p="xl" mt="xl" className={styles.donationSection}>
            <Title order={2} className={styles.donationSectionTitle}>Elige tu monto de donación</Title>
            <Grid mt="md">
              {predefinedAmounts.map((amount) => (
                <Grid.Col span={4} key={amount}>
                  <Button 
                    variant={donationAmount === amount ? "filled" : "outline"}
                    color="blue"
                    fullWidth
                    onClick={() => handleDonationChange(amount)}
                  >
                    ${amount.toLocaleString()}
                  </Button>
                </Grid.Col>
              ))}
            </Grid>
            <NumberInput
              label="O ingresa un monto personalizado"
              value={customAmount}
             
              min={0}
              step={1000}
             
              mt="xl"
            />
            <Button 
              size="xl" 
              rightSection={<IconArrowRight />}
              className={styles.donateButton}
              onClick={handleSubmit}
              loading={isSubmitting}
              disabled={selectedPrograms.length === 0 || totalDonation === 0}
              mt="xl"
            >
              Donar ${totalDonation.toLocaleString()}
            </Button>
          </Paper>
        )}
      </Container>
    </div>
  );
};

export default ApoyoConecta;