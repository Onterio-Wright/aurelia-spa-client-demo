export default function StatStrip({ items }) {
  return (
    <section className="stat-strip shell">
      {items.map((item) => (
        <div key={item.value} className="stat-pill">
          <div className="stat-pill__value">{item.value}</div>
          <div className="stat-pill__label">{item.label}</div>
        </div>
      ))}
    </section>
  );
}
