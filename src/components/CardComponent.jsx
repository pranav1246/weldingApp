import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Box } from '@mui/material';

const CardComponent = ({ imageUrl, title, price, details }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="300"
        image={imageUrl}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ color: 'blue', marginRight: 'auto' }} variant="h6">
          {price}
        </Typography>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          size="small"
          sx={{ paddingTop: 1 }}
        >
          <ExpandMoreIcon />
        </IconButton>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ mt: 2 }}>
            {Object.entries(details).map(([key, value]) => (
              <Typography key={key} variant="body2" color="text.secondary">
                <strong>{key}:</strong> {value}
              </Typography>
            ))}
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
