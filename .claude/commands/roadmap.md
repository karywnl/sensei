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
  ✅ Step 3:  Initial Inspection
  🔄 Step 4:  Data Audit               ← YOU ARE HERE
  ⬜ Step 5:  EDA

PHASE 3 — PREPARE
  ⬜ Step 6:  Train-Test Split
  ⬜ Step 7:  Feature Engineering
  ⬜ Step 8:  Preprocessing Pipeline

PHASE 4 — MODEL
  ⬜ Step 9:  Baseline Model
  ⬜ Step 10: Model Selection
  ⬜ Step 11: Evaluation

PHASE 5 — IMPROVE
  ⬜ Step 12: Hyperparameter Tuning
  ⬜ Step 13: Final Insights

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Progress: [N] / 13 steps complete
```

Legend: ✅ Done  🔄 In Progress  ⬜ Not Started

---

## After Displaying

Add one line about what's coming next:
*"Next up: [Step name] — [one sentence on what it involves]."*

Then ask: *"Want to continue or do you have questions about where we're headed?"*
