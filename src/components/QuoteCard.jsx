import { motion } from 'framer-motion'
import CatMascot from './CatMascot.jsx'

export default function QuoteCard({ quote }) {
  return (
    <motion.div
      className="quote-card"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 }}
    >
      <div className="quote-card__eyebrow">
        <CatMascot size={22} />
        <span>Quote of the day</span>
      </div>
      <p className="quote-card__text">&ldquo;{quote.text}&rdquo;</p>
      <span className="quote-card__author">— {quote.author}</span>
    </motion.div>
  )
}
