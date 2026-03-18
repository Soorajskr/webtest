import './Hero.css'

const stats = [
  { num: '5000+', label: 'Patients Served' },
  { num: '15+',   label: 'Years Experience' },
  { num: '4.9 ⭐', label: 'Patient Rating' },
  { num: '6',     label: 'Specialties' },
]

const slots = [
  { day: 'Morning',   time: '9AM – 1PM',  avail: true },
  { day: 'Evening',   time: '5PM – 8PM',  avail: true },
  { day: 'Sunday',    time: '10AM – 1PM', avail: true },
  { day: 'Emergency', time: '24 Hours',   avail: true },
]

export default function Hero() {
  const scrollToAppt = () =>
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero">
      {/* Animated background rings */}
      <div className="hero-bg">
        <div className="hb-circle hb-c1" />
        <div className="hb-circle hb-c2" />
        <div className="hb-line" style={{ left: '25%' }} />
        <div className="hb-line" style={{ left: '50%' }} />
        <div className="hb-line" style={{ left: '75%' }} />
      </div>

      {/* Floating particles */}
      {[
        { left:'15%', top:'60%', d:'5s', delay:'0s' },
        { left:'30%', top:'40%', d:'4s', delay:'1s' },
        { left:'60%', top:'70%', d:'6s', delay:'2s' },
        { left:'80%', top:'30%', d:'4.5s', delay:'0.5s' },
      ].map((p, i) => (
        <div key={i} className="hp" style={{
          left: p.left, top: p.top,
          '--d': p.d, '--delay': p.delay
        }} />
      ))}

      <div className="hi sw">
        {/* LEFT */}
        <div className="hero-left">
          <div className="hbadge">
            <span className="hdot" />
            NABH Accredited · Payyanur, Kannur
          </div>

          <h1>Your Health,<br />Our <em>Commitment</em></h1>

          <div className="doctor-name">Dr. Rajesh Nair — MBBS, MD</div>

          <p className="hdesc">
            Expert medical care with compassion. General medicine, specialist
            consultations, diagnostics, and preventive healthcare — all under
            one roof in Payyanur.
          </p>

          <div className="hbtns">
            <button className="btn-primary" onClick={scrollToAppt}>
              📅 Book Appointment
            </button>
            <a
              className="btn-outline"
              href="https://wa.me/919876543210?text=Hi, I want to book an appointment"
              target="_blank" rel="noreferrer"
            >
              💬 WhatsApp
            </a>
          </div>

          <div className="hstats">
            {stats.map(s => (
              <div className="hs" key={s.label}>
                <div className="hn">{s.num}</div>
                <div className="hl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Appointment Card */}
        <div className="hero-right">
          <div className="hcard">
            <div className="doc-card">
              <div className="doc-avatar">👨‍⚕️</div>
              <div>
                <div className="doc-name">Dr. Rajesh Nair</div>
                <div className="doc-spec">MBBS, MD — General Medicine</div>
                <div className="doc-exp">15+ years · Payyanur</div>
              </div>
            </div>

            <div className="hc-title">Today's Available Slots</div>

            <div className="timing-grid">
              {slots.map(s => (
                <div className="tg" key={s.day}>
                  <div className="tg-day">{s.day}</div>
                  <div className="tg-time">{s.time}</div>
                  <div className={`tg-avail ${s.avail ? 'avail' : 'busy'}`}>
                    {s.avail ? 'Available ✓' : 'Full ✗'}
                  </div>
                </div>
              ))}
            </div>

            <button className="book-btn" onClick={scrollToAppt}>
              Book Appointment Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
