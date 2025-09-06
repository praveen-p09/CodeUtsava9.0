import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./pages/home/AboutUs.jsx";
import Events from "./pages/events/Events.jsx"; 
import FAQ from "./pages/FAQ.jsx";

export default function App() {
    return (
        <Router>
            <div className="relative min-h-screen overflow-x-hidden">
                <Navbar />
                <Routes>
                    {/* Home Page */}
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <About />
                            </>
                        }
                    />

                    {/* Events Page */}
                    <Route path="/events" element={<Events/>} />
                    <Route path="/faq" element={<FAQ/>} />
                    
                </Routes>
            </div>
        </Router>
    );
}
