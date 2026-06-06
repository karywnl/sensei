export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <a href="#" className="footer-brand-name">
            <span>🥋</span>
            <span>sensei</span>
          </a>
          <div className="footer-tagline">understand first. code second.</div>
        </div>

        <ul className="footer-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="#commands">Commands</a></li>
          <li><a href="#setup">Setup</a></li>
          <li>
            <a href="https://github.com/karywnl/sensei" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://docs.anthropic.com/en/docs/claude-code" target="_blank" rel="noopener noreferrer">
              Claude Code ↗
            </a>
          </li>
        </ul>

        <div className="footer-copy">
          MIT License<br />
          Built for Claude Code by Anthropic
        </div>
      </div>
    </footer>
  )
}
