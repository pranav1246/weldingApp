import React from 'react';
import CardComponent from '../CardComponent';
import { Box, Grid } from '@mui/material';

const MigSpareParts = () => {
    const cardData = [
        {
            imageUrl: "https://i.postimg.cc/FsJpgjk4/Screenshot-2024-07-01-144507.png",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/26Kdn6zy/Screenshot-2024-07-01-144520.png",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/0QQd6m1h/Screenshot-2024-07-01-144532.png",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/xd9P2hxf/Screenshot-2024-07-01-144541.png",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/sgdcnv5Z/Screenshot-2024-07-01-144604.png",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/CxG49S4r/Screenshot-2024-07-01-144613.png",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/8CwmP49h/Screenshot-2024-07-01-144621.png",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/44YqqHH8/Screenshot-2024-07-01-144629.png",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/pr5fCHTZ/Screenshot-2024-07-01-144637.png",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/fk4xgrSh/Screenshot-2024-07-01-144644.png",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/DfRHTfq7/Screenshot-2024-07-01-144708.png",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/cJ15mvNB/Screenshot-2024-07-01-144719.png",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/GpMgSbLw/Screenshot-2024-07-01-144738.png",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/7ZkR5Bsc/Screenshot-2024-07-01-144747.png",
            title: "",
            price: "",
            details: {}
        }
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

export default MigSpareParts;
