
import './App.css';
import Home from './components/Home';
import About from './components/about';
import Login from './components/Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Eventhandling from './components/Eventhandling';
import Statemanagement from './components/Statemanagement';
import Todolist from './components/Todolist';

function App() {
  return (
    <div >
     <BrowserRouter>
      <Navbar />

     <Routes>
      <Route element={ <Home /> } path='home'/>
      <Route element={ <Todolist /> } path='todo'/>
      <Route element={ <About /> } path='about'/>
      <Route element={ <Login /> } path='login'/>
      <Route element={ <Eventhandling /> } path='event'/>
      <Route element={ <Statemanagement /> } path='state'/>
      <Route element={ <Home /> } path='/'/>
     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
