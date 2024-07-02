import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './ContactUs.module.css';

function ContactUs() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2 ? 'El nombre debe tener al menos 2 caracteres' : null,
      email: (value) => !/^\S+@\S+$/.test(value) ? 'El correo no es válido' : null,
      subject: (value) => value.trim().length === 0 ? 'El asunto es obligatorio' : null,
    },
  });

  return (
    <Container size="md" className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title order={2} className={styles.title}>
          Danos una Opinión
        </Title>
      </motion.div>
      <motion.form 
        onSubmit={form.onSubmit(() => {})} 
        className={styles.form}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Nombre"
            placeholder="Tu nombre"
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Correo Electrónico"
            placeholder="Tu correo"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
          />
        </SimpleGrid>
        <TextInput
          label="Asunto"
          placeholder="Asunto"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps('subject')}
        />
        <Textarea
          mt="md"
          label="Mensaje"
          placeholder="Tu mensaje"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps('message')}
        />
        <Group ta="center" mt="xl">
          <Button type="submit" size="md" className={styles.button}>
            Enviar Mensaje
          </Button>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={styles.socialIcon} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.socialIcon} />
          </a>
        </Group>
      </motion.form>
    </Container>
  );
}

export default ContactUs;
