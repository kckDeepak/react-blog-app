import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ThemeContext } from './ThemeContext';
import PostPage from './pages/PostPage';
import HomePage from './pages/HomePage'; 

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div className={`container ${theme}`}>
        <Navbar />
        <div className="main"> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:postId" element={<PostPage />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;