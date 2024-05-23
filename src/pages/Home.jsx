import React from 'react';
import {
  Box,
  Image,
  Text,
  useColorMode,
  VStack,
  Heading,
  HStack,
  Link,
  IconButton,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import simon from '../assets/simo.jpg';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const Home = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      minHeight='100vh'
      p={{ base: '10px', md: '20px' }}
      bg={isDark ? 'gray.800' : 'gray.100'}
    >
      <VStack spacing='20px'>
        <MotionImage
          borderRadius='full'
          boxSize={{ base: '200px', md: '300px' }}
          src={simon}
          alt='Simon Kamau'
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <Heading as='h1' size='2xl'>
          Simon Kamau
        </Heading>
        <Text fontSize='lg' textAlign='center'>
          Full Stack Developer passionate about creating interactive applications and experiences on the web.
        </Text>
        <HStack spacing='20px'>
          <Link href="https://github.com" isExternal>
            <IconButton icon={<FaGithub />} aria-label="GitHub" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" />
          </Link>
          <Link href="mailto:email@example.com">
            <IconButton icon={<FaEnvelope />} aria-label="Email" />
          </Link>
        </HStack>
      </VStack>
    </MotionBox>
  );
};

export default Home;
