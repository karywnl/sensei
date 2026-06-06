const phases = [
  {
    p: 1, name: 'UNDERSTAND',
    steps: [
      { n: 1,  name: 'Dataset Orientation',    desc: 'What is this data? What\'s the business question?' },
      { n: 2,  name: 'Problem Identification', desc: 'Classification? Regression? What\'s the target?' },
    ],
  },
  {
    p: 2, name: 'EXPLORE',
    steps: [
      { n: 3,  name: 'Initial Inspection',     desc: 'Shape, dtypes, sample rows, column meanings' },
      { n: 4,  name: 'Data Audit',             desc: 'Nulls, duplicates, quality issues' },
      { n: 5,  name: 'EDA',                    desc: 'Distributions, relationships, outliers' },
    ],
  },
  {
    p: 3, name: 'PREPARE',
    steps: [
      { n: 6,  name: 'Train-Test Split',       desc: 'Always before any transformation' },
      { n: 7,  name: 'Feature Engineering',    desc: 'New features, transformations, domain signals' },
      { n: 8,  name: 'Preprocessing Pipeline', desc: 'Imputation, encoding, scaling — fit on train only' },
    ],
  },
  {
    p: 4, name: 'MODEL',
    steps: [
      { n: 9,  name: 'Baseline Model',         desc: 'Simplest model first. Establish a benchmark.' },
      { n: 10, name: 'Model Selection',        desc: 'Try 2–3 models. Compare with cross-validation.' },
      { n: 11, name: 'Evaluation',             desc: 'Right metrics for the right problem.' },
    ],
  },
  {
    p: 5, name: 'IMPROVE',
    steps: [
      { n: 12, name: 'Hyperparameter Tuning',  desc: 'Grid or random search. Understand what changes.' },
      { n: 13, name: 'Final Insights',         desc: 'Feature importance, business interpretation.' },
    ],
  },
]

export default function Roadmap() {
  return (
    <section className="roadmap section" id="roadmap">
      <div className="container">
        <div className="roadmap-header">
          <span className="section-label">The Roadmap</span>
          <h2 className="section-title">13 Steps. One at a Time.</h2>
          <p className="section-sub">
            The order never changes. Steps shrink or expand based on your data — but the
            sequence is fixed, because the thinking process behind DS is universal.
          </p>
        </div>

        <div className="phases">
          {phases.map(({ p, name, steps }) => (
            <div key={p} className="phase-card" data-p={p}>
              <div className="phase-head">
                <span className="phase-num">Phase {p}</span>
                <span className="phase-name">{name}</span>
              </div>
              <ul className="phase-steps">
                {steps.map((s) => (
                  <li key={s.n} className="phase-step">
                    <span className="ps-num">{String(s.n).padStart(2, '0')}</span>
                    <div>
                      <div className="ps-name">{s.name}</div>
                      <div className="ps-desc">{s.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
