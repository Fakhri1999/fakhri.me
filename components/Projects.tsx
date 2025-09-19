import { Flex, Text } from '@chakra-ui/react';
import Card from './Card';
import { PROJECTS } from '../utils/constant';

export default function Projects() {
  return (
    <Flex flexDir='column'>
      <Text textAlign='center' fontSize='3xl' fontWeight='bold'>
        Projects
      </Text>
      <Text textAlign='center'>Click each card to see more details</Text>
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
    </Flex>
  );
}
