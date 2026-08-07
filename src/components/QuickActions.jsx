import { motion } from 'framer-motion'
import { NotebookPen, Flame, Heart, Sparkles } from 'lucide-react'
import { quickActions } from '../data/fakeData.js'

const ICONS = { notebook: NotebookPen, flame: Flame, heart: Heart, butterfly: Sparkles }
const TINTS = {
  sage: 'var(--sage-100)',
  coral: 'var(--coral)',
  lavender: 'var(--lavender)',
  butter: 'var(--butter)',
}

export default function QuickActions({ onSelect }) {
  return (
    <div className="quick-actions">
      {quickActions.map((action, i) => {
        const Icon = ICONS[action.icon]
        return (
          <motion.button
            key={action.id}
            className="quick-actions__card"
            style={{ background: TINTS[action.tint] }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 * i }}
            whileHover={{ y: -4, boxShadow: 'var(--shadow-lift)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(action)}
          >
            <Icon size={20} strokeWidth={1.8} color="var(--ink)" />
            <span className="quick-actions__title">{action.title}</span>
          </motion.button>
        )
      })}
    </div>
  )
}
