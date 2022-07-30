import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            {/* <Route path="/flighttracker" element={<FlightTracker />} />
            <Route path="/trackflight" element={<TrackFlight />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
