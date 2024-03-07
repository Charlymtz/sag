import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/login';
import Register from './components/register';
import UnsplashImage from '../src/components/UnsplashImage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/#' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/UnsplashImage' element={<UnsplashImage/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
