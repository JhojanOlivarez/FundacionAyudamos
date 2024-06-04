import { Title, Grid, ThemeIcon, Container, Text } from "@mantine/core";
import { FaLightbulb, FaEye } from "react-icons/fa";
import Logo from '@/assets/LogoFundation.avif';
import classes from "./AboutHome.module.css";


export default function Page() {
  return (
 <div className={classes.wrapper}>
      <Container size="lg">
        <Title className={classes.title} order={1}>Quiénes Somos</Title>
        <Grid gutter={80} justify="center" align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <div className={classes.content}>
              <Title className={classes.subtitle} order={2}>Empowering Communities Foundation (ECF)</Title>
              <Text className={classes.text} ta="justify">
                Somos una entidad sin ánimo de lucro con sede en Guadalajara de Buga, Colombia. Fundada con el firme propósito de mejorar la calidad de vida de las comunidades. En ECF nos dedicamos a la promoción y ejecución de proyectos que fomentan el bienestar social, la equidad y el desarrollo sostenible. Desde nuestra creación, hemos trabajado incansablemente para ser un catalizador de cambio positivo, colaborando con una amplia gama de agentes sociales, incluyendo ciudadanos, organizaciones no gubernamentales, administraciones públicas, empresas y entidades educativas.
              </Text>
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <div className={classes.imageWrapper}>
              <img src={Logo} alt="Logo" className={classes.logo} />
            </div>
          </Grid.Col>
        </Grid>

        <div className={classes.valuesSection}>
          <Grid gutter={80} justify="center" align="start">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <div className={classes.valueItem}>
                <ThemeIcon size="xl" radius="md" className={classes.valueIcon}>
                  <FaLightbulb />
                </ThemeIcon>
                <Title order={3} className={classes.valueTitle}>Nuestra Misión</Title>
                <Text className={classes.valueText} ta="justify">
                  Nuestra misión es colaborar con los agentes sociales en procesos integrales, coordinados y sostenibles, orientados al bienestar social desde una perspectiva de edad, género, reorganización de recursos, desarrollo humano, discapacidad, interculturalidad, salud, tecnología, eficacia pública, medioambiente, cooperación al desarrollo y justicia social. Nos esforzamos por crear un impacto duradero y significativo en las comunidades a las que servimos, impulsando proyectos que transforman vidas y promueven la equidad.
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <div className={classes.valueItem}>
                <ThemeIcon size="xl" radius="md" className={classes.valueIcon}>
                  <FaEye />
                </ThemeIcon>
                <Title order={3} className={classes.valueTitle}>Nuestra Visión</Title>
                <Text className={classes.valueText} ta="justify">
                  Aspiramos a ser reconocidos como líderes en la implementación de iniciativas de bienestar social y desarrollo humano. Nos visualizamos como una entidad que inspira y moviliza a otros a unirse a nuestra causa, creando una red de colaboración que multiplique los esfuerzos y maximice los resultados. Nuestra visión es construir un mundo donde todas las personas tengan las oportunidades y los recursos necesarios para prosperar y vivir dignamente.
                </Text>
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
