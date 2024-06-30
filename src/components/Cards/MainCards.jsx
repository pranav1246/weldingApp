import React from 'react';
import CardComponent from '../CardComponent';
import { Box, Grid } from '@mui/material';

const Consumables= () => {
    const cardData = [
        {
            imageUrl: "ff",
            title: "AUXILIARY GUN",
            price: "₹5,500.00 + 18% Tax",
            details: {
}
        },
     
      
    ];

    return (
        <Box sx={{ flexGrow: 1, padding: '20px', marginLeft: '50px' }}>
            <Grid container spacing={2}>
                {cardData.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <CardComponent
                            imageUrl={card.imageUrl}
                            title={card.title}
                            price={card.price}
                            details={card.details}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Consumables;
