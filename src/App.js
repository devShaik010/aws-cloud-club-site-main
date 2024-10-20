import "./App.css" ;
import { ParallaxProvider } from 'react-scroll-parallax';
import "bootstrap/dist/css/bootstrap.min.css" ;



import { Route, Routes } from "react-router-dom" ;

import Home from "./Routes/Home" ;
import Events from "./Routes/Events" ;
import Resources from "./Routes/Resources" ;
import Gallery from "./Routes/Gallery" ;
import About from "./Routes/About";
import Join from "./Routes/Join";
import Meetup3 from "./Routes/Meetup3";
import Blogs from "./Routes/Blogs";
import BlogDetail from "./Routes/BlogDetail";
import Board from "./Routes/Board";

function App() {
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;

  return (
    <ParallaxProvider>
    <div className="App">
      {/* Removed the AnimatedCursor component */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/join" element={<Join />} />
        <Route path="/meetup3" element={<Meetup3 />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/board" element={<Board />} />
        
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </div>
  </ParallaxProvider>
  ) ;
}


export default App ;
