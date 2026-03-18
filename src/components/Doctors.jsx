import './Doctors.css'

const doctors = [
  {
    emoji: '👨‍⚕️',
    name: 'Dr. Rajesh Nair',
    spec: 'General Medicine',
    qual: 'MBBS, MD — General Medicine',
    exp: '15+ years experience',
    time: 'Mon–Sat: 9AM–1PM, 5–8PM',
    lang: 'Malayalam, English, Hindi',
    wa: 'Dr. Rajesh Nair',
  },
  {
    emoji: '👩‍⚕️',
    name: 'Dr. Priya Menon',
    spec: 'Gynaecology & Obstetrics',
    qual: 'MBBS, MS — Gynaecology',
    exp: '12+ years experience',
    time: 'Mon, Wed, Fri: 10AM–2PM',
    lang: 'Malayalam, English',
    wa: 'Dr. Priya Menon',
  },
  {
    emoji: '👨‍⚕️',
    name: 'Dr. Arun Kumar',
    spec: 'Orthopaedics',
    qual: 'MBBS, MS — Orthopaedics',
    exp: '10+ years experience',
    time: 'Tue, Thu, Sat: 9AM–1PM',
    lang: 'Malayalam, English',
    wa: 'Dr. Arun Kumar',
  },
]

export default function Doctors() {
  return (
    <section id="doctors" className="sect-doctors">
      <div className="sw">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 52 }}>
          <div className="ey" style={{ justifyContent: 'center' }}>Our Doctors</div>
          <div className="sh" style={{ textAlign: 'center' }}>
            Meet Our <em>Expert Team</em>
          </div>
          <p className="sp" style={{ textAlign: 'center', margin: '0 auto' }}>
            Experienced, compassionate doctors dedicated to your health.
          </p>
        </div>

        <div className="dg">
          {doctors.map(d => (
            <div className="dc reveal" key={d.name}>
              <div className="dc-top">
                <div className="dc-avatar">{d.emoji}</div>
                <div className="dc-name">{d.name}</div>
                <div className="dc-spec">{d.spec}</div>
              </div>
              <div className="dc-body">
                <div className="dc-info">
                  <div className="dc-row"><span>🎓</span> {d.qual}</div>
                  <div className="dc-row"><span>⏱️</span> {d.exp}</div>
                  <div className="dc-row"><span>🕐</span> {d.time}</div>
                  <div className="dc-row"><span>🗣️</span> {d.lang}</div>
                </div>
                <button
                  className="dc-btn"
                  onClick={() => window.open(`https://wa.me/919876543210?text=${encodeURIComponent(`Hi, I want to book appointment with ${d.wa}`)}`)}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
