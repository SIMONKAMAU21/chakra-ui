import { Box, HStack, List, ListItem, Icon, Input, InputGroup, InputRightElement, Image, useColorMode } from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { InfoIcon, SettingsIcon, EmailIcon, StarIcon, SearchIcon } from '@chakra-ui/icons';
import { FaHome } from 'react-icons/fa';

const Sidebar = () => {
   const [searchQuery, setSearchQuery] = useState('');
   const { colorMode } = useColorMode();
   const isDark = colorMode === 'dark';

   const navigationStyles = {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      marginTop: '60px',
      width: '20%',
      padding: '10px',
      boxShadow: isDark?'5px 5px 10px rgba(4,4,4,0.25)':'5px 5px 10px rgba(0,0,0,0.25)',
      backgroundColor: isDark ? 'gray.800' : 'white',
      color: isDark ? 'white' : 'black',
      zIndex: 500,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
   };

   const linkStyles = {
      display: 'block',
      padding: '10px',
      borderRadius: '0px 20px 20px 0px',
      margin: '5px 0',
      textDecoration: 'none',
      color: isDark ? 'white' : 'black',
   };

   const activeLinkStyles = {
      backgroundColor: isDark ? '#A0AEC0' : '#ccc',
      fontWeight: 'bold',
      color: isDark ? 'black' : 'black',
   };

   const navItems = [
      { to: '/', label: 'Home', icon: FaHome },
      { to: '/about', label: 'About', icon: InfoIcon },
      { to: '/services', label: 'Services', icon: SettingsIcon },
      { to: '/contact', label: 'Contact', icon: EmailIcon },
      { to: '/portfolio', label: 'Portfolio', icon: StarIcon }
   ];

   const filterItems = navItems.filter(item => item.label.toLowerCase().includes(searchQuery.toLowerCase()));

   return (
      <Box sx={navigationStyles}>
         <Box>
            <List>
               {filterItems.length === 0 && (
                  <Box display="flex" flexDirection='column' alignItems="center" h='80vh' justifyContent='center'>
                     <Box mb={2} textAlign="center">
                        NO RESULTS FOUND <SearchIcon boxSize={6} />
                     </Box>
                     <Image src='https://img.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg?t=st=1715967895~exp=1715971495~hmac=97ae457b98e5057782ce9ac471c27057b89562d7d27775a55975ae7b8248e180&w=826' />
                  </Box>
                  
               )}

               {filterItems.map((item) => (
                  <ListItem key={item.to}>
                     <NavLink to={item.to} style={({ isActive }) => isActive ? { ...linkStyles, ...activeLinkStyles } : linkStyles}>
                        <HStack spacing={2}>
                           <Icon as={item.icon} />
                           <Box>{item.label}</Box>
                        </HStack>
                     </NavLink>
                  </ListItem>
               ))}
            </List>
         </Box>
         <Box mb='70px'>
            <InputGroup>
               <InputRightElement>
                  <SearchIcon />
               </InputRightElement>
               <Input
                  placeholder='Type here to search...'
                  value={searchQuery}
                  type='search'
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label='Search navigation items'
               />
            </InputGroup>
         </Box>
      </Box>
   );
};

export default Sidebar;
