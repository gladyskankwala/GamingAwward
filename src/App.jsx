import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import About from "./components/About"
import Feature from "./components/Feature"

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Feature></Feature>
    </main>
  )
}

export default App
