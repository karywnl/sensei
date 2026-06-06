import GithubIcon from './GithubIcon'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="nav-brand">
          <span className="nav-brand-icon">🥋</span>
          <span className="nav-brand-name">sensei</span>
          <span className="nav-brand-sep">/ understand first. code second.</span>
        </a>

        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="#commands">Commands</a></li>
          <li><a href="#setup">Setup</a></li>
        </ul>

        <a
          href="https://github.com/karywnl/sensei"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost nav-cta"
        >
          <GithubIcon />
          GitHub
        </a>
      </div>
    </nav>
  )
}
