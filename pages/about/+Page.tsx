import React from 'react';
import { Title, Grid, ThemeIcon, Container, Text, Paper } from "@mantine/core";
import { FaLightbulb, FaEye } from "react-icons/fa";
import { motion } from 'framer-motion';
import Logo from '@/assets/LogoEmpowering.avif';
import classes from "./page.module.css";
import CoreValues from "@/components/about/CoreValues";
import OurTeam from "@/components/about/OurTeam";

function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
	<div className={classes.topSection}>
		
      <Container size="lg">
        <motion.div {...fadeIn}>
          <Title className={classes.title} order={1}>Quiénes Somos</Title>
        </motion.div>
        
        <Grid gutter={80} justify="center" align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div className={classes.content} {...fadeIn}>
              <Title className={classes.foundationName} order={1}>
                <Text component="span" inherit variant="gradient" gradient={{ from: 'red', to: 'red' }}>Empowering </Text>
                <Text component="span" inherit variant="gradient" gradient={{ from: 'yellow', to: 'yellow' }}>Communities </Text>
                <Text component="span" inherit variant="gradient" gradient={{ from: 'blue', to: 'blue' }}>Foundation </Text>
                <Text component="span" inherit variant="gradient" gradient={{ from: 'red', to: 'blue' }}>(ECF)</Text>
              </Title>
              <Text className={classes.text}>
                Somos una entidad sin ánimo de lucro con sede en Guadalajara de Buga, Colombia. Fundada con el firme propósito de mejorar la calidad de vida de las comunidades. En ECF nos dedicamos a la promoción y ejecución de proyectos que fomentan el bienestar social, la equidad y el desarrollo sostenible. Desde nuestra creación, hemos trabajado incansablemente para ser un catalizador de cambio positivo, colaborando con una amplia gama de agentes sociales, incluyendo ciudadanos, organizaciones no gubernamentales, administraciones públicas, empresas y entidades educativas.
              </Text>
            </motion.div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div className={classes.imageWrapper} {...fadeIn}>
              <img src={Logo} alt="Logo" className={classes.logo} />
              <Text className={classes.logoText}>Empowering Communities Foundation (ECF)</Text>
            </motion.div>
          </Grid.Col>
        </Grid>

        <div className={classes.valuesSection}>
          <Grid gutter={80} justify="center" align="stretch">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div {...fadeIn}>
                <Paper className={classes.valueItem}>
                  <ThemeIcon size={80} radius="md" className={classes.valueIcon} variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
                    <FaLightbulb size={40} />
                  </ThemeIcon>
                  <Title order={3} className={classes.valueTitle}>Nuestra Misión</Title>
                  <Text className={classes.valueText}>
                    Nuestra misión es colaborar con los agentes sociales en procesos integrales, coordinados y sostenibles, orientados al bienestar social desde una perspectiva de edad, género, reorganización de recursos, desarrollo humano, discapacidad, interculturalidad, salud, tecnología, eficacia pública, medioambiente, cooperación al desarrollo y justicia social. Nos esforzamos por crear un impacto duradero y significativo en las comunidades a las que servimos, impulsando proyectos que transforman vidas y promueven la equidad.
                  </Text>
                </Paper>
              </motion.div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div {...fadeIn}>
                <Paper className={classes.valueItem}>
                  <ThemeIcon size={80} radius="md" className={classes.valueIcon} variant="gradient" gradient={{ from: 'cyan', to: 'blue' }}>
                    <FaEye size={40} />
                  </ThemeIcon>
                  <Title order={3} className={classes.valueTitle}>Nuestra Visión</Title>
                  <Text className={classes.valueText}>
                    Aspiramos a ser reconocidos como líderes en la implementación de iniciativas de bienestar social y desarrollo humano. Nos visualizamos como una entidad que inspira y moviliza a otros a unirse a nuestra causa, creando una red de colaboración que multiplique los esfuerzos y maximice los resultados. Nuestra visión es construir un mundo donde todas las personas tengan las oportunidades y los recursos necesarios para prosperar y vivir dignamente.
                  </Text>
                </Paper>
              </motion.div>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
      <div className={classes.coreValuesSection}>
        <CoreValues />
      </div>
      <div >
        <OurTeam />
      </div>
    </div>
  );
}

export default About;