import { Text, Box, Button, Avatar, HStack, AvatarBadge } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
   const navigate = useNavigate()
   const text = {
      color: "white",
      fontWeight: "600",
      display: 'flex',
      alignItems: 'center',
      letterSpacing: '2px',
      flex: '1'
   }
   const s = {
      color: 'orange',
      fontWeight: '900',
      fontSize: '35px'
   }
   const handleLogout = () => {
      navigate('/')
   }
   return (
      <Box
         bg='rgba(0, 0, 124, 1)'
         p='10px'
         display='flex'
         justifyContent='space-between'
         position='fixed'
         top={0}
         width='100%'
         zIndex='1000'
      >
         <Box sx={text}>
            <Text sx={s}
            >S</Text>
            <Text
               sx={s}>K</Text>
            <Text >amau</Text>
         </Box>
         <Box>
            <HStack>
               <Avatar name='simon kamau gatuma' bg={s.color}>
                  <AvatarBadge bg='teal' boxSize='1.2em' />
               </Avatar>
               <Button bg={s.color} color={text.color} onClick={handleLogout}>
                  logout
               </Button>
            </HStack>
         </Box>
      </Box>
   )
}

export default Navbar
