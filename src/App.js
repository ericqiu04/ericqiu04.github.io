
import Navbar from "./components/beginning/Navbar";
import Home from "./components/beginning/home";
import '../src/styles.css'
import { Projects } from "./components/projects/projects";

import { About } from "./components/about-me/about";
const App = () => {
  return (
    // eslint-disable-next-line
    <div>
      <Navbar />
      <Home />
      <Projects/>
      <About/>
    </div>




  );
}

export default App;