import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Team from './components/Team';
import Works from './components/Works';
import ContactUs from './components/ContactUs';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />
        <Routes>
          {/* Add your routes here */}
          <Route path="/" exact component={<Navbar/>} />
          <Route path="/Service" exact component={<Service/>} />
          <Route path="/Team" exact component={<Team/>} />
          <Route path="/Works" exact component={<Works/>} />
          <Route path="/contact-us" component={<ContactUs/>} />
        </Routes>
    </Router>
    <Hero/>
    <Service />
    <Works />
    </div>
  );
}

export default App;
