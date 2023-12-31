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
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

import { Link } from 'react-router-dom';
import Home from '../pages/Home';




export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);

  const handleContactClick = () => {
    setModalShow(true);
  };

  const handleContactClick2 = () => {
    setOpen(false);
    setModalShow2(true);

  };


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
        <Toolbar style={{ background: '#333333' }}>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div" style={{ color: '#FFFFFF', fontFamily: 'Croissant One' }} >
            Sankarsh Rajeev
          </Typography>

          {/* Show options for large screens */}
          {!isSmallScreen && (
            <div className="flex space-x-10" style={{ color: '#FFFFFF' }}>
              <Link to='/' className="text-white hover:text-lg hover:font-bold" style={{ fontFamily: 'Croissant One' }}>Home</Link>
              <Link to='/about' className="text-white hover:text-lg hover:font-bold" style={{ fontFamily: 'Croissant One' }}>About</Link>

              <Link to="/blog" className="text-white hover:text-lg hover:font-bold" style={{ fontFamily: 'Croissant One' }}>
                Blog
              </Link>
              <Link to="/portfolio" className="text-white hover:text-lg hover:font-bold" style={{ fontFamily: 'Croissant One' }}>
                Portfolio
              </Link>
              <Link className="text-white hover:text-lg hover:font-bold" style={{ fontFamily: 'Croissant One' }} onClick={handleContactClick}>Contact</Link>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

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
            <li><Link to="/" className="text-black hover:text-lg hover:font-bold" sx={{ fontFamily: 'Croissant One' }} onClick={handleDrawerClose}>Home</Link></li>
            <li><Link to="/about" className="text-black hover:text-lg hover:font-bold" onClick={handleDrawerClose}>About</Link></li>

            <li><Link to='/blog' className="text-black hover:text-lg hover:font-bold" onClick={handleDrawerClose}>Blog</Link></li>
            <li><Link to="/portfolio" className="text-black hover:text-lg hover:font-bold" onClick={handleDrawerClose}>Portfolio</Link></li>
            <li><Link  className="text-black hover:text-lg hover:font-bold" onClick={handleContactClick2} >Contact</Link></li>
            <MyVerticallyCenteredModal
              show={modalShow2}
              onHide={() => setModalShow2(false)}
            />
          </ul>
        </div>
      </Drawer>

    </Box>


  );
}
