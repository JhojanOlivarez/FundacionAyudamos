import React from 'react';
import { Container, Title, Text } from '@mantine/core';
import Content from "@/components/comoayudar/Content";
import Voluntariado from "@/components/comoayudar/Voluntariado";
import Colaboracion from "@/components/comoayudar/Colaboracion";
const Comoayudar = () => {
  return (
    <div>
    <Content/>
    <Voluntariado/>
    <Colaboracion/>
    </div>


  );
};

export default Comoayudar;
