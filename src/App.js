import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home.js';
import NoPage from './pages/NoPage.js'

function App() {

  return (
    <div className="App">
      <Router>
      <div>
        <nav style={{backgroundColor: 'black', color: 'white'}}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            {/* <li><Link to="/contact">Contact</Link></li> */}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path='*' element={<NoPage />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
     
    </div>
  );
}

export default App;
