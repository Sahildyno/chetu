import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // if Hero.jsx is directly inside src/

import StrategicLocations from './components/StrategicLocations';



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
       <StrategicLocations />
  
      <main className="p-6">Home Page</main>
    </div>
  );
}

export default App;
