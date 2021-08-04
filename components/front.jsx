import {
  Image,
  Link,
  Text,
  SimpleGrid,
  Grid,
  GridItem,
  HStack,
  Tag,
  Flex,
  Divider,
  Icon,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
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
          Web Developer
        </Text>
        <Flex justifyContent='center' mt={1}>
          {ICONS.map((icon, i) => (
            <Link
              href={icon.url}
              fontSize='2xl'
              target='_blank'
              key={icon.key}
              mx={2}
              key={`social-media-front-${i}`}
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
