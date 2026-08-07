import { motion } from 'framer-motion'
import { Lightbulb, User } from 'lucide-react'
import QuoteCard from './QuoteCard.jsx'
import MoodTracker from './MoodTracker.jsx'
import QuickActions from './QuickActions.jsx'
import RecentEntries from './RecentEntries.jsx'

export default function Home({ quote, week, onLogMood, entries, onQuickAction, onOpenEntry }) {
  return (
    <div className="screen">
      <motion.header
        className="home-header"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <p className="home-header__eyebrow">Today, 29 Aug</p>
          <h1>Hi, Alex <span className="wave">👋</span></h1>
        </div>
        <div className="home-header__icons">
          <button className="round-btn" aria-label="Ideas">
            <Lightbulb size={16} />
          </button>
          <button className="round-btn" aria-label="Profile">
            <User size={16} />
          </button>
        </div>
      </motion.header>

      <QuoteCard quote={quote} />
      <MoodTracker week={week} onLog={onLogMood} />
      <QuickActions onSelect={onQuickAction} />
      <RecentEntries entries={entries} onOpen={onOpenEntry} />
    </div>
  )
}
