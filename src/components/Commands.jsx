const commands = [
  {
    cmd: '/project:sensei',
    title: 'Initialize a Classroom',
    desc: 'Run this once in any folder to turn it into a Sensei classroom. Writes CLAUDE.md to the folder for future sessions and primes the current session immediately. Then run /project:start.',
    tags: ['bootstrap', 'opt-in', 'one-shot setup'],
  },
  {
    cmd: '/project:start',
    title: 'Begin a Session',
    desc: 'The entry point for every session. Reads PROBLEM.md, scans for data, shows your 13-step roadmap, and resumes right where you left off if PROGRESS.md exists.',
    tags: ['session start', 'resume', 'roadmap', 'progress load'],
  },
  {
    cmd: '/project:next',
    title: 'Move to the Next Step',
    desc: 'Gate-checks your understanding with one targeted question. If you answer well, moves forward. Auto-saves PROGRESS.md silently in the background every time.',
    tags: ['gate check', 'auto-save', 'progress'],
  },
  {
    cmd: '/project:checkpoint',
    title: 'Test My Understanding',
    desc: '3 targeted questions for your current step — one at a time. Why / What-if / When-not-to. A quick audit to make sure you own the concept, not just the output.',
    tags: ['quiz', 'comprehension', 'why / what-if / when-not-to'],
  },
  {
    cmd: '/project:roadmap',
    title: 'Show My Progress',
    desc: 'Visual progress tracker showing every step\'s status. ✅ done, 🔄 in progress, ⬜ not started. Shows exactly where you are and what comes next.',
    tags: ['progress view', 'status tracker', 'visual'],
  },
  {
    cmd: '/project:stuck',
    title: "I'm Stuck",
    desc: 'Activates the 4-level hint ladder. Nudge → analogy → skeleton → reveal. Never jumps straight to the answer. Ends by asking you to explain what you just learned.',
    tags: ['hint ladder', 'nudge', 'skeleton', 'reveal'],
  },
]

export default function Commands() {
  return (
    <section className="section" id="commands">
      <div className="container">
        <span className="section-label">Slash Commands</span>
        <h2 className="section-title">6 Commands. Everything You Need.</h2>
        <p className="section-sub">
          Type these in Claude Code. That's it — no configuration, no plugins. Just open your
          project and start learning.
        </p>

        <div className="commands-list">
          {commands.map((c) => (
            <div key={c.cmd} className="cmd-card">
              <div className="cmd-badge">{c.cmd}</div>
              <div>
                <div className="cmd-title">{c.title}</div>
                <p className="cmd-desc">{c.desc}</p>
                <div className="cmd-tags">
                  {c.tags.map((t) => (
                    <span key={t} className="cmd-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
