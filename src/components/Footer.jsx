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
        <IconButton href="https://www.facebook.com" target="_blank" aria-label="Facebook" sx={{ color: 'white' }}>
          <FacebookIcon />
        </IconButton>
        <IconButton href="https://www.instagram.com" target="_blank" aria-label="Instagram" sx={{ color: 'white' }}>
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank" aria-label="Twitter" sx={{ color: 'white' }}>
          <TwitterIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" sx={{ color: 'white' }}>
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
          {'Name: Your Name'}
        </Box>
        <Box>
          {'Phone: (123) 456-7890'}
        </Box>
        <Box>
          {'Email: your.email@example.com'}
        </Box>
      </Typography>
      <Typography variant="body2" align="center" sx={{ mt: 1 }}>
        {'© '}
        <Link color="inherit" href="#" underline="hover">
          Your Company
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
};

export default Footer;
