import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/#' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
