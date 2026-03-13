/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { FeaturesPage } from "./pages/FeaturesPage";
import { PricingPage } from "./pages/PricingPage";
import { PlaceholderPage } from "./pages/PlaceholderPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900 selection:bg-black selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/updates" element={<PlaceholderPage title="Updates" />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<PlaceholderPage title="About Us" />} />
          <Route path="/download-app" element={<PlaceholderPage title="Download App" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
