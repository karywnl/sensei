const domains = [
  {
    icon: '💰', name: 'Fintech', type: 'Finance & Banking',
    examples: ['Fraud detection', 'Credit risk scoring', 'Loan eligibility', 'Transaction anomalies'],
  },
  {
    icon: '🏥', name: 'Healthcare', type: 'Clinical & Medical',
    examples: ['Disease prediction', 'Readmission risk', 'Lab value analysis', 'Diagnosis classification'],
  },
  {
    icon: '🛒', name: 'Ecommerce', type: 'Retail & Commerce',
    examples: ['Customer churn', 'Recommendation systems', 'Customer LTV', 'Cart abandonment'],
  },
  {
    icon: '🎮', name: 'Gaming', type: 'Games & Apps',
    examples: ['Player churn', 'Whale detection', 'Session analysis', 'Level progression'],
  },
]

export default function Domains() {
  return (
    <section className="domains section" id="domains">
      <div className="container">
        <span className="section-label">Domain Adaptation</span>
        <h2 className="section-title">Adapts to Any Dataset.</h2>
        <p className="section-sub">
          Sensei reads your column names and values, detects the domain, and tailors every
          example and analogy to match. No generic explanations. No forced analogies.
        </p>

        <div className="domains-grid">
          {domains.map((d) => (
            <div key={d.name} className="domain-card">
              <span className="domain-icon">{d.icon}</span>
              <div className="domain-name">{d.name}</div>
              <div className="domain-type">{d.type}</div>
              <ul className="domain-list">
                {d.examples.map((ex) => (
                  <li key={ex}>{ex}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
