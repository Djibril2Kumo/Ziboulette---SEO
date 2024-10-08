import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Home";
import Ziboulette from "./pages/Ziboulette";
import Header from "./components/Header";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Accueil /> },
    { path: "/ziboulette", element: <Ziboulette /> },
    { path: "/about", element: <About /> },
  ]);

  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
