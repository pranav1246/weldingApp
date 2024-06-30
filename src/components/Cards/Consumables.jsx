import React from 'react';
import CardComponent from '../CardComponent';
import { Box, Grid } from '@mui/material';

const Consumables= () => {
    const cardData = [
        {
            imageUrl: "https://i.postimg.cc/76KtzbW7/image.png",
            title: "AUXILIARY GUN",
            price: "₹5,500.00 + 18% Tax",
            details: {
}
        },
     
        {
            imageUrl: "https://i.postimg.cc/1XCj6442/image.png",
            title: "BODY STRAIGHTNER BIG",
            price: "₹13,500.00 + 18% Tax",
            details: {
            
            }
        },
        {
            imageUrl: "https://i.postimg.cc/Px3sHd1X/image.png",
            title: "CARBON ROD (Pack of 10)",
            price: "₹1,100.00 + 18% Tax",
            details: {
            
            }
        },
        {
            imageUrl: "https://i.postimg.cc/7L1X0XLj/image.png",
            title: "CARBON ROD HOLDER",
            price: "₹350.00 + 18% Tax",
            details: {
            
            }
        },
        {
            imageUrl: "https://i.postimg.cc/mrDLvpHG/image.png",
            title: "CLAW JAW HAMMER SET",
            price: "₹4,500.00 + 18% Tax",
            details: {
            
            }
        },
        {
            imageUrl: "https://i.postimg.cc/gkmnMDNG/image.png",
            title: "EARTH CLAMP",
            price: "₹2,200.00 + 18% Tax",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/MZR90Wrh/image.png",
            title: "ELONG WASHER STRAIGHT (Pack of 50)",
            price: "₹1,000.00 + 18% Tax",
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
