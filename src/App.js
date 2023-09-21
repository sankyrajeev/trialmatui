
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import About from './pages/About';
import Ev_blog from './blogs/Ev_blog';
import Ai_blog from './blogs/ai_blog';
import StartupGrowth from './blogs/StartupGrowth';
import Portfolio from './pages/Portfolio';


function App() {
  return (

    <Router>
      <>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/portfolio'
            element={<Portfolio />}
          />

          <Route
            path='/blog'
            element={<Blog />}
          />

          <Route
            path='/about'
            element={<About />}
          />







          {/* // blog posts */}
          <Route path="/1" element={<Ev_blog />} />
          <Route path="/2" element={<Ai_blog />} />
          <Route path="/3" element={<StartupGrowth />} />



        </Routes>



        <Footer />
      </>

    </Router>
    // 

    // <Home />

    // <Footer/>

  );
}

export default App;
