import { BrowserRouter } from 'react-router-dom'
import { About, Experience, Hero, Navbar, Tech, Projects } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Projects />
        <Experience />
      </div>
    </BrowserRouter>
  )
}

export default App
