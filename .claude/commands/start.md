# /project:start — Begin a New Dataset Session

This is the entry point. Run this every time — whether it's a fresh project or a returning session.

---

## Step 0: Check for PROGRESS.md (Returning Session?)

Before doing anything, check if `PROGRESS.md` exists in the working directory.

**If it exists** → The student is returning to an ongoing project.
- Read PROGRESS.md
- Tell them: *"Welcome back! Last time you were on Step [N] — [Step Name]. [Mention the last key decision or open question]. Want to pick up from there?"*
- If yes → jump directly to that step, skip the orientation
- If no → ask what they'd like to do instead

**If it doesn't exist** → fresh project, proceed to Step 1.

---

## Step 1: Check for PROBLEM.md (Problem Statement)

Before scanning any data, look for `PROBLEM.md` in the working directory.

**If it exists** → Read it fully. Extract:
- **Business context**: What's the problem? Who needs it solved?
- **Data dictionary**: What does each column mean? (This is the source of truth — don't guess from column names later)
- **Target variable**: Explicitly stated
- **Evaluation metric**: How will the model be judged? (Accuracy, F1, RMSE, AUC, etc.)
- **Submission format**: What does the final output need to look like?
- **Train/test split info**: Is there a separate test set? Public/private leaderboard?

Summarize what you found in 4-5 sentences of plain English. Then say:
*"I've read the problem statement. Here's what I understood — [summary]. Does this match your understanding, or did I miss anything?"*

**If it doesn't exist** → Skip this step. Claude will infer everything from the data. Optionally mention:
*"I don't see a PROBLEM.md file. If you have a problem description page, paste it into a file called PROBLEM.md in this folder — it'll help me teach you with the exact right context. For now, I'll work from the data itself."*

---

## Step 2: Scan the Working Directory for Data

Look for data files: `.csv`, `.xlsx`, `.xls`, `.json`, `.parquet`

Also check for:
- `train.csv` / `test.csv` → competition-style setup (train has the target, test doesn't)
- `sample_submission.csv` → confirms this is a prediction task with a specific output format

If multiple data files exist, list them and ask:
*"I can see [list of files]. Which one are we working with for training?"*

If only one file exists → proceed with it.

If no data file found:
*"I don't see a dataset in this folder. Drop your CSV here and run /project:start again."*

---

## Step 3: Read and Understand the Data

Load the training data and silently inspect:
- Shape (rows × columns)
- Column names and dtypes
- Sample rows
- Unique value counts for low-cardinality columns
- Null counts per column

**If PROBLEM.md was found** → Cross-reference the data dictionary with actual columns. Flag any mismatches:
- Columns mentioned in the dictionary but missing from data
- Columns in the data but not in the dictionary

**If PROBLEM.md was not found** → Infer everything from the data itself.

---

## Step 4: Discuss the Problem

Report what you found in plain English. Cover:
- What the dataset appears to be about
- What domain it's from (use PROBLEM.md if available, otherwise infer)
- What the target variable is
- How many rows and features you're working with
- Any immediate red flags (heavy nulls, class imbalance in target, etc.)

Then ask:
*"Based on the target column, what type of ML problem do you think this is — classification, regression, or something else? Take a guess."*

Wait for the student's answer. Confirm or correct with a brief explanation.

If PROBLEM.md specified an evaluation metric, mention it:
*"And according to the problem statement, we'll be evaluated on [metric]. Keep that in mind — it'll matter when we get to evaluation at Step 11."*

---

## Step 5: Show the Full Roadmap

Display the roadmap customized for this project:

```
📍 Here's your learning roadmap for [project name]:
Problem: [one-line summary]
Type: [Classification / Regression]
Target: [column name]
Eval Metric: [metric from PROBLEM.md, or "we'll decide at Step 11"]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PHASE 1 — UNDERSTAND
  ✅ Step 1: Dataset Orientation           — Done
  ✅ Step 2: Problem Identification        — Done

PHASE 2 — EXPLORE
  ⬜ Step 3: Initial Inspection            — Shape, dtypes, column meanings
  ⬜ Step 4: Data Audit                    — Nulls, duplicates, quality issues
  ⬜ Step 5: EDA                           — Distributions, relationships, target analysis

PHASE 3 — PREPARE
  ⬜ Step 6: Train-Test Split              — Before any transformation
  ⬜ Step 7: Feature Engineering           — Domain-relevant signals, new features
  ⬜ Step 8: Preprocessing Pipeline        — Imputation, encoding, scaling

PHASE 4 — MODEL
  ⬜ Step 9:  Baseline Model               — Benchmark with simplest model
  ⬜ Step 10: Model Selection              — Compare 2-3 models
  ⬜ Step 11: Evaluation                   — [metric] as primary metric

PHASE 5 — IMPROVE
  ⬜ Step 12: Hyperparameter Tuning        — Optimize the best model
  ⬜ Step 13: Final Insights               — Feature importance, business interpretation

Total: 13 steps. One at a time. No rushing.
```

Flag steps that will be critical for THIS specific dataset:
- Heavy nulls → flag Step 4 and Step 8
- Imbalanced target → flag Step 11
- Few features → flag Step 7
- Competition with test set → mention that Step 13 includes generating the submission file

---

## Step 6: Create Initial PROGRESS.md

Create `PROGRESS.md` with:
- Current Step: Step 3 — Initial Inspection
- Steps Completed: 1, 2
- Dataset, problem type, target, eval metric, domain
- Key Decisions: (none yet)
- Open Questions: (none yet)

---

## Step 7: Get Buy-In

End with:
*"That's the full map. Ready to start Step 3: Initial Inspection?"*

Wait for the student before proceeding.
