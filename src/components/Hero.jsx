import GithubIcon from './GithubIcon'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Claude Code · Data Science
          </div>

          <h1 className="hero-headline">
            understand first.<br />
            <span className="hero-headline-accent">code second.</span>
          </h1>

          <p className="hero-desc">
            A Claude Code setup that turns your IDE into a Data Science dojo.
            13 steps. One at a time. The code is not the lesson —{' '}
            <em>the thinking is.</em>
          </p>

          <div className="hero-actions">
            <a
              href="https://github.com/karywnl/sensei"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <GithubIcon />
              View on GitHub
            </a>
            <a href="#features" className="btn btn-ghost">
              See how it works ↓
            </a>
          </div>
        </div>

        <div className="terminal-wrap">
          <div className="terminal">
            <div className="terminal-header">
              <span className="tdot r" />
              <span className="tdot y" />
              <span className="tdot g" />
              <span className="terminal-title">claude-code — loan-eligibility/</span>
            </div>
            <div className="terminal-body">
              <span className="t-line">
                <span className="t-prompt">❯ </span>
                <span className="t-cmd">/project:start</span>
              </span>
              <span className="t-blank" />
              <span className="t-line t-dim">Scanning project directory...</span>
              <span className="t-line">
                <span className="t-ind" />
                <span className="t-ok">✓ </span>
                <span className="t-white">train.csv </span>
                <span className="t-dim">— 614 rows × 13 cols</span>
              </span>
              <span className="t-line">
                <span className="t-ind" />
                <span className="t-ok">✓ </span>
                <span className="t-white">PROBLEM.md </span>
                <span className="t-dim">found</span>
              </span>
              <span className="t-blank" />
              <span className="t-line t-dim">Reading problem statement...</span>
              <span className="t-line">
                <span className="t-ind" />
                <span className="t-info">Business: </span>
                <span className="t-white">Loan eligibility prediction</span>
              </span>
              <span className="t-line">
                <span className="t-ind" />
                <span className="t-info">Target:   </span>
                <span className="t-white">Loan_Status </span>
                <span className="t-dim">(binary)</span>
              </span>
              <span className="t-line">
                <span className="t-ind" />
                <span className="t-info">Metric:   </span>
                <span className="t-white">Accuracy</span>
              </span>
              <span className="t-blank" />
              <span className="t-line t-hr">──────────────────────────────</span>
              <span className="t-blank" />
              <span className="t-line t-white">Before we look at any code —</span>
              <span className="t-blank" />
              <span className="t-line t-em">What type of ML problem is this?</span>
              <span className="t-line t-em">Classification, regression, or</span>
              <span className="t-line t-em">something else? Take a guess. 🤔</span>
              <span className="t-blank" />
              <span className="t-prompt">❯ </span>
              <span className="t-cursor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
