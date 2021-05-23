import { Box, Center, Flex, Text } from '@chakra-ui/layout';
import TypeText from '../components/TypeText';

export default function Home() {
  return (
    <Flex
      justifyContent='center'
      verticalAlign='center'
      bgColor='gray.200'
      h='100vh'
      textAlign='center'
    >
      <Box my='auto' w='100%' textAlign='center'>
        <TypeText />
      </Box>
    </Flex>
  );
}
