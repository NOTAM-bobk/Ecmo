const FACES = {
  happy: (
    <>
      <path d="M9 14c1 1.4 2.4 2.1 4 2.1s3-.7 4-2.1" strokeLinecap="round" />
      <path d="M9.5 9.5c.4-.5.9-.5 1.3 0" strokeLinecap="round" />
      <path d="M13.2 9.5c.4-.5.9-.5 1.3 0" strokeLinecap="round" />
    </>
  ),
  content: (
    <>
      <path d="M9 15c1 1 2.4 1.6 4 1.6s3-.6 4-1.6" strokeLinecap="round" />
      <path d="M8.8 9.6c.9-.7 1.9-.7 2.2 0" strokeLinecap="round" />
      <path d="M13 9.6c.9-.7 1.9-.7 2.2 0" strokeLinecap="round" />
    </>
  ),
  neutral: (
    <>
      <path d="M9 15h8" strokeLinecap="round" />
      <path d="M9 10h2.4" strokeLinecap="round" />
      <path d="M12.6 10H15" strokeLinecap="round" />
    </>
  ),
  calm: (
    <>
      <path d="M9 15c1 .6 2.4 1 4 1s3-.4 4-1" strokeLinecap="round" />
      <path d="M8.8 10c.9-.6 1.9-.6 2.2 0" strokeLinecap="round" />
      <path d="M13 10c.9-.6 1.9-.6 2.2 0" strokeLinecap="round" />
    </>
  ),
  sad: (
    <>
      <path d="M9 16.4c1-1.1 2.4-1.7 4-1.7s3 .6 4 1.7" strokeLinecap="round" />
      <path d="M9.5 10.3c.4.5.9.5 1.3 0" strokeLinecap="round" />
      <path d="M13.2 10.3c.4.5.9.5 1.3 0" strokeLinecap="round" />
    </>
  ),
}

export default function MoodFace({ mood = "neutral", size = 24, strokeWidth = 1.6 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeWidth={strokeWidth}>
        {FACES[mood] || FACES.neutral}
      </g>
    </svg>
  )
}
