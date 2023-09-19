import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import About from './pages/About';

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
            path='/blog'
            element={<Blog />}
          />

          <Route
            path='/about'
            element={<About />}
          />
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
