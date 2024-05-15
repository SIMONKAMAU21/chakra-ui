import { Box, HStack, List, ListItem, Icon } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { InfoIcon, SettingsIcon, EmailIcon, StarIcon } from '@chakra-ui/icons';
import { FaHome } from 'react-icons/fa'; 

const Sidebar = () => {
   const navigationStyles = {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      marginTop:'60px',
      width: "20%",
      padding: '10px',
      boxShadow: "5px 5px 10px rgba(0,0,0,0.25)",
      backgroundColor: 'white', 
      zIndex: 500, 
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

   return (
      <Box sx={navigationStyles}>
         <List>
            {navItems.map((item) => (
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
   );
};

export default Sidebar;
