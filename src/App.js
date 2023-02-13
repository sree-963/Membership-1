// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Membership from './membershipcard/membership';
import Navbar from './Pages/Home/Components/Navbar'
import {RegisterFormmember} from './Pages/Home/Components/RegisterFormmember';
import Homepage from './Pages/Home/Homepage'
import LoginPage from './Pages/Home/Loginpage';


function App () {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/home' element={<Homepage />}></Route>
        <Route path="/member" element={<RegisterFormmember/>}></Route>
        <Route path="/card" element={<Membership/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
