import { Text, Box, Button, Avatar, HStack, AvatarBadge, IconButton, useColorMode, useTheme } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
   const navigate = useNavigate()
   const { colorMode, toggleColorMode } = useColorMode()
   const theme = useTheme()

   const textStyles = {
      color: "white",
      fontWeight: "600",
      display: 'flex',
      alignItems: 'center',
      letterSpacing: '2px',
      flex: '1'
   }
   
   const sStyles = {
      color: theme.colors.accent.light,
      fontWeight: '900',
      fontSize: '35px'
   }

   const handleLogout = () => {
      navigate('/')
   }

   return (
      <Box
         bg={colorMode === 'light' ? theme.colors.primary.light : theme.colors.primary.dark}
         p='10px'
         display='flex'
         justifyContent='space-between'
         position='fixed'
         top={0}
         width='100%'
         zIndex='1000'
      >
         <Box sx={textStyles}>
            <Text sx={sStyles}>S</Text>
            <Text sx={sStyles}>K</Text>
            <Text>amau</Text>
         </Box>
         <HStack>
            <Avatar name='simon kamau gatuma' bg={theme.colors.accent.light}>
               <AvatarBadge bg='teal' boxSize='1.2em' />
            </Avatar>
            <Button bg={theme.colors.accent.light} color={textStyles.color} onClick={handleLogout}>
               Logout
            </Button>
            <IconButton
               aria-label='Toggle color mode'
               icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
               onClick={toggleColorMode}
               bg={theme.colors.accent.light}
               color={textStyles.color}
            />
         </HStack>
      </Box>
   )
}

export default Navbar
