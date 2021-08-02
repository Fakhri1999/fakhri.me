import { Text, Container } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
export default function AboutMe() {
  return (
    <>
      <Text fontSize='3xl' fontWeight='bold'>
        About Me
      </Text>
      <Container maxW='container.md'>
        <Text textAlign='left'>
          My name is Muhammad Fakhri Imaduddin based in Malang, Indonesia. I
          think code is something awesome where people turn something manual
          into automatic. And I feel happy when I can help people in doing that
          automation process from manual to automatic using the power of code
        </Text>
      </Container>
    </>
  );
}
