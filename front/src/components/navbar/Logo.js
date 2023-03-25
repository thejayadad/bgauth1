import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {flexCenter} from "../../themes/commonStyles.js"

const Logo = () => {
  return (
    <Box sx={flexCenter}>

      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: '20px',
          fontWeight: 'bold',
        }}
        component="h3"
      >
        BLOG SPOT
      </Typography>
    </Box>
  )
}

export default Logo