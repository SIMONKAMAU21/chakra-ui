import React from 'react';
import Images from '../components/images/Images';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  Stack,
  SimpleGrid,
  Divider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGit, FaDocker } from 'react-icons/fa';
import simon from '../assets/simo.jpg';
import { localImages } from '../utils/imageUtils';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const About = () => {
  const grey=useColorModeValue('blue.400','orange.400')
  const headingStyles = {
    fontSize: {
      base: '20px',
      md: '22px',
      lg: '24px'
    },
    textAlign: 'center',
    w: '100%'
  };

  const imageStyles = {
    w: {
      base: '100%',
      md: '45%'
    },
    h: 'auto',
    objectFit: 'cover',
    borderRadius: 'md',
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3 }
  };
const kamau =localImages()
  return (
    <Box h='100vh' w={{ base: '95vw', md: '80vw' }}  overflowY='auto'>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>About</Tab>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Images</Tab>
        </TabList>

        <TabPanels>
          <TabPanel >
            <VStack alignItems='center' spacing={6}>
              <Card w='100%' boxShadow='lg'>
                <CardHeader>
                  <Heading sx={headingStyles}>
                    About Me
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems='center' gap='10px'>
                    <MotionImage src={simon} alt='Simon Kamau' sx={imageStyles} />
                    <Text fontSize='lg'>
                      Hi, I'm Simon Kamau, a passionate Full Stack Developer with expertise in creating interactive web applications. With a strong background in both front-end and back-end development, I enjoy building solutions that are not only functional but also visually appealing. My journey in software development has equipped me with a diverse set of skills and the ability to adapt to new technologies quickly.
                    </Text>
                  </Flex>
                </CardBody>
              </Card>

              <Card w='100%' boxShadow='lg'>
                <CardHeader>
                  <Heading sx={headingStyles}>
                    Skills
                  </Heading>
                </CardHeader>
                <CardBody>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Stack spacing={3}>
                      <Flex alignItems="center"  p='10px' gap='1rem'>
                        <Icon color={grey} as={FaJs} boxSize={6}  />
                        <Text  >JavaScript</Text>
                      </Flex>
                      <Flex p='10px' alignItems="center"gap='1rem'>
                        <Icon color={grey} as={FaNodeJs} boxSize={6} />
                        <Text  >Express</Text>
                      </Flex>
                      <Flex p='10px' alignItems="center"gap='1rem'>
                        <Icon color={grey} as={FaReact} boxSize={6} />
                        <Text  >React</Text>
                      </Flex>
                    </Stack>
                    <Stack spacing={3}>
                      <Flex p='10px'  alignItems="center"gap='1rem'>
                        <Icon color={grey} as={FaHtml5} boxSize={6} />
                        <Text >HTML</Text>
                      </Flex>
                      <Flex p='10px'  alignItems="center"gap='1rem'>
                        <Icon color={grey}as={FaCss3Alt} boxSize={6} />
                        <Text >CSS/SCSS</Text>
                      </Flex>
                      <Flex p='10px'  alignItems="center"gap='1rem'>
                        <Icon color={grey} as={FaCss3Alt} boxSize={6} />
                        <Text >Chakra Ui</Text>
                      </Flex>
                      <Flex p='10px' alignItems="center"gap='1rem'>
                        <Icon color={grey} as={FaGit} boxSize={6} />
                        <Text  >Git</Text>
                      </Flex>
                      <Flex p='10px' alignItems="center"gap='1rem'>
                        <Icon color={grey} as={FaDocker} boxSize={6} />
                        <Text  >Docker</Text>
                      </Flex>
                    </Stack>
                  </SimpleGrid>
                </CardBody>
              </Card>

              <Card w='100%' boxShadow='lg'>
                <CardHeader>
                  <Heading sx={headingStyles}>
                    Projects
                  </Heading>
                </CardHeader>
                <CardBody>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Box>
                      <Heading size='md'>Project 1</Heading>
                      <Text mt={2}>
                        A brief description of the project. Highlight key features, technologies used, and the impact it had.
                      </Text>
                    </Box>
                    <Box>
                      <Heading size='md'>Project 2</Heading>
                      <Text mt={2}>
                        A brief description of the project. Highlight key features, technologies used, and the impact it had.
                      </Text>
                    </Box>
                  </SimpleGrid>
                </CardBody>
              </Card>

              <Divider />

              <Card w='100%' boxShadow='lg'>
                <CardHeader>
                  <Heading  sx={headingStyles}>
                    Blog Preview
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Flex flexDirection={{ base: 'column', md: 'row' }} gap='10px'>
                    <MotionImage src={kamau[0]} alt='Blog 1' sx={imageStyles} />
                    <Text fontSize='lg'>
                      Exploring the intricacies of modern web development, I delve into the latest trends and technologies that are shaping the industry. From JavaScript frameworks to the nuances of responsive design, join me as I share insights and experiences from my journey as a developer.
                    </Text>
                  </Flex>
                </CardBody>
                <CardBody>
                  <Flex flexDirection={{ base: 'column', md: 'row' }} gap='10px'>
                    <MotionImage src={kamau[1]} alt='Blog 2' sx={imageStyles} />
                    <Text fontSize='lg'>
                      In this post, I discuss the importance of maintaining a healthy work-life balance as a developer. Balancing the demands of coding and personal life can be challenging, but with the right strategies, it's possible to achieve harmony and prevent burnout.
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
            </VStack>
          </TabPanel>
          <TabPanel>
            <Images />
            <Card w='100%' boxShadow='lg'>
              <CardHeader>
                <Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate expedita ipsam cumque, esse fugit assumenda a ullam ut veritatis quod itaque unde ad quo sit magni. Esse consequatur labore repellat?
                </Text>
              </CardHeader>
              <CardBody>
                <MotionImage src={kamau[2]} alt='image 5' sx={imageStyles} />
              </CardBody>
              <CardFooter />
            </Card>
          </TabPanel>
        </TabPanels>
     

      </Tabs>
    </Box>
  );
};

export default About;
