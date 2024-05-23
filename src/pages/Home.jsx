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
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import simon from '../assets/simo.jpg';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const Home = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const bgGradient = useColorModeValue('linear(to-r, blue.900, orange.500)', 'linear(to-r, orange.400, blue.400)');

  return (
    <Box
      position='relative'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      minHeight='100vh'
      bgSize='cover'
      bgPosition='center'
      p={{ base: '10px', md: '20px' }}
    >
      <Box
        position='absolute'
        top='0'
        left='0'
        right='0'
        bottom='0'
        bgGradient='rgba(0, 0, 0, 0.6)'
      ></Box>
      <MotionBox
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        zIndex='1'
        textAlign='center'
        justifyContent='center'
        alignItems='center' 
      >

          
        <MotionImage
          borderRadius='full'
          boxSize={{ base: '200px', md: '300px' }}
          src={simon}
          alt='Simon Kamau'
          mb={4}
          ml='20%'
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <VStack spacing={4} align="center">
          <Heading as='h1' size='2xl' bgGradient={bgGradient} bgClip='text'>
            Simon Kamau
          </Heading>
          <Text fontSize='lg' maxW='600px' fontWeight='bold'>
            Full Stack Developer passionate about creating interactive applications and experiences on the web.
          </Text>
          <HStack spacing='20px' mt={4}>
            <Link href="https://github.com" isExternal>
              <IconButton icon={<FaGithub />} aria-label="GitHub" variant='outline' colorScheme='teal' />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" variant='outline' colorScheme='teal' />
            </Link>
            <Link href="mailto:simogatuma21@gmail.com">
              <IconButton icon={<FaEnvelope />} aria-label="Email" variant='outline' colorScheme='teal' />
            </Link>
          </HStack>
        </VStack>

      </MotionBox>
    </Box>
  );
};

export default Home;
