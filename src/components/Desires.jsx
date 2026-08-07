import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

const desires = [
  { title: 'Read before bed instead of scrolling', progress: 70 },
  { title: 'Call my sister more often', progress: 40 },
  { title: 'Learn to sit with discomfort', progress: 55 },
]

export default function Desires() {
  return (
    <div className="screen">
      <header className="section-header">
        <p className="home-header__eyebrow">What you're reaching for</p>
        <h1>Desires</h1>
      </header>

      <div className="desires-list">
        {desires.map((d, i) => (
          <motion.div
            className="desire-card"
            key={d.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="desire-card__top">
              <Flame size={16} color="var(--coral-dark)" />
              <p>{d.title}</p>
            </div>
            <div className="desire-card__track">
              <motion.div
                className="desire-card__fill"
                initial={{ width: 0 }}
                animate={{ width: `${d.progress}%` }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
