import React from 'react';
import { Text, Container, ActionIcon, Group, rem, Image, Tooltip, Button, Box, Divider } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandFacebook, IconMail, IconArrowUp } from '@tabler/icons-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import classes from './Footer.module.css';
import LogoImage from '@/assets/LogoEmpowering.avif';

const socialLinks = [
  { icon: IconBrandTwitter, label: 'Twitter', color: '#1DA1F2' },
  { icon: IconBrandYoutube, label: 'YouTube', color: '#FF0000' },
  { icon: IconBrandInstagram, label: 'Instagram', color: '#E1306C' },
  { icon: IconBrandFacebook, label: 'Facebook', color: '#4267B2' },
  { icon: IconMail, label: 'Email', color: '#D44638' },
];

const footerLinks = [
  { title: 'Nosotros', links: ['Misión', 'Visión', 'Equipo', 'Historia'] },
  { title: 'Programas', links: ['Educación', 'Asesoramientos', 'Desarrollo Comunitario', 'Salud'] },
  { title: 'Comunidad', links: ['Voluntariado', 'Donaciones', 'Eventos', 'Blog'] },
  { title: 'Legal', links: ['Términos de Uso', 'Política de Privacidad', 'Cookies'] },
];

export function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={classes.footer} ref={ref}>
      <Container size="lg">
        <motion.div
          className={classes.inner}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
        >
          <motion.div
            className={classes.logoSection}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
          >
            <Image src={LogoImage} alt="Logo" width={200} className={classes.logo} />
            <Text size="lg" c="dimmed" mt="md"  color="blue" className={classes.slogan}>
              Empoderando comunidades para un futuro mejor
            </Text>
            <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} size="md" mt="xl" className={classes.contactButton}>
              Contáctanos
            </Button>
          </motion.div>

          <div className={classes.linksSection}>
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                className={classes.linkGroup}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -20 },
                }}
              >
                <Text className={classes.linkTitle}>{section.title}</Text>
                {section.links.map((link) => (
                  <Text<'a'>
                    key={link}
                    className={classes.link}
                    component="a"
                    href="#"
                    onClick={(event) => event.preventDefault()}
                  >
                    {link}
                  </Text>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Divider my="xl" />

        <motion.div
          className={classes.afterFooter}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          initial="hidden"
          animate={controls}
        >
          <Text c="dimmed" size="sm">
            © 2024 Empowering Communities Foundation. Todos los derechos reservados.
          </Text>

          <Group gap="xs" className={classes.social} justify="flex-end" wrap="nowrap">
            {socialLinks.map((link) => (
              <Tooltip key={link.label} label={link.label} withArrow position="top">
                <ActionIcon size="lg" variant="subtle" className={classes.socialIcon} style={{ color: link.color }}>
                  <link.icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                </ActionIcon>
              </Tooltip>
            ))}
          </Group>
        </motion.div>
      </Container>
      
      <motion.div
        className={classes.scrollTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
      >
        <IconArrowUp size={24} />
      </motion.div>
    </footer>
  );
}

export default Footer;