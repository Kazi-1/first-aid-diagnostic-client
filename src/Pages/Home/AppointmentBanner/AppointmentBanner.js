import React from 'react';
import banner2 from '../../../images/banner2.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';

const appointmentBanner = {
    margin: 0
}

const AppointmentBanner = () => {
    return (
        <Container style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                    }}>
                    <Box>
                        <Typography variant="h4" sx={{mb: 5, textTransform: 'capitalize'}}>
                            Make an appointment today
                        </Typography>
                        <Typography variant="h6" sx={{my: 5}} style={{ fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem veniam quod necessitatibus voluptas, qui quis. Voluptate tenetur placeat aperiam!
                        </Typography>
                        <Button variant="contained" color="error">Get an appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={banner2} alt="" />
                </Grid>
            </Grid>
            {/* <img style={{width: '100%'}} src={banner} alt="" /> */}
        </Container>
    );
};

export default AppointmentBanner;