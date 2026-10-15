import Header from './components/Header'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}