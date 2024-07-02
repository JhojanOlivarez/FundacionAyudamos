import React from 'react';
import HeroAsesoramientos from "@/components/asesoramientos/HeroAsesoramientos";
import Content from "@/components/asesoramientos/Content";
import TalleresAsesoramientos from "@/components/asesoramientos/TalleresAsesoramientos";
import ApoyaAsesoramientos from "@/components/asesoramientos/ApoyaAsesoramientos";

const Asesoramientos = () => {
  return (
    <div>
      <HeroAsesoramientos />
      <Content />
      <TalleresAsesoramientos />
      <ApoyaAsesoramientos />
    </div>
  );
}

export default Asesoramientos;