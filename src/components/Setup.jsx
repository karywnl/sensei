import { useState } from 'react'

const BASE = 'https://raw.githubusercontent.com/karywnl/sensei/main'
const CMDS = `${BASE}/.claude/commands`

const tabs = [
  {
    id: 'per-project',
    label: 'Per Project',
    note: 'Downloads only CLAUDE.md and the 5 command files — nothing else from the repo.',
    lines: [
      { t: 'c', v: '# Go to your DS project' },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'cd ' }, { c: 'cb-arg', v: 'your-ds-project/' }] },
      { t: 'blank' },
      { t: 'c', v: '# Download CLAUDE.md' },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${BASE}/CLAUDE.md` }, { c: 'cb-cmd', v: ' -o CLAUDE.md' }] },
      { t: 'blank' },
      { t: 'c', v: '# Download the 5 slash commands' },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'mkdir -p ' }, { c: 'cb-arg', v: '.claude/commands' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/start.md` },      { c: 'cb-cmd', v: ' -o .claude/commands/start.md' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/next.md` },       { c: 'cb-cmd', v: ' -o .claude/commands/next.md' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/checkpoint.md` }, { c: 'cb-cmd', v: ' -o .claude/commands/checkpoint.md' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/roadmap.md` },    { c: 'cb-cmd', v: ' -o .claude/commands/roadmap.md' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/stuck.md` },      { c: 'cb-cmd', v: ' -o .claude/commands/stuck.md' }] },
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
      { t: 'c', v: '# Download CLAUDE.md to global Claude config' },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${BASE}/CLAUDE.md` }, { c: 'cb-cmd', v: ' -o ~/.claude/CLAUDE.md' }] },
      { t: 'blank' },
      { t: 'c', v: '# Download the 5 slash commands globally' },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'mkdir -p ' }, { c: 'cb-arg', v: '~/.claude/commands' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/start.md` },      { c: 'cb-cmd', v: ' -o ~/.claude/commands/start.md' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/next.md` },       { c: 'cb-cmd', v: ' -o ~/.claude/commands/next.md' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/checkpoint.md` }, { c: 'cb-cmd', v: ' -o ~/.claude/commands/checkpoint.md' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/roadmap.md` },    { c: 'cb-cmd', v: ' -o ~/.claude/commands/roadmap.md' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/stuck.md` },      { c: 'cb-cmd', v: ' -o ~/.claude/commands/stuck.md' }] },
      { t: 'blank' },
      { t: 'c', v: '# Verify — open any project and run:' },
      { t: 'mixed', parts: [{ c: 'cb-kw', v: '/project:start' }] },
    ],
  },
  {
    id: 'commands-only',
    label: 'Commands Only',
    note: 'Already have your own CLAUDE.md? Just grab the 5 command files, then add the Socratic Ladder and DS Roadmap sections from sensei\'s CLAUDE.md.',
    lines: [
      { t: 'c', v: '# Download commands into your project' },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'mkdir -p ' }, { c: 'cb-arg', v: 'your-project/.claude/commands' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/start.md` },      { c: 'cb-cmd', v: ' -o your-project/.claude/commands/start.md' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/next.md` },       { c: 'cb-cmd', v: ' -o your-project/.claude/commands/next.md' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/checkpoint.md` }, { c: 'cb-cmd', v: ' -o your-project/.claude/commands/checkpoint.md' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/roadmap.md` },    { c: 'cb-cmd', v: ' -o your-project/.claude/commands/roadmap.md' }] },
      { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/stuck.md` },      { c: 'cb-cmd', v: ' -o your-project/.claude/commands/stuck.md' }] },
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
