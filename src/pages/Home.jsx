import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  AvatarGroup,
  Box,
  Card,
  Divider,
  Image,
  Text,
  useColorMode
} from '@chakra-ui/react';

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

const AccordionContent = ({ isDark }) => (
  <Box bg={isDark ? "" : 'gray.50'} p='0px'>
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
      {[...Array(7)].map((_, index) => (
        <Image key={index} src={`https://picsum.photos/200/300?random=${8 + index}`} w='350px' h='350px' />
      ))}
    </Box>
  </Box>
);

const Home = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Box gap='10px' display='flex' flexDirection='column' w={{ base: "100vw", md: "80vw", sm: '100vw' }} p={{ base: "10px", md: "10px" }}>
      <Card w="100%">
        <Text p='10px'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis alias optio, maxime, officiis suscipit nam eveniet quam perferendis, facere quos inventore. Deleniti optio, nisi itaque inventore quisquam libero eum ut recusandae aspernatur, sint, in eveniet maiores laudantium id. Ad praesentium accusamus aut minus inventore blanditiis beatae, possimus cumque vero iusto!
        </Text>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "orange.400" }}>
                <Box as='span' color={isDark ? 'white' : 'black'} flex='1' textAlign='left' fontSize='20px'>
                  see more
                </Box>
                <AccordionIcon color={isDark ? 'orange' : 'blue'} />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <AccordionContent isDark={isDark} />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
            <AccordionButton _expanded={{ bg: "orange.400" }}>
                <Box flex='1' textAlign='left' fontSize='20px' color={isDark ? 'white' : "black"}>
                  see more
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <AccordionContent isDark={isDark} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Card>

      <Divider />

      <Card w="100%">
        <Text p='10px'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolore ea quae, atque eaque repudiandae accusantium delectus velit quasi animi soluta nemo laboriosam repellat consequatur aspernatur, minima non quia, blanditiis architecto possimus voluptas a facilis magnam. Adipisci, provident voluptas tempore nostrum laboriosam voluptatibus inventore minima quas sunt quibusdam saepe eos quaerat consequuntur repellat voluptatum similique repudiandae ipsum enim qui eligendi.
        </Text>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
            <AccordionButton _expanded={{ bg: "orange.400" }}>
                <Box flex='1' textAlign='left' fontSize='20px' color={isDark ? 'white' : "black"}>
                  see more
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <AccordionContent isDark={isDark} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Card>
    </Box>
  );
};

export default Home;
