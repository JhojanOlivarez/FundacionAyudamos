// /pages/programs/asesoramientos.tsx

import HeroEducacion from "@/components/educacion/HeroEducacion";
import Content from "@/components/educacion/Content";
import ECFEducationTestimonials from "@/components/educacion/ECFEducationTestimonials";
import ApoyoEducacion from "@/components/educacion/ApoyoEducacion";
const educacion = () => {
    return (
      <div>
       <HeroEducacion/>
       <Content/>
       <ECFEducationTestimonials/>
       <ApoyoEducacion/>
      </div>
    );
  }
  
  export default educacion;
  