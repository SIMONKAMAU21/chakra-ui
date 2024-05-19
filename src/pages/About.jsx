import React from 'react'
import Images from '../components/images/Images'
import { Box, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'

const About = () => {
  const heading = {
    fontSize: {
      base: '2px',
      md: "18px",
      sm: "10px"
    },
    overflow: "hidden",
    alignItems:"center",
    flex:"1",
    justifyContent:'space-between',
    display:"flex",
    w:{
      base:'40%',
      md:"20%",
      sm:"30%"
    },
    h:{
      base:"40%",
      md:'30%',
      sm:"30%"
    }
  }
  const image={
    w:{
      base:"350px",
      md:'550px',
      sm:"250px"
    },
    h:{
      base:"350px",
      md:'350px',
      sm:"250px"
    }
  }

  return (
    <Box h='100vh' w='80vw' >
      <Tabs>
        <TabList>
          <Tab>Blogs</Tab>
          <Tab>Images</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
          <VStack>
          <Flex gap='10px'display={heading.display} justifyContent={heading.justifyContent} >
              <Card sx={heading}>
                <CardHeader>
                  <Heading fontSize={heading.fontSize}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam dolorem aliquam sed voluptatibus minima quia neque odit iusto molestiae. Minus! </Heading>
                </CardHeader>
                <CardBody>
                  <Flex gap='10px'>
                    <Image src='https://picsum.photos/200/300?random=1' alt='my image' sx={image}/>
                    <Image src='https://picsum.photos/200/300?random=2' alt='my image' sx={image}/>
                  </Flex>
                </CardBody>
                <CardFooter>
                  <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In numquam ullam dolore enim impedit est vero culpa assumenda voluptates iure? Aut doloribus, culpa inventore quas accusantium eaque minus neque excepturi expedita! Nemo earum officia corrupti dolor sit fugiat asperiores aspernatur voluptatum ipsam temporibus dignissimos, perspiciatis vero aperiam eos repudiandae modi magnam natus iusto maxime excepturi neque. Impedit voluptatibus sit provident qui aspernatur vitae, ipsa quos amet earum delectus aliquam vel?</Text>
                </CardFooter>
              </Card>
              <Card sx={heading}>
                <CardHeader>
                  <Heading fontSize={heading.fontSize}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam alias repudiandae, iure dicta similique ea dignissimos corporis perferendis quasi assumenda. </Heading>
                </CardHeader>
                <CardBody>
                  <Flex gap='10px'>
                    <Image src='https://picsum.photos/200/300?random=3' alt='my image' w='650px' h='350px'/>
                    <Image src='https://picsum.photos/200/300?random=4' alt='my image' w='650px' h='350px'/>
                  </Flex>
                </CardBody>
                <CardFooter>
                  <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In numquam ullam dolore enim impedit est vero culpa assumenda voluptates iure? Aut doloribus, culpa inventore quas accusantium eaque minus neque excepturi expedita! Nemo earum officia corrupti dolor sit fugiat asperiores aspernatur voluptatum ipsam temporibus dignissimos, perspiciatis vero aperiam eos repudiandae modi magnam natus iusto maxime excepturi neque. Impedit voluptatibus sit provident qui aspernatur vitae, ipsa quos amet earum delectus aliquam vel?</Text>
                </CardFooter>
              </Card>
            </Flex>
          </VStack>
          </TabPanel>
          <TabPanel>
            <Images />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default About