
import './App.css';
import Home from './components/Home';
import About from './components/about';
import Login from './components/Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
     <BrowserRouter>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>

     <Routes>
      <Route element={ <Home /> } path='home'/>
      <Route element={ <About /> } path='about'/>
      <Route element={ <Login /> } path='login'/>
      <Route element={ <Home /> } path='/'/>
     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
