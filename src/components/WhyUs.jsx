import './WhyUs.css'

const reasons = [
  { num: '01', title: 'NABH Accredited Facility',      desc: 'Nationally accredited for quality and patient safety — your health is in certified hands.' },
  { num: '02', title: 'Zero Wait Time',                 desc: 'Scheduled appointments mean you arrive and are seen immediately — no hours lost waiting.' },
  { num: '03', title: 'All Specialties Under One Roof', desc: 'From general medicine to orthopaedics, dental, eye care and beyond — one clinic for every need.' },
  { num: '04', title: '24-Hour Emergency',              desc: "Medical emergencies don't follow a schedule. Our emergency line is always active." },
  { num: '05', title: 'Same-Day Lab Results',           desc: 'In-house diagnostics — blood tests, ECG, X-ray results ready the same day.' },
  { num: '06', title: 'WhatsApp Booking & Updates',     desc: 'Book instantly via WhatsApp, receive confirmations, reminders, and easy reschedule options.' },
]

export default function WhyUs() {
  return (
    <section className="sect-why">
      <div className="sw">
        <div className="reveal" style={{ marginBottom: 52 }}>
          <div className="ey">Why Choose Us</div>
          <div className="sh">Care You Can <em>Trust</em></div>
          <p className="sp">We combine clinical expertise with genuine compassion to deliver care that goes beyond medicine.</p>
        </div>
        <div className="why-grid">
          {reasons.map(r => (
            <div className="wc reveal" key={r.num}>
              <div className="wc-num">{r.num}</div>
              <div className="wc-title">{r.title}</div>
              <div className="wc-desc">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
