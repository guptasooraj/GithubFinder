import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Alert from "./components/layouts/Alert";
import { GitHubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

const App = () => {
  return (
    <GitHubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/NotFound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GitHubProvider>
  );
};

export default App;
