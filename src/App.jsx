import "tailwindcss/tailwind.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Author from "./pages/Author";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import MenuCustom from "./components/MenuCustom";
import Footer from "./components/Footer";
// Faire votre système de pages, routes, route ici
// Toutes les routes à créer correspondent au dossier pages donc 4 routes à faire
const App = () => {
  return (
    <>
      <MenuCustom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Author" element={<Author />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Article/:id" element={<Article />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
