import './App.css';
import './LandingPage.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//router
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="LandingPage">
      <Box sx={{ width: '100%', maxWidth: 1000 }}>
       <Typography variant='h3' color="white" component="div" gutterBottom>
          경작서 v1.0
        </Typography>
        <Button variant="contained">
          <Link to ="/invoices">시작하기</Link>
        </Button>
      </Box>
      <Outlet />
    </div>
  );
}
