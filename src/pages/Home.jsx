import { Avatar, AvatarGroup, Box, Image, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Images from '../components/images/Images';

const Home = () => {


  return (
    <Box gap='10px'>
      <Box bg='orange' p='10px'>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla odit error in quidem at culpa, perferendis tempore ipsum magni debitis sint facilis molestiae earum impedit ut exercitationem fugiat laudantium eos cupiditate deserunt aut nam repellendus. Provident ullam corrupti adipisci voluptas, sed eum quo natus accusamus fugiat, excepturi temporibus nostrum id?
        </Text>
        <hr />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde inventore nisi harum, eaque veniam atque aliquid eum quas deserunt magnam, vel aut quisquam fuga alias quia optio saepe est, voluptates et quam corporis accusamus praesentium temporibus! Aliquam quas possimus et ab pariatur voluptate dolorem molestias doloribus reprehenderit autem nemo sit quaerat repellendus illum, quasi alias iste enim voluptatem. Illo iusto et repellat quasi aperiam accusamus libero animi at placeat deserunt numquam eligendi corporis debitis sed earum iure enim porro, incidunt facere eveniet ex unde magnam nam? Enim, non? Quasi corporis quidem magnam iure iusto, corrupti eligendi et veniam distinctio reiciendis temporibus illo placeat voluptatibus doloremque neque rerum provident amet id, deserunt voluptatum fuga esse nemo nesciunt ratione? Asperiores, veritatis pariatur id voluptas quam quasi. Pariatur accusantium numquam sint ipsa expedita eligendi incidunt aliquam obcaecati, exercitationem autem aperiam error iusto? Quibusdam, nulla alias? Aspernatur magnam veniam sit reiciendis magni commodi voluptatem itaque libero! Libero architecto, qui ipsam temporibus minima debitis porro ipsum! Ipsum corporis officiis quo saepe id assumenda! Cumque soluta suscipit fugit itaque dolores praesentium perferendis labore, nobis et numquam qui magnam excepturi nesciunt dicta deserunt tempora, incidunt minus expedita enim eligendi. Repellat temporibus explicabo, voluptate voluptatibus minus vitae illo error totam excepturi neque, facere perspiciatis asperiores vero consequatur a voluptatum! Totam, corporis. Autem omnis, quia eius quibusdam, fugiat laborum placeat vero praesentium quasi distinctio officia culpa ut rerum aspernatur, dignissimos blanditiis a expedita! Rem hic cumque voluptates est enim tempora totam quidem cum excepturi, tempore quam corrupti porro, dolorem facilis itaque, error architecto? Magni ipsam, praesentium perferendis rem neque quibusdam corrupti pariatur eaque in error deserunt quam. Tempora officia culpa rem blanditiis odit beatae non. Architecto laudantium aspernatur sint assumenda, tempore est minima rerum ipsa illo molestiae accusantium doloribus dolorum quidem reprehenderit facilis magni quaerat id ipsam dolore, eligendi eos fuga in quod aliquam. Adipisci enim necessitatibus aperiam consequatur, dolores molestiae laboriosam at accusantium nemo. Veniam omnis cupiditate numquam sit atque ipsum doloribus asperiores libero. Alias vel et porro eveniet, eos autem repellendus totam magni tempora, unde, dignissimos perspiciatis hic quaerat numquam illo inventore! Dolor quisquam consequuntur quibusdam saepe tempore corrupti quaerat eligendi eum. Reiciendis blanditiis eos accusantium sint? Exercitationem odio delectus numquam, deserunt a eligendi quo molestias autem quasi enim alias iste veniam et earum praesentium laboriosam dignissimos commodi nulla fugiat modi! Blanditiis aut sunt quisquam illo, dolor placeat porro voluptate provident corporis! Beatae aut eaque facilis dicta itaque sed totam sunt dolorum quibusdam! Officiis dolor a facere possimus soluta repellendus minus ipsum eius. Exercitationem voluptatibus iste, culpa perferendis molestiae sequi ipsa incidunt nisi non! Et debitis, alias voluptatem accusamus fugit tenetur a dolore! Blanditiis omnis eos aliquid maiores? Excepturi corporis, voluptatem aliquid illum est doloribus asperiores ex nam totam veniam molestiae officiis exercitationem ratione iusto modi delectus! Veritatis corporis voluptatibus ea explicabo delectus saepe ab. Odio illum exercitationem vel sunt! Esse temporibus eaque in dolorum necessitatibus laudantium molestiae ratione. Fuga, dolores perspiciatis iure itaque dignissimos optio praesentium ducimus? Exercitationem molestias non dolores aperiam facere eaque earum.
        </Text>
        <AvatarGroup>
          <Avatar name='simon kamau' src='https://picsum.photos/200/300?random=5' />
          <Avatar name='peninah gatuma'src='https://picsum.photos/200/300?random=6' />
          <Avatar name='naomi gatuma'src='https://picsum.photos/200/300?random=7' />
        </AvatarGroup>
      </Box>
   
      <Images/>
    </Box>
  );
};

export default Home;
