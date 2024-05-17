import { Box, HStack, List, ListItem, Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { InfoIcon, SettingsIcon, EmailIcon, StarIcon, SearchIcon } from '@chakra-ui/icons';
import { FaHome } from 'react-icons/fa'; 

const Sidebar = () => {
   const [searchQuery,setSearchQury]=useState('')
   const navigationStyles = {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      marginTop: '60px',
      width: '20%',
      padding: '10px',
      boxShadow: '5px 5px 10px rgba(0,0,0,0.25)',
      backgroundColor: 'white',
      zIndex: 500,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
   };
   const linkStyles = {
      display: 'block',
      padding: '10px',
      borderRadius: '4px',
      margin: '5px 0',
      textDecoration: 'none',
      color: 'black', 
   };

   const activeLinkStyles = {
      backgroundColor: 'rgba(0, 0,124, 0.1)',
      fontWeight: 'bold',
      color: 'black'
   };

   const navItems = [
      { to: '/', label: 'Home', icon: FaHome },
      { to: '/about', label: 'About', icon: InfoIcon },
      { to: '/services', label: 'Services', icon: SettingsIcon },
      { to: '/contact', label: 'Contact', icon: EmailIcon },
      { to: '/portfolio', label: 'Portfolio', icon: StarIcon }
   ];
   const filterItems=navItems.filter(item=>item.label.toLowerCase().includes(searchQuery.toLowerCase()))

   return (
      <Box sx={navigationStyles}>
       
         <Box>
         <List>
            {filterItems.map((item) => (
               <ListItem key={item.to}>
                  <NavLink to={item.to} exact style={({ isActive }) => isActive ? { ...linkStyles, ...activeLinkStyles } : linkStyles}>
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
         <InputGroup >
         <InputRightElement>
         <SearchIcon/>
         </InputRightElement>
         <Input placeholder='serach...'
         value={searchQuery}
         onChange={(e)=>setSearchQury(e.target.value)}
         />
         </InputGroup>
         </Box>
      </Box>
   );
};

export default Sidebar;
