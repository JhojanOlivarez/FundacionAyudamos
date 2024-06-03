
import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import classes from "./HeroHome.module.css";

 function HeroHome() {


  return (
    <div>
      <div className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, .65) 80%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.container} size="md">
        <Title className={classes.title}>
            
              Ayudar Depende De Todos
          
          </Title>

           <Text className={classes.description} size="xl" mt="xl">
            En nuestra fundación, creemos que cada persona tiene el poder de hacer una diferencia positiva en el mundo. Únete a nosotros y sé parte del cambio que quieres ver. Tu apoyo nos permite llevar esperanza y ayuda a quienes más lo necesitan.
          </Text>
          <div
            style={{
              width: "100%",
              justifyItems: "right",
            }}
          >
             <Button
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
              size="lg"
              radius="xl"
              style={{
                justifySelf: "right",
              }}
              className={classes.control}
            >
              Quiero Ayudar
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
export default HeroHome