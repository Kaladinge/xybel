import "./sass/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/layout/NavMenu";
import { Container } from "react-bootstrap";
import HomePage from "./components/home/HomePage";
import ModulesPage from "./components/modules/ModulesPage";
import ServicesPage from "./components/services/ServicesPage";
import PricingPage from "./components/pricing/PricingPage";
import BlogPage from "./components/blog/BlogPage";
import ContactPage from "./components/contact/ContactPage";
import LoginPage from "./components/login/LoginPage";
import ProductPage from "./components/product/ProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="wrapper">
          <NavMenu />
          <Container className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/modules" element={<ModulesPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </Container>
        </div>
      </Router>
    </div>
  );
}

export default App;
