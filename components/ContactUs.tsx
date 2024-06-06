import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
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
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (

    <Container size="md" className={styles.container}>
      <Title order={2} className={styles.title}>
        Danos una Opinion
      </Title>
      <form onSubmit={form.onSubmit(() => {})} className={styles.form}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
          />
        </SimpleGrid>
        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps('subject')}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps('message')}
        />
        <Group align="center" mt="xl">
          <Button type="submit" size="md" className={styles.button}>
            Enviar Mensaje
          </Button>
          <FaFacebook className={styles.socialIcon} />
          <FaInstagram className={styles.socialIcon} />
        </Group>
      </form>
    </Container>

  );
}

export default ContactUs;