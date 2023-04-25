import './App.css';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Team from './components/Team';
import Works from './components/Works';
import ContactUs from './components/ContactUs';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
        <Navbar />
        
    <Hero/>
    <Service />
    <Works />
    </div>
  );
}

export default App;
