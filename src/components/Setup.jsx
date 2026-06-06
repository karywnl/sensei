import { useState } from 'react'

const BASE = 'https://raw.githubusercontent.com/karywnl/sensei/main'
const CMDS = `${BASE}/.claude/commands`

const tabs = [
  {
    id: 'recommended',
    label: 'Global',
    note: 'Installs the 6 slash commands globally — one-time setup. Then in any folder you want to learn DS in, run /project:sensei to turn it into a classroom.',
    lines: {
      bash: [
        { t: 'c', v: '# One-time: install the 6 slash commands globally' },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'mkdir -p ' }, { c: 'cb-arg', v: '~/.claude/commands' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/sensei.md` },     { c: 'cb-cmd', v: ' -o ~/.claude/commands/sensei.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/start.md` },      { c: 'cb-cmd', v: ' -o ~/.claude/commands/start.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/next.md` },       { c: 'cb-cmd', v: ' -o ~/.claude/commands/next.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/checkpoint.md` }, { c: 'cb-cmd', v: ' -o ~/.claude/commands/checkpoint.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/roadmap.md` },    { c: 'cb-cmd', v: ' -o ~/.claude/commands/roadmap.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/stuck.md` },      { c: 'cb-cmd', v: ' -o ~/.claude/commands/stuck.md' }] },
        { t: 'blank' },
        { t: 'c', v: '# In any folder you want to learn DS in:' },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'cd ' }, { c: 'cb-arg', v: 'your-ds-project/' }] },
        { t: 'blank' },
        { t: 'c', v: '# Open Claude Code and run:' },
        { t: 'mixed', parts: [{ c: 'cb-kw', v: '/project:sensei' }, { c: 'cb-comment', v: '   # bootstrap this folder as a classroom' }] },
        { t: 'mixed', parts: [{ c: 'cb-kw', v: '/project:start' }, { c: 'cb-comment', v: '    # begin your learning session' }] },
      ],
      powershell: [
        { t: 'c', v: '# One-time: install the 6 slash commands globally' },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'mkdir -Force ' }, { c: 'cb-arg', v: '$HOME/.claude/commands' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl.exe -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/sensei.md` },     { c: 'cb-cmd', v: ' -o $HOME/.claude/commands/sensei.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl.exe -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/start.md` },      { c: 'cb-cmd', v: ' -o $HOME/.claude/commands/start.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl.exe -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/next.md` },       { c: 'cb-cmd', v: ' -o $HOME/.claude/commands/next.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl.exe -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/checkpoint.md` }, { c: 'cb-cmd', v: ' -o $HOME/.claude/commands/checkpoint.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl.exe -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/roadmap.md` },    { c: 'cb-cmd', v: ' -o $HOME/.claude/commands/roadmap.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl.exe -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/stuck.md` },      { c: 'cb-cmd', v: ' -o $HOME/.claude/commands/stuck.md' }] },
        { t: 'blank' },
        { t: 'c', v: '# In any folder you want to learn DS in:' },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'cd ' }, { c: 'cb-arg', v: 'your-ds-project/' }] },
        { t: 'blank' },
        { t: 'c', v: '# Open Claude Code and run:' },
        { t: 'mixed', parts: [{ c: 'cb-kw', v: '/project:sensei' }, { c: 'cb-comment', v: '   # bootstrap this folder as a classroom' }] },
        { t: 'mixed', parts: [{ c: 'cb-kw', v: '/project:start' }, { c: 'cb-comment', v: '    # begin your learning session' }] },
      ],
    },
  },
  {
    id: 'per-project',
    label: 'Per Project',
    note: 'Self-contained install — copies all 6 commands into a single project folder, nothing global. The /project:sensei bootstrap writes CLAUDE.md for you.',
    lines: {
      bash: [
        { t: 'c', v: '# Go to your DS project' },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'cd ' }, { c: 'cb-arg', v: 'your-ds-project/' }] },
        { t: 'blank' },
        { t: 'c', v: '# Download all 6 commands into the project' },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'mkdir -p ' }, { c: 'cb-arg', v: '.claude/commands' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/sensei.md` },     { c: 'cb-cmd', v: ' -o .claude/commands/sensei.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/start.md` },      { c: 'cb-cmd', v: ' -o .claude/commands/start.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/next.md` },       { c: 'cb-cmd', v: ' -o .claude/commands/next.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/checkpoint.md` }, { c: 'cb-cmd', v: ' -o .claude/commands/checkpoint.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/roadmap.md` },    { c: 'cb-cmd', v: ' -o .claude/commands/roadmap.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/stuck.md` },      { c: 'cb-cmd', v: ' -o .claude/commands/stuck.md' }] },
        { t: 'blank' },
        { t: 'c', v: '# Open Claude Code and run:' },
        { t: 'mixed', parts: [{ c: 'cb-kw', v: '/project:sensei' }, { c: 'cb-comment', v: '   # bootstrap this folder as a classroom' }] },
        { t: 'mixed', parts: [{ c: 'cb-kw', v: '/project:start' }, { c: 'cb-comment', v: '    # begin your learning session' }] },
      ],
      powershell: [
        { t: 'c', v: '# Go to your DS project' },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'cd ' }, { c: 'cb-arg', v: 'your-ds-project/' }] },
        { t: 'blank' },
        { t: 'c', v: '# Download all 6 commands into the project' },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'mkdir -Force ' }, { c: 'cb-arg', v: '.claude/commands' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl.exe -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/sensei.md` },     { c: 'cb-cmd', v: ' -o .claude/commands/sensei.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl.exe -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/start.md` },      { c: 'cb-cmd', v: ' -o .claude/commands/start.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl.exe -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/next.md` },       { c: 'cb-cmd', v: ' -o .claude/commands/next.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl.exe -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/checkpoint.md` }, { c: 'cb-cmd', v: ' -o .claude/commands/checkpoint.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl.exe -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/roadmap.md` },    { c: 'cb-cmd', v: ' -o .claude/commands/roadmap.md' }] },
        { t: 'mixed', parts: [{ c: 'cb-cmd', v: 'curl.exe -fsSL ' }, { c: 'cb-arg', v: `${CMDS}/stuck.md` },      { c: 'cb-cmd', v: ' -o .claude/commands/stuck.md' }] },
        { t: 'blank' },
        { t: 'c', v: '# Open Claude Code and run:' },
        { t: 'mixed', parts: [{ c: 'cb-kw', v: '/project:sensei' }, { c: 'cb-comment', v: '   # bootstrap this folder as a classroom' }] },
        { t: 'mixed', parts: [{ c: 'cb-kw', v: '/project:start' }, { c: 'cb-comment', v: '    # begin your learning session' }] },
      ],
    },
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

const osOptions = [
  { id: 'bash', label: 'bash' },
  { id: 'powershell', label: 'powershell' },
]

export default function Setup() {
  const [active, setActive] = useState('recommended')
  const [os, setOs] = useState('bash')
  const tab = tabs.find((t) => t.id === active)

  return (
    <section className="section" id="setup">
      <div className="container">
        <span className="section-label">Installation</span>
        <h2 className="section-title">Two Ways to Install.</h2>
        <p className="section-sub">
          Pick whichever fits your workflow. Both take under two minutes.
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
              <span className="code-block-label">{os}</span>
              <div
                style={{
                  marginLeft: 'auto',
                  display: 'flex',
                  gap: '3px',
                  background: 'var(--bg-surface)',
                  padding: '3px',
                  borderRadius: '6px',
                  border: '1px solid var(--border)',
                }}
              >
                {osOptions.map((o) => (
                  <button
                    key={o.id}
                    onClick={() => setOs(o.id)}
                    style={{
                      padding: '4px 11px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 600,
                      fontFamily: 'var(--mono)',
                      cursor: 'pointer',
                      border: 'none',
                      background: os === o.id ? 'var(--bg-highlight)' : 'transparent',
                      color: os === o.id ? 'var(--text-primary)' : 'var(--text-muted)',
                      transition: 'all var(--transition)',
                    }}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="code-block-body">
              {tab.lines[os].map((line, i) => (
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
