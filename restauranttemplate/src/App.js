import React from 'react';
import Navigation from './Components/Navigation';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import Menu from './Pages/Menu/Menu';
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
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;