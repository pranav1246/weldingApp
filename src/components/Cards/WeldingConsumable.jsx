import React from 'react';
import CardComponent from '../CardComponent';
import { Box, Grid } from '@mui/material';

const WeldingMachine = () => {
    const cardData = [
        {
            imageUrl: "https://i.postimg.cc/nh9z4CGB/image.png",
            title: "StarBlaze 6013 10G",
            price: "320/pkt",
            details: {
                "AWS/SF":"E 6013",
                "Yield Strength N/mm2":	380,
                "Tensile Strength N/mm2":"450-510",
                "Elongation A5%":"26%",
                "Impact V (J) 0°C":"65",
                "Welding condition's":"AC/DC(±)"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/nh9z4CGB/image.png",
            title: "StarBlaze 6013 12G",
            price: "320/pkt",
            details: {
                "AWS/SF":"E 6013",
                "Yield Strength N/mm2":	380,
                "Tensile Strength N/mm2":"450-510",
                "Elongation A5%":"26%",
                "Impact V (J) 0°C":"65",
                "Welding condition's":"AC/DC(±)"
            }
        },
       
        // Add more card objects as needed
        {
            imageUrl: " https://i.postimg.cc/9MHS0NJs/image.png",
            title: "StarBlaze 309L",
            price: "1350/pkt",
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
        {
            imageUrl: " https://i.postimg.cc/9MHS0NJs/image.png",
            title: "StarBlaze 308L",
            price: "750/pkt",
            details: {
                "AWS/SF":"E 308L-15",

                "Tensile Strength N/mm2":"≥520",
                "Elongation A5%":"≥40",
                "Impact V (J) 0°C":"≥47 at -196°C",
                "Welding condition's":"DC+",
            }
        },
        {
            imageUrl: " https://i.postimg.cc/wBXqqBJp/image.png",
            title: "GM 70 (1.2mm)",
            price: "2150/pkt",
            details: {
                "Wire Material":"Copper/Copper Alloy",
                "Thickness":"1.2 mm",
                "Brand"	:"Gweld",
               " Quantity Per Roll"	:"15 kg",
              "  Model Number" :"GM-70",
                "Packaging Type	":"Box",
              "  Country of Origin":"Made in India",
            }
        },
        {
            imageUrl: " https://i.postimg.cc/wBXqqBJp/image.png",
            title: "GM 70 (0.8mm)",
            price: "2200/pkt",
            details: {
                "Wire Material":"Copper/Copper Alloy",
                "Thickness":"1.2 mm",
                "Brand"	:"Gweld",
               " Quantity Per Roll"	:"15 kg",
              "  Model Number" :"GM-70",
                "Packaging Type	":"Box",
              "  Country of Origin":"Made in India",
            }
        },
        {
            imageUrl: "https://i.postimg.cc/0jPFYpVt/image.png",
            title: "GEE 7018 (3.15mm)",
            price: "2800/pkt",
            details: {
                "Size":"3.15 mm",
                "Length":"450 mm",
                "Model Name/Number":"Gricon Green 3.15mm x 450",
                "Brand":'GEE',
                "Material":"Mild Steel"
                           
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

export default WeldingMachine;
