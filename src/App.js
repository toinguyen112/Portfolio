import './App.css';
import Experience from './Components/Experience/Experience';
import { Intro } from './Components/Intro/Intro';
import { Navbar } from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
    </div>
  );
}

export default App;
