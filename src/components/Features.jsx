const features = [
  { icon: '🗺️', title: '13-Step Roadmap',        desc: 'Every dataset follows the same path: Understand → Explore → Prepare → Model → Improve. The order never changes.' },
  { icon: '🧠', title: 'Socratic Teaching',       desc: 'Asks before it tells. Hints before it solves. You never run code you can\'t explain back.' },
  { icon: '💾', title: 'Session Persistence',     desc: 'Auto-saves to PROGRESS.md after every step. Close your laptop, come back tomorrow, pick up exactly where you left off.' },
  { icon: '📄', title: 'Problem Context',         desc: 'Drop a PROBLEM.md with business context and Sensei teaches within that frame — data dictionary, metric, everything.' },
  { icon: '🔍', title: 'Auto Domain Detection',   desc: 'Reads your data, detects fintech / health / gaming / ecommerce, and adapts every example and analogy accordingly.' },
  { icon: '🪜', title: '4-Level Hint Ladder',     desc: 'Stuck? Nudge → analogy → skeleton → reveal. Never jumps straight to the answer — makes you work for it.' },
  { icon: '📓', title: 'Cell Discipline',         desc: 'Every notebook cell needs a WHAT and WHY comment. Builds intentional habits instead of running cells blindly.' },
  { icon: '✅', title: 'Gate Checks',             desc: 'Can\'t move to the next step until you prove you understood the current one. Learning over output, every time.' },
]

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <span className="section-label">What You Get</span>
        <h2 className="section-title">Everything a self-taught DS student needs.</h2>
        <p className="section-sub">
          Not an autocomplete tool. Not a shortcut. A learning environment built to make you
          actually understand what you're doing — not just get outputs.
        </p>

        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feat-card">
              <span className="feat-icon">{f.icon}</span>
              <div className="feat-title">{f.title}</div>
              <p className="feat-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
