import React from 'react';
import CardComponent from '../CardComponent';
import { Box, Grid } from '@mui/material';

const PlasmaCutter = () => {
    const cardData = [
        {
            imageUrl: "https://i.postimg.cc/fyDNBDfh/image.png",
            title: "PLASMA CUT",
            price: "₹13367",
            details: {
                Model: "CUT 40 IGBT",
                "INPUT VOLTAGE": "220V±15%",
                "FREQUENCY": "50/60",
                "RATED INPUT CURRENT": "16.9A",
                "NO LOAD VOLTAGE": "310V",
                "OUTPUT CURRENT RANGE": "20-40A",
                "DUTY CYCLE": "60%",
                "EFFICIENCY": "80%",
                "POWER FACTOR": "0.73",
                "INSULATION GRADE": "F",
                "HOUSING PROTECTION GRADE": "IP21",
                "NET WEIGHT": "8 KGS",
                "DIMENSION": "375*155*232MM",
                "ACCESSORIES": "EARTH CLAMP WITH 3M CABLE, ELECTRODE HOLDER WITH 3M CABLE"
            }
        },

        {
            imageUrl: "https://i.postimg.cc/8kLKSxLx/image.png",
            title: "PLASMA CUT",
            price: "₹29145",
            details: {
                Model: "CUT60G IGBT",
                "INPUT VOLTAGE": "415V±15%",
                "FREQUENCY": "50/60",
                "RATED INPUT CURRENT": "13.5A",
                "NO LOAD VOLTAGE": "310V",
                "OUTPUT CURRENT RANGE": "20-60A",
                "DUTY CYCLE": "60%",
                "EFFICIENCY": "85%",
                "POWER FACTOR": 0.73,
                "INSULATION GRADE": "F",
                "HOUSING PROTECTION GRADE": "IP21",
                "NET WEIGHT": "23 KGS",
                "DIMENSION": "470*240*390MM",
                "ACCESSORIES": "EARTH CLAMP WITH 3M CABLE ,ELECTRODE HOLDER WITH 3M CABLE"

            }
        },
        {
            imageUrl: "https://i.postimg.cc/vBG5W2SS/image.png",
            title: "PLASMA CUT",
            price: "₹50780",
            details: {
                Model: "CUT 80 IGBT",
                "INPUT VOLTAGE": "220V/380V ±15%",
                "RATED INPUT POWER CAPACITY": "11.3",
                "RATED INPUT CURRENT": "18",
                "RATED LOAD DURATION": "60%",
                "OUTPUT CURRENT RANGE": "20-80",
                "NO LOAD VOLTAGE": "DC310V",
                "WEIGHT": "28KG",
                "CUTTING THICKNESS": "1-25MM",
                "RATED DUTY CYCLE": "60%",
                "EFFICIENCY": "80",
                "POWER FACTOR": 0.93,
                "INSULATION GRADE": "F",
                "PROTECTION CLASS": "IP21",
                "INSULATION CLASS": "F",
                "ACCESSORIES": "-"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/k403kR60/image.png",
            title: "PLASMA CUT",
            price: "48311",
            details: {
                Model: "CUT 100 IGBT",
                "INPUT VOLTAGE": "415V±15%",
                "RATED INPUT POWER": "14.5KWA",
                "RATED INPUT CURRENT": "22A",
                "INSULATION CLASS": "F",
                "RATED DUTY CYCLE": "60",
                "ADJUSTMENT RANGE": "30-100A",
                "QUALITY CUTTING THICKNESS": "0.3-22",
                "MAX CUTTING THICKNESS": "35",
                "PLASMA GAS": "COMPRESSED AIR",
                "GAS PRESSURE RANGE": "0.4-0.5",
                "SUITABLE FOR": "AIR F",
                "ARC STARTING": "HIGH PRESSURE UNTOUCH",
                "WEIGHT": "40 KGS",
                "DIMENSION": "470*240*390MM",
                "ACCESSORIES": "EARTH CLAMP WITH 3M CABLE ,ELECTRODE HOLDER WITH 3M CABLE"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/5tmShhHb/image.png",
            title: "PLASMA CUT",
            price: "₹76000",
            details: {
                Model: "CUT 100 PLUS",
                "INPUT VOLTAGE": "415V±15%",
                "RATED INPUT POWER": "14.5KWA",
                "RATED INPUT CURRENT": "22A",
                "NO LOAD VOLTAGE": "60%",
                "RATED DUTY CYCLE": "60",
                "ADJUSTMENT RANGE": "30-100A",
                "QUALITY CUTTING THICKNESS": "0.3-22",
                "MAX CUTTING THICKNESS": "35",
                "PLASMA GAS": "COMPRESSED AIR",
                "GAS PRESSURE RANGE": "0.4-0.5",
                "SUITABLE FOR": "AIR F",
                "ARC STARTING": "HIGH PRESSURE UNTOUCH",
                "WEIGHT": "40 KGS",
                "DIMENSION": "470*240*390MM",
                "ACCESSORIES": "EARTH CLAMP WITH 3M CABLE ,ELECTRODE HOLDER WITH 3M CABLE"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/CxCf6btq/image.png",
            title: "PLASMA CUT",
            price: "₹156350",
            details: {
                Model: "CUT 160 IGBT",
                "INPUT VOLTAGE": "415V±15%",
                "RATED INPUT POWER": "26.3",
                "RATED INPUT CURRENT": "40",
                "NO LOAD VOLTAGE": "315",
                "RATED DUTY CYCLE": "100",
                "ADJUSTMENT RANGE": "40-160",
                "QUALITY CUTTING THICKNESS": "1-35%",
                "MAX CUTTING THICKNESS": "55",
                "PLASMA GAS": "COMPRESSED AIR",
                "GAS PRESSURE RANGE": "0.4-0.6",
                "SUITABLE FOR": "AIR F",
                "ARC STARTING": "HIGH PRESSURE UNTOUCH",
                "WEIGHT": "70 KGS",
                "DIMENSION": "820*390*940MM",
                "ACCESSORIES": "EARTH CLAMP WITH 3M CABLE ,ELECTRODE HOLDER WITH 3M CABLE"
            }
        },
        {
            imageUrl: "https://i.postimg.cc/8542yXd0/image.png",
            title: "PLASMA CUT",
            price: "₹204826",
            details: {
                Model:" CUT 200",
                "INPUT VOLTAGE": "415V±15%",
                "RATED INPUT POWER": "44.44",
                "RATED INPUT CURRENT": "65.44",
                "OUTPUT CURRENT RANGE": "20-200",
                "NO LOAD VOLTAGE": "DC310V",
                "ADJUSTMENT RANGE": "40-160",
                "QUALITY CUTTING THICKNESS": "1-70MM",
                "RATED DUTY CYCLE": "60",
                "EFFICIENCY": "80",
                "POWER FACTOR": "0.93",
                "PROTECTION CLASS": "IP21",
                "INSULATION CLASS": "F",
                "WEIGHT": "75 KGS",
                "DIMENSION": "650*390*810MM",
                 "ACCESSORIES": "EARTH CLAMP WITH 3M CABLE ,ELECTRODE HOLDER WITH 3M CABLE"
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

export default PlasmaCutter
