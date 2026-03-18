import { useState } from 'react'
import './Navbar.css'

const links = ['Specialties','Doctors','Services','Appointment','Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav id="main-nav">
        <a className="nl" href="#">
          <div className="nm">🏥</div>
          <div className="nt">
            <div className="nt-name">HealthCare Clinic</div>
            <div className="nt-sub">Payyanur · Kannur</div>
          </div>
        </a>

        <div className="nlinks">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}>{l}</button>
          ))}
        </div>

        <button className="ncta" onClick={() => scrollTo('Appointment')}>Book Appointment</button>

        <button className="ham" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </nav>

      {open && (
        <div className="mob">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}>{l}</button>
          ))}
          <a href="tel:+919876543210">📞 98765 43210</a>
        </div>
      )}
    </>
  )
}
