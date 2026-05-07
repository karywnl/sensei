# 🥋 sensei

**understand first. code second.**

A Claude Code setup that turns your IDE into a Data Science dojo.

Most Claude Code setups want the AI to *do things for you*. Sensei wants it to *make sure you understand before you move on*. It won't write code you can figure out yourself. It won't let you skip steps. It won't let you run a cell you can't explain.

13 steps. One at a time. No rushing. The code is not the lesson — the *thinking* is.

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

## 📁 Repo Structure

```
sensei/
├── CLAUDE.md                        ← The brain — teaching rules, roadmap, personality
├── README.md
├── LICENSE
└── .claude/
    └── commands/
        ├── start.md                 ← /project:start
        ├── next.md                  ← /project:next
        ├── checkpoint.md            ← /project:checkpoint
        ├── roadmap.md               ← /project:roadmap
        └── stuck.md                 ← /project:stuck
```

---

## 🚀 Setup

### What You Need
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed and authenticated
- VS Code (recommended — optimized for VS Code Notebooks)
- A dataset to practice on

### Install (Per Project)

```bash
# Clone sensei
git clone https://github.com/YOUR_USERNAME/sensei.git

# Go to your DS project
cd your-ds-project/

# Copy the setup files
cp /path/to/sensei/CLAUDE.md .
cp -r /path/to/sensei/.claude .

# Done. Open Claude Code.
```

### Install (Global — All Projects)

```bash
cp CLAUDE.md ~/.claude/CLAUDE.md
mkdir -p ~/.claude/commands
cp .claude/commands/* ~/.claude/commands/
```

Every project now has a sensei.

### Install (Commands Only)

Already have your own `CLAUDE.md`? Just grab the commands:

```bash
mkdir -p your-project/.claude/commands
cp .claude/commands/* your-project/.claude/commands/
```

Then add the **Socratic Ladder** and **DS Roadmap** sections from sensei's `CLAUDE.md` into yours.

### Verify It Works

Open Claude Code and type:

```
/project:start
```

If Claude reads your data, shows a 13-step roadmap, and asks you a question instead of writing code — sensei is active.

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

## 📄 Optional Files

### PROBLEM.md

Working on a Kaggle competition or structured problem? Paste the full problem description into `PROBLEM.md` in your project root. Sensei reads it before touching the data and teaches with that exact context — data dictionary, evaluation metric, business framing, everything.

No formatting needed. Just dump the raw text.

### PROGRESS.md

Created automatically by `/project:start`. Updated silently on every `/project:next`. Tracks current step, completed steps, key decisions, and open questions.

Close your laptop mid-session. Come back tomorrow. Run `/project:start`. Sensei says: *"Welcome back. You were on Step 7 — Feature Engineering. Last thing we discussed was whether to log-transform LoanAmount. Want to pick up there?"*

---

## 🔧 Customize

### Adjust Teaching Intensity

In `CLAUDE.md`, modify the Socratic Ladder:

- **Full Socratic** (default): Questions first, code last
- **Balanced**: "Explain the concept, then write code together"
- **Code-heavy**: "Always write code but explain every line"

### Add New Commands

Create a `.md` file in `.claude/commands/`. Ideas:

- `/project:explain [topic]` — deep dive into a concept using analogies
- `/project:review` — code review where you explain your code first
- `/project:interview` — mock DS interview questions on the current topic
- `/project:compare` — compare two modeling approaches side by side

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
