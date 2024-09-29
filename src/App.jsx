import Navbar from "./components/navbar"
import Home from "./components/Home"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import Experience from "./components/experience"
import Contact from "./components/Contact"
const App = () => {
  return (
   <div className="overflow-x-hidden text-stone-300 antialiased">
    <div className="fixed inset-0 -z-10">
    <div class="relative h-full w-full bg-slate-950">
    <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
    </div>
    </div>

    <div className="container mx-auto px-8">
    <Navbar />
    <Home />
    <Technologies />
    <Projects />
    <Experience />
    <Contact />
    </div>
   </div>
  )
}

export default App
