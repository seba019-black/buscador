import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import "./Header.css";




const Header = () =>{
    return (
        <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            <img src="https://cdn-icons-png.flaticon.com/512/888/888851.png?w=360" className="logo" alt="logo" />
               
            </Typography>
            <h3>EL BUSCADOR DE SEBA</h3>
          </Toolbar>
        </AppBar>
      </Box>
    )
}


export default Header;