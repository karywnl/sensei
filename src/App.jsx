import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ladder from './components/Ladder'
import Features from './components/Features'
import Roadmap from './components/Roadmap'
import Commands from './components/Commands'
import Domains from './components/Domains'
import Setup from './components/Setup'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ladder />
        <Features />
        <Roadmap />
        <Commands />
        <Domains />
        <Setup />
      </main>
      <Footer />
    </>
  )
}
