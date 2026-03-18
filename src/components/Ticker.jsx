import './Ticker.css'

const items = [
  'Appointments · Book via WhatsApp',
  'Emergency · 24 Hour Service',
  'Lab Tests · Same Day Results',
  'Home Visits · Available on Request',
  'Specialist · Referral Services',
  'Expert Medical Care · Payyanur',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="ticker">
      <div className="tw">
        {doubled.map((item, i) => (
          <span className="ti" key={i}>
            {item} <span className="td" />
          </span>
        ))}
      </div>
    </div>
  )
}
