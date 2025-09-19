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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button,
  Grid,
  AspectRatio,
  VStack,
  Divider,
  Badge,
  IconButton,
  Tooltip,
  Container,
  SimpleGrid,
  Fade,
  ScaleFade,
  useBreakpointValue,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { useState } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { LinkType, Project } from 'utils/constant';

interface CardProps {
  data: Project;
}

const getLinkTypeLabel = (type: LinkType) => {
  switch (type) {
    case 'DEMO':
      return 'Live Demo';
    case 'GITHUB':
      return 'GitHub Repository';
    default:
      return 'External Link';
  }
};

const getLinkTypeColorScheme = (type: LinkType) => {
  switch (type) {
    case 'DEMO':
      return 'blue';
    case 'GITHUB':
    default:
      return 'gray';
  }
};

export default function Card({ data }: CardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const allImages =
    data.images && data.images.length > 0 ? data.images : [data.image];
  const modalSize = useBreakpointValue({ base: 'full', md: '6xl' });

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

  const selectImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <Flex
        mx={{ base: 'auto', lg: '3' }}
        rounded='lg'
        shadow='md'
        bg='white'
        maxW='md'
        flexDir='column'
        mt={5}
        cursor='pointer'
        transition='all 0.2s'
        _hover={{
          transform: 'translateY(-4px)',
          shadow: 'lg',
        }}
        onClick={onOpen}
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
            <Flex mt={3} mb={2}>
              <HStack spacing={3} wrap='wrap'>
                {data.links.map((link, i) => (
                  <Tooltip
                    label={`Visit ${getLinkTypeLabel(link.type)}`}
                    key={`card-link-${data.title}-${i}`}
                    placement='top'
                  >
                    <Link
                      href={link.url}
                      target='_blank'
                      _focus={{ outline: 'none' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <IconButton
                        icon={<Icon as={link.icon} />}
                        aria-label={`Visit ${getLinkTypeLabel(link.type)}`}
                        size='md'
                        variant='ghost'
                        colorScheme='blue'
                        borderRadius='xl'
                        fontSize='xl'
                        transition='all 0.2s'
                        _hover={{
                          bg: 'blue.50',
                          transform: 'translateY(-2px)',
                          shadow: 'md',
                        }}
                        _active={{
                          transform: 'translateY(0)',
                        }}
                      />
                    </Link>
                  </Tooltip>
                ))}
              </HStack>
            </Flex>
            <Text
              mt={2}
              color={useColorModeValue('gray.800', 'gray.400')}
              noOfLines={3}
            >
              {data.description}
            </Text>
          </Box>

          <Box mt={4}>
            <HStack spacing={1} flexWrap='wrap'>
              {data.techs.slice(0, 3).map((tech, i) => (
                <Tag
                  colorScheme='blue'
                  borderRadius='full'
                  fontWeight='bold'
                  size='sm'
                  key={`card-tech-${data.title}-${i}`}
                >
                  {tech}
                </Tag>
              ))}
              {data.techs.length > 3 && (
                <Tag
                  colorScheme='gray'
                  borderRadius='full'
                  fontWeight='bold'
                  size='sm'
                >
                  +{data.techs.length - 3}
                </Tag>
              )}
            </HStack>
          </Box>
        </Box>
      </Flex>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={modalSize}
        scrollBehavior='inside'
      >
        <ModalOverlay bg='blackAlpha.600' backdropFilter='blur(10px)' />
        <ModalContent
          maxW={{ base: '95vw', md: '90vw' }}
          maxH='90vh'
          bg={useColorModeValue('white', 'gray.800')}
          borderRadius='2xl'
          overflow='hidden'
        >
          <ModalHeader
            bg={useColorModeValue('gray.50', 'gray.700')}
            borderBottom='1px'
            borderColor={useColorModeValue('gray.200', 'gray.600')}
          >
            <VStack align='start' spacing={1}>
              <HStack>
                <Text fontSize='3xl' fontWeight='bold'>
                  {data.title}
                </Text>
                <Badge colorScheme='blue' borderRadius='full' px={3} py={1}>
                  {data.person}
                </Badge>
              </HStack>
              <Text fontSize='md' color='gray.500' fontWeight='normal'>
                {data.time}
              </Text>
            </VStack>
          </ModalHeader>
          <ModalCloseButton
            size='lg'
            bg={useColorModeValue('white', 'gray.600')}
            _hover={{ bg: useColorModeValue('gray.100', 'gray.500') }}
          />

          <ModalBody p={0}>
            <Container maxW='full' p={6}>
              <Grid templateColumns={{ base: '1fr', xl: '1fr 1.2fr' }} gap={8}>
                {/* Left Column - Project Info */}
                <VStack align='stretch' spacing={6}>
                  <ScaleFade in={isOpen} initialScale={0.9}>
                    <Box>
                      <Text
                        fontSize='xl'
                        fontWeight='semibold'
                        mb={3}
                        color={useColorModeValue('gray.700', 'gray.200')}
                      >
                        About This Project
                      </Text>
                      <Text
                        fontSize='lg'
                        lineHeight='tall'
                        color={useColorModeValue('gray.600', 'gray.300')}
                      >
                        {data.description}
                      </Text>
                    </Box>
                  </ScaleFade>

                  <Divider />

                  <Fade in={isOpen} delay={0.2}>
                    <Box>
                      <Text
                        fontSize='xl'
                        fontWeight='semibold'
                        mb={4}
                        color={useColorModeValue('gray.700', 'gray.200')}
                      >
                        Tech Stack
                      </Text>
                      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={3}>
                        {data.techs.map((tech, i) => (
                          <Tag
                            key={`modal-tech-${data.title}-${i}`}
                            size='lg'
                            colorScheme='blue'
                            borderRadius='xl'
                            fontWeight='semibold'
                            justifyContent='center'
                            py={2}
                            px={4}
                            transition='transform 0.2s'
                            _hover={{ transform: 'scale(1.05)' }}
                          >
                            {tech}
                          </Tag>
                        ))}
                      </SimpleGrid>
                    </Box>
                  </Fade>

                  <Divider />

                  <Fade in={isOpen} delay={0.3}>
                    <Box>
                      <Text
                        fontSize='xl'
                        fontWeight='semibold'
                        mb={4}
                        color={useColorModeValue('gray.700', 'gray.200')}
                      >
                        Project Links
                      </Text>
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
                        {data.links.map((link, i) => {
                          const linkType = getLinkTypeLabel(link.type);
                          const linkColor = getLinkTypeColorScheme(link.type);

                          return (
                            <Link
                              href={link.url}
                              target='_blank'
                              _hover={{ textDecoration: 'none' }}
                              key={`modal-link-${data.title}-${i}`}
                              w='full'
                            >
                              <Button
                                leftIcon={<Icon as={link.icon} boxSize={5} />}
                                rightIcon={<FaExternalLinkAlt size={14} />}
                                colorScheme={linkColor}
                                variant='outline'
                                size='lg'
                                w='full'
                                // minW='fit-content'
                                px={6}
                                py={6}
                                borderWidth={2}
                                borderRadius='xl'
                                fontWeight='semibold'
                                fontSize='md'
                                _hover={{
                                  transform: 'translateY(-3px)',
                                  shadow: '2xl',
                                  bg: useColorModeValue(
                                    `${linkColor}.50`,
                                    `${linkColor}.900`
                                  ),
                                  borderColor: useColorModeValue(
                                    `${linkColor}.400`,
                                    `${linkColor}.300`
                                  ),
                                }}
                                _active={{
                                  transform: 'translateY(-1px)',
                                }}
                                transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                              >
                                {linkType}
                              </Button>
                            </Link>
                          );
                        })}
                      </SimpleGrid>
                    </Box>
                  </Fade>
                </VStack>

                {/* Right Column - Image Gallery */}
                <VStack align='stretch' spacing={6}>
                  <Fade in={isOpen} delay={0.1}>
                    <Box>
                      <HStack justify='space-between' align='center' mb={4}>
                        <Text
                          fontSize='xl'
                          fontWeight='semibold'
                          color={useColorModeValue('gray.700', 'gray.200')}
                        >
                          Gallery ({allImages.length})
                        </Text>
                        <HStack>
                          <Text fontSize='sm' color='gray.500'>
                            {selectedImageIndex + 1} of {allImages.length}
                          </Text>
                        </HStack>
                      </HStack>

                      {/* Main Image Display */}
                      <Box position='relative' mb={4}>
                        <AspectRatio ratio={16 / 10}>
                          <Image
                            src={allImages[selectedImageIndex]}
                            alt={`${data.title} screenshot ${
                              selectedImageIndex + 1
                            }`}
                            rounded='xl'
                            fit='cover'
                            shadow='2xl'
                            transition='all 0.3s ease'
                          />
                        </AspectRatio>

                        {/* Navigation Arrows */}
                        {allImages.length > 1 && (
                          <>
                            <Tooltip label='Previous Image'>
                              <IconButton
                                icon={<FaChevronLeft />}
                                position='absolute'
                                left={2}
                                top='50%'
                                transform='translateY(-50%)'
                                bg='blackAlpha.700'
                                color='white'
                                _hover={{
                                  bg: 'blackAlpha.800',
                                  transform: 'translateY(-50%) scale(1.1)',
                                }}
                                borderRadius='full'
                                size='lg'
                                onClick={prevImage}
                                aria-label='Previous image'
                              />
                            </Tooltip>
                            <Tooltip label='Next Image'>
                              <IconButton
                                icon={<FaChevronRight />}
                                position='absolute'
                                right={2}
                                top='50%'
                                transform='translateY(-50%)'
                                bg='blackAlpha.700'
                                color='white'
                                _hover={{
                                  bg: 'blackAlpha.800',
                                  transform: 'translateY(-50%) scale(1.1)',
                                }}
                                borderRadius='full'
                                size='lg'
                                onClick={nextImage}
                                aria-label='Next image'
                              />
                            </Tooltip>
                          </>
                        )}
                      </Box>

                      {/* Thumbnail Gallery */}
                      {allImages.length > 1 && (
                        <SimpleGrid
                          columns={{ base: 3, md: 4, lg: 5 }}
                          spacing={2}
                        >
                          {allImages.map((image, i) => (
                            <AspectRatio
                              ratio={16 / 10}
                              key={`thumb-${data.title}-${i}`}
                            >
                              <Image
                                src={image}
                                alt={`${data.title} thumbnail ${i + 1}`}
                                rounded='lg'
                                fit='cover'
                                cursor='pointer'
                                opacity={selectedImageIndex === i ? 1 : 0.6}
                                border={
                                  selectedImageIndex === i
                                    ? '3px solid'
                                    : '2px solid transparent'
                                }
                                borderColor={
                                  selectedImageIndex === i
                                    ? 'blue.400'
                                    : 'transparent'
                                }
                                transition='all 0.2s'
                                _hover={{
                                  opacity: 1,
                                  transform: 'scale(1.05)',
                                  borderColor: 'blue.300',
                                }}
                                onClick={() => selectImage(i)}
                              />
                            </AspectRatio>
                          ))}
                        </SimpleGrid>
                      )}
                    </Box>
                  </Fade>
                </VStack>
              </Grid>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
