import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import AddService from "./Pages/AddService/AddService";
import LogIn from "./Pages/Authentication/LogIn/LogIn";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
import Book from "./Pages/Book/Book";
import BookingList from "./Pages/BookingList/BookingList";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Contact from "./Pages/Home/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Projects from "./Pages/Home/Projects/Projects";
import Service from "./Pages/Home/Service/Service";
import Testimonial from "./Pages/Home/Testimonial/Testimonial";
import MakeAdmin from "./Pages/MakeAdmin/MakeAdmin";
import ManageServices from "./Pages/ManageServices/ManageServices";
import Orders from "./Pages/Orders/Orders";
import Review from "./Pages/Review/Review";
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
          {/* <Navigation /> */}
          <Routes>
            <Route path="/*" element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<LogIn />} />
            <Route path="register" element={<SignUp />} />
            <Route path="services" element={<Service />} />
            <Route path="testimonial" element={<Testimonial />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="orders" element={<Orders />} />
              <Route path="book" element={<Book />} />
              <Route path="myorders" element={<BookingList />} />
              <Route path="admin" element={<MakeAdmin />} />
              <Route path="addservice" element={<AddService />} />
              <Route path="manageservice" element={<ManageServices />} />
              <Route path="review" element={<Review />} />
            </Route>
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
