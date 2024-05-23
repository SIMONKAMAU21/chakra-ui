import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern web applications.'
  },
  {
    title: 'Mobile Development',
    description: 'Creating mobile applications for Android and iOS platforms.'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-friendly and aesthetically pleasing interfaces.'
  },
  {
    title: 'SEO Optimization',
    description: 'Improving website visibility on search engines.'
  },
  {
    title: 'Digital Marketing',
    description: 'Creating and managing digital marketing campaigns.'
  },
  {
    title: 'Cloud Solutions',
    description: 'Providing cloud infrastructure and services.'
  }
];

const Service = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('blue.600', 'orange.400');

  return (
    <Box p='5px' w={{ base: '90vw', md: '90vw', lg: '80vw' }} mx="auto">
      <Heading as="h1" mb={8} textAlign="center" color={textColor}>
        My Services
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {services.map((service, index) => (
          <Card key={index} bg={cardBg} boxShadow="md" borderRadius="md">
            <CardHeader>
              <Heading as="h3" size="md" color={textColor}>
                {service.title}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>{service.description}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Service;
