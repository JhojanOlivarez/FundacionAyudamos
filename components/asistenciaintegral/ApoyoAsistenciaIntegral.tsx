import React, { useState, useEffect } from 'react';
import { Container, Title, Text, Button, Grid, Card, TextInput, Select, Group, ThemeIcon, Tooltip, Box, Progress } from '@mantine/core';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IconHeart, IconCoin, IconClock, IconBulb, IconUsers, IconSchool } from '@tabler/icons-react';
import classes from './ApoyoAsistenciaIntegra.module.css';

const donationAmounts = [10000, 25000, 50000, 100000, 250000];

const impactItems = [
  { icon: IconHeart, label: 'Vidas Impactadas', value: 10000, color: '#FFD700' },
  { icon: IconCoin, label: 'Fondos Recaudados', value: '$1,000,000', color: '#4169E1' },
  { icon: IconClock, label: 'Horas de Asesoría', value: 5000, color: '#DC143C' },
  { icon: IconUsers, label: 'Voluntarios Activos', value: 500, color: '#32CD32' },
  { icon: IconSchool, label: 'Becas Otorgadas', value: 200, color: '#FF8C00' },
  { icon: IconBulb, label: 'Proyectos Iniciados', value: 50, color: '#8A2BE2' },
];

export function ApoyoAsistenciaIntegral() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donationFrequency, setDonationFrequency] = useState<string>('Mensual');
  const [progress, setProgress] = useState(0);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;
        if (newProgress === 100) {
          clearInterval(timer);
        }
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(event.target.value);
    setSelectedAmount(null);
  };

  const getSelectedAmount = () => {
    if (selectedAmount !== null) {
      return `$${selectedAmount.toLocaleString()}`;
    } else if (customAmount) {
      return `$${parseInt(customAmount, 10).toLocaleString()}`;
    }
    return 'Selecciona un monto';
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={classes.wrapper} ref={ref}>
      <Container size="xl">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={cardVariants}>
            <Title className={classes.title}>Apoya Nuestra Asistencia Integral</Title>
            <Text className={classes.description}>
              Tu generosidad transforma vidas. Cada donación fortalece nuestros programas de asesoramiento y apoyo comunitario, creando un impacto duradero en la sociedad.
            </Text>
          </motion.div>

          <Grid gutter={40} mt={50}>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <motion.div variants={cardVariants}>
                <Card shadow="lg" radius="lg" className={classes.card}>
                  <Title order={2} className={classes.cardTitle}>Elige tu Contribución</Title>
                  
                  <Group className={classes.frequencyButtons}>
                    {['Única', 'Mensual', 'Anual'].map((freq) => (
                      <Button
                        key={freq}
                        variant={donationFrequency === freq ? 'filled' : 'outline'}
                        onClick={() => setDonationFrequency(freq)}
                        className={classes.frequencyButton}
                        styles={(theme) => ({
                          root: {
                            backgroundColor: donationFrequency === freq ? theme.colors.blue[6] : 'transparent',
                            color: donationFrequency === freq ? theme.white : theme.colors.blue[6],
                            '&:hover': {
                              backgroundColor: theme.colors.blue[7],
                              color: theme.white,
                            },
                          },
                        })}
                      >
                        {freq}
                      </Button>
                    ))}
                  </Group>

                  <Group mt="xl" className={classes.amountButtons}>
                    {donationAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? 'filled' : 'outline'}
                        onClick={() => handleAmountClick(amount)}
                        className={classes.amountButton}
                        styles={(theme) => ({
                          root: {
                            backgroundColor: selectedAmount === amount ? theme.colors.yellow[6] : 'transparent',
                            color: selectedAmount === amount ? theme.black : theme.colors.yellow[6],
                            '&:hover': {
                              backgroundColor: theme.colors.yellow[5],
                              color: theme.black,
                            },
                          },
                        })}
                      >
                        ${amount.toLocaleString()}
                      </Button>
                    ))}
                  </Group>

                  <TextInput
                    label="Otro monto"
                    placeholder="Ingresa un monto personalizado"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    mt="xl"
                    className={classes.customAmountInput}
                  />

                  <Select
                    label="Destinar donación a"
                    placeholder="Selecciona un programa"
                    data={[
                      'Asesoría Legal',
                      'Apoyo Psicológico',
                      'Desarrollo Comunitario',
                      'Educación',
                      'Donde más se necesite'
                    ]}
                    mt="xl"
                  />

                  <Button
                    fullWidth
                    size="xl"
                    mt="xl"
                    className={classes.donateButton}
                  >
                    Donar {getSelectedAmount()}
                  </Button>
                </Card>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <motion.div variants={cardVariants}>
                <Card shadow="lg" radius="lg" className={classes.impactCard}>
                  <Title order={2} className={classes.impactTitle}>Nuestro Impacto</Title>
                  <Text className={classes.impactDescription}>
                    Juntos, estamos construyendo un futuro más brillante. Mira cómo tu apoyo está cambiando vidas:
                  </Text>
                  <div className={classes.impactGrid}>
                    {impactItems.map((item, index) => (
                      <Tooltip key={index} label={item.label} position="top" withArrow>
                        <Box className={classes.impactItem}>
                          <ThemeIcon size={80} radius="xl" className={classes.impactIcon} style={{ backgroundColor: item.color }}>
                            <item.icon size={40} />
                          </ThemeIcon>
                          <Text size="xl" fw={700} mt="sm" style={{ color: item.color }}>
                            {item.value}
                          </Text>
                        </Box>
                      </Tooltip>
                    ))}
                  </div>
                  <Box mt="xl">
                    <Text size="lg" fw={700} mb="xs">Meta Anual de Recaudación</Text>
                    <Progress value={progress} size="xl" radius="xl" color="yellow" />
                    <Group variant="apart" mt="xs">
                      <Text size="sm">$0</Text>
                      <Text size="sm" fw={700}>${(2000000).toLocaleString()}</Text>
                    </Group>
                  </Box>
                </Card>
              </motion.div>
            </Grid.Col>
          </Grid>
        </motion.div>
      </Container>
    </div>
  );
}

export default ApoyoAsistenciaIntegral;