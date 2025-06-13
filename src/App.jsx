import './App.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './Pages/Index'
gsap.registerPlugin(ScrollTrigger);


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
