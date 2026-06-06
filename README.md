# 🥋 sensei

**understand first. code second.**

A Claude Code setup that turns your IDE into a Data Science dojo. 13 steps. One at a time. Claude asks before it tells — and never skips to the answer.

→ **[Full documentation & setup guide](https://karywnl.github.io/sensei)** *(the website explains everything)*

---

## Quick Install

**Per project:**
```bash
cd your-ds-project/
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/CLAUDE.md -o CLAUDE.md
mkdir -p .claude/commands
for cmd in start next checkpoint roadmap stuck; do
  curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/.claude/commands/$cmd.md \
    -o .claude/commands/$cmd.md
done
```

**Global (all projects):**
```bash
curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/CLAUDE.md -o ~/.claude/CLAUDE.md
mkdir -p ~/.claude/commands
for cmd in start next checkpoint roadmap stuck; do
  curl -fsSL https://raw.githubusercontent.com/karywnl/sensei/main/.claude/commands/$cmd.md \
    -o ~/.claude/commands/$cmd.md
done
```

Then open Claude Code in your DS project and type `/project:start`.

---

## Commands

| Command | Does |
|---|---|
| `/project:start` | Begin or resume a session |
| `/project:next` | Gate-check understanding, move forward |
| `/project:checkpoint` | 3 comprehension questions for the current step |
| `/project:roadmap` | Visual progress tracker |
| `/project:stuck` | 4-level hint ladder |

---

## Running the Website Locally

```bash
npm install
npm run dev
```

---

MIT License
