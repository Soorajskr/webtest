import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Specialties from './components/Specialties'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import Doctors from './components/Doctors'
import Appointment from './components/Appointment'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import ChatWidget from './components/ChatWidget'

export default function App() {
  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    // Nav scroll effect
    const nav = document.getElementById('main-nav')
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 40)
    window.addEventListener('scroll', onScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <ChatWidget />
      <FloatingButtons />
      <Navbar />
      <Hero />
      <Ticker />
      <Specialties />
      <WhyUs />
      <Services />
      <Doctors />
      <Appointment />
      <Contact />
      <Footer />
    </>
  )
}
