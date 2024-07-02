import React from 'react';
import { Container, Title, Text, Paper, Box, SimpleGrid, Button } from '@mantine/core';
import { useMediaQuery, useIntersection } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { IconInfoCircle, IconBook, IconScale, IconBriefcase, IconUsers, IconHeart } from '@tabler/icons-react';
import classes from './TalleresAsesoramientos.module.css';

const workshops = [
  {
    icon: IconBook,
    title: "Sesiones Educativas Temáticas",
    text: "Organizar sesiones educativas gratuitas sobre temas relevantes para la comunidad, como derechos legales, educación financiera, desarrollo personal y profesional, y salud y bienestar. Invitar a expertos en cada área para proporcionar información detallada y responder preguntas de los participantes.",
    whatsappLink: "https://wa.me/3226650405?text=Hola%20quiero%20asesoramiento%20del%20taller%20Sesiones%20Educativas%20Temáticas%20📚😊%20Estoy%20muy%20interesado!"
  },
  {
    icon: IconHeart,
    title: "Talleres Prácticos para el Desarrollo Personal y Profesional",
    text: "Facilitar talleres prácticos sobre habilidades blandas y desarrollo personal, tales como habilidades de comunicación, gestión del tiempo, y resolución de conflictos. Ofrecer talleres enfocados en el desarrollo profesional, como la preparación para entrevistas de trabajo, la elaboración de currículums, y el desarrollo de habilidades de liderazgo.",
    whatsappLink: "https://wa.me/3226650405?text=Hola%20quiero%20asesoramiento%20del%20taller%20Talleres%20Prácticos%20para%20el%20Desarrollo%20Personal%20y%20Profesional%20💼🧠%20Estoy%20muy%20interesado!"
  },
  {
    icon: IconScale,
    title: "Clínicas Legales y Asesoramiento Jurídico",
    text: "Organizar clínicas legales gratuitas donde abogados voluntarios brinden asesoramiento legal y orientación sobre temas legales relevantes para la comunidad. Proporcionar recursos informativos y asistencia legal en áreas como derechos del consumidor, derechos laborales, y asuntos de vivienda.",
    whatsappLink: "https://wa.me/3226650405?text=Hola%20quiero%20asesoramiento%20del%20taller%20Clínicas%20Legales%20y%20Asesoramiento%20Jurídico%20⚖️📜%20Estoy%20muy%20interesado!"
  },
  {
    icon: IconBriefcase,
    title: "Asesoramiento Empresarial para Emprendedores",
    text: "Ofrecer sesiones de asesoramiento empresarial para emprendedores locales, proporcionando orientación sobre cómo iniciar y hacer crecer un negocio de manera sostenible. Brindar apoyo en áreas como la planificación estratégica, la gestión financiera, el marketing digital, y el acceso a financiamiento.",
    whatsappLink: "https://wa.me/3226650405?text=Hola%20quiero%20asesoramiento%20del%20taller%20Asesoramiento%20Empresarial%20para%20Emprendedores%20📈🚀%20Estoy%20muy%20interesado!"
  },
  {
    icon: IconUsers,
    title: "Eventos de Networking y Colaboración",
    text: "Organizar eventos de networking donde los miembros de la comunidad puedan conectarse con empresarios locales, representantes de organizaciones sin fines de lucro, y expertos en diferentes áreas. Facilitar la formación de alianzas y colaboraciones para promover el intercambio de recursos y el crecimiento económico local.",
    whatsappLink: "https://wa.me/3226650405?text=Hola%20quiero%20asesoramiento%20del%20taller%20Eventos%20de%20Networking%20y%20Colaboración%20🤝🌐%20Estoy%20muy%20interesado!"
  },
  {
    icon: IconInfoCircle,
    title: "Programas de Mentoría y Tutoría",
    text: "Implementar programas de mentoría que conecten a individuos con mentores experimentados en campos relevantes, proporcionando orientación personalizada y apoyo. Facilitar la tutoría académica y profesional para estudiantes locales, ayudándoles a alcanzar sus metas educativas y profesionales.",
    whatsappLink: "https://wa.me/3226650405?text=Hola%20quiero%20asesoramiento%20del%20taller%20Programas%20de%20Mentoría%20y%20Tutoría%20👩‍🏫👨‍🏫%20Estoy%20muy%20interesado!"
  },
  {
    icon: IconHeart,
    title: "Campañas de Concientización y Educación Comunitaria",
    text: "Llevar a cabo campañas de concientización sobre temas de interés para la comunidad, como la prevención de la violencia, la igualdad de género, y la salud pública. Organizar eventos educativos y sesiones de capacitación para aumentar la conciencia y promover la participación activa de los miembros de la comunidad.",
    whatsappLink: "https://wa.me/3226650405?text=Hola%20quiero%20asesoramiento%20del%20taller%20Campañas%20de%20Concientización%20y%20Educación%20Comunitaria%20📢🌍%20Estoy%20muy%20interesado!"
  },
  {
    icon: IconInfoCircle,
    title: "Taller sobre Derechos y Procedimientos de Comparendos",
    text: "Organizar un taller informativo donde se expliquen los derechos de los ciudadanos en relación con los comparendos y las opciones disponibles para impugnarlos o solicitar su eliminación. Proporcionar orientación sobre cómo redactar y presentar un derecho de petición ante las autoridades competentes solicitando la eliminación del comparendo, destacando fundamentos legales y procedimientos adecuados.",
    whatsappLink: "https://wa.me/3226650405?text=Hola%20quiero%20asesoramiento%20del%20taller%20Taller%20sobre%20Derechos%20y%20Procedimientos%20de%20Comparendos%20📝⚖️%20Estoy%20muy%20interesado!"
  },
  {
    icon: IconBook,
    title: "Asesoramiento Legal Individualizado",
    text: "Ofrecer sesiones de consulta individual con abogados especializados en derecho administrativo para revisar casos específicos de comparendos y brindar asesoramiento legal personalizado sobre las mejores estrategias para abordarlos.",
    whatsappLink: "https://wa.me/3226650405?text=Hola%20quiero%20asesoramiento%20del%20taller%20Asesoramiento%20Legal%20Individualizado%20🧑‍⚖️📜%20Estoy%20muy%20interesado!"
  },
  {
    icon: IconBriefcase,
    title: "Asistencia en la Solicitud de Citas Médicas",
    text: "Establecer un servicio de apoyo para ayudar a los ciudadanos a solicitar citas médicas con los proveedores de salud locales. Proporcionar orientación sobre la documentación requerida y los procedimientos para programar citas médicas, incluyendo la asistencia en la preparación de cartas de solicitud y la comunicación con las instituciones de salud.",
    whatsappLink: "https://wa.me/3226650405?text=Hola%20quiero%20asesoramiento%20del%20taller%20Asistencia%20en%20la%20Solicitud%20de%20Citas%20Médicas%20📝🏥%20Estoy%20muy%20interesado!"
  },
  {
    icon: IconHeart,
    title: "Talleres sobre Organización de Historias Clínicas",
    text: "Realizar talleres prácticos sobre cómo organizar y mantener historias clínicas personales de manera efectiva y ordenada. Proporcionar consejos sobre cómo recopilar y archivar documentos médicos importantes, cómo mantener un registro de tratamientos y medicamentos, y cómo acceder fácilmente a la información médica cuando sea necesario.",
    whatsappLink: "https://wa.me/3226650405?text=Hola%20quiero%20asesoramiento%20del%20taller%20Talleres%20sobre%20Organización%20de%20Historias%20Clínicas%20📁🩺%20Estoy%20muy%20interesado!"
  },
  {
    icon: IconInfoCircle,
    title: "Apoyo con Data Salud",
    text: "Colaborar con proveedores de salud locales para ofrecer acceso a plataformas o herramientas digitales que permitan a los ciudadanos organizar sus historias clínicas de manera electrónica y presentable. Proporcionar capacitación sobre cómo utilizar estas herramientas de manera efectiva y cómo garantizar la seguridad y privacidad de la información médica.",
    whatsappLink: "https://wa.me/3226650405?text=Hola%20quiero%20asesoramiento%20del%20taller%20Apoyo%20con%20Data%20Salud%20📱💾%20Estoy%20muy%20interesado!"
  }
];

const WorkshopCard: React.FC<{ workshop: typeof workshops[0], index: number }> = ({ workshop, index }) => {
  const { ref, entry } = useIntersection({
    threshold: 0.1,
    rootMargin: '0px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={entry?.isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={classes.cardWrapper}
    >
      <Paper
        shadow="md"
        p="xl"
        radius="lg"
        className={classes.workshopCard}
      >
        <div className={classes.iconWrapper}>
          <workshop.icon size={48} className={classes.workshopIcon} />
        </div>
        <Title order={3} className={classes.workshopTitle}>{workshop.title}</Title>
        <Text size="sm" className={classes.workshopText}>{workshop.text}</Text>
        <div className={classes.buttonContainer}>
          <a href={workshop.whatsappLink} className={classes.workshopButtonLink}>
            <Button 
              variant="outline" 
              size="md" 
              radius="md" 
              className={classes.workshopButton}
            >
              Quiero Asesoramiento
            </Button>
          </a>
        </div>
      </Paper>
    </motion.div>
  );
};

const TalleresAsesoramientos: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Box className={classes.wrapper}>
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title className={classes.mainTitle}>
            Talleres de Asesoramiento
          </Title>
        </motion.div>

        <Text className={classes.subtitle}>
          Ofrecemos una variedad de talleres diseñados para proporcionar asesoramiento y recursos valiosos a nuestra comunidad. Participa en nuestras sesiones educativas, clínicas legales, y eventos de networking para obtener el apoyo que necesitas.
        </Text>

        <SimpleGrid 
          cols={isMobile ? 1 : 2}
          spacing={isMobile ? "md" : "xl"}
          className={classes.missionGrid}
        >
          {workshops.map((workshop, index) => (
            <WorkshopCard key={index} workshop={workshop} index={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default TalleresAsesoramientos;
