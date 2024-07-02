import React, { useState } from 'react';
import { Container, Group, Burger, Button, Drawer, ScrollArea, Divider, Box, Text, UnstyledButton, Center, ThemeIcon, HoverCard, SimpleGrid, Collapse, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { motion } from 'framer-motion';
import classes from './Header.module.css';
import logo from '@/assets/LogoEmpowering.avif';
import { FaHandshake, FaStethoscope, FaGraduationCap, FaNetworkWired, FaUsers } from 'react-icons/fa';
import { IconChevronDown } from '@tabler/icons-react';
import { navigate } from 'vike/client/router';
import BannerDonation from './home/BannerDonation'; // Import the BannerDonation component

const programs = [
  { link: '/programs/asesoramientos', label: 'ECF Asesoramientos', icon: FaHandshake, color: '#ff6b6b', description: 'Orientación y apoyo legal, financiero y emocional.' },
  { link: '/programs/asistenciaintegral', label: 'ECF Asistencia IntegraL', icon: FaUsers, color: '#FCC003', description: 'Salud mental, alimentación, vivienda y asistencia social.' },
  { link: '/programs/ayudatusalud', label: 'ECF Ayuda tu Salud', icon: FaStethoscope, color: '#48dbfb', description: 'Campañas de salud, consultas médicas y educación.' },
  { link: '/programs/educacion', label: 'ECF Educación', icon: FaGraduationCap, color: '#3FB63B', description: 'Tutorías, becas y formación técnica.' },
  { link: '/programs/conecta', label: 'ECF Conecta', icon: FaNetworkWired, color: '#f368e0', description: 'Redes de apoyo comunitario y voluntariado.' },
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [active, setActive] = useState('/');
  const [donationModalOpened, setDonationModalOpened] = useState(false); // State for donation modal

  const links = programs.map((program) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      key={program.label}
      className={classes.programItem}
      style={{ backgroundColor: program.color }}
    >
      <UnstyledButton className={classes.subLink} onClick={() => navigate(program.link)} style={{ backgroundColor: 'transparent', color: '#fff' }}>
        <Group align="flex-start">
          <ThemeIcon size={34} variant="light" radius="md" className={classes.iconWrapper}>
            <program.icon size="1.4rem" style={{ color: '#fff' }} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500} className={classes.programLabel}>
              {program.label}
            </Text>
            <Text size="xs" className={classes.programDescription}>
              {program.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </motion.div>
  ));

  return (
    <Box className={classes.headerWrapper}>
      <header className={classes.header}>
        <Container size="xl" className={classes.inner}>
          <div className={classes.logoContainer}>
            <img src={logo} alt="Logo" className={classes.logo} />
          </div>
          <Group className={classes.links}>
            <a href="/" className={`${classes.link} ${active === '/' ? classes.active : ''}`} onClick={() => setActive('/')}>
              La Fundación
            </a>
            <a href="/about" className={`${classes.link} ${active === '/about' ? classes.active : ''}`} onClick={() => setActive('/about')}>
              Nosotros
            </a>
            <a href="/voluntariado" className={`${classes.link} ${active === '/voluntariado' ? classes.active : ''}`} onClick={() => setActive('/voluntariado')}>
              Voluntariado
            </a>
          
            <HoverCard width={900} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link} onClick={toggleLinks}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Programas
                    </Box>
                    <IconChevronDown size="1rem" color="#ff6b6b" />
                  </Center>
                </a>
              </HoverCard.Target>
              <HoverCard.Dropdown style={{ overflow: 'hidden' }} className={classes.programsDropdown}>
                <SimpleGrid cols={2} spacing={20}>
                  {links}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
          <Button className={classes.donateButton} onClick={() => setDonationModalOpened(true)}>DONÁ AHORA</Button>
          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.burger} size="sm" />
        </Container>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menú"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider my="sm" color="gray" />
          <Box>
            <a href="/" className={classes.link} onClick={() => setActive('/')}>
              La Fundación
            </a>
            <a href="/about" className={classes.link} onClick={() => setActive('/about')}>
              Nosotros
            </a>
            <a href="/voluntariado" className={classes.link} onClick={() => setActive('/voluntariado')}>
              Voluntariado
            </a>
            <a href="/comoayudar" className={classes.link} onClick={() => setActive('/comoayudar')}>
              Cómo Ayudar
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Programas
                </Box>
                <IconChevronDown size="1rem" />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
          </Box>
          <Divider my="sm" color="gray" />
          <Group ta="center" grow pb="xl" px="md">
            <Button className={classes.donateButton} onClick={() => setDonationModalOpened(true)}>DONÁ AHORA</Button>
          </Group>
        </ScrollArea>
      </Drawer>
      <BannerDonation opened={donationModalOpened} onClose={() => setDonationModalOpened(false)} />
    </Box>
  );
}

export default Header;
