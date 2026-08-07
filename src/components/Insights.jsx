import { motion } from 'framer-motion'
import { insightsCopy } from '../data/fakeData.js'

const bars = [40, 65, 30, 80, 55, 20, 45]
const labels = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export default function Insights() {
  return (
    <div className="screen">
      <header className="section-header">
        <p className="home-header__eyebrow">Your patterns</p>
        <h1>Insights</h1>
      </header>

      <div className="stat-row">
        <div className="stat-card">
          <span className="stat-card__num">{insightsCopy.streak}</span>
          <span className="stat-card__label">day streak</span>
        </div>
        <div className="stat-card stat-card--coral">
          <span className="stat-card__num">{insightsCopy.entries}</span>
          <span className="stat-card__label">entries logged</span>
        </div>
        <div className="stat-card stat-card--lavender">
          <span className="stat-card__num">{insightsCopy.topTag}</span>
          <span className="stat-card__label">most common tag</span>
        </div>
      </div>

      <div className="chart-card">
        <h3>Writing activity this week</h3>
        <div className="chart">
          {bars.map((h, i) => (
            <div className="chart__col" key={i}>
              <motion.div
                className="chart__bar"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: 'easeOut' }}
              />
              <span>{labels[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
