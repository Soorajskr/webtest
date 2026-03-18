import { useRef } from 'react'
import './Contact.css'

const info = [
  { icon: '📍', label: 'Address',         value: 'HealthCare Clinic\nMain Road, Near Bus Stand\nPayyanur, Kannur — 670307' },
  { icon: '📞', label: 'Phone & WhatsApp', value: '98765 43210', href: 'tel:+919876543210' },
  { icon: '🕐', label: 'Clinic Hours',    value: 'Mon–Sat: 9AM–1PM · 5PM–8PM\nSunday: 10AM–1PM · Emergency: 24hr' },
  { icon: '🅿️', label: 'Facilities',     value: 'Free Parking · AC Waiting · Pharmacy' },
]

export default function Contact() {
  const nameRef  = useRef()
  const phoneRef = useRef()
  const deptRef  = useRef()
  const msgRef   = useRef()

  const handleQuick = () => {
    const name  = nameRef.current.value
    const phone = phoneRef.current.value
    const dept  = deptRef.current.value
    const msg   = msgRef.current.value
    if (!name || !phone) { alert('Please fill name and phone'); return }
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(`Hello HealthCare Clinic,\nName: ${name}\nPhone: ${phone}\nDept: ${dept}\n\n${msg}`)}`)
  }

  return (
    <section id="contact" className="sect-contact">
      <div className="sw">
        <div className="reveal">
          <div className="ey">Find Us</div>
          <div className="sh">Visit Our <em>Clinic</em></div>
        </div>
        <div className="cg">
          <div className="reveal">
            {info.map(i => (
              <div className="ci" key={i.label}>
                <div className="ci-ic">{i.icon}</div>
                <div>
                  <div className="ci-l">{i.label}</div>
                  <div className="ci-v">
                    {i.href
                      ? <a href={i.href}>{i.value}</a>
                      : i.value.split('\n').map((line, idx) => <span key={idx}>{line}<br /></span>)
                    }
                  </div>
                </div>
              </div>
            ))}
            <a
              className="btn-primary"
              href="https://wa.me/919876543210?text=Hi, I want to book an appointment"
              target="_blank" rel="noreferrer"
              style={{ marginTop: 8, width: 'fit-content' }}
            >
              💬 Book via WhatsApp
            </a>
            <div className="map-box">
              <span style={{ fontSize: 28 }}>🗺️</span>
              <span>Payyanur, Kannur — 670307</span>
              <a href="https://maps.google.com/?q=Payyanur+Kannur+Kerala" target="_blank" rel="noreferrer">
                Get Directions ↗
              </a>
            </div>
          </div>

          <div className="contact-form reveal">
            <div className="af-title">Quick Appointment</div>
            <div className="af-sub">Fill in your details below</div>
            <div className="fg"><label>Name</label><input ref={nameRef} type="text" placeholder="Your name" /></div>
            <div className="fg"><label>Phone</label><input ref={phoneRef} type="tel" placeholder="WhatsApp number" /></div>
            <div className="fg">
              <label>Department</label>
              <select ref={deptRef}>
                <option>General Medicine</option>
                <option>Gynaecology</option>
                <option>Orthopaedics</option>
                <option>Dental</option>
                <option>Eye Care</option>
                <option>Emergency</option>
              </select>
            </div>
            <div className="fg"><label>Message</label><textarea ref={msgRef} placeholder="Brief about your condition..." /></div>
            <button className="btn-submit" onClick={handleQuick}>💬 Send via WhatsApp</button>
          </div>
        </div>
      </div>
    </section>
  )
}
