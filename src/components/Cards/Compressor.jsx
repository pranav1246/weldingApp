import React from 'react';
import CardComponent from '../CardComponent';
import { Box, Grid } from '@mui/material';

const Compressor=()=>{
    return(

        <Box sx={{ flexGrow: 1, padding: '20px', marginLeft: '50px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <CardComponent
              imageUrl="https://source.unsplash.com/random"
              title="Card Title 1"
              description="Some description for Card 1."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardComponent
              imageUrl="https://source.unsplash.com/featured"
              title="Card Title 2"
              description="Another description for Card 2."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardComponent
              imageUrl="https://source.unsplash.com/random"
              title="Card Title 1"
              description="Some description for Card 1."
            />
          </Grid>
          
          
          {/* Add more Grid items for additional cards */}
        </Grid>
      </Box>
    )

}

export default Compressor;