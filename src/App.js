
import Navbar from "./components/beginning/Navbar";
import Home from "./components/beginning/home";
import '../src/styles.css'
import { Projects } from "./components/projects/projects";
import ContactMe from "./components/contact form/contactForm";
import { About } from "./components/about-me/about";
import { Footer } from "./footer/footer";
import PCardExpand from "./components/projects/projectCardExpand";
const App = () => {
  return (
    // eslint-disable-next-line
    <div>
      <Navbar />
      <Home />
      <Projects/>
      <About/>
      <ContactMe/>
      <Footer/>
      
    </div>




  );
}

export default App;