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
      <Box m='auto'>
        <TypeText />
      </Box>
    </Flex>
  );
}
