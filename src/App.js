import "./App.css";
import Contact from "./Pages/Home/Contact/Contact";
import Hero from "./Pages/Home/Hero/Hero";
import Projects from "./Pages/Home/Projects/Projects";
import Service from "./Pages/Home/Service/Service";
import Testimonial from "./Pages/Home/Testimonial/Testimonial";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
  /*  https://i.ibb.co/j3RKY04/card-image.png
https://i.ibb.co/Zm9wLST/card-image1.png
https://i.ibb.co/M6rgb8W/card-image2.png
https://i.ibb.co/3B30jqG/Ellipse-90.png
https://i.ibb.co/KqzbcLT/Ellipse-91.png
https://i.ibb.co/sVTyS8B/Ellipse-92.png
https://i.ibb.co/MSqKvY7/hero-section.png */
  return (
    <div className="bg-body-0">
      <Navigation />
      <Hero />
      <Projects />
      <Service />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
