import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CategoryIcon from '@mui/icons-material/Category';
import BuildIcon from '@mui/icons-material/Build';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import BusinessIcon from '@mui/icons-material/Business';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
    const [openWelding, setOpenWelding] = useState(false);
    const [openDentPullers, setOpenDentPullers] = useState(false);
    const [openPlasmaCompressor, setOpenPlasmaCompressor] = useState(false);
    const [openStockInvestment, setOpenStockInvestment] = useState(false);
    const [openSpareParts, setOpenSpareParts] = useState(false);

    const handleToggle = (category) => {
        switch (category) {
            case 'Welding':
                setOpenWelding(!openWelding);
                break;
            case 'DentPullers':
                setOpenDentPullers(!openDentPullers);
                break;
            case 'PlasmaCompressor':
                setOpenPlasmaCompressor(!openPlasmaCompressor);
                break;
            case 'StockInvestment':
                setOpenStockInvestment(!openStockInvestment);
                break;
            case 'SpareParts':
                setOpenSpareParts(!openSpareParts);
                break;
            default:
                break;
        }
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
        width: 240,
        flexShrink: 0,
        marginTop: '80px', // Adjust this value to match your Navbar height
        
        '& .MuiDrawer-paper': {
          width: 240,
          marginTop: '80px', // Adjust this value to match your Navbar height
          marginBottom:'500px',
          height: 'calc(100% - 64px)', // Ensure the drawer height adjusts to the navbar height
          boxSizing: 'border-box',
        },
      }}
        >
            <List>
                <ListItem button onClick={() => handleToggle('Welding')}>
                    <ListItemIcon>
                        <BuildIcon />
                    </ListItemIcon>
                    <ListItemText primary="Welding Machineries" />
                    {openWelding ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openWelding} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button component={Link} to="/welding-machine">
                            <ListItemText primary="Welding Machine" />
                        </ListItem>
                        <ListItem button component={Link} to="/welding-consumable">
                            <ListItemText primary="Welding Consumables" />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={() => handleToggle('DentPullers')}>
                    <ListItemIcon>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dent Pullers" />
                    {openDentPullers ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openDentPullers} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                       <ListItem button component={Link} to="/dent-pullers">
                            <ListItemText primary="Dent Pulling Machines" />
                        </ListItem>
                        <ListItem button component={Link} to="/consumables">
                            <ListItemText primary="Consumables" />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={() => handleToggle('PlasmaCompressor')}>
                    <ListItemIcon>
                        <CarpenterIcon />
                    </ListItemIcon>
                    <ListItemText primary="Other Machineries" />
                    {openPlasmaCompressor ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openPlasmaCompressor} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button component={Link} to="/plasma-cutters">
                            <ListItemText primary="Plasma Cutters" />
                        </ListItem>
                        <ListItem button component={Link} to="/compressors">
                            <ListItemText primary="Compressors" />
                        </ListItem>
                        <ListItem button component={Link} to="/compressors">
                            <ListItemText primary="Industrial vaccum cleaner" />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={() => handleToggle('SpareParts')}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Spare Parts" />
                    {openSpareParts ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={openPlasmaCompressor} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button component={Link} to="/plasma-cutters">
                            <ListItemText primary="Welding service parts" />
                        </ListItem>
                        <ListItem button component={Link} to="/compressors">
                            <ListItemText primary="Mig spare parts" />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={() => handleToggle('StockInvestment')}>
                    <ListItemIcon>
                        <BusinessIcon />
                    </ListItemIcon>
                    <ListItemText primary="Stock Advisory and Investment" />
                    {openStockInvestment ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

               <Collapse in={openPlasmaCompressor} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button component={Link} to="/plasma-cutters">
                            <ListItemText primary="5k Package @ 8% profit" />
                        </ListItem>
                        <ListItem button component={Link} to="/compressors">
                            <ListItemText primary="10k Package @ 10% profit" />
                        </ListItem>
                        <ListItem button component={Link} to="/compressors">
                            <ListItemText primary="25k Package @ 12% profit" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </Drawer>
    );
};

export default Sidebar;








