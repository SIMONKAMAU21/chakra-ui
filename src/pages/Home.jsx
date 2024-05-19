import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, AvatarGroup, Box, Card, Divider, Image, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';

const Home = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const scrollBoxStyles = {
    display: 'flex',
    gap: '10px',
    mt: '10px',
    justifyContent: 'space-between',
    overflow: 'auto',
    '::-webkit-scrollbar': {
      width: '0px', 
    },
    '-ms-overflow-style': 'none', 
    'scrollbar-width': 'none', 
  };

  return (
    <Box gap='10px' display='flex' flexDirection='column'>
      <Card>
        <Text p='10px'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis alias optio, maxime, officiis suscipit nam eveniet quam perferendis, facere quos inventore. Deleniti optio, nisi itaque inventore quisquam libero eum ut recusandae aspernatur, sint, in eveniet maiores laudantium id. Ad praesentium accusamus aut minus inventore blanditiis beatae, possimus cumque vero iusto!
        </Text>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "green.100" }}>
                <Box as='span' color={isDark ? 'orange' : 'blue'} flex='1' textAlign='left' fontSize='20px'>
                  see more
                </Box>
                <AccordionIcon color={isDark ? 'orange' : 'blue'} />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Box bg={isDark ? "" : 'gray.50'} p='10px'>
                <Text bg={isDark ? "" : 'gray.150'} p='10px'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit quos sapiente rerum suscipit repellendus doloremque dolores aspernatur illum harum dolor iste deserunt omnis consectetur consequuntur, cumque ratione! At, corrupti?
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla odit error in quidem at culpa, perferendis tempore ipsum magni debitis sint facilis molestiae earum impedit ut exercitationem fugiat laudantium eos cupiditate deserunt aut nam repellendus. Provident ullam corrupti adipisci voluptas, sed eum quo natus accusamus fugiat, excepturi temporibus nostrum id?
                </Text>
                <AvatarGroup>
                  <Avatar name='simon kamau' src='https://picsum.photos/200/300?random=5' />
                  <Avatar name='peninah gatuma' src='https://picsum.photos/200/300?random=6' />
                  <Avatar name='naomi gatuma' src='https://picsum.photos/200/300?random=7' />
                </AvatarGroup>
                <Box sx={scrollBoxStyles}>
                  <Image src='https://picsum.photos/200/300?random=8' w='350px' h='350px' />
                  <Image src='https://picsum.photos/200/300?random=9' w='350px' h='350px' />
                  <Image src='https://picsum.photos/200/300?random=10' w='350px' h='350px' />
                  <Image src='https://picsum.photos/200/300?random=11' w='350px' h='350px' />
                  <Image src='https://picsum.photos/200/300?random=12' w='350px' h='350px' />
                  <Image src='https://picsum.photos/200/300?random=15' w='350px' h='350px' />
                  <Image src='https://picsum.photos/200/300?random=16' w='350px' h='350px' />
                </Box>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Card>
      <Divider />
      <Card>
        <Text p='10px'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolore ea quae, atque eaque repudiandae accusantium delectus velit quasi animi soluta nemo laboriosam repellat consequatur aspernatur, minima non quia, blanditiis architecto possimus voluptas a facilis magnam. Adipisci, provident voluptas tempore nostrum laboriosam voluptatibus inventore minima quas sunt quibusdam saepe eos quaerat consequuntur repellat voluptatum similique repudiandae ipsum enim qui eligendi.
        </Text>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "green.100" }}>
                <Box flex='1' textAlign='left' fontSize='20px' color={isDark ? 'orange' : "blue"}>
                  see more
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Box bg={isDark ? "" : 'gray.50'} p='10px'>
                <Text bg={isDark ? "" : 'gray.150'} p='10px'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit quos sapiente rerum suscipit repellendus doloremque dolores aspernatur illum harum dolor iste deserunt omnis consectetur consequuntur, cumque ratione! At, corrupti?
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla odit error in quidem at culpa, perferendis tempore ipsum magni debitis sint facilis molestiae earum impedit ut exercitationem fugiat laudantium eos cupiditate deserunt aut nam repellendus. Provident ullam corrupti adipisci voluptas, sed eum quo natus accusamus fugiat, excepturi temporibus nostrum id?
                </Text>
                <AvatarGroup>
                  <Avatar name='simon kamau' src='https://picsum.photos/200/300?random=5' />
                  <Avatar name='peninah gatuma' src='https://picsum.photos/200/300?random=6' />
                  <Avatar name='naomi gatuma' src='https://picsum.photos/200/300?random=7' />
                </AvatarGroup>
                <Box sx={scrollBoxStyles}>
                  <Image src='https://picsum.photos/200/300?random=1' w='350px' h='350px' />
                  <Image src='https://picsum.photos/200/300?random=2' w='350px' h='350px' />
                  <Image src='https://picsum.photos/200/300?random=3' w='350px' h='350px' />
                  <Image src='https://picsum.photos/200/300?random=4' w='350px' h='350px' />
                  <Image src='https://picsum.photos/200/300?random=5' w='350px' h='350px' />
                  <Image src='https://picsum.photos/200/300?random=6' w='350px' h='350px' />
                  <Image src='https://picsum.photos/200/300?random=7' w='350px' h='350px' />
                </Box>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Card>
    </Box>
  );
};

export default Home;
