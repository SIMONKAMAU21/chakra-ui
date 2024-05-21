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
  VStack
} from '@chakra-ui/react';

const About = () => {
  const headingStyles = {
    fontSize: {
      base: '16px',
      md: '18px',
      lg: '20px'
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
    objectFit: 'cover'
  };

  return (
    <Box h='100vh' w={{base:'100vw'}} p={4} overflowY='auto'>
      <Tabs>
        <TabList>
          <Tab>Blogs</Tab>
          <Tab>Images</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <VStack spacing={6}>
              <Card>
                <CardHeader>
                  <Heading sx={headingStyles}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam dolorem aliquam sed voluptatibus minima quia neque odit iusto molestiae. Minus!
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Flex flexDirection={{ base: 'column', md: 'row' }} gap='10px'>
                    <Image src='https://picsum.photos/200/300?random=1' alt='image 1' sx={imageStyles} />
                    <Image src='https://picsum.photos/200/300?random=2' alt='image 2' sx={imageStyles} />
                  </Flex>
                </CardBody>
                <CardFooter>
                  <Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In numquam ullam dolore enim impedit est vero culpa assumenda voluptates iure? Aut doloribus, culpa inventore quas accusantium eaque minus neque excepturi expedita!
                  </Text>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Heading sx={headingStyles}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam alias repudiandae, iure dicta similique ea dignissimos corporis perferendis quasi assumenda.
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Flex flexDirection={{ base: 'column', md: 'row' }} gap='10px'>
                    <Image src='https://picsum.photos/200/300?random=3' alt='image 3' sx={imageStyles} />
                    <Image src='https://picsum.photos/200/300?random=4' alt='image 4' sx={imageStyles} />
                  </Flex>
                </CardBody>
                <CardFooter>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolore, voluptatum nesciunt accusantium natus tempora. Quidem accusantium, est, ducimus optio eius nesciunt aut fugiat, consequuntur corrupti maxime magnam veniam doloremque adipisci hic delectus veritatis quod repellendus consequatur ratione vero explicabo.
                  </Text>
                </CardFooter>
              </Card>
            </VStack>
          </TabPanel>
          <TabPanel>
            <Images />
            <Card>
              <CardHeader>
                <Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate expedita ipsam cumque, esse fugit assumenda a ullam ut veritatis quod itaque unde ad quo sit magni. Esse consequatur labore repellat?
                </Text>
              </CardHeader>
              <CardBody>
                <Image src='https://picsum.photos/200/300?random=5' alt='image 5' sx={imageStyles} />
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
