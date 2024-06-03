import { useState } from 'react';
import { Container, Group, Burger, Button, Drawer, ScrollArea, Divider, Box, Anchor, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import logo from '../../assets/LogoFundation.avif';

const links = [
  { link: '/Home', label: 'La Fundacion' },
  { link: '/Nosotros', label: 'Nosotros' },
  { link: '/Comunidad', label: 'Comunidad' },
  { link: '/Comoayudar', label: 'Cómo Ayudar' },
];

export function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={`${classes.link} ${active === link.link ? classes.active : ''}`}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <div className={classes.logoContainer}>
          <img src={logo} alt="Logo" className={classes.logo} />
        </div>
        <Group  className={classes.links}>
          {items}
        </Group>
        <Button className={classes.donateButton}>DONÁ AHORA</Button>
        <Burger opened={opened} onClick={open} className={classes.burger} size="sm" />
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        title="Menú"
        padding="md"
        size="full"
        styles={{
          header: {
            backgroundColor: 'white',
            borderBottom: '1px solid #e9ecef',
          },
      
        }}
      >
        <ScrollArea style={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider my="sm" color="#e9ecef" />
          <Box>{items}</Box>
          <Divider my="sm" color="#e9ecef" />
          <Text size="sm" fw={500} className={classes.section}>
            Ayuda
          </Text>
          <Box>
            <Anchor className={classes.link}>Centro de ayuda</Anchor>
            <Anchor className={classes.link}>Blog</Anchor>
          </Box>
        </ScrollArea>
      </Drawer>
    </header>
  );
}

export default Header;