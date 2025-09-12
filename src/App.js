import Navbar from "./Componants/Navbar";
import About from "./Pages/About.js";
import Home from "./Pages/Home.js";


function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      
      {/* Other sections will go here */}
    </div>
  );
}

export default App;
