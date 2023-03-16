import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Teams from './components/Teams/Teams';
import Benefit from './components/Benefits/Benefit';
import Card from './components/Hero/Card';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Hero/>
     <Teams/>
     <Benefit/>
     <Card/>
    </div>
  );
}

export default App;
