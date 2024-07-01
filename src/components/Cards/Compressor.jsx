import React from 'react';
import CardComponent from '../CardComponent';
import { Box, Grid } from '@mui/material';

const Compressor = () => {
    const cardData = [
        {
            imageUrl: "https://i.postimg.cc/pLyQNHLf/image.png",
            title: "OIL COMPRESSOR",
            price: "₹7094 ",
            details: {
                "model": "XTOC 76",
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
                Model: "XTOC 77",
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
                Model: "XTOC 78",
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
                Model: "XTOC 79",
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
                Model: "MSOC 6",
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
                Model: "MSOC 7",
                "VOLUME": "30 L",
                "INPUT POWER": "2.5 HP",
                "RATED VOLTAGE": "380V",
                "AIR EXHAUST": "110L/MIN",
                "PRESSURE": "8 BAR",
                "SPEED": "2800 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/4dQxZTV4/image.png",
            title: "OIL COMPRESSOR-MSI",
            price: "₹8467",
            details: {
                Model: "MSOC 8",
                "VOLUME": "50 L",
                "INPUT_POWER": "3 HP",
                "RATED_VOLTAGE": "380V",
                "AIR_EXHAUST": "233L/MIN",
                "PRESSURE": "8 BAR Psi",
                "SPEED": "2800 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/9QHbgLR2/image.png",
            title: "OIL COMPRESSOR",
            price: "₹24670",
            details: {
                Model: "MSOC 9",
                "VOLUME": "100 L",
                "INPUT_POWER": "1.5 KW",
                "RATED_VOLTAGE": "220V",
                "AIR_EXHAUST": "170L/MIN",
                "PRESSURE": "8 BAR",
                "SPEED": "2850 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/9QHbgLR2/image.png",
            title: "OIL COMPRESSOR",
            price: "₹51765",
            details: {
                Model: "MSOC 10",
                "VOLUME": "200 L",
                "INPUT_POWER": "7.5 KW",
                "RATED_VOLTAGE": "220V",
                "AIR_EXHAUST": "250L/MIN",
                "PRESSURE": "8 BAR",
                "SPEED": "1450 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/HksnkGj3/image.png",
            title: "OIL COMPRESSOR",
            price: "₹42665",
            details: {
                Model: "MSOC 11",
                "VOLUME": "300 L",
                "INPUT_POWER": "4 KW",
                "RATED_VOLTAGE": "380V",
                "AIR_EXHAUST": "600L/MIN",
                "PRESSURE": "12.5 BAR",
                "SPEED": "2800 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/9QHbgLR2/image.png",
            title: "OIL COMPRESSOR",
            price: "₹58935",
            details: {
                Model: "MSOC 12",
                "VOLUME": "300 L",
                "INPUT_POWER": "7.5 KW",
                "RATED_VOLTAGE": "415V",
                "AIR_EXHAUST": "900L/MIN",
                "PRESSURE": "12.5 bar",
                "SPEED": "2800 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/XJFdkMfd/image.png",
            title: "OIL COMPRESSOR",
            price: "₹8267",
            details: {
                Model: "TH300030",
                "VOLUME": "30 L",
                "INPUT_POWER": "2.5 HP",
                "RATED_VOLTAGE": "220V",
                "AIR_EXHAUST": "169L/MIN",
                "PRESSURE": "8 BAR",
                "SPEED": "2850 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/y81qqsW6/image.png",
            title: "OIL COMPRESSOR TR-22-50 NEW",
            price: "₹9615",
            details: {
                Model: "TH500050",
                "VOLUME": "50 L",
                "INPUT_POWER": "2.5 HP",
                "RATED_VOLTAGE": "220V",
                "AIR_EXHAUST": "169L/MIN",
                "PRESSURE": "8 BAR",
                "SPEED": "2800 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/X7yKVCGQ/image.png",
            title: "OIL COMPRESSOR ",
            price: "₹8135",
            details: {
                Model: "DOC 1",
                "VOLUME": "50 L",
                "INPUT_POWER": "2.5 HP",
                "RATED_VOLTAGE": "220V",
                "AIR_EXHAUST": "130L/MIN",
                "PRESSURE": "8 BAR",
                "SPEED": "2800 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/W38Vqzdy/image.png",
            title: "OIL FREE COMPRESSOR ",
            price: "₹11600",
            details: {
                Model: "XLAC-224",
                "VOLUME": "3 L",
                "INPUT_POWER": "1700 W / 2.27 HP",
                "RATED_VOLTAGE": "220V",
                "AIR_DELIVERY": "150L/MIN",
                "PRESSURE": "0.3-0.8 BAR",
                "SPEED": "2800 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/vB0BF3tD/image.png",
            title: "OIL FREE COMPRESSOR ",
            price: "₹7200",
            details: {
                Model: "XTOFC 79",
                "VOLUME": "10 L",
                "INPUT_POWER": "1 HP",
                "RATED_VOLTAGE": "220V",
                "AIR_EXHAUST": "40L/MIN",
                "PRESSURE": "8 BAR",
                "SPEED": "1450 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/vB0BF3tD/image.png",
            title: "OIL FREE COMPRESSOR ",
            price: "₹7735",
            details: {
                Model: "XTOFC 80",
                "VOLUME": "30 L",
                "INPUT_POWER": "550 W",
                "RATED_VOLTAGE": "220V",
                "AIR_EXHAUST": "60L/MIN",
                "PRESSURE": "8 BAR",
                "SPEED": "1450 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/vB0BF3tD/image.png",
            title: "OIL FREE COMPRESSOR-550W ",
            price: "₹9100",
            details: {
                Model: "XTOFC 81",
                "VOLUME": "50 L",
                "INPUT_POWER": "550 W",
                "RATED_VOLTAGE": "220V",
                "AIR_EXHAUST": "70L/MIN",
                "PRESSURE": "8 BAR",
                "SPEED": "1450 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/1XQDz9g4/image.png",
            title: "OIL FREE COMPRESSOR-750W ",
            price: "₹9100",
            details: {
                Model: "XTOFC 82",
                "VOLUME": "50 L",
                "INPUT_POWER": "750 W",
                "RATED_VOLTAGE": "220V",
                "AIR_EXHAUST": "70L/MIN",
                "PRESSURE": "8 BAR",
                "SPEED": "1450 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/GmtBjBGv/image.png",
            title: "OIL FREE COMPRESSOR-550W*2",
            price: "₹13035",
            details: {
                Model: "XTOFC 83",
                "VOLUME": "50 L",
                "INPUT_POWER": "550W * 2",
                "RATED_VOLTAGE": "220V",
                "AIR_EXHAUST": "120L/MIN",
                "PRESSURE": "8 BAR",
                "SPEED": "1450 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/j54NFp5f/image.png",
            title: "OIL FREE COMPRESSOR XL -1600-30",
            price: "₹7800",
            details: {
                Model: "XTOFC 84",
                "VOLUME": "30 L",
                "INPUT_POWER": "1680 W",
                "RATED_VOLTAGE": "220V",
                "AIR_EXHAUST": "167L/MIN",
                "PRESSURE": "8 BAR",
                "SPEED": "2800 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/xTfC5kMt/image.png",
            title: "OIL FREE COMPRESSOR XL-1600-50",
            price: "₹9470",
            details: {
                Model: "XTOFC 85",
                "VOLUME": "50 L",
                "INPUT_POWER": "1680 W",
                "RATED_VOLTAGE": "220V",
                "AIR_EXHAUST": "167L/MIN",
                "PRESSURE": "8 BAR",
                "SPEED": "2800 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/7Ps3gyTG/image.png",
            title: "OIL FREE COMPRESSOR (XL-3200-50)2 HEAD",
            price: "₹14335",
            details: {
                Model: "XTOFC 86",
                "VOLUME": "50 L",
                "INPUT_POWER": "1680 W*2",
                "RATED_VOLTAGE": "220V",
                "AIR_EXHAUST": "334L/MIN",
                "PRESSURE": "8 BAR",
                "SPEED": "2800 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/0NyD48Fq/image.png",
            title: "OIL FREE COMPRESSOR -OFC 80L",
            price: "₹19270",
            details: {
                Model: "XTOFC 87",
                "VOLUME": "80 L",
                "INPUT_POWER": "2890 W*2",
                "RATED_VOLTAGE": "220V",
                "AIR_EXHAUST": "334L/MIN",
                "PRESSURE": "8 BAR",
                "SPEED": "2800 r/min"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/3xJztG8r/image.png",
            title: "OIL FREE COMPRESSOR -OFC 100L",
            price: "₹29135",
            details: {
                Model: "XTOFC 88",
                "VOLUME": "100 L",
                "POWER": "4671W*3",
                "RATED_VOLTAGE": "220V",
                "CURRENT": "21.52A/3",
                "WEIGHT": "52KG"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/3xJztG8r/image.png",
            title: "OIL FREE COMPRESSOR -OFC 120L",
            price: "₹32870",
            details: {
                Model: "XTOFC 89",
                "VOLUME": "120 L",
                "POWER": "4671W*3",
                "RATED_VOLTAGE": "220V",
                "CURRENT": "21.52A/3",
               
            }
        },
        {
            imageUrl: "https://i.postimg.cc/V68Nr4wL/image.png",
            title: "OIL FREE COMPRESSOR -OFC 180L",
            price: "₹42600",
            details: {
                Model: "XTOFC 90",
                "VOLUME": "180 L",
                "POWER": "6040 W*4",
                "RATED_VOLTAGE": "400V",
                "CURRENT": "12.98A/4",
               
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

export default Compressor;
