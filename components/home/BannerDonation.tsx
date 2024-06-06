import React, { useState } from 'react';
import { Modal, Container, Title, Text, Button, Grid, Card, Image, TextInput, Select } from '@mantine/core';
import { FaTimes } from 'react-icons/fa';
import classes from './BannerDonation.module.css';

interface BannerDonationProps {
  opened: boolean;
  onClose: () => void;
}

const BannerDonation: React.FC<BannerDonationProps> = ({ opened, onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<number | null>(null);
  const [donationFrequency, setDonationFrequency] = useState<string | null>('Mensual');

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
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      size="1200px"
      withCloseButton={false}
      overlayProps={{
        opacity: 0.55,
        blur: 3,
      }}
      className={classes.modal}
    >
      <div className={classes.modalHeader}>
        <FaTimes onClick={onClose} className={classes.closeButton} />
      </div>
      <div className={classes.wrapper}>
        <Container size="lg">
          <Grid gutter={60} justify="center" align="stretch">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <div className={classes.content}>
                <Image
                  src="/assets/NinosEscasos.avif"
                  alt="Child"
                  className={classes.image}
                />
                <Title className={classes.title}>
                  Cada niño merece una familia amorosa
                </Title>
                <Text className={classes.description}>
                  Haz la diferencia con tu generosidad. La Fundación Empowering Communities trabaja para garantizar que los niños en riesgo crezcan en entornos seguros y afectuosos.
                </Text>
                <Text className={classes.description}>
                  Al donar hoy, ayudarás a que cada niño alcance su máximo potencial. Juntos, construyamos un futuro más brillante.
                </Text>
                <Button
                  size="lg"
                  radius="md"
                  className={classes.donateButton}
                >
                  Donar {getSelectedAmount()}
                </Button>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card className={classes.card}>
                <Title order={3} ta="center" className={classes.cardTitle}>
                  Donación segura
                </Title>
                <div className={classes.frequencyOptions}>
                  <Button
                    variant={donationFrequency === 'dar una vez' ? 'filled' : 'outline'}
                    color="blue"
                    size="md"
                    radius="md"
                    className={classes.frequencyOption}
                    onClick={() => setDonationFrequency('dar una vez')}
                  >
                    dar una vez
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
                  label="Dedica esta donación"
                  placeholder="Honoree name"
                  className={classes.customAmountInput}
                />
                <Select
                  label="Designar a"
                  placeholder="donde más se necesita"
                  data={['donde más se necesita', 'otro lugar']}
                  className={classes.customAmountInput}
                />
                <Button
                  color="blue"
                  size="lg"
                  radius="md"
                  className={classes.cardDonateButton}
                >
                  Donar {getSelectedAmount()}
                </Button>
                <Text size="xs" color="gray" ta="center" className={classes.secureText}>
                  ¿Mi donación es segura? • ¿Puedo cancelar mi donación recurrente?
                </Text>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </Modal>
  );
};

export default BannerDonation;