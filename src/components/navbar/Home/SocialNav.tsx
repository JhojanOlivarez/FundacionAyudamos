import React from 'react';
import { ActionIcon } from '@mantine/core';
import {  IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { BsTwitterX } from "react-icons/bs";
import styles from './SocialNav.module.css';

const SocialNav: React.FC = () => {
  return (
    <div className={styles.socialNav}>
      <div className={`${styles.iconContainer} ${styles.twitter}`}>
        <ActionIcon component="a" href="#" target="_blank" className={styles.icon}>
          <BsTwitterX />
        </ActionIcon>
        <span className={styles.tooltip}>Twitter</span>
      </div>
      <div className={`${styles.iconContainer} ${styles.youtube}`}>
        <ActionIcon component="a" href="#" target="_blank" className={styles.icon}>
          <IconBrandYoutube />
        </ActionIcon>
        <span className={styles.tooltip}>YouTube</span>
      </div>
      <div className={`${styles.iconContainer} ${styles.instagram}`}>
        <ActionIcon component="a" href="#" target="_blank" className={styles.icon}>
          <IconBrandInstagram />
        </ActionIcon>
        <span className={styles.tooltip}>Instagram</span>
      </div>
    </div>
  );
};

export default SocialNav;
