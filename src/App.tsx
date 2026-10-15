import { MotionConfig } from 'motion/react'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <About />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}