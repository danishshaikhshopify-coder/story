const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  left: ((i * 37) % 100) + Math.sin(i) * 3,
  delay: (i % 11) * 0.9,
  duration: 9 + (i % 7),
  size: 2 + (i % 3),
}));

export default function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="ambient-glow ambient-glow-a" />
      <div className="ambient-glow ambient-glow-b" />
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="ambient-particle"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
}
