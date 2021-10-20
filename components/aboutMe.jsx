import {
  Text,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import Form from './form';

export default function AboutMe() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          automation process from manual to automatic using the power of code.
          <br />
          <br />I am also open to work on projects regarding website creation.
          Feel free to message me via any of my social media or via this button
        </Text>
        <Button
          mt={4}
          size='sm'
          onClick={onOpen}
          colorScheme='blue'
          _focus={{
            border: 'none',
          }}
        >
          Open Form
        </Button>
        <br />
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Contact Form</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Form />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
}
