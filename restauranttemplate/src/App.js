import React from 'react';
import Navigation from './Components/Navigation';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import Menu from './Pages/Menu/Menu';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Category/:id" element={<Menu />} />
                    <Route path="/Category/:id" element={<Footer />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact /> } />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;