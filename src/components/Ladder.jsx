const steps = [
  {
    lv: 1, icon: '💬', name: 'ASK',
    rule: 'Question first. Always.',
    desc: '"What do you think we should do here? Why?" — Claude never opens with code. It opens with curiosity.',
  },
  {
    lv: 2, icon: '💡', name: 'NUDGE',
    rule: 'Hint. No code yet.',
    desc: 'A conceptual pointer toward the answer. Analogies, mental models, things to think about — but still no code.',
  },
  {
    lv: 3, icon: '🧩', name: 'SKELETON',
    rule: 'Fill the blanks.',
    desc: 'Partial code with gaps for you to complete. The structure is there. You supply the thinking.',
  },
  {
    lv: 4, icon: '✨', name: 'REVEAL',
    rule: 'Last resort. Every line explained.',
    desc: 'Full code with a line-by-line breakdown. Only reached after genuinely working through every other level.',
  },
]

export default function Ladder() {
  return (
    <section className="ladder section" id="philosophy">
      <div className="container">
        <div className="ladder-header">
          <span className="section-label">The Philosophy</span>
          <h2 className="section-title">The Socratic Ladder</h2>
          <p className="section-sub">
            Claude never jumps to the answer. It climbs — asking, hinting, scaffolding,
            and only revealing as a last resort. The struggle is the lesson.
          </p>
        </div>

        <div className="ladder-grid">
          {steps.map((s) => (
            <div key={s.lv} className="ladder-step" data-lv={s.lv}>
              <div className="step-level">Level {s.lv}</div>
              <span className="step-icon">{s.icon}</span>
              <div className="step-name">{s.name}</div>
              <span className="step-rule">{s.rule}</span>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="ladder-note">
          <div className="ladder-note-inner">
            Never skip to Reveal. Never.{' '}
            <span>If you can't explain it, you haven't learned it yet.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
