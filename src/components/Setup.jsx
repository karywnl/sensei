import { useState } from 'react'

const tabs = [
  {
    id: 'per-project',
    label: 'Per Project',
    note: 'Only applies to this project. Good for testing before going global.',
    lines: [
      { t: 'c', v: '# Clone sensei' },
      { t: 'cmd', v: 'git clone https://github.com/karywnl/sensei.git' },
      { t: 'blank' },
      { t: 'c', v: '# Go to your DS project' },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'cd ' }, { c: 'cb-arg', v: 'your-ds-project/' }] },
      { t: 'blank' },
      { t: 'c', v: '# Copy the setup files' },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'cp ' }, { c: 'cb-arg', v: '/path/to/sensei/CLAUDE.md .' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'cp -r ' }, { c: 'cb-arg', v: '/path/to/sensei/.claude .' }] },
      { t: 'blank' },
      { t: 'c', v: '# Open Claude Code and type:' },
      { t: 'mixed', parts: [{ c: 'cb-kw', v: '/project:start' }] },
    ],
  },
  {
    id: 'global',
    label: 'Global',
    note: 'Every project on your machine gets a sensei. Recommended if you work on DS regularly.',
    lines: [
      { t: 'c', v: '# Clone and enter sensei' },
      { t: 'cmd', v: 'git clone https://github.com/karywnl/sensei.git' },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'cd ' }, { c: 'cb-arg', v: 'sensei/' }] },
      { t: 'blank' },
      { t: 'c', v: '# Copy to global Claude config' },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'cp ' }, { c: 'cb-arg', v: 'CLAUDE.md ~/.claude/CLAUDE.md' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'mkdir -p ' }, { c: 'cb-arg', v: '~/.claude/commands' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'cp ' }, { c: 'cb-arg', v: '.claude/commands/* ~/.claude/commands/' }] },
      { t: 'blank' },
      { t: 'c', v: '# Verify — open any project and run:' },
      { t: 'mixed', parts: [{ c: 'cb-kw', v: '/project:start' }] },
    ],
  },
  {
    id: 'commands-only',
    label: 'Commands Only',
    note: 'Already have your own CLAUDE.md? Just grab the slash commands, then add the Socratic Ladder and DS Roadmap sections from sensei\'s CLAUDE.md.',
    lines: [
      { t: 'c', v: '# Clone and enter sensei' },
      { t: 'cmd', v: 'git clone https://github.com/karywnl/sensei.git' },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'cd ' }, { c: 'cb-arg', v: 'sensei/' }] },
      { t: 'blank' },
      { t: 'c', v: '# Copy commands into your project' },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'mkdir -p ' }, { c: 'cb-arg', v: 'your-project/.claude/commands' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'cp ' }, { c: 'cb-arg', v: '.claude/commands/* your-project/.claude/commands/' }] },
      { t: 'blank' },
      { t: 'c', v: '# Then add to your CLAUDE.md:' },
      { t: 'c', v: '#   → The Socratic Ladder section' },
      { t: 'c', v: '#   → The Universal DS Roadmap section' },
    ],
  },
]

function Line({ line }) {
  if (line.t === 'blank') return <div style={{ height: '7px' }} />
  if (line.t === 'c')     return <div><span className="cb-comment">{line.v}</span></div>
  if (line.t === 'cmd')   return <div><span className="cb-cmd">{line.v}</span></div>
  if (line.t === 'mixed') {
    return (
      <div>
        {line.parts.map((p, i) => (
          <span key={i} className={p.c}>{p.v}</span>
        ))}
      </div>
    )
  }
  return null
}

export default function Setup() {
  const [active, setActive] = useState('per-project')
  const tab = tabs.find((t) => t.id === active)

  return (
    <section className="section" id="setup">
      <div className="container">
        <span className="section-label">Installation</span>
        <h2 className="section-title">Three Ways to Install.</h2>
        <p className="section-sub">
          Pick whichever fits your workflow. All three take under two minutes.
        </p>

        <div style={{ marginTop: '44px' }}>
          <div className="setup-tabs">
            {tabs.map((t) => (
              <button
                key={t.id}
                className={`setup-tab${active === t.id ? ' active' : ''}`}
                onClick={() => setActive(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="code-block">
            <div className="code-block-header">
              <span className="tdot r" />
              <span className="tdot y" />
              <span className="tdot g" />
              <span className="code-block-label">bash</span>
            </div>
            <div className="code-block-body">
              {tab.lines.map((line, i) => (
                <Line key={i} line={line} />
              ))}
            </div>
          </div>

          <div className="setup-note">
            <span>💡</span>
            <span>{tab.note}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
