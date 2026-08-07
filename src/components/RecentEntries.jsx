import { motion } from 'framer-motion'
import MoodFace from './MoodFace.jsx'

const TINTS = {
  sage: 'var(--sage-100)',
  coral: 'var(--coral)',
  lavender: 'var(--lavender)',
  butter: 'var(--butter)',
}

export default function RecentEntries({ entries, onOpen }) {
  return (
    <section className="recent">
      <div className="recent__head">
        <h3>Recent Entries</h3>
      </div>
      <div className="recent__list">
        {entries.map((entry, i) => (
          <motion.button
            key={entry.id}
            className="entry-card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 * i }}
            whileHover={{ y: -2, boxShadow: 'var(--shadow-lift)' }}
            whileTap={{ scale: 0.985 }}
            onClick={() => onOpen(entry)}
          >
            <div className="entry-card__top">
              <span className="entry-card__date">{entry.date}</span>
              <span
                className="entry-card__tag"
                style={{ background: TINTS[entry.tint] }}
              >
                {entry.tag}
              </span>
            </div>
            <h4 className="entry-card__title">{entry.title}</h4>
            <p className="entry-card__body">{entry.body}</p>
            <div
              className="entry-card__mood"
              style={{ background: TINTS[entry.tint] }}
            >
              <MoodFace mood={entry.mood} size={16} />
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  )
}
