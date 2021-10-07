import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux'

const Home = () => {
  const user = useSelector(state => state.authentication.user)
  return (
    <>
      <Box py={2}>
        <Typography variant="h4">{user?.user ? `Tervetuloa ${user?.user?.firstName}!` :  "Tervetuloa"}</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie placerat euismod. Sed a sollicitudin augue. Nullam efficitur, ex sit amet iaculis porta, ex justo iaculis mauris, a lobortis libero purus ac libero. Ut in suscipit leo. Morbi id eros facilisis, convallis nisi sed, viverra metus. Morbi fermentum sit amet metus vel porta. Mauris at odio rutrum, mattis ligula vitae, aliquam enim. Quisque vel velit sed dui rutrum viverra. Pellentesque eu ligula a neque pellentesque imperdiet.
          Curabitur sit amet auctor velit, ut interdum mi. Aliquam quis mi est. Nulla vitae malesuada est. Maecenas euismod sollicitudin consequat. Maecenas hendrerit finibus tempus. Morbi tempor tellus metus, congue fermentum libero lacinia in. Donec sed fringilla enim. Nullam laoreet eros nibh, sed faucibus nibh venenatis at. Sed gravida erat at elit vulputate, eu pellentesque mauris lobortis. Donec scelerisque, mauris vel scelerisque sodales, urna metus dictum urna, vitae lobortis erat ipsum vitae arcu.
          Nam varius interdum justo a elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas porta ipsum quis dictum finibus. Mauris ut ligula faucibus, ultrices enim sit amet, pulvinar odio. Pellentesque eu volutpat ante. Ut dapibus, nisl scelerisque tincidunt rutrum, lorem neque suscipit ligula, ut aliquet enim velit ac eros. Morbi molestie varius erat, eget laoreet dui gravida eu. Ut molestie convallis elit sit amet suscipit. In commodo lectus vel ex cursus, sed eleifend est viverra. Etiam hendrerit non ante sit amet ornare.
          Vestibulum quis semper nibh, sit amet ultrices odio. In sodales purus vitae justo tempus, eu fringilla mi dapibus. Etiam nunc ligula, tincidunt ac velit nec, fermentum ullamcorper erat. Donec consequat, dolor ac placerat vestibulum, odio turpis finibus massa, id pretium lectus nulla non arcu. Ut sodales nunc leo, vitae convallis urna tristique at. Maecenas rutrum molestie metus at aliquet. Donec finibus ligula diam, ac dapibus neque ornare ut. Nulla tempus, dui nec elementum blandit, mauris diam aliquet dui, sed tempus orci est eu velit.
          Pellentesque sit amet consequat mi. Nunc nisi nibh, semper quis mattis nec, tincidunt at elit. Nunc hendrerit rhoncus quam quis rhoncus. Nunc tincidunt sem libero, at tristique nunc sagittis vel. Morbi mollis, felis quis luctus venenatis, urna ipsum laoreet quam, id egestas arcu tellus et turpis. Vestibulum suscipit non elit in convallis. Proin tempor velit tellus, non sagittis eros mattis eget. Vestibulum orci nisi, laoreet malesuada interdum id, mattis ac elit. Ut ut lobortis eros. Etiam in accumsan tortor.
        </Typography>

      </Box>
    </>
  );
}

export default Home;