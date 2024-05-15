import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box, Image, Spinner } from '@chakra-ui/react';


const Images = () => {
   const [userData, setUserData] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
     const fetchImages = async () => {
       try {
         const responses = await Promise.all([
           axios.get('https://picsum.photos/200/300?random=1'),
           axios.get('https://picsum.photos/200/300?random=2'),
           axios.get('https://picsum.photos/200/300?random=3'),
           axios.get('https://picsum.photos/200/300?random=4'),
           axios.get('https://picsum.photos/200/300?random=5')
         ]);
         setUserData(responses.map(response => response.request.responseURL));
       } catch (error) {
         console.log('error', error);
       } finally {
         setLoading(false);
       }
     };
     fetchImages();
   }, []);
  return (
    <Box>
         <Box display='flex' boxSize='md' p='10px' scrollBehavior='smooth' gap='10px' mt='10px'  overflow='auto' w='99%' justifyContent='space-around' boxShadow='5px 0px 5px 0px rgba(0,0,0,0.25)'>
        {loading ? (
          <Spinner size='xl' thickness='4px' color='blue.500' emptyColor='gray.200'>loading</Spinner>
        ) : (
          userData.map((url, index) => (
            <Image key={index} src={url} alt={`Random image ${index + 1}`} objectFit='cover'  boxShadow='5px 0px 5px 0px rgba(0,0,0,0.25)'/>
          ))
        )}
      </Box>
    </Box>
  )
}

export default Images