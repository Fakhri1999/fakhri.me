import {
  Image,
  Link,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { ICONS } from '../utils/constant';

export default function Front() {
  return (
    <>
      <Flex flexDir='column' my='auto'>
        <Image
          src='/images/profile.png'
          boxSize='150px'
          border='3px'
          borderColor='white'
          borderRadius='full'
          mx='auto'
        ></Image>
        <Text fontWeight='bold' fontSize={{ base: '2xl', lg: '4xl' }} mt={4}>
          M Fakhri Imaduddin
        </Text>
        <Text fontSize={{ base: 'md', lg: 'xl' }} fontWeight='medium'>
          Full Stack Engineer
        </Text>
        <Flex justifyContent='center' mt={1}>
          {ICONS.map((icon, i) => (
            <Link
              href={icon.url}
              fontSize='2xl'
              target='_blank'
              key={`social-media-front-${i}`}
              mx={2}
              _hover={{ color: 'blue.500' }}
              _focus={{ border: 'none' }}
            >
              <Icon as={icon.icon}></Icon>
            </Link>
          ))}
        </Flex>
      </Flex>
    </>
  );
}