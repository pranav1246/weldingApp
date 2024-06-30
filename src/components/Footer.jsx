import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        position: 'sticky',
        // bottom: 0,
        width: '100%',
    
      }}
    >
      <Typography variant="body1" align="center">
        <Link color="inherit" href="#">
          Contact Us
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {'© '}
        <Link color="inherit" href="#">
          Your Company
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
};

export default Footer;
