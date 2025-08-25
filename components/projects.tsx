import {
  Flex,
  Text,
} from '@chakra-ui/react';
import Card from './card';
import { PROJECTS } from '../utils/constant';

export default function Projects() {
  return (
    <>
      <Text textAlign='center' fontSize='3xl' fontWeight='bold'>
        Projects
      </Text>
      <Flex
        w='full'
        justifyContent='center'
        textAlign='left'
        wrap='wrap'
        flexDir={{ base: 'column', lg: 'row' }}
        pb={70}
        mb={5}
      >
        {PROJECTS.map((project, i) => (
          <Card data={project} key={`card-${project.title}-${i}`} />
        ))}
      </Flex>
    </>
  );
}