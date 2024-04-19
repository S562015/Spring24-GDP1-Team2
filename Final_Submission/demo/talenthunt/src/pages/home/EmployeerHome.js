import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';

function EmployerHomePage() {
    return (
        <div>

            {/* Hero Section */}
            <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 6 }}>
                <Container maxWidth="md">
                    <Typography variant="h3" align="center" gutterBottom>
                        Welcome to TalentHunt
                    </Typography>
                    <Typography variant="h5" align="center" gutterBottom>
                        Find the perfect candidates for your company
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                        <TextField
                            variant="outlined"
                            placeholder="Search for candidates..."
                            InputProps={{
                                startAdornment: (
                                    <SearchIcon sx={{ color: 'inherit', mr: 1 }} />
                                ),
                            }}
                        />
                    </Box>
                </Container>
            </Box>

            {/* Featured Listings Section */}
            <Container sx={{ py: 6 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Featured Job Listings
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    Frontend Developer
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    ABC Technologies
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" startIcon={<HowToRegIcon />}>
                                    Apply Now
                                </Button>
                                <IconButton size="small" aria-label="save">
                                    <FavoriteIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                    {/* Add more featured job listings here */}
                </Grid>
            </Container>

            {/* Call to Action */}
            <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 6 }}>
                <Container maxWidth="md">
                    <Typography variant="h4" align="center" gutterBottom>
                        Ready to find your next hire?
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                        <Button variant="contained" color="secondary" size="large">
                            Get Started
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Footer Section */}
            <Box sx={{ bgcolor: 'background.paper', py: 3 }}>
                <Container maxWidth="md">
                    <Typography variant="body2" align="center">
                        &copy; {new Date().getFullYear()} YourJobSite. All rights reserved.
                    </Typography>
                </Container>
            </Box>
        </div>
    );
}

export default EmployerHomePage;
