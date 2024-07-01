import React from 'react';
import CardComponent from '../CardComponent';
import { Box, Grid } from '@mui/material';

const Compressor= () => {
    const cardData = [
        {
            imageUrl: "https://i.postimg.cc/pLyQNHLf/image.png",
            title: "OIL COMPRESSOR",
            price: "₹7094 ",
            details: {
                "model":"XTOC 76",
                "volume": "10L",
                "input_power": "1HP",
                "rated_voltage": "220V",
                "air_exhaust": "110L/min",
                "pressure": "8 bar",
                "speed": "2850 r/min"
}

        },
     
        {
            imageUrl: "https://i.postimg.cc/zXvs71tm/image.png",
            title: "OIL COMPRESSOR",
            price: "₹7200",
            details: {
                Model:"XTOC 77",
                 "VOLUME": "30 L",
  "INPUT POWER": "2.5 HP",
  "RATED VOLTAGE": "220V",
  "AIR EXHAUST": "110L/MIN",
  "PRESSURE": "8 BAR",
  "SPEED": "2850 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/rw0zv3p3/image.png",
            title: "OIL COMPRESSOR (30L) XLNT",
            price: "₹7335",
            details: {
                  Model:"XTOC 78",
                  "VOLUME": "30 L",
                  "INPUT POWER": "",
                  "RATED VOLTAGE": "",
                  "AIR EXHAUST": "",
                  "PRESSURE": "",
                  "SPEED": ""
                
            }
        },
        {
            imageUrl: "https://i.postimg.cc/rw0zv3p3/image.png",
            title: "OIL COMPRESSOR (50L) XLNT",
            price: "₹8467",
            details: {
            Model:"XTOC 79",
            "VOLUME": "50 L",
            "INPUT POWER": "",
            "RATED VOLTAGE": "",
            "AIR EXHAUST": "",
            "PRESSURE": "",
            "SPEED": ""
          
            }
        },
        {
            imageUrl: "https://i.postimg.cc/4dQxZTV4/image.png",
            title: "OIL COMPRESSOR -MSI",
            price: "₹7094",
            details: {
                Model:"MSOC 6",
                "VOLUME": "10 L",
                "INPUT POWER": "1 HP",
                "RATED VOLTAGE": "220V",
                "AIR EXHAUST": "110L/MIN",
                "PRESSURE": "8 BAR",
                "SPEED": "2850 r/min"
            
            }
        },
        {
            imageUrl: "https://i.postimg.cc/4dQxZTV4/image.png",
            title: "OIL COMPRESSOR -MSI",
            price: "₹7335",
            details: {
                Model:"MSOC 7",
                "VOLUME": "30 L",
                "INPUT POWER": "2.5 HP",
                "RATED VOLTAGE": "380V",
                "AIR EXHAUST": "110L/MIN",
                "PRESSURE": "8 BAR",
                "SPEED": "2800 r/min"
            }
        },
        // {
        //     imageUrl: "https://i.postimg.cc/MZR90Wrh/image.png",
        //     title: "ELONG WASHER STRAIGHT (Pack of 50)",
        //     price: "₹1,000.00 + 18% Tax",
        //     details: {
            
        //     }
        // },
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

export default Compressor;
