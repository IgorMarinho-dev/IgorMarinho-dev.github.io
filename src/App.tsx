import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  )
}