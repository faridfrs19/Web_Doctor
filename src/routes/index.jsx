// Import react
import React from 'react';

// Import react router dom
import { Routes, Route } from "react-router-dom";

import Home from "../views/pages/HomePage.jsx"

export default function RoutesIndex() {
    return (
        <Routes>
            {/* route "/" */}
            <Route path="/" element={<Home />} />
        </Routes>
    );
}
