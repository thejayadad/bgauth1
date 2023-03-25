import React from 'react'
import Logo from './Logo'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {
    flexBetweenCenter,
    dFlex,
    displayOnDesktop,
} from "../../themes/commonStyles.js"
import Header from './Header';

const Navbar = () => {
  return (
    <Box
    sx={{
      display: "flex",
      minHeight: 70,
      borderBottom: '1px solid #ddd',
    }}
  >
  <Container maxWidth="xl">
    <Box
        sx={{
            display: "flex",
            minHeight: 90,
            justifyContent: "space-between",
            px: 4,
          }}
        >

        <Logo />
        <Logo />
        <Logo />

        </Box>

</Container>
    </Box>
  )
}

export default Navbar