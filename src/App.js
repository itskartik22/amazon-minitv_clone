import Navbar  from './components/Navbar.js'
import HeroCraousel from './components/HeroCraousel.js'
import SeriesSection from './components/SeriesSection.js'
import Footer from './components/Footer.js'
import './style.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroCraousel />
      <SeriesSection />
      <Footer />
    </div>
  );
}

export default App;
