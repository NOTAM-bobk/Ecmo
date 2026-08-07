import { motion } from 'framer-motion'
import { Home, BookOpen, BarChart3, Hexagon } from 'lucide-react'

const TABS = [
  { id: 'home', icon: Home },
  { id: 'journal', icon: BookOpen },
  { id: 'insights', icon: BarChart3 },
  { id: 'desires', icon: Hexagon },
]

export default function NavBar({ active, onChange }) {
  return (
    <nav className="navbar">
      {TABS.map(({ id, icon: Icon }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            className="navbar__btn"
            aria-label={id}
            aria-current={isActive}
            onClick={() => onChange(id)}
          >
            {isActive && (
              <motion.span
                layoutId="navbar-pill"
                className="navbar__indicator"
                transition={{ type: 'spring', stiffness: 500, damping: 32 }}
              />
            )}
            <Icon
              size={19}
              strokeWidth={2}
              className="navbar__icon"
              style={{ color: isActive ? 'var(--ink)' : 'var(--cream)' }}
            />
          </button>
        )
      })}
    </nav>
  )
}
