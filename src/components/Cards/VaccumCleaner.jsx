import React from 'react';
import CardComponent from '../CardComponent';
import { Box, Grid } from '@mui/material';

const VaccumCleaner= () => {
    const cardData = [
        {
            imageUrl: "https://i.postimg.cc/prwW3xTL/image.png",
            title: "VACCUM CLEANER XL-15L",
            price: "₹2300",
            details: {
                "model":"XTVC 39",
                "power": "1200W",
                "rated_voltage": "220V",
                "motor": "single",
                "tank": "15L",
                "wind_volume": "2.6m3/min"
}
        },
     
        {
            imageUrl: "https://i.postimg.cc/Cxh87TZV/image.png",
            title: "VACCUM CLEANER 6601-20",
            price: "₹3400",
            details: {
                "model":"XTVC 40",
                "power": "1200W",
                "rated_voltage": "220V",
                "motor": "single",
                "tank": "20L",
                "wind_volume": "2.6m3/min"
            
            }
        },
        {
            imageUrl: "https://i.postimg.cc/ZKnrrzXv/image.png",
            title: "VACCUM CLEANER 603-20-A ",
            price: "₹3935",
            details: {
                "model":"XTVC 41","power": "1200W",
                    "rated_voltage": "230V",
                    "motor": "single",
                    "tank": "35L",
                    "wind_volume": "2.6m3/min"
            
            }
        },
        {
            imageUrl: "https://i.postimg.cc/8PGYDHXz/image.png",
            title: "VACCUM CLEANER",
            price: "₹7470",
            details: {
                model:" WDUC-25L",
                "power": "",
                "rated_voltage": "",
                "motor": "",
                "tank": "25L",
                "wind_volume": ""
            }
        },
        {
            imageUrl: "https://i.postimg.cc/cLSTfLG1/image.png",
            title: "VACCUM CLEANER XL-25L",
            price: "₹2670",
            details: {
                model:"XL-25L",
                "power": "",
                "rated_voltage": "",
                "motor": "",
                "tank": "25L",
                "wind_volume": ""
            }
        },
        {
            imageUrl: "https://i.postimg.cc/cLv1M0Rj/image.png",
            title: "VACCUM CLEANER XL-30L",
            price: "₹2560 ",
            details: {
                model:" XTVC 42",
                "power": "",
                "rated_voltage": "",
                "motor": "",
                "tank": "30L",
                "wind_volume": ""
            }
        },
        {
            imageUrl: "https://i.postimg.cc/ZqCxPBnN/image.png",
            title: "VACCUM CLEANER XL-38L ",
            price: "₹6270",
            details: {
                "model":"XL-38L",
                "power": "1200W",
                "rated_voltage": "230V",
                "motor": "single",
                "tank": "38L",
                "wind_volume": "2.6m3/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/jdbtny2D/image.png",
            title: "VACCUM CLEANER 6605-38A  ",
            price: "₹6135",
            details: {
                "model":"XTVC 44",
                "power": "1200W",
                "rated_voltage": "230V",
                "motor": "single",
                "tank": "38L",
                "wind_volume": "2.6m3/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/ZqCxPBnN/image.png",
            title: "VACCUM CLEANER XL-60L-2M  ",
            price: "₹10935",
            details: {
                "model":"XTVC 45",
                "power": "1400W",
                "rated_voltage": "230V",
                "motor": "double",
                "tank": "60L",
                "wind_volume": "2.6m3/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/ZqCxPBnN/image.png",
            title: "VACCUM CLEANER XL-60L-3M",
            price: "₹12535",
            details: {
                "model":"XTVC 46",
                "power": "2400W",
                "rated_voltage": "230V",
                "motor": "triple",
                "tank": "60L",
                "wind_volume": "2.6m3/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/jdbtny2D/image.png",
            title: "VACCUM CLEANER 606-80 (2M) ",
            price: "₹14722",
            details: {
                "model":"XTVC 47",
                "power": "2400W",
                "rated_voltage": "230V",
                "motor": "double",
                "tank": "80L",
                "wind_volume": "5.6m3/min"
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

export default VaccumCleaner;
