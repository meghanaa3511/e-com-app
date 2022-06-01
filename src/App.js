import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import DataCollec from './Pages/data-collec/dataCollec.component';
import {BrowserRouter,Route,Routes} from 'react-router-dom'; 
import Details from './Details/details.component';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<DataCollec />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
