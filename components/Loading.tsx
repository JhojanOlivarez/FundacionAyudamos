import React, { useEffect, useState } from 'react';
import { Center, Image, Loader } from '@mantine/core';
import styles from './Loading.module.css';
import logo from '../src/assets/LogoEmpowering.avif'; // Asegúrate de que la extensión sea correcta

const Loading: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Center style={{ height: '100vh', flexDirection: 'column' }}>
        <Image src={logo} alt="Logo" width={100} mb={20} className={styles.logo} />
        <Loader />
      </Center>
    );
  }

  return null;
};

export default Loading;
