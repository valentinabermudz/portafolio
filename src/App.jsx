import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import AboutMe from "./pages/AboutMe"
import ScrollLine from "./components/ScrollLine"
import InteractiveBackground from "./components/InteractiveBackground"

function App() {
  return (
    <div className="flex-1 overflow-y-auto scroll-smooth text-brown">

      <Navbar />
      <InteractiveBackground />

      <main>
        <ScrollLine />
        <Home />
        <AboutMe />
        <Projects />
      </main>

    </div>
  )
}

export default App

// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Navbar from "./components/Navbar"
// import Home from "./pages/Home"
// import Projects from "./pages/Projects"
// import AboutMe from "./pages/AboutMe"

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="relative h-screen text-brown flex flex-col overflow-hidden">

//         <Navbar />
//         <main className="flex-grow overflow-hidden pt-24">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/about-me" element={<AboutMe />} />
//           </Routes>
//         </main>
//       </div>
//     </BrowserRouter>
//   )
// }

// export default App