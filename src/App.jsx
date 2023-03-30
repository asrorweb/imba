import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";

// components
// navigation
import Nav from "./components/navigationBar/Nav";

//

// pages
import Home from "./pages/home/Home";
import Gallary from "./pages/gallary/Gallary";
import About from "./pages/about/About";
import Design from "./pages/design/Design";
import Price from "./pages/price/Price";

function App() {
    return (
        <div>
            <BrowserRouter>
                <div className="fixed -z-50  left-0 right-0 top-0 bottom-0 bg-img"></div>
                <Nav />
                <Routes>
                    <Route path="/imba/" element={<Home />} />
                    <Route path="/imba/about" element={<About />} />
                    <Route path="/imba/gallary" element={<Gallary />} />
                    <Route path="/imba/design" element={<Design />} />
                    <Route path="/imba/price" element={<Price />} />
                    <Route path="*" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;