import { Container, Title, Text, Grid, ThemeIcon } from '@mantine/core';
import { FaHandshake, FaLightbulb, FaUsers, FaLeaf, FaBook, FaFlask, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './CoreValues.module.css';

function CoreValues() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const items = [
    { icon: <FaHandshake />, title: 'Integridad', text: 'Actuamos con transparencia y honestidad en todas nuestras acciones.' },
    { icon: <FaUsers />, title: 'Compromiso Social', text: 'Nos dedicamos profundamente a la causa del bienestar comunitario.' },
    { icon: <FaLightbulb />, title: 'Innovación', text: 'Buscamos constantemente nuevas formas de abordar los desafíos sociales.' },
    { icon: <FaUsers />, title: 'Inclusión', text: 'Promovemos la igualdad y el respeto por la diversidad en todas nuestras iniciativas.' },
    { icon: <FaLeaf />, title: 'Sostenibilidad', text: 'Trabajamos para asegurar que nuestros proyectos tengan un impacto positivo y duradero.' },
  ];

  const approachItems = [
    { icon: <FaHandshake />, title: 'Colaboración Estratégica', text: 'Establecemos alianzas con ciudadanos, ONG, administraciones públicas, empresas y entidades educativas para maximizar el impacto de nuestros proyectos.' },
    { icon: <FaBook />, title: 'Desarrollo de Capacidades', text: 'Ofrecemos capacitación y recursos a las comunidades para que puedan asumir un papel activo en su propio desarrollo.' },
    { icon: <FaFlask />, title: 'Innovación Social', text: 'Implementamos soluciones innovadoras que abordan problemas complejos de manera eficiente y sostenible.' },
    { icon: <FaChartBar />, title: 'Evaluación y Mejora Continua', text: 'Evaluamos continuamente el impacto de nuestros proyectos y ajustamos nuestras estrategias para asegurar resultados óptimos.' },
  ];

  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <Container size="lg">
          <Title className={styles.title}>
            Nuestros Valores
          </Title>
          <Text className={styles.subtitle}>
            Los valores que guían nuestro trabajo son:
          </Text>
          <Grid className={styles.valueGrid} gutter={40}>
            {items.map((item, index) => (
              <Grid.Col span={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <motion.div
                  className={styles.valueItem}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className={styles.valueCircle}>
                    <ThemeIcon size="xl" radius="md" className={styles.valueIcon}>
                      {item.icon}
                    </ThemeIcon>
                  </div>
                  <Title className={styles.valueTitle} order={3}>
                    {item.title}
                  </Title>
                  <Text className={styles.valueText}>
                    {item.text}
                  </Text>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </section>

      <section className={styles.section} style={{ backgroundColor: '#f5f5f5' }}>
        <Container size="lg">
          <Title className={styles.title} order={2}>
            Nuestro Enfoque
          </Title>
          <Text className={styles.subtitle}>
            En ECF, abordamos los desafíos sociales a través de una metodología integral que incluye:
          </Text>
          <Grid className={styles.approachGrid} gutter={30}>
            {approachItems.map((item, index) => (
              <Grid.Col span={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  className={styles.approachItem}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <ThemeIcon size="xl" radius="md" className={styles.approachIcon}  color="lime.4" autoContrast>
                    {item.icon}
                  </ThemeIcon>
                  <Title className={styles.approachTitle} order={3}>
                    {item.title}
                  </Title>
                  <Text className={styles.approachText}>
                    {item.text}
                  </Text>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </section>
    </div>
  );
}

export default CoreValues;
