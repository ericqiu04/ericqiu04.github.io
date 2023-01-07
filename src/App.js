
import Navbar from "./components/beginning/Navbar";
import Home from "./components/beginning/home";
import '../src/styles.css'
import { Projects } from "./components/projects/projects";
import PCard from "./components/projects/projectCard";
import PCardExpand from "./components/projects/projectCardExpand";
const App = () => {
  return (
    // eslint-disable-next-line
    <div>
      <Navbar />
      <Home />
      <Projects/>
    </div>




  );
}

export default App;