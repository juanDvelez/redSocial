function Interests() {
  const interests = [
    { label: 'News', level: 'd5' },
    { label: 'W3Schools', level: 'd4' },
    { label: 'Labels', level: 'd3' },
    { label: 'Games', level: 'd2' },
    { label: 'Friends', level: 'd1' },
    { label: 'Games', level: '' },
    { label: 'Friends', level: 'l1' },
    { label: 'Food', level: 'l2' },
    { label: 'Design', level: 'l3' },
    { label: 'Art', level: 'l4' },
    { label: 'Photos', level: 'l5' },
  ]

  return (
    <div className="w3-card w3-round w3-white w3-hide-small">
      <div className="w3-container">
        <p>Interests</p>
        <p>
          {interests.map((interest, index) => (
            <span
              key={index}
              className={`w3-tag w3-small w3-theme-${interest.level}`}
            >
              {interest.label}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default Interests
