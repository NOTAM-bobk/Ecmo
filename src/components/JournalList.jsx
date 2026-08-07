import RecentEntries from './RecentEntries.jsx'

export default function JournalList({ entries, onOpen }) {
  return (
    <div className="screen">
      <header className="section-header">
        <p className="home-header__eyebrow">Your journal</p>
        <h1>All Entries</h1>
      </header>
      <RecentEntries entries={entries} onOpen={onOpen} />
    </div>
  )
}
