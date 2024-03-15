import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ 
        background: 'linear-gradient(45deg, #FFC107 30%, #F44336 90%)' 
      }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JT-PT
          </Typography>
          <Button color="inherit" component={Link} to="/exercise">
            Exercise Configurator
          </Button>
          <Button color="inherit" component={Link} to="/suggester">
            Exercise Suggester
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
