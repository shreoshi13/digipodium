
import './App.css';
import Home from './components/Home';
import About from './components/about';
import Login from './components/Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Eventhandling from './components/Eventhandling';
import Statemanagement from './components/Statemanagement';
import Todolist from './components/Todolist';
import Productlist from './components/Productlist';
import Contact from './components/Contact';
import ManageUser from './components/manageUser';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import UpdateUser from './components/updateUser';
import SignUp from './components/SignUp';

function App() {
  return (
    <div >
      <Toaster position='top-right' />
     <BrowserRouter>
     <AnimatePresence>
      <Navbar />

     <Routes>
      <Route element={ <Home /> } path='home'/>
      <Route element={ <Todolist /> } path='todo'/>
      <Route element={ <About /> } path='about'/>
      <Route element={ <Login /> } path='login'/>
      <Route element={ <SignUp /> } path='SignUp'/>
      <Route element={ <Eventhandling /> } path='event'/>
      <Route element={ <Statemanagement /> } path='state'/>
      <Route element={ <Productlist /> } path='product'/>
      <Route element={ <ManageUser /> } path='manage'/>
      <Route element={ <UpdateUser /> } path='update/:id'/>
      <Route element={ <Contact /> } path='contact'/>
      <Route element={ <Home /> } path='/'/>
     </Routes>
     </AnimatePresence>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
