// import logo from './logo.svg';
import './App.css';
import './LandingPage.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App() {
  function handleClick(e){
    e.preventDefault();
    
  }
  return (
    <div class="LandingPage">
      <Box sx={{ width: '100%', maxWidth: 1000 }}>
       <Typography variant='h3' color="white" component="div" gutterBottom>
          경계작전명령서 V1.0
        </Typography>
        <Button variant="contained">Get Started</Button>
      </Box>
    </div>
    
  );
}

export default App;
