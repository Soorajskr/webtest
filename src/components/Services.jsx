import './Services.css'

const services = [
  { icon: '📅', name: 'Online Appointment Booking', desc: 'Book via WhatsApp or phone anytime. Arrive at your scheduled time — seen immediately.', tag: 'No Wait', feat: true },
  { icon: '🔬', name: 'Diagnostic Lab',             desc: 'Blood tests, urine tests, ECG, X-ray — same day results. Certified lab, accurate reports.', tag: 'Same Day' },
  { icon: '🏠', name: 'Home Visit',                 desc: 'Doctor visits your home for elderly patients and serious cases in the Payyanur area.', tag: 'Available' },
  { icon: '💊', name: 'In-House Pharmacy',          desc: 'All prescribed medicines available in clinic pharmacy — collect right here.', tag: 'Convenient' },
  { icon: '📋', name: 'Health Checkup Packages',   desc: 'Annual packages for individuals, couples and families. Complete screening at affordable rates.', tag: 'Packages' },
  { icon: '🚨', name: '24hr Emergency',             desc: 'Our emergency line is active 24 hours. Call us anytime for urgent care.', tag: '24 Hours' },
]

export default function Services() {
  return (
    <section id="services" className="sect-services">
      <div className="sw">
        <div className="reveal">
          <div className="ey">Our Services</div>
          <div className="sh">Beyond Consultation —<br /><em>Complete Care</em></div>
          <p className="sp">Everything you need for your health, under one roof.</p>
        </div>
        <div className="svg-grid">
          {services.map(s => (
            <div className={`sc reveal ${s.feat ? 'feat' : ''}`} key={s.name}>
              <div className="sc-icon">{s.icon}</div>
              <div className="sc-name">{s.name}</div>
              <div className="sc-desc">{s.desc}</div>
              <span className="sc-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
