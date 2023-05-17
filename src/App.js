import About from './About';
import './App.css';
import Blog from './Blog';
import Contact from './Contact';
import Destination from './Destination';
import Guide from './Guide';
import Home from './Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Package from './Package';
import Service from './Service';
import Single from './Single';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/package" element={<Package />} />
        <Route path="/single" element={<Single />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
