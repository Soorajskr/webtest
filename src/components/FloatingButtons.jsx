import { useEffect, useState } from 'react'
import './FloatingButtons.css'

export default function FloatingButtons() {
  const [showBtt, setShowBtt] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBtt(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="floats">
        <a className="fb-call" href="tel:+919876543210">📞 Call Clinic</a>
        <a className="fb-wa" href="https://wa.me/919876543210?text=Hi, I want to book an appointment" target="_blank" rel="noreferrer">💬 Book Now</a>
      </div>
      {showBtt && (
        <button className="btt" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
      )}
    </>
  )
}
