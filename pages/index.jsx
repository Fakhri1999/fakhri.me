import {
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Icon,
} from '@chakra-ui/react';
import Front from '../components/front';
import AboutMe from '../components/aboutMe';
import Projects from '../components/projects';
import { TABS_MENU, PARTICLE } from '../utils/constant';
import Particles from 'react-tsparticles';

export default function Home() {
  return (
    <>
      <Particles
        id='tsparticles'
        options={PARTICLE}
        style={{
          position: 'fixed',
          zIndex: '-10',
        }}
      />
      <Flex
        justifyContent='center'
        verticalAlign='middle'
        alignSelf='center'
        textAlign='center'
        minH='100vh'
        w='100%'
        flexDirection='column'
        mx='auto'
        py='auto'
        borderRadius='md'
      >
        <Tabs isFitted variant='unstyled'>
          <TabList
            position='fixed'
            bottom='5'
            mx='auto'
            width={{ base: '75%', md: '50%', lg: '26%' }}
            left={0}
            right={0}
            bg='gray.800'
            borderRadius='3xl'
            color='white'
            py={3}
            px={{ base: 3, md: 2 }}
            justifyContent='center'
          >
            {TABS_MENU.map((tab, i) => (
              <Tab
                _selected={{
                  bg: 'blue.500',
                  color: 'white',
                  borderRadius: '2xl',
                }}
                _hover={{
                  bg: 'blue.100',
                  color: 'gray.900',
                  borderRadius: '2xl',
                }}
                _focus={{ border: 'none' }}
                key={i}
                borderRadius='2xl'
                mx={{ base: '0', md: '1' }}
                key={`tabs-${i}`}
              >
                <Flex
                  flexDir='column'
                  justifyContent='center'
                  fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                >
                  <Icon as={tab.icon} mx='auto' w='full'></Icon>
                  <Text>{tab.text}</Text>
                </Flex>
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel>
              <Front />
            </TabPanel>
            <TabPanel>
              <AboutMe />
            </TabPanel>
            <TabPanel>
              <Projects />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}
