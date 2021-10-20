import { useState, useRef } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import axios from 'axios';

export default function Form() {
  const [data, setData] = useState({});
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [alertStatus, setAlertStatus] = useState('success');
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((oldValue) => ({ ...oldValue, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsAlertShown(false);
    setIsLoading(true);
    try {
      const result = await axios({
        url: '/api/form',
        method: 'POST',
        data,
      });
      setAlertStatus('success');
      setAlertText(result.data.message);
      formRef.current.reset();
    } catch (error) {
      setAlertStatus('error');
      setAlertText(error.response.data.message);
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
