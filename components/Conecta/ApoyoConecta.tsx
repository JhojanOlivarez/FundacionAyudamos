import React, { useState } from 'react';
import { Container, Title, Text, Button, Grid, Card, TextInput, Select } from '@mantine/core';
import styles from './ApoyoConecta.module.css';

const ApoyaConecta: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<number | null>(null);
  const [donationFrequency, setDonationFrequency] = useState<string>('Mensual');

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(null);
  };

  const handleCustomAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setSelectedAmount(null);
    setCustomAmount(value);
  };

  const getSelectedAmount = () => {
    if (selectedAmount !== null) {
      return `$${selectedAmount.toLocaleString()}`;
    } else if (customAmount !== null) {
      return `$${customAmount.toLocaleString()}`;
    } else {
      return 'Selecciona un monto';
    }
  };

  return (
    <div className={styles.wrapper}>
      <Container size="lg">
        <Grid gutter={60} justify="center" align="stretch">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <div className={styles.content}>
              <Title className={styles.title}>
                Apoya ECF Conecta
              </Title>
              <Text className={styles.description}>
                En ECF Conecta, estamos dedicados a crear lazos fuertes dentro de la comunidad, promoviendo la colaboración y el apoyo mutuo a través de diversas iniciativas.
              </Text>
              <Text className={styles.description}>
                Tu apoyo nos permite ofrecer programas como redes de apoyo, mentorías personalizadas, eventos comunitarios, conexión con empleadores, plataformas de desarrollo, y grupos de interés.
              </Text>
              <Button
                size="lg"
                radius="md"
                className={styles.donateButton}
              >
                Apoyar con {getSelectedAmount()}
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card className={styles.card}>
              <Title order={3} ta="center" className={styles.cardTitle}>
                Elige tu Contribución
              </Title>
              <div className={styles.frequencyOptions}>
                <Button
                  variant={donationFrequency === 'Única vez' ? 'filled' : 'outline'}
                  color="blue"
                  size="md"
                  radius="md"
                  className={styles.frequencyOption}
                  onClick={() => setDonationFrequency('Única vez')}
                >
                  Única vez
                </Button>
                <Button
                  variant={donationFrequency === 'Mensual' ? 'filled' : 'outline'}
                  color="blue"
                  size="md"
                  radius="md"
                  className={styles.frequencyOption}
                  onClick={() => setDonationFrequency('Mensual')}
                >
                  Mensual
                </Button>
              </div>
              <div className={styles.donationOptions}>
                {[100000, 70000, 35000, 10000, 9000, 5000].map(amount => (
                  <Button
                    key={amount}
                    variant={selectedAmount === amount ? 'filled' : 'outline'}
                    color="blue"
                    size="md"
                    radius="md"
                    className={styles.donationOption}
                    onClick={() => handleAmountClick(amount)}
                  >
                    {`$${amount.toLocaleString()}`}
                  </Button>
                ))}
              </div>
              <TextInput
                label="Otro monto"
                placeholder="Ingresa un monto personalizado"
                value={customAmount !== null ? customAmount.toString() : ''}
                onChange={handleCustomAmountChange}
                className={styles.customAmountInput}
              />
              <TextInput
                label="Dedica este apoyo"
                placeholder="Nombre del homenajeado"
                className={styles.customAmountInput}
              />
              <Select
                label="Designar a"
                placeholder="Selecciona un programa"
                data={['Redes de Apoyo', 'Mentorías Personalizadas', 'Eventos Comunitarios', 'Conexión con Empleadores', 'Plataformas de Desarrollo', 'Grupos de Interés', 'Donde más se necesite']}
                className={styles.customAmountInput}
              />
              <Button
                color="blue"
                size="lg"
                radius="md"
                className={styles.cardDonateButton}
              >
                Apoyar con {getSelectedAmount()}
              </Button>
              <Text size="xs" color="gray" ta="center" className={styles.secureText}>
                ¿Mi apoyo es seguro? • ¿Puedo cancelar mi apoyo recurrente?
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default ApoyaConecta;
