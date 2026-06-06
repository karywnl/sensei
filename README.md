# 🥋 sensei

**understand first. code second.**

A Claude Code setup that turns your IDE into a Data Science dojo — and a website that explains it.

Most Claude Code setups want the AI to *do things for you*. Sensei wants it to *make sure you understand before you move on*. It won't write code you can figure out yourself. It won't let you skip steps. It won't let you run a cell you can't explain.

13 steps. One at a time. The code is not the lesson — the *thinking* is.

---

## 🥋 The Philosophy

> The student asks Claude to write code. Claude asks the student what they think first.

Sensei follows the **Socratic Ladder** — a 4-level escalation system:

```
ASK      → "What do you think we should do here?"
NUDGE    → Conceptual hint. No code yet.
SKELETON → Partial code with blanks. You fill them.
REVEAL   → Full code, every line explained. Last resort only.
```

If you can figure it out, Sensei won't write it. If you can't explain it back, you haven't learned it yet.

---

## ⚡ What You Get

| Feature | What It Does |
|---|---|
| **13-step roadmap** | Every dataset follows the same path: Understand → Explore → Prepare → Model → Improve |
| **Socratic teaching** | Asks before it tells. Hints before it solves. |
| **Session persistence** | Auto-saves to `PROGRESS.md` — close your laptop, come back tomorrow, pick up where you left off |
| **Problem statement support** | Drop a `PROBLEM.md` with business context and Sensei teaches within that frame |
| **Auto domain detection** | Reads your data, detects fintech/health/gaming/ecommerce, adapts examples accordingly |
| **4-level hint ladder** | When stuck: nudge → analogy → skeleton → reveal. Never jumps to the answer. |
| **Cell discipline** | Every notebook cell needs a WHAT and WHY comment. Builds intentional habits. |
| **Gate checks** | Can't move to the next step until you prove you understood the current one |

---

## 📋 The 13-Step Roadmap

```
PHASE 1 — UNDERSTAND
  Step 1:  Dataset Orientation
  Step 2:  Problem Identification

PHASE 2 — EXPLORE
  Step 3:  Initial Inspection
  Step 4:  Data Audit
  Step 5:  EDA

PHASE 3 — PREPARE
  Step 6:  Train-Test Split
  Step 7:  Feature Engineering
  Step 8:  Preprocessing Pipeline

PHASE 4 — MODEL
  Step 9:  Baseline Model
  Step 10: Model Selection
  Step 11: Evaluation

PHASE 5 — IMPROVE
  Step 12: Hyperparameter Tuning
  Step 13: Final Insights
```

The order never changes. Steps shrink or expand based on the data.

---

## 🎮 Commands

| Command | What Happens |
|---|---|
| `/project:start` | Begins a session. Reads `PROBLEM.md` + data files, shows the roadmap, creates `PROGRESS.md`. If resuming, picks up where you left off. |
| `/project:next` | Gate-checks understanding of the current step, moves to the next, auto-saves progress. |
| `/project:checkpoint` | 3 targeted questions (why / what-if / when-not-to) for your current step. One at a time. |
| `/project:roadmap` | Visual progress tracker: ✅ done, 🔄 in progress, ⬜ not started. |
| `/project:stuck` | 4-level hint ladder. Nudge → analogy → skeleton → reveal. You try first. |

---

## 🚀 Setup

### What You Need
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed and authenticated
- VS Code (recommended — optimized for VS Code Notebooks)
- A dataset to practice on

### Install (Per Project)

Downloads only `CLAUDE.md` and the 5 command files — nothing else from the repo.

```bash
# Go to your DS project
cd your-ds-project/

# Download CLAUDE.md
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/CLAUDE.md -o CLAUDE.md

# Download the 5 slash commands
mkdir -p .claude/commands
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/.claude/commands/start.md      -o .claude/commands/start.md
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/.claude/commands/next.md       -o .claude/commands/next.md
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/.claude/commands/checkpoint.md -o .claude/commands/checkpoint.md
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/.claude/commands/roadmap.md    -o .claude/commands/roadmap.md
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/.claude/commands/stuck.md      -o .claude/commands/stuck.md

# Open Claude Code and type:
/project:start
```

### Install (Global — All Projects)

```bash
# Download CLAUDE.md to global Claude config
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/CLAUDE.md -o ~/.claude/CLAUDE.md

# Download the 5 slash commands globally
mkdir -p ~/.claude/commands
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/.claude/commands/start.md      -o ~/.claude/commands/start.md
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/.claude/commands/next.md       -o ~/.claude/commands/next.md
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/.claude/commands/checkpoint.md -o ~/.claude/commands/checkpoint.md
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/.claude/commands/roadmap.md    -o ~/.claude/commands/roadmap.md
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/.claude/commands/stuck.md      -o ~/.claude/commands/stuck.md

# Verify — open any project and run:
/project:start
```

Every project now has a sensei.

### Install (Commands Only)

Already have your own `CLAUDE.md`? Just grab the commands:

```bash
# Download commands into your project
mkdir -p your-project/.claude/commands
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/.claude/commands/start.md      -o your-project/.claude/commands/start.md
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/.claude/commands/next.md       -o your-project/.claude/commands/next.md
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/.claude/commands/checkpoint.md -o your-project/.claude/commands/checkpoint.md
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/.claude/commands/roadmap.md    -o your-project/.claude/commands/roadmap.md
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/.claude/commands/stuck.md      -o your-project/.claude/commands/stuck.md
```

Then add the **Socratic Ladder** and **DS Roadmap** sections from sensei's `CLAUDE.md` into yours.

### Verify It Works

Open Claude Code and type:

```
/project:start
```

If Claude reads your data, shows a 13-step roadmap, and asks you a question instead of writing code — sensei is active.

---

## 📁 Repo Structure

```
sensei/
├── CLAUDE.md                        ← The brain — teaching rules, roadmap, personality
├── README.md
├── LICENSE
├── index.html                       ← Website entry point
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/                             ← Website source
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Ladder.jsx
        ├── Features.jsx
        ├── Roadmap.jsx
        ├── Commands.jsx
        ├── Domains.jsx
        ├── Setup.jsx
        ├── Footer.jsx
        └── GithubIcon.jsx
└── .claude/
    └── commands/
        ├── start.md                 ← /project:start
        ├── next.md                  ← /project:next
        ├── checkpoint.md            ← /project:checkpoint
        ├── roadmap.md               ← /project:roadmap
        └── stuck.md                 ← /project:stuck
```

---

## 🌐 Running the Website

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
```

Built with React 19 + Vite 8. No CSS framework — vanilla CSS only.

---

## 📄 Optional Files (for your DS project)

### PROBLEM.md

Working on a Kaggle competition or structured problem? Paste the full problem description into `PROBLEM.md` in your project root. Sensei reads it before touching the data and teaches with that exact context — data dictionary, evaluation metric, business framing, everything.

No formatting needed. Just dump the raw text.

### PROGRESS.md

Created automatically by `/project:start`. Updated silently on every `/project:next`. Tracks current step, completed steps, key decisions, and open questions.

Close your laptop mid-session. Come back tomorrow. Run `/project:start`. Sensei says: *"Welcome back. You were on Step 7 — Feature Engineering. Last thing we discussed was whether to log-transform LoanAmount. Want to pick up there?"*

---

## 💡 Tips

- **Always start with `/project:start`** — handles fresh starts and resumptions
- **Use `/project:checkpoint` when you feel like you're just running cells** — that's the danger zone
- **Read code aloud before running it** — catches gaps in understanding
- **If you can't explain it back, you don't own it yet** — that's the whole point
- **Create `PROBLEM.md` for structured problems** — the teaching quality jumps significantly

---

## 🤝 Contributing

PRs welcome. Areas that need work:

- Slash commands for deep learning, NLP, and computer vision workflows
- More checkpoint questions for modeling and evaluation steps
- Domain-specific `PROBLEM.md` templates (Kaggle, analytics, etc.)
- Community-contributed step openers and analogies

---

## 📝 License

MIT — use it, fork it, teach with it.

---

*Built for self-taught Data Science students. Designed for [Claude Code](https://docs.anthropic.com/en/docs/claude-code) by Anthropic.*

*understand first. code second.* 🥋
