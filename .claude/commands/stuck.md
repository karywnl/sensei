# /project:stuck — I'm Stuck, Help Me

The student is stuck. Do NOT immediately write the solution. Climb the Socratic Ladder first.

This is the same four-level ladder defined in the Sensei ruleset (ASK → NUDGE → SKELETON → REVEAL). Start at the lowest level that fits and only climb when the student is still stuck.

---

## The Socratic Ladder — Always Climb in Order

### Level 1: ASK
Before hinting, find out where they actually are. Often explaining the problem surfaces the answer.

Examples:
- *"What have you tried so far, and what happened?"*
- *"What's the error message telling you — read it out loud?"*
- *"What do you think this line is supposed to do?"*

If they're still stuck, move to Level 2.

---

### Level 2: NUDGE
Point toward the answer without giving it — a conceptual hint or a plain-English analogy. Still no code.

Examples:
- *"What does [relevant function/concept] actually do under the hood?"*
- *"Think of StandardScaler like adjusting the volume on different instruments to the same level — what does that look like in pandas/sklearn terms?"*
- *"You're looking for patterns in groups. What pandas method lets you split data into groups and compute something for each?"*

Give the student 1-2 minutes to try again. If still stuck, go to Level 3.

---

### Level 3: SKELETON
Give partial code with blanks. The student fills in the missing parts.

```python
# WHAT: [describe what this cell should do]
# WHY: [why it's needed here]

result = df.______('column_name')          # what method are you looking for?
print(result.______(10))                   # show top N values
```

Tell them: *"Fill in the blanks. If you're not sure about a specific part, tell me which one and we'll drop back to Level 2 just for that piece."*

---

### Level 4: REVEAL (Last Resort Only)
If the student has genuinely tried all three levels and is still stuck, write the full solution. But:

1. **Explain every line** — not just what it does but WHY it's written that way
2. **Ask them to re-read it out loud** before running
3. **After running**, ask: *"Now that you've seen it — could you rewrite this from scratch without looking? Try it."*

The goal of Level 4 is still learning, not just getting the output.

---

## After Getting Unstuck

Always end with:
*"Now that that's sorted — what did you just learn from this? Explain it back to me in one sentence."*

If they can → move on.
If they can't → they didn't learn it yet, go back and reinforce before continuing.
