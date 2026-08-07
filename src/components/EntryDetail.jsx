import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import MoodFace from './MoodFace.jsx'

const TINTS = {
  sage: 'var(--sage-100)',
  coral: 'var(--coral)',
  lavender: 'var(--lavender)',
  butter: 'var(--butter)',
}

export default function EntryDetail({ entry, onClose }) {
  return (
    <motion.div
      className="sheet-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="sheet"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', stiffness: 320, damping: 34 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sheet__header">
          <span className="sheet__date">{entry.date}</span>
          <button className="sheet__close" onClick={onClose} aria-label="Close">
            <X size={17} />
          </button>
        </div>

        <div className="detail__tag-row">
          <span className="entry-card__tag" style={{ background: TINTS[entry.tint] }}>
            {entry.tag}
          </span>
          <span className="detail__mood" style={{ background: TINTS[entry.tint] }}>
            <MoodFace mood={entry.mood} size={16} />
          </span>
        </div>

        <h2 className="detail__title">{entry.title}</h2>
        <p className="detail__body">{entry.body}</p>
      </motion.div>
    </motion.div>
  )
}
