// src/App.jsx
import Cursor      from './components/Cursor'
import Navbar      from './components/Navbar'
import Footer      from './components/Footer'
import Hero        from './sections/Hero'
import Pillars     from './sections/Pillars'
import Objectives  from './sections/Objectives'
import Goals       from './sections/Goals'
import Membership  from './sections/Membership'
import Impact      from './sections/Impact'
import CTA         from './sections/CTA'

export default function App() {
  return (
    <>
      {/* Custom cursor (hidden on touch devices via CSS) */}
      <Cursor />

      {/* Fixed navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />

        <div className="divider" />

        <Pillars />

        <div className="divider" />

        <Objectives />

        <div className="divider" />

        <Goals />

        <div className="divider" />

        <Membership />

        <div className="divider" />

        <Impact />

        <CTA />
      </main>

      <Footer />
    </>
  )
}
