import { useRef } from 'react'
import './Appointment.css'

const perks = [
  { icon: '⚡', text: 'Instant confirmation via WhatsApp' },
  { icon: '⏰', text: 'No waiting — scheduled time slots' },
  { icon: '🔔', text: 'Reminder sent the day before' },
  { icon: '🔄', text: 'Easy rescheduling via WhatsApp' },
]

export default function Appointment() {
  const nameRef   = useRef()
  const phoneRef  = useRef()
  const doctorRef = useRef()
  const dateRef   = useRef()
  const timeRef   = useRef()
  const sympRef   = useRef()

  const handleBook = () => {
    const name   = nameRef.current.value
    const phone  = phoneRef.current.value
    const doctor = doctorRef.current.value
    const date   = dateRef.current.value
    const time   = timeRef.current.value
    const symp   = sympRef.current.value
    if (!name || !phone) { alert('Please fill name and phone'); return }
    const msg = `Hello HealthCare Clinic,\n\nAppointment Request:\nName: ${name}\nPhone: ${phone}\nDoctor: ${doctor}\nDate: ${date}\nTime: ${time}\nSymptoms: ${symp}\n\nPlease confirm my appointment.`
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`)
  }

  return (
    <section id="appointment" className="sect-appt">
      <div className="sw">
        <div className="appt-grid">
          <div className="appt-left reveal">
            <div className="ey">Book Appointment</div>
            <div className="sh">Get Seen by<br /><em>Expert Doctors</em></div>
            <p className="sp">Book your appointment online — arrive at your scheduled time, no waiting. Available 6 days a week.</p>
            <div className="appt-perks">
              {perks.map(p => (
                <div className="ap" key={p.text}>
                  <div className="ap-icon">{p.icon}</div>
                  <div className="ap-text">{p.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="appt-form reveal">
            <div className="af-title">Book Your Appointment</div>
            <div className="af-sub">We'll confirm within 30 minutes</div>

            <div className="r2">
              <div className="fg"><label>Patient Name</label><input ref={nameRef} type="text" placeholder="Full name" /></div>
              <div className="fg"><label>Phone</label><input ref={phoneRef} type="tel" placeholder="WhatsApp number" /></div>
            </div>

            <div className="fg">
              <label>Doctor / Specialty</label>
              <select ref={doctorRef}>
                <option>Dr. Rajesh Nair — General Medicine</option>
                <option>Dr. Priya Menon — Gynaecology</option>
                <option>Dr. Arun Kumar — Orthopaedics</option>
                <option>Dental — Dr. Available</option>
                <option>Eye Care — Dr. Available</option>
                <option>Paediatrics — Dr. Available</option>
              </select>
            </div>

            <div className="r2">
              <div className="fg"><label>Preferred Date</label><input ref={dateRef} type="date" /></div>
              <div className="fg">
                <label>Preferred Time</label>
                <select ref={timeRef}>
                  <option>Morning 9AM–1PM</option>
                  <option>Evening 5PM–8PM</option>
                  <option>Sunday 10AM–1PM</option>
                </select>
              </div>
            </div>

            <div className="fg">
              <label>Symptoms / Reason</label>
              <textarea ref={sympRef} placeholder="Brief description of your condition..." />
            </div>

            <button className="btn-submit" onClick={handleBook}>
              📅 Confirm Appointment via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
