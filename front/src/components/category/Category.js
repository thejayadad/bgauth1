import React from 'react'
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { useEffect } from 'react'
import { useState } from 'react'


const Category = () => {


    const categories =[
        {id: 1, label: "Sport", icon: <SportsBasketballIcon size={24} />, },
        {id: 1, label: "Sport", icon: <SportsBasketballIcon size={24} />, },
        {id: 1, label: "Sport", icon: <SportsBasketballIcon size={24} />, },
        {id: 1, label: "Sport", icon: <SportsBasketballIcon size={24} />, },
        {id: 1, label: "Sport", icon: <SportsBasketballIcon size={24} />, },
        {id: 1, label: "Sport", icon: <SportsBasketballIcon size={24} />, },
        {id: 1, label: "Sport", icon: <SportsBasketballIcon size={24} />, },
        {id: 1, label: "Sport", icon: <SportsBasketballIcon size={24} />, },
        {id: 1, label: "Sport", icon: <SportsBasketballIcon size={24} />, },
        {id: 1, label: "Sport", icon: <SportsBasketballIcon size={24} />, },
        {id: 1, label: "Sport", icon: <SportsBasketballIcon size={24} />, },
        {id: 1, label: "Sport", icon: <SportsBasketballIcon size={24} />, },



    ]
  return (
    <Container maxWidth="xl">
         <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          px: { xs: 0, md: 2 },
          alignItems: 'center',
          mt: 2,
          mb: 2,
        }}
      >


        <Tabs
            variant="scrollable"
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
            {
                categories.map((tab) => {
                    return <Tab key={tab.id} icon={tab.icon} label={tab.label} />;
                })
            }


            </Tabs>
            <Button
          sx={{
            display: { xs: 'none', md: 'block' },
            border: '1px solid #ddd',
            minWidth: 90,
            justifyContent: 'space-between',
            borderRadius: 2,
            textTransform: 'capitalize',
            py: 1,
            color: 'theme.palette.text.primary',
          }}
        >
          Filters
        </Button>
      </Box>

    </Container>
  )
}

export default Category