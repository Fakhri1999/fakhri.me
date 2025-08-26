import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
  Alert,
  AlertIcon,
  AlertDescription,
} from '@chakra-ui/react';

interface FormData {
  name?: string;
  contact?: string;
  details?: string;
}

export default function Form() {
  const [data, setData] = useState<FormData>({});
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [alertStatus, setAlertStatus] = useState<'success' | 'error'>('success');
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((oldValue) => ({ ...oldValue, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsAlertShown(false);
    setIsLoading(true);
    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message);
      }
      
      setAlertStatus('success');
      setAlertText(result.message);
      formRef.current?.reset();
    } catch (error) {
      setAlertStatus('error');
      setAlertText(error instanceof Error ? error.message : 'An error occurred');
    }
    setIsLoading(false);
    setIsAlertShown(true);
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      {isAlertShown && (
        <Alert status={alertStatus}>
          <AlertIcon />
          <AlertDescription>{alertText}</AlertDescription>
        </Alert>
      )}
      <FormControl mt={3}>
        <FormLabel>Name</FormLabel>
        <Input
          name='name'
          type='text'
          onChange={handleChange}
          placeholder='Name'
          required
          autoFocus
        />
        <FormHelperText mt={1}>
          Can be your nickname / everything as long I can call you with a name
        </FormHelperText>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Contact</FormLabel>
        <Input
          name='contact'
          type='text'
          onChange={handleChange}
          placeholder='Contact'
          required
        />
        <FormHelperText mt={1}>
          Can be your email / discord / everything as long it's active
        </FormHelperText>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Details</FormLabel>
        <Textarea
          name='details'
          onChange={handleChange}
          placeholder='Details'
          required
        />
        <FormHelperText mt={0}>
          You can write here everything you want to discuss with me
        </FormHelperText>
      </FormControl>
      <Button
        isLoading={isLoading}
        colorScheme='blue'
        float='right'
        type='submit'
        mt={2}
        mb={3}
        _focus={{
          border: 'none',
        }}
      >
        Submit
      </Button>
    </form>
  );
}