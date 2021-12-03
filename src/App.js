import Contact from './components/contact/Contact'
import Testimonials from './components/testimonials/Testimonials';
import Intro from './components/intro/Intro'; 
import Portfolio from './components/portfolio/Portfolio';
import Topbar from './components/topbar/Topbar';
import Works from './components/works/Works';
import Menu from './menu/Menu';
import "./app.scss"
import react, {useState} from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(true)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu />
      <div className="sections">
          <Intro/>
          <Portfolio/>
          <Works/>
          <Testimonials/>
          <Contact/>
      </div>
    </div>
  );
}

export default App;
