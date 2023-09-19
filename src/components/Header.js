import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar style={{background:'#333333'}}>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div" style={{color:'#FFFFFF',fontFamily: 'Croissant One' }} >
            Sankarsh Rajeev
          </Typography>

          {/* Show options for large screens */}
          {!isSmallScreen && (
            <div className="flex space-x-10" style={{color:'#FFFFFF'}}>
              <a href="#" className="text-white hover:text-lg hover:font-bold" style={{ fontFamily: 'Croissant One' }}>Home</a>
              <a href="#" className="text-white hover:text-lg hover:font-bold"  style={{ fontFamily: 'Croissant One' }}>About</a>
             
              <a href="#" className="text-white hover:text-lg hover:font-bold"  style={{ fontFamily: 'Croissant One' }}>Blog</a>
              <a href="#" className="text-white hover:text-lg hover:font-bold"  style={{ fontFamily: 'Croissant One' }}>Portfolio</a>
              <a href="#" className="text-white hover:text-lg hover:font-bold"  style={{ fontFamily: 'Croissant One' }}>Contact</a>
             
            </div>
          )}

          {/* Show MenuIcon only on small screens */}
          {isSmallScreen && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <div className="w-64 h-full bg-white">
          <ul className="list-none p-4 space-y-2">
            <li><a href="#" className="text-black hover:text-lg hover:font-bold" sx={{ fontFamily: 'Croissant One' }}>Home</a></li>
            <li><a href="#" className="text-black hover:text-lg hover:font-bold">About</a></li>
           
            <li><a href="#" className="text-black hover:text-lg hover:font-bold">Blog</a></li>
            <li><a href="#" className="text-black hover:text-lg hover:font-bold">Portfolio</a></li>
            <li><a href="#" className="text-black hover:text-lg hover:font-bold">Contact</a></li>
            
          </ul>
        </div>
      </Drawer>
    </Box>
  );
}
