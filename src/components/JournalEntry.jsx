import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Star, Image as ImageIcon, Tag, Mic, Square, Trash2, Check, ChevronDown } from 'lucide-react'
import CatMascot from './CatMascot.jsx'
import { guidedPrompts } from '../data/fakeData.js'

function formatTime(s) {
  const m = Math.floor(s / 60).toString().padStart(2, '0')
  const sec = (s % 60).toString().padStart(2, '0')
  return `${m}:${sec}`
}

export default function JournalEntry({ preset, onClose, onSave }) {
  const [tab, setTab] = useState('write')
  const [guidedIndex, setGuidedIndex] = useState(0)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [starred, setStarred] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [recorded, setRecorded] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [transcribe, setTranscribe] = useState(false)
  const [saved, setSaved] = useState(false)
  const timerRef = useRef(null)

  const prompt = tab === 'write'
    ? preset?.prompt || "Hey, I'm here. Want to share what's been on your mind today?"
    : guidedPrompts[guidedIndex]

  useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000)
    } else {
      clearInterval(timerRef.current)
    }
    return () => clearInterval(timerRef.current)
  }, [isRecording])

  function startRecording() {
    setSeconds(0)
    setRecorded(false)
    setIsRecording(true)
  }

  function stopRecording() {
    setIsRecording(false)
    setRecorded(true)
  }

  function removeRecording() {
    setRecorded(false)
    setSeconds(0)
  }

  function handleSave() {
    setSaved(true)
    setTimeout(() => {
      onSave({ title: title || 'Untitled entry', body: body || prompt })
    }, 650)
  }

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
          <button className="sheet__date">
            Today, 10:39 <ChevronDown size={15} />
          </button>
          <button className="sheet__close" onClick={onClose} aria-label="Close">
            <X size={17} />
          </button>
        </div>

        <div className="sheet__tabs">
          <button
            className={`sheet__tab ${tab === 'write' ? 'is-active' : ''}`}
            onClick={() => setTab('write')}
          >
            Write freely
          </button>
          <button
            className={`sheet__tab ${tab === 'guided' ? 'is-active' : ''}`}
            onClick={() => setTab('guided')}
          >
            Guided reflection
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={prompt}
            className="sheet__prompt"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
          >
            <span className="sheet__prompt-avatar"><CatMascot size={26} /></span>
            <p>{prompt}</p>
          </motion.div>
        </AnimatePresence>

        {tab === 'guided' && (
          <button
            className="link-btn sheet__next-prompt"
            onClick={() => setGuidedIndex((i) => (i + 1) % guidedPrompts.length)}
          >
            Try another prompt
          </button>
        )}

        <input
          className="sheet__title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="sheet__body"
          placeholder="Add your thoughts..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <AnimatePresence>
          {(isRecording || recorded) && (
            <motion.div
              className="voice-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              {isRecording ? (
                <div className="voice-panel__recording">
                  <span className="voice-panel__dot" />
                  <span>Recording…</span>
                  <span className="voice-panel__time">{formatTime(seconds)}</span>
                </div>
              ) : (
                <>
                  <p className="voice-panel__label">Voice Note Recorded</p>
                  <div className="voice-panel__actions">
                    <button className="voice-panel__remove" onClick={removeRecording}>
                      <Trash2 size={15} /> Remove
                    </button>
                    <div className="voice-panel__stopdot" />
                    <button className="voice-panel__save" onClick={() => {}}>
                      <Check size={15} /> Save
                    </button>
                  </div>
                  <span className="voice-panel__duration">{formatTime(seconds)}</span>
                  <div className="voice-panel__transcribe">
                    <span>Transcribe</span>
                    <button
                      className={`toggle ${transcribe ? 'is-on' : ''}`}
                      onClick={() => setTranscribe((t) => !t)}
                      aria-label="Toggle transcription"
                    >
                      <motion.span layout className="toggle__knob" />
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="sheet__toolbar">
          <div className="sheet__toolbar-icons">
            <button
              className={`icon-btn ${starred ? 'is-active' : ''}`}
              onClick={() => setStarred((s) => !s)}
              aria-label="Star entry"
            >
              <Star size={17} fill={starred ? 'var(--butter-dark)' : 'none'} />
            </button>
            <button className="icon-btn" aria-label="Add image">
              <ImageIcon size={17} />
            </button>
            <button className="icon-btn" aria-label="Add tag">
              <Tag size={17} />
            </button>
            <button
              className={`icon-btn ${isRecording ? 'is-recording' : ''}`}
              aria-label="Record voice note"
              onClick={isRecording ? stopRecording : startRecording}
            >
              {isRecording ? <Square size={15} /> : <Mic size={17} />}
            </button>
          </div>
          <motion.button
            className="save-btn"
            whileTap={{ scale: 0.94 }}
            onClick={handleSave}
            disabled={saved}
          >
            <AnimatePresence mode="wait">
              {saved ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 4 }}
                >
                  <Check size={16} /> Saved
                </motion.span>
              ) : (
                <motion.span key="save" exit={{ opacity: 0 }}>Save</motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
