import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, AvatarGroup, Box,  Image,  Text ,useColorMode, useTheme} from '@chakra-ui/react';
import React from 'react';
import Images from '../components/images/Images';

const Home = () => {
  const {colorMode}=useColorMode()
  const isDark=colorMode==='dark'
  


  return (
    <Box >
      <Accordion allowToggle>
      <AccordionItem>
      <h2>
      <AccordionButton _expanded={{bg:"orange.400"}}>
      <Box flex='1' textAlign='left'>
      see more
      </Box>
      <AccordionIcon/>
      </AccordionButton>
      </h2>
      <AccordionPanel>
        
        <Box bg={isDark?"":'gray.50'} p='10px'>
        <Text bg={isDark?"":'gray.150'} p='10px' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit quos sapiente rerum suscipit repellendus doloremque dolores aspernatur illum harum dolor iste deserunt omnis consectetur consequuntur, cumque ratione! At, corrupti?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla odit error in quidem at culpa, perferendis tempore ipsum magni debitis sint facilis molestiae earum impedit ut exercitationem fugiat laudantium eos cupiditate deserunt aut nam repellendus. Provident ullam corrupti adipisci voluptas, sed eum quo natus accusamus fugiat, excepturi temporibus nostrum id?
        </Text>        
        <AvatarGroup>
          <Avatar name='simon kamau' src='https://picsum.photos/200/300?random=5' />
          <Avatar name='peninah gatuma'src='https://picsum.photos/200/300?random=6' />
          <Avatar name='naomi gatuma'src='https://picsum.photos/200/300?random=7' />
        </AvatarGroup>
       <Box display='flex' gap='10px' mt='10px' justifyContent='space-between'>
       <Image src='https://picsum.photos/200/300?random=1' w='350px' h='350px'/>
        <Image src='https://picsum.photos/200/300?random=2'w='350px' h='350px'/>
        <Image src='https://picsum.photos/200/300?random=3'w='350px' h='350px'/>
        <Image src='https://picsum.photos/200/300?random=4'w='350px' h='350px'/>
        <Image src='https://picsum.photos/200/300?random=5'w='350px' h='350px'/>
        <Image src='https://picsum.photos/200/300?random=6'w='350px' h='350px'/>
        <Image src='https://picsum.photos/200/300?random=7'w='350px' h='350px'/>
       </Box>
      </Box>
      </AccordionPanel>
      </AccordionItem>
      
      
      </Accordion>
      <Accordion allowToggle>
      <AccordionItem>
      <h2>
      <AccordionButton _expanded={{bg:"orange.400"}}>
      <Box flex='1' textAlign='left'>
      see more
      </Box>
      <AccordionIcon/>
      </AccordionButton>
      </h2>
      <AccordionPanel>
        
        <Box bg={isDark?"":'gray.50'} p='10px'>
        <Text bg={isDark?"":'gray.150'} p='10px' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit quos sapiente rerum suscipit repellendus doloremque dolores aspernatur illum harum dolor iste deserunt omnis consectetur consequuntur, cumque ratione! At, corrupti?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla odit error in quidem at culpa, perferendis tempore ipsum magni debitis sint facilis molestiae earum impedit ut exercitationem fugiat laudantium eos cupiditate deserunt aut nam repellendus. Provident ullam corrupti adipisci voluptas, sed eum quo natus accusamus fugiat, excepturi temporibus nostrum id?
        </Text>        
        <AvatarGroup>
          <Avatar name='simon kamau' src='https://picsum.photos/200/300?random=5' />
          <Avatar name='peninah gatuma'src='https://picsum.photos/200/300?random=6' />
          <Avatar name='naomi gatuma'src='https://picsum.photos/200/300?random=7' />
        </AvatarGroup>
       <Box display='flex' gap='10px' mt='10px' justifyContent='space-between'>
       <Image src='https://picsum.photos/200/300?random=1' w='350px' h='350px'/>
        <Image src='https://picsum.photos/200/300?random=2'w='350px' h='350px'/>
        <Image src='https://picsum.photos/200/300?random=3'w='350px' h='350px'/>
        <Image src='https://picsum.photos/200/300?random=4'w='350px' h='350px'/>
        <Image src='https://picsum.photos/200/300?random=5'w='350px' h='350px'/>
        <Image src='https://picsum.photos/200/300?random=6'w='350px' h='350px'/>
        <Image src='https://picsum.photos/200/300?random=7'w='350px' h='350px'/>
       </Box>
      </Box>
      </AccordionPanel>
      </AccordionItem>
      
      
      </Accordion>
       </Box>
  );
};

export default Home;
