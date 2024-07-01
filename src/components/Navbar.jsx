import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const NavMenu = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MobileMenu = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
}));

const Navbar = () => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({});

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
    setMobileMenuOpen(false);
  };

  const handleSubMenuToggle = (index) => {
    setOpenSubMenu((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const menuItems = [
    {
      label: 'Welding Machineries',
      subItems: [
        { label: 'Welding Machine', path: '/welding-machine' },
        { label: 'Welding Consumables', path: '/welding-consumable' },
      ],
    },
    {
      label: 'Dent Pullers',
      subItems: [
        { label: 'Dent Pulling Machines', path: '/dent-pullers' },
        { label: 'Consumables', path: '/consumables' },
      ],
    },
    {
      label: 'Other Machineries',
      subItems: [
        { label: 'Plasma Cutters', path: '/plasma-cutters' },
        { label: 'Compressors', path: '/compressors' },
        { label: 'Industrial Vacuum Cleaner', path: '/vaccum-cleaner' },
      ],
    },
    {
      label: 'Spare Parts',
      subItems: [
        { label: 'Welding Service Parts', path: '/welding-serive-parts' },
        { label: 'Mig Spare Parts', path: '/mig-spare-parts' },
      ],
    },
    { label: 'Stock Advisory and Investment', path: '/stock' },
  ];

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <img
              src={'https://i.postimg.cc/cCXw9Hx1/Whats-App-Image-2024-06-29-at-14-28-51.jpg'}
              alt="Logo"
              style={{ height: '60px', width: '150px', marginTop: '8px', marginRight:'50px'}}
            />
          </Typography>

          <NavMenu>
            {menuItems.map((item, index) => (
              <Box key={index}>
                {item.subItems ? (
                  <>
                    <Button
                      color="inherit"
                      onClick={(e) => handleMenuOpen(e)}
                      aria-controls={`simple-menu-${index}`}
                      aria-haspopup="true"
                    >
                      {item.label}
                    </Button>
                    <Menu
                      id={`simple-menu-${index}`}
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl) && anchorEl.getAttribute('aria-controls') === `simple-menu-${index}`}
                      onClose={handleMenuClose}
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <MenuItem key={subIndex} component={Link} to={subItem.path} onClick={handleMenuClose}>
                          {subItem.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ) : (
                  <Button color="inherit" component={Link} to={item.path}>
                    {item.label}
                  </Button>
                )}
              </Box>
            ))}
          </NavMenu>

          <MobileMenu>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={mobileAnchorEl}
              keepMounted
              open={Boolean(mobileAnchorEl) && mobileMenuOpen}
              onClose={handleMobileMenuClose}
            >
              {menuItems.map((item, index) => (
                <Box key={index}>
                  {item.subItems ? (
                    <>
                      <MenuItem onClick={() => handleSubMenuToggle(index)}>
                        {item.label}
                        {openSubMenu[index] ? <ExpandLess /> : <ExpandMore />}
                      </MenuItem>
                      <Collapse in={openSubMenu[index]} timeout="auto" unmountOnExit>
                        {item.subItems.map((subItem, subIndex) => (
                          <MenuItem key={subIndex} component={Link} to={subItem.path} onClick={handleMobileMenuClose}>
                            {subItem.label}
                          </MenuItem>
                        ))}
                      </Collapse>
                    </>
                  ) : (
                    <MenuItem component={Link} to={item.path} onClick={handleMobileMenuClose}>
                      {item.label}
                    </MenuItem>
                  )}
                </Box>
              ))}
            </Menu>
          </MobileMenu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
