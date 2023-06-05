import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './Component/Pages/Login';
import Register from './Component/Pages/Register';
import Forget from './Component/Pages/ForgetPassword';
import Index from "./Component/Navbar/Index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/forget" element={<Forget/>}/>
        <Route path="*" element={<Index/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
