import React, { useState } from 'react';
import { Container, Title, Text, Button, Grid, Card, TextInput, Select } from '@mantine/core';
import classes from './ApoyaAsesoramientos.module.css';

const ApoyaAsesoramientos: React.FC = () => {
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
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid gutter={60} justify="center" align="stretch">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <div className={classes.content}>
              <Title className={classes.title}>
                Empoderando comunidades a través del asesoramiento
              </Title>
              <Text className={classes.description}>
                En ECF Asesoramientos, nos dedicamos a proporcionar orientación experta y personalizada para transformar vidas y fortalecer el tejido social de nuestras comunidades.
              </Text>
              <Text className={classes.description}>
                Tu apoyo nos permite ofrecer servicios de asesoría legal, impulsar negocios sociales y organizar talleres educativos que marcan la diferencia. Juntos, podemos construir un futuro más equitativo y próspero.
              </Text>
              <Button
                size="lg"
                radius="md"
                className={classes.donateButton}
              >
                Apoyar con {getSelectedAmount()}
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card className={classes.card}>
              <Title order={3} ta="center" className={classes.cardTitle}>
                Apoya nuestros servicios de asesoramiento
              </Title>
              <div className={classes.frequencyOptions}>
                <Button
                  variant={donationFrequency === 'Única vez' ? 'filled' : 'outline'}
                  color="blue"
                  size="md"
                  radius="md"
                  className={classes.frequencyOption}
                  onClick={() => setDonationFrequency('Única vez')}
                >
                  Única vez
                </Button>
                <Button
                  variant={donationFrequency === 'Mensual' ? 'filled' : 'outline'}
                  color="blue"
                  size="md"
                  radius="md"
                  className={classes.frequencyOption}
                  onClick={() => setDonationFrequency('Mensual')}
                >
                  Mensual
                </Button>
              </div>
              <div className={classes.donationOptions}>
                {[100000, 70000, 35000, 10000, 9000, 5000].map(amount => (
                  <Button
                    key={amount}
                    variant={selectedAmount === amount ? 'filled' : 'outline'}
                    color="blue"
                    size="md"
                    radius="md"
                    className={classes.donationOption}
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
                className={classes.customAmountInput}
              />
              <TextInput
                label="Dedica este apoyo"
                placeholder="Nombre del homenajeado"
                className={classes.customAmountInput}
              />
              <Select
                label="Designar a"
                placeholder="Donde más se necesite"
                data={['Donde más se necesite', 'Asesoría legal', 'Talleres educativos', 'Impulso a negocios sociales']}
                className={classes.customAmountInput}
              />
              <Button
                color="blue"
                size="lg"
                radius="md"
                className={classes.cardDonateButton}
              >
                Apoyar con {getSelectedAmount()}
              </Button>
              <Text size="xs" color="gray" ta="center" className={classes.secureText}>
                ¿Mi apoyo es seguro? • ¿Puedo cancelar mi apoyo recurrente?
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default ApoyaAsesoramientos;