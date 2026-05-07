# /project:next — Move to the Next Step

The student is ready to move forward. Use this to transition cleanly from one step to the next.

---

## Before Moving On — Quick Gate Check

Before starting the next step, ask ONE quick question to confirm the current step is actually understood:

- After Step 3 (Inspection): *"In one sentence — what's the most interesting thing you noticed about this data so far?"*
- After Step 4 (Audit): *"What's the biggest data quality issue we need to handle and why?"*
- After Step 5 (EDA): *"What's one relationship between features and the target that stood out to you?"*
- After Step 6 (Split): *"Why did we split the data before doing any transformation?"*
- After Step 7 (Feature Eng): *"Which feature you created do you think will matter most, and why?"*
- After Step 8 (Preprocessing): *"What would go wrong if we fit the scaler on the full dataset instead of just the training set?"*
- After Step 9 (Baseline): *"What does the baseline score tell us, and why does it matter?"*
- After Step 10 (Selection): *"Which model performed best and what's your intuition for why?"*
- After Step 11 (Evaluation): *"What does [relevant metric] actually tell us about this model's real-world usefulness?"*
- After Step 12 (Tuning): *"What changed after tuning? Was it worth it?"*

If the student answers well → proceed to the next step.
If the answer is vague or wrong → don't block them, but briefly address the gap before moving on.

---

## Starting the Next Step

Open the next step with:
1. The step name and number
2. What the goal of this step is in plain English (1-2 sentences)
3. Your first Socratic question to kick it off — never start with code or a lecture

### Step Openers (use the appropriate one)

**Step 3 — Initial Inspection**
*"Before we write a single line of code — what do you want to know first about a dataset you've never seen before? What questions would you ask?"*

**Step 4 — Data Audit**
*"We've seen the shape and types. Now — what could be wrong with this data? What kinds of problems might be hiding in it?"*

**Step 5 — EDA**
*"We know the data is clean enough to explore. What do you think the distribution of [target column] looks like? Take a guess before we plot anything."*

**Step 6 — Train-Test Split**
*"Before we touch any transformations — why do you think we'd want to split the data right now, before cleaning or scaling?"*

**Step 7 — Feature Engineering**
*"Look at the columns we have. Are there any features you'd want to combine, transform, or create from scratch? What new signal do you think is hiding in the data?"*

**Step 8 — Preprocessing Pipeline**
*"We have raw features. What needs to happen to them before a model can use them? Walk me through the list."*

**Step 9 — Baseline Model**
*"What's the simplest possible model you could build right now? Not the best one — the simplest. Why does starting simple matter?"*

**Step 10 — Model Selection**
*"We have a baseline. Now — what other models would you want to try, and why those specifically?"*

**Step 11 — Evaluation**
*"Our model made predictions. What metric should we use to evaluate it? Is accuracy always a good choice?"*

**Step 12 — Hyperparameter Tuning**
*"We have a working model. What do you think hyperparameters are, and how are they different from what the model learns on its own?"*

**Step 13 — Final Insights**
*"The model is trained and tuned. What do you think we should take away from all of this? What would you tell someone who doesn't know ML but cares about the outcome?"*

---

## Update the Roadmap Display

After moving to a new step, show a brief updated tracker:

```
📍 Progress: Step [N] of 13 — [Step Name]
Completed: Steps 1–[N-1]
Remaining: Steps [N+1]–13
```

---

## Auto-Save PROGRESS.md (MANDATORY)

Every time `/project:next` is used, **silently update `PROGRESS.md`** in the project root. Do this in the background — don't ask, don't announce it.

Update these fields:
- **Current Step** → the new step you're moving to
- **Steps Completed** → add the step just finished
- **Key Decisions Made** → append any important choices from the step just completed (e.g., "Dropped Loan_ID", "Used median imputation for LoanAmount", "Credit_History identified as strongest predictor")
- **Open Questions** → update with any unresolved questions
- **Last Updated** → current timestamp

This is the student's safety net. If they close the laptop or get pulled away — PROGRESS.md has everything Claude needs to resume the session next time.
