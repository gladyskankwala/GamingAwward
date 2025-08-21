import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import About from "./components/About"
import Feature from "./components/Feature"
import Story from "./components/Story"
import  Contact  from "./components/Contact" 
import  Footer from "./components/Footer"

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Feature></Feature>
      <Story/>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  )
}

export default App
