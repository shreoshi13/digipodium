
import './App.css';
import Home from './components/Home';
import About from './components/about';
import Login from './components/Login';

function App() {
  return (
    <div >
      <h1 className='myclass'>
        my react app
      </h1>
      <h2 style={{color: 'green', fontSize: 50}}>
        using inline css
      </h2>
      <input type='text' />
      <Home />
      <About />
      <Login />
    </div>
  );
}

export default App;
