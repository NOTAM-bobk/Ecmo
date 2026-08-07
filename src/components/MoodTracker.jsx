import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MoodFace from './MoodFace.jsx'
import { moods } from '../data/fakeData.js'

const TINTS = {
  happy: 'var(--coral)',
  content: 'var(--butter)',
  neutral: 'var(--sage-200)',
  calm: 'var(--lavender)',
  sad: 'var(--sage-300)',
}

export default function MoodTracker({ week, onLog }) {
  const [pickerOpenFor, setPickerOpenFor] = useState(null)

  return (
    <section className="mood-tracker">
      <div className="mood-tracker__head">
        <h3>Daily Mood Tracker</h3>
        <button className="link-btn">See history</button>
      </div>

      <div className="mood-tracker__row">
        {week.map((slot) => (
          <div key={slot.day} className="mood-tracker__col">
            <motion.button
              className="mood-tracker__face"
              style={{
                background: slot.mood ? TINTS[slot.mood] : 'var(--paper)',
                borderStyle: slot.mood ? 'solid' : 'dashed',
              }}
              whileTap={{ scale: 0.88 }}
              whileHover={{ scale: 1.06 }}
              onClick={() => setPickerOpenFor(pickerOpenFor === slot.day ? null : slot.day)}
              aria-label={`Log mood for ${slot.day}`}
            >
              {slot.mood ? (
                <MoodFace mood={slot.mood} size={22} />
              ) : (
                <span className="mood-tracker__plus">+</span>
              )}
            </motion.button>
            <span className="mood-tracker__day">{slot.day}</span>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {pickerOpenFor && (
          <motion.div
            className="mood-picker"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="mood-picker__row">
              {moods.map((m) => (
                <motion.button
                  key={m.id}
                  className="mood-picker__item"
                  whileTap={{ scale: 0.85 }}
                  whileHover={{ y: -3 }}
                  onClick={() => {
                    onLog(pickerOpenFor, m.id)
                    setPickerOpenFor(null)
                  }}
                >
                  <span
                    className="mood-picker__face"
                    style={{ background: TINTS[m.id] }}
                  >
                    <MoodFace mood={m.id} size={20} />
                  </span>
                  <span className="mood-picker__label">{m.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
