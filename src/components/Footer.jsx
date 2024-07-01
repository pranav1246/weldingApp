import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.dark',
        color: 'white',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <IconButton href="" target="_blank" aria-label="Facebook" sx={{ color: 'white' }}>
          <FacebookIcon />
        </IconButton>
        <IconButton href="" target="_blank" aria-label="Instagram" sx={{ color: 'white' }}>
          <InstagramIcon />
        </IconButton>
        <IconButton href="" target="_blank" aria-label="Twitter" sx={{ color: 'white' }}>
          <TwitterIcon />
        </IconButton>
        <IconButton href="" target="_blank" aria-label="LinkedIn" sx={{ color: 'white' }}>
          <LinkedInIcon />
        </IconButton>
      </Box>
      <Typography variant="body1" align="center">
        <Link color="inherit" href="#" underline="hover">
          Contact Us
        </Link>
      </Typography>
      <Typography variant="body2" align="center">
        <Box>
          {'Pravin Nair'}
        </Box>
        <Box>
          {'Phone: 9746323707'}
        </Box>
        <Box>
          {'Email: saffroninnovation@gmail.com'}
        </Box>
      </Typography>
      <Typography variant="body2" align="center" sx={{ mt: 1 }}>
        {'© '}
        <Link color="inherit" href="#" underline="hover">
         SAFFRON
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
};

export default Footer;

