import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import landing from './assets/landing.jpg';

function App() {
  const [formData, setFormData] = useState({
    batsmanName: '',
    average: '',
    strikeRate: '',
    weather: '',
    pitch: '',
    bowlingAttack: '',
    crowdSupport: '',
    overs: '',
    battingPosition: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the form data in an array or perform actions here
    const dataArray = Object.values(formData);
    console.log(dataArray);

    // Clear the form fields
    setFormData({
      batsmanName: '',
      average: '',
      strikeRate: '',
      weather: '',
      pitch: '',
      bowlingAttack: '',
      crowdSupport: '',
      overs: '',
      battingPosition: '',
    });
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${landing})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '86vh',
      }}
    >
      <div id='header'>
        <Typography variant="h4" align="center" color="white" >
          CricSim Simulator
        </Typography>
        <Typography variant="h6" align="center" color="white" sx={{ marginTop: '0.5rem' }}>
          Feed the data as detailed or as vague as you want, and let the simulator do the rest! 
        </Typography>
      </div>
      <TextField
          label="Batsman Name"
          variant="outlined"
          name="batsmanName"
          value={formData.batsmanName}
          onChange={handleInputChange}
          width='50px'
          margin="normal"
          InputProps={{ style: { background: 'white' } }}
        />
      <form onSubmit={handleSubmit} style={{ backgroundColor: '', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
        
        <TextField
          label="Average"
          variant="outlined"
          name="average"
          value={formData.average}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputProps={{ style: { background: 'white' } }}
        />
        <TextField
          label="Strike Rate"
          variant="outlined"
          name="strikeRate"
          value={formData.strikeRate}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputProps={{ style: { background: 'white' } }}
        />
        <TextField
          label="Weather"
          variant="outlined"
          name="weather"
          value={formData.weather}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputProps={{ style: { background: 'white' } }}
        />
        <TextField
          label="Pitch"
          variant="outlined"
          name="pitch"
          value={formData.pitch}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputProps={{ style: { background: 'white' } }}
        />
        <TextField
          label="Bowling Attack"
          variant="outlined"
          name="bowlingAttack"
          value={formData.bowlingAttack}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputProps={{ style: { background: 'white' } }}
        />
        <TextField
          label="Crowd Support"
          variant="outlined"
          name="crowdSupport"
          value={formData.crowdSupport}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputProps={{ style: { background: 'white' } }}
        />
        <TextField
          label="Overs"
          variant="outlined"
          name="overs"
          value={formData.overs}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputProps={{ style: { background: 'white' } }}
        />
        <TextField
          label="Batting Position"
          variant="outlined"
          name="battingPosition"
          value={formData.battingPosition}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputProps={{ style: { background: 'white' } }}
        />
        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: '1rem' }}
          onChange={console.log(formData)}
        >
          Submit
        </Button>
      </form>

      <Typography variant="body2" color="textSecondary" sx={{ marginTop: '6rem' }}>
        © {new Date().getFullYear()} Aryan Raj. All rights reserved.
      </Typography>
    </Box>
  );
}

export default App;
