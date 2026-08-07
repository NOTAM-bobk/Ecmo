import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import JournalList from './components/JournalList.jsx'
import Insights from './components/Insights.jsx'
import Desires from './components/Desires.jsx'
import JournalEntry from './components/JournalEntry.jsx'
import EntryDetail from './components/EntryDetail.jsx'
import { quotes, recentEntries, weekMood } from './data/fakeData.js'
import './App.css'

const TINTS_BY_ACTION = { keep: 'sage', capture: 'coral', remember: 'lavender', shift: 'butter' }
const MOOD_BY_ACTION = { keep: 'content', capture: 'happy', remember: 'happy', shift: 'calm' }

export default function App() {
  const [tab, setTab] = useState('home')
  const [entries, setEntries] = useState(recentEntries)
  const [week, setWeek] = useState(weekMood)
  const [composerPreset, setComposerPreset] = useState(null)
  const [viewingEntry, setViewingEntry] = useState(null)
  const [quote] = useState(quotes[0])

  function handleLogMood(day, moodId) {
    setWeek((w) => w.map((s) => (s.day === day ? { ...s, mood: moodId } : s)))
  }

  function handleQuickAction(action) {
    setComposerPreset(action)
  }

  function handleSaveEntry({ title, body }) {
    const newEntry = {
      id: `e${Date.now()}`,
      date: 'Today, 29 Aug',
      tag: composerPreset ? composerPreset.title.split(' ')[0] : 'Free write',
      tint: composerPreset ? TINTS_BY_ACTION[composerPreset.id] : 'sage',
      title,
      body,
      mood: composerPreset ? MOOD_BY_ACTION[composerPreset.id] : 'neutral',
    }
    setEntries((prev) => [newEntry, ...prev])
    setComposerPreset(null)
  }

  const screens = {
    home: (
      <Home
        quote={quote}
        week={week}
        onLogMood={handleLogMood}
        entries={entries.slice(0, 4)}
        onQuickAction={handleQuickAction}
        onOpenEntry={setViewingEntry}
      />
    ),
    journal: <JournalList entries={entries} onOpen={setViewingEntry} />,
    insights: <Insights />,
    desires: <Desires />,
  }

  return (
    <div className="app-shell">
      <div className="phone">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            className="phone__content"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {screens[tab]}
          </motion.div>
        </AnimatePresence>

        <NavBar active={tab} onChange={setTab} />

        <AnimatePresence>
          {composerPreset && (
            <JournalEntry
              preset={composerPreset}
              onClose={() => setComposerPreset(null)}
              onSave={handleSaveEntry}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {viewingEntry && (
            <EntryDetail entry={viewingEntry} onClose={() => setViewingEntry(null)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
