import { useState } from 'react'
import './ChatWidget.css'

const opts = [
  { icon: '📅', label: 'Book Appointment',   msg: 'Hi, I want to book an appointment' },
  { icon: '🕐', label: 'Check Timings',      msg: 'Hi, I want to know consultation timings' },
  { icon: '🚨', label: 'Emergency',          msg: 'Hi, I need emergency consultation' },
  { icon: '💬', label: 'General Query',      msg: 'Hi, I have a general query' },
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  return (
    <div className="chat-wrap">
      {open && (
        <div className="chat-box">
          <div className="cb-head">
            <div className="cb-av">🏥</div>
            <div>
              <div className="cb-nm">HealthCare Clinic</div>
              <div className="cb-st"><div className="cb-dot" /> We reply quickly</div>
            </div>
          </div>
          <div className="cb-body">
            <div className="cb-msg">Hello! How can we help you today?</div>
            <div className="cb-opts">
              {opts.map(o => (
                <a
                  key={o.label}
                  className="cb-opt"
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(o.msg)}`}
                  target="_blank" rel="noreferrer"
                >
                  {o.icon} {o.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      <button className="chat-btn" onClick={() => setOpen(!open)}>💬</button>
    </div>
  )
}
