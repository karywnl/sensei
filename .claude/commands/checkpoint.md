# /project:checkpoint — Test My Understanding

The student wants to test whether they actually understand the current step — not just whether the code runs.

> How this differs from `/project:next`: `/next` asks **one** quick gate question before moving on. `/checkpoint` is the deliberate, deeper review — **three** questions, on demand, whenever the student wants to pressure-test their understanding.

---

## How to Run a Checkpoint

Identify which step the student is currently on, then pick 3 questions from the bank below. Ask them one at a time — wait for their answer before asking the next.

**Do not ask all 3 at once. One at a time.**

---

## Question Bank by Step

### Step 3 — Data Profiling
- *"What does `df.info()` tell you that `df.describe()` doesn't?"*
- *"Why would a column stored as `object` dtype be a problem for a model?"*
- *"You see a column with 10,000 rows and 9,800 unique values. What might that column be?"*
- *"You find that 40% of a column is null. What are your options and what are the trade-offs of each?"*
- *"What's the difference between a duplicate row that should be removed and one that might be legitimate?"*
- *"A column has values like: ['Male', 'male', 'M', 'MALE']. What's the problem and how do you fix it?"*

### Step 4 — EDA
- *"Your target variable has 95% zeros and 5% ones. What does that tell you before building any model?"*
- *"You plot a histogram of a feature and it's heavily right-skewed. What are your options and why might it matter?"*
- *"Correlation between two features is 0.95. Why could that be a problem for certain models?"*

### Step 5 — Train-Test Split
- *"What is data leakage and how does doing preprocessing before splitting cause it?"*
- *"Why 80-20 and not 50-50? Is there a rule?"*
- *"When would you use stratified splitting? What does it protect against?"*

### Step 6 — Feature Engineering
- *"What's the difference between feature engineering and feature selection?"*
- *"You have a date column. What useful features could you extract from it?"*
- *"You have two columns: 'purchase_amount' and 'discount_applied'. What new feature might you create?"*

### Step 7 — Preprocessing Pipeline
- *"Why do we fit the scaler on training data only, then transform both train and test?"*
- *"When would you use OrdinalEncoder vs OneHotEncoder?"*
- *"What's the point of using `sklearn.pipeline.Pipeline`? What breaks without it?"*

### Step 8 — Baseline Model
- *"Why start with a simple model instead of jumping straight to XGBoost or a neural net?"*
- *"For a classification problem, what's a good naive baseline before any ML at all?"*
- *"Your baseline accuracy is 90%. Is that good? What's the first question you'd ask?"*

### Step 9 — Model Selection
- *"What is cross-validation and why is it better than a single train-test evaluation?"*
- *"When would you choose a simpler model over a more accurate but complex one?"*
- *"What does 'overfitting' actually look like in your training vs. validation scores?"*

### Step 10 — Evaluation
- *"Why is accuracy a misleading metric for an imbalanced dataset?"*
- *"What's the difference between precision and recall? When would you prioritize one over the other?"*
- *"Your AUC-ROC is 0.85. What does that actually mean in plain English?"*

### Step 11 — Hyperparameter Tuning
- *"What's the difference between a hyperparameter and a model parameter?"*
- *"What problem does RandomizedSearchCV solve compared to GridSearchCV?"*
- *"Your model's performance barely improved after tuning. What does that tell you?"*

### Step 12 — Final Insights
- *"What does feature importance tell you, and what doesn't it tell you?"*
- *"How would you explain this model's output to someone with no ML knowledge?"*
- *"If you had to start this project over knowing what you know now, what would you do differently?"*

---

## Scoring the Answers

- **Strong answer**: affirm specifically and move on. *"Exactly — and the reason that matters in production is..."*
- **Partial answer**: *"You're close — you got [X] right. What about [the missing piece]?"*
- **Wrong answer**: *"Interesting take — let's think through that together. If [their assumption] were true, what would happen in this scenario?"*

Never just say "wrong." Always redirect with a question.
