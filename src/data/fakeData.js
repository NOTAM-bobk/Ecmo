export const quotes = [
  { text: "The greatest fruit of self sufficiency is freedom.", author: "Epicurus" },
  { text: "What you pay attention to grows.", author: "Unknown" },
  { text: "Slowness is a form of honesty.", author: "Momo the Cat" },
  { text: "Name the feeling, and it loses its grip.", author: "Unknown" },
  { text: "A quiet day is still a day well lived.", author: "Unknown" },
]

export const quickActions = [
  {
    id: "keep",
    title: "Keep today's thoughts",
    subtitle: "A free write for whatever's here",
    icon: "notebook",
    tint: "sage",
    prompt: "Hey, I'm here. Want to share what's been on your mind today?",
  },
  {
    id: "capture",
    title: "Capture what you want",
    subtitle: "Name a desire, out loud",
    icon: "flame",
    tint: "coral",
    prompt: "What's something you've been wanting lately, even if it feels small?",
  },
  {
    id: "remember",
    title: "Remember a joy",
    subtitle: "Log a moment worth keeping",
    icon: "heart",
    tint: "lavender",
    prompt: "Tell me about a moment today that felt good, even briefly.",
  },
  {
    id: "shift",
    title: "Shift a tough thought",
    subtitle: "Reframe with a little help",
    icon: "butterfly",
    tint: "butter",
    prompt: "What thought's been sitting heavy? Let's look at it together.",
  },
]

export const guidedPrompts = [
  "What moment from today would you like to remember?",
  "What's one thing that felt hard, and what helped even a little?",
  "What are you looking forward to tomorrow?",
  "What's a thought you keep circling back to?",
]

export const recentEntries = [
  {
    id: "e1",
    date: "Today, 29 Aug",
    tag: "Nature",
    tint: "sage",
    title: "Walk in the woods",
    body: "I wandered into the forest near my home today. The air was fresh, and the silence felt like a warm hug. I didn't expect it, but I ended up watching the sun flicker through the leaves for 40 minutes straight.",
    mood: "content",
  },
  {
    id: "e2",
    date: "Yesterday, 28 Aug",
    tag: "Work",
    tint: "lavender",
    title: "A messy but honest meeting",
    body: "Said what I actually thought in standup instead of nodding along. Felt uncomfortable for about ten minutes, then surprisingly light. Want to remember that discomfort fades faster than I predict.",
    mood: "neutral",
  },
  {
    id: "e3",
    date: "Tue, 26 Aug",
    tag: "Reflection",
    tint: "coral",
    title: "Why the small thing stung",
    body: "Tried to unpack why one offhand comment from Dana knocked me off for the whole afternoon. Think it's less about the comment and more about not feeling seen this week in general.",
    mood: "sad",
  },
  {
    id: "e4",
    date: "Sun, 24 Aug",
    tag: "Gratitude",
    tint: "butter",
    title: "Slow Sunday, on purpose",
    body: "No plans, and I let it stay that way. Made coffee twice just to have an excuse to stand by the window. This is the kind of ordinary I want more of.",
    mood: "happy",
  },
]

// Mood scale used across the week strip: happy, neutral, sad, calm, content
export const weekMood = [
  { day: "Sun", mood: "happy" },
  { day: "Mon", mood: "neutral" },
  { day: "Tue", mood: "sad" },
  { day: "Wed", mood: "calm" },
  { day: "Thu", mood: "content" },
  { day: "Fri", mood: null },
  { day: "Sat", mood: null },
]

export const moods = [
  { id: "happy", label: "Happy", tint: "coral" },
  { id: "neutral", label: "Neutral", tint: "lavender" },
  { id: "sad", label: "Low", tint: "sage" },
  { id: "calm", label: "Calm", tint: "lavender-light" },
  { id: "content", label: "Content", tint: "butter" },
]

export const insightsCopy = {
  streak: 12,
  entries: 47,
  topTag: "Reflection",
}
