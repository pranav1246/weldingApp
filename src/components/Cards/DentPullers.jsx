import React from 'react';
import CardComponent from '../CardComponent';
import { Box, Grid } from '@mui/material';

const DentPullers = () => {
    const cardData = [
        {
            imageUrl: "https://i.postimg.cc/7Pm6cXSn/image.png",
            title: "XMD 001i PLUS",
            price: "₹50,000.00 + 18% Tax",
            details: {
              "Number of Modes" : "2 (Dent and Shrink)",
              "Input ": "230V AC 50Hz",
              "Output Designed" : "3200 Imax",
             " Input Cable ": "2.5 mm² x 3 core x 6 mtr",
              "Output kVA nominal" :" 6 KVA",
             " Output Cable + ":" 50 mm² x 2 mtr",
             " Output Cable - ":" 50 mm² x 2 mtr",
             " Dimensions ": "700 x 420 x 310 (mm)",
              "Weight ": "41 Kg (with all accessories and trolley)",
              "Protection" : "IP 23"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/sxmbfwpY/image.png",
            title: "DENT PULLER XMD 001i",
            price: "₹50,000.00 + 18% Tax",
            details: {
              "Number of Modes" : "2 (Dent and Shrink)",
              "Input ": "230V AC 50Hz",
              "Output Designed" : "3200 Imax",
             " Input Cable ": "2.5 mm² x 3 core x 6 mtr",
              "Output kVA nominal" :" 6 KVA",
             " Output Cable + ":" 50 mm² x 2 mtr",
             " Output Cable - ":" 50 mm² x 2 mtr",
             " Dimensions ": "700 x 420 x 310 (mm)",
              "Weight ": "41 Kg (with all accessories and trolley)",
              "Protection" : "IP 23"
            }
        },
       
        // Add more card objects as needed
        {
            imageUrl: " https://i.postimg.cc/pXTnWyv8/image.png",
            title: "XMD 01 DIGITAL",
            price: "₹55,000.00 + 18% Tax",
            details: {
                "AWS/SF":"E 309L-15",
                "Yield Strength N/mm2": "-",
                "Tensile Strength N/mm2":"≥550",
                "Elongation A5%":"≥30",
                "Impact V (J) 0°C":"60 at RT",
                "Welding condition's":"DC+",
                "UNIQUE FEATURE (ALL VACUUM PACKED)":"Excellent weldability. Best in class mechanical properties."
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

export default DentPullers;
