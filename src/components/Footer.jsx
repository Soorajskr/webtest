import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="sw">
        <div className="ft">
          <div>
            <div className="fn">HealthCare Clinic</div>
            <p className="fd">Expert medical care with compassion. Serving Payyanur and surrounding areas with qualified doctors across all specialties since 2009.</p>
          </div>
          <div className="fc">
            <h4>Specialties</h4>
            <a href="#">General Medicine</a>
            <a href="#">Gynaecology</a>
            <a href="#">Orthopaedics</a>
            <a href="#">Dental & Eye</a>
          </div>
          <div className="fc">
            <h4>Contact</h4>
            <a href="tel:+919876543210">📞 98765 43210</a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">💬 WhatsApp</a>
            <a href="#appointment">📅 Book Appointment</a>
            <a href="#">📍 Payyanur</a>
          </div>
        </div>
        <div className="fb">
          <p>© 2026 <strong>HealthCare Clinic</strong> · Payyanur, Kannur — 670307</p>
          <p className="pw">Website by cheershop.in</p>
        </div>
      </div>
    </footer>
  )
}
