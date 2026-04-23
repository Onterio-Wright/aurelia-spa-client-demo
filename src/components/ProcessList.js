export default function ProcessList({ steps }) {
  return (
    <div className="process-list">
      {steps.map((step, index) => (
        <div key={step} className="process-step">
          <div className="process-step__number">0{index + 1}</div>
          <p>{step}</p>
        </div>
      ))}
    </div>
  );
}
