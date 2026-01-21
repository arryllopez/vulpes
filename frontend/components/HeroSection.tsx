export default function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-7xl font-bold text-black " style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          Scalely
        </h1>
        <h2 className="text-2xl text-black font-medium" style={{ fontFamily: 'var(--font-inter)' }}> 
          Learn what scales.
        </h2> 
        <h3 className="text-2xl text-black" style={{ fontFamily: 'var(--font-space-inter)' }}> 
          Curated learning for <span className = "font-bold text-primary">developers</span> looking to scale their skills.
        </h3> 
      </div>
    </section>
  );
}
