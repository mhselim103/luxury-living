import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import LogIn from "./Pages/Authentication/LogIn/LogIn";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
import Contact from "./Pages/Home/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Projects from "./Pages/Home/Projects/Projects";
import Service from "./Pages/Home/Service/Service";
import Testimonial from "./Pages/Home/Testimonial/Testimonial";
import Footer from "./Pages/Shared/Footer/Footer";
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
      <AuthProvider>
        {/* <Navigation /> */}
        {/* <Hero />
      <Projects />
      <Service />
      <Testimonial />
      <Contact />
      <Footer /> */}
        {/* <LogIn /> */}
        {/* <SignUp /> */}
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/*" element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<LogIn />} />
            <Route path="register" element={<SignUp />} />
            <Route path="services" element={<Service />} />
            <Route path="testimonial" element={<Testimonial />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
