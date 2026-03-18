import './Specialties.css'

const specs = [
  { icon: '🫀', num: '01', name: 'General Medicine', desc: 'Fever, infections, chronic diseases, diabetes, hypertension management.' },
  { icon: '🧠', num: '02', name: 'Neurology',         desc: 'Headache, migraine, epilepsy, dizziness and neurological disorders.' },
  { icon: '🦴', num: '03', name: 'Orthopaedics',      desc: 'Joint pain, back pain, fractures, sports injuries and bone disorders.' },
  { icon: '👶', num: '04', name: 'Paediatrics',       desc: 'Child health, vaccinations, growth monitoring and paediatric care.' },
  { icon: '🦷', num: '05', name: 'Dental Care',       desc: 'Teeth cleaning, fillings, extraction, root canal and cosmetic dentistry.' },
  { icon: '👁️', num: '06', name: 'Eye Care',          desc: 'Vision testing, spectacle prescription, eye infections and treatment.' },
  { icon: '🩺', num: '07', name: 'Gynaecology',       desc: "Women's health, pregnancy care, hormonal disorders and treatment." },
  { icon: '🫁', num: '08', name: 'Pulmonology',       desc: 'Asthma, COPD, breathing disorders and respiratory care.' },
]

export default function Specialties() {
  return (
    <section id="specialties" className="sect-specs">
      <div className="sw">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 52 }}>
          <div className="ey" style={{ justifyContent: 'center' }}>Our Specialties</div>
          <div className="sh" style={{ textAlign: 'center' }}>
            Expert Care Across<br /><em>All Departments</em>
          </div>
        </div>
        <div className="spg">
          {specs.map(s => (
            <div className="spc reveal" key={s.num}>
              <span className="spc-icon">{s.icon}</span>
              <div className="spc-num">{s.num}</div>
              <div className="spc-name">{s.name}</div>
              <div className="spc-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
