import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store.js";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import CatalogPage from "../../pages/CatalogPage/CatalogPage.jsx";
import CamperDetailsPage from "../../pages/CamperDetailsPage/CamperDetailsPage.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
