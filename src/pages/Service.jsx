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
  {key:"1",
    title: 'Web Development',
    description: 'Building responsive and modern web applications.'
  },
  {key:"2",
    title: 'Mobile Development',
    description: 'Creating mobile applications for Android and iOS platforms.'
  },
  {
    key:"3",
    title: 'UI/UX Design',
    description: 'Designing user-friendly and aesthetically pleasing interfaces.'
  },
  {key:"4",
    title: 'SEO Optimization',
    description: 'Improving website visibility on search engines.'
  },
  {key:"5",
    title: 'Digital Marketing',
    description: 'Creating and managing digital marketing campaigns.'
  },
  {key:"6",
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
    <Box p={8}>
      <Heading as="h1" mb={8} textAlign="center" color={textColor}>
        Our Services
      </Heading>
      <SimpleGrid columns={[1, null, 2, 3]} spacing={8}>
        {services.map((service) => (
          <Card key={service.key} bg={cardBg} boxShadow="md" borderRadius="md">
            <CardHeader>
              <Heading as="h3" size="md"  color={textColor}>
                {service.title}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text >{service.description}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Service;
