import {
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
  Text,
  Tag,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Project {
  title: string;
  description: string;
  image: string;
  person: string;
  time: string;
  techs: string[];
  links: {
    url: string;
    icon: IconType;
  }[];
}

interface CardProps {
  data: Project;
}

export default function Card({ data }: CardProps) {
  return (
    <Flex
      mx={{ base: 'auto', lg: '3' }}
      rounded='lg'
      shadow='md'
      bg='white'
      maxW='md'
      flexDir='column'
      mt={5}
    >
      <Image
        roundedTop='lg'
        w='full'
        h={64}
        fit='cover'
        src={data.image}
        alt={data.title}
      />

      <Box p={6}>
        <Box>
          <Text
            display='block'
            color={useColorModeValue('gray.800', 'white')}
            fontWeight='bold'
            fontSize='2xl'
            mt={1}
          >
            {data.title}
          </Text>
          <HStack>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              {data.person} {data.time}
            </Text>
          </HStack>
          <Flex verticalAlign='middle'>
            <HStack spacing={2}>
              {data.links.map((link, i) => (
                <Link
                  href={link.url}
                  fontSize='3xl'
                  target='_blank'
                  _hover={{ color: 'blue.400' }}
                  _focus={{ border: 'none' }}
                  key={`card-link-${data.title}-${i}`}
                >
                  <Icon as={link.icon} mx='auto' w='full'></Icon>
                </Link>
              ))}
            </HStack>
          </Flex>
          <Text mt={2} color={useColorModeValue('gray.800', 'gray.400')}>
            {data.description}
          </Text>
        </Box>

        <Box mt={4}>
          <HStack spacing={1}>
            {data.techs.map((tech, i) => (
              <Tag
                colorScheme='blue'
                borderRadius='full'
                fontWeight='bold'
                key={`card-tech-${data.title}-${i}`}
              >
                {tech}
              </Tag>
            ))}
          </HStack>
        </Box>
      </Box>
    </Flex>
  );
}