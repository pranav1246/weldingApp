import React from 'react';
import CardComponent from '../CardComponent';
import { Box, Grid } from '@mui/material';

const WeldingMachine = () => {
    const cardDetails = {
        general: {
            Brand: "Toshweld",
            "Model Number": "Arc 200 mosfet",
            Type: "Inverter",
            Portable: "Yes",
            "Power Requirement": "230v ac",
            "Current Rating": "6 A",
            Certification: "NA"
        },
        dimensions: {
            Width: "6 inch",
            Height: "11 inch",
            Weight: "10 kg"
        }
    };

    const formattedDetails = {
        ...cardDetails.general,
        ...cardDetails.dimensions
    };

    return (
        <Box sx={{ flexGrow: 1, padding: '20px', marginLeft: '50px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <CardComponent
                        imageUrl="https://i.postimg.cc/ZKK28wCG/image.png"
                        title="Arc 200"
                        price="7500"
                        details={formattedDetails}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardComponent
                        imageUrl="https://i.postimg.cc/zB7JXptq/image.png"
                        title=" ARC 250ST"
                        price="9440"
                        details={{
                            Brand: "Toshweld",
                            "Model Number": "Arc 250 mosfet",
                            Type: "Inverter",
                            Portable: "Yes",
                            "Power Requirement": "AC 230V + 15%",
                            "Current Rating": "7.4 A",
                            Certification: "NA",
                            size:"480*230*360 (mm)",
                            Weight: "10 kg"
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardComponent
                        imageUrl="https://i.postimg.cc/JzVmWGMr/image.png"
                        title="Arc 300"
                        price="18,000"
                        details={{
                            Brand: "Toshweld",
                            "Model Number": "Arc 300L",
                            Type: "Inverter",
                            Portable: "Yes",
                            "Input power capacity":"9.4 kVA",
                           "Input voltage AC":"230v/415v ± 15%",
                           "Phase":"Single/Double",
                            Certification: "NA",
                            Weight: "13.5 kg"
                        }}
                    />
                </Grid>
                {/* Add more Grid items for additional cards */}
                
                <Grid item xs={12} sm={6} md={4}>
                    <CardComponent
                        imageUrl="https://i.postimg.cc/WzcGmG0F/image.png"
                        title="Arc 400"
                        price="25,000"
                        details={{
                            Brand: "Toshweld",
                            "Model Number": "Arc 400",
                            Type: "Inverter",
                            Portable: "Yes",
                            "Input power capacity":"18.2 kVA",
                           "Input voltage AC":"415v ± 15%",
                           "Phase":"3ph",
                            Certification: "NA",
                            Weight: "13.5 kg"
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardComponent
                        imageUrl="https://i.postimg.cc/C1sGNZ7c/image.png"
                        title="Tig 200A"
                        price="15,000"
                        details={{
                            Brand: "Toshweld",
                            "Model Number": "Tig 200A",
                            Type: "Inverter",
                            Portable: "Yes",
                            "Input power capacity":"6 kVA",
                           "Input voltage AC":"230v ± 15%",
                           "Phase":"1ph",
                            Certification: "NA",
                            Weight: "10 kg"
                        }}
                    />
                </Grid>
               
                <Grid item xs={12} sm={6} md={4}>
                    <CardComponent
                        imageUrl="https://i.postimg.cc/05mYZBWz/image.png"
                        title="Tig 300"
                        price="25,000"
                        details={{
                            Brand: "Toshweld",
                            "Model Number": "Tig 300",
                            Type: "Inverter",
                            Portable: "Yes",
                            "Input power capacity":"8",
                           "Input voltage AC":"415v ± 15%",
                           "Phase":"3ph",
                            Certification: "NA",
                            Weight: "24 kg"
                        }}
                    />
                </Grid>

                
                <Grid item xs={12} sm={6} md={4}>
                    <CardComponent
                        imageUrl="https://i.postimg.cc/3R2ZySz0/image.png"
                        title="MIG 250"
                        price="35,000"
                        details={{
                            Brand: "Toshweld",
                            "Model Number": "MIG 250",
                            Type: "Inverter",
                            Portable: "Yes",
                            "Input power capacity":"8.5",
                           "Input voltage AC":"230v ± 15%",
                           "Phase":"optional single and 3ph",
                            Certification: "NA",
                            Weight: "21 kg"
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardComponent
                        imageUrl=" https://i.postimg.cc/KjqQFKd0/image.png"
                        title="MIG 400I"
                        price="75,000"
                        details={{
                            Brand: "Toshweld",
                            "Model Number": "MIG 250",
                            Type: "Inverter",
                            Portable: "Yes",
                            "Input power capacity":"14",
                           "Input voltage AC":"415v ± 15%",
                           "Phase":"3ph",
                            Certification: "NA",
                            Weight: "36 kg"
                        }}
                    />
                </Grid>
                {/* <Grid item xs={12} sm={6} md={4}>
                    <CardComponent
                        imageUrl=" https://i.postimg.cc/KjqQFKd0/image.png"
                        title="MIG 400I"
                        price="75,000"
                        details={{
                            Brand: "Toshweld",
                            "Model Number": "MIG 250",
                            Type: "Inverter",
                            Portable: "Yes",
                            "Input power capacity":"14",
                           "Input voltage AC":"415v ± 15%",
                           "Phase":"3ph",
                            Certification: "NA",
                            Weight: "36 kg"
                        }}
                    />
                </Grid> */}

            </Grid>
        </Box>
    );
};

export default WeldingMachine;
