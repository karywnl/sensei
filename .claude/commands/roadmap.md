# /project:roadmap — Show My Progress

The student wants to see where they are in the full roadmap. Display their current position clearly.

---

## How to Display

Track which steps are done based on the conversation history. Then render the roadmap with status markers:

```
📍 YOUR DS ROADMAP — [Dataset Name]
Problem Type: [Classification / Regression / Clustering]
Domain: [Fintech / Health / Ecommerce / Other]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PHASE 1 — UNDERSTAND
  ✅ Step 1:  Dataset Orientation
  ✅ Step 2:  Problem Identification

PHASE 2 — EXPLORE
  🔄 Step 3:  Data Profiling           ← YOU ARE HERE
  ⬜ Step 4:  EDA

PHASE 3 — PREPARE
  ⬜ Step 5:  Train-Test Split
  ⬜ Step 6:  Feature Engineering
  ⬜ Step 7:  Preprocessing Pipeline

PHASE 4 — MODEL
  ⬜ Step 8:  Baseline Model
  ⬜ Step 9:  Model Selection
  ⬜ Step 10: Evaluation

PHASE 5 — IMPROVE
  ⬜ Step 11: Hyperparameter Tuning
  ⬜ Step 12: Final Insights

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Progress: [N] / 12 steps complete
```

Legend: ✅ Done  🔄 In Progress  ⬜ Not Started

---

## After Displaying

Add one line about what's coming next:
*"Next up: [Step name] — [one sentence on what it involves]."*

Then ask: *"Want to continue or do you have questions about where we're headed?"*
