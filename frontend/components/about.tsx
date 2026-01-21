export default function AboutSection() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="flex flex-col gap-6 pl-16 max-w-3xl">
        <h1 className="text-5xl font-medium text-black whitespace-nowrap" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          Learning isn&apos;t one-size-fits-all.
        </h1>

        <p className="text-2xl text-primary font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          Scalely helps you find what scales for you.
        </p>

        <p className="text-xl text-black leading-relaxed">
          Some developers learn best by building. Others need deep explanations, visuals, or repetition. But most learning platforms treat resources as universally good or bad, ignoring how people actually learn.
        </p>

        <p className="text-xl text-black leading-relaxed">
          Scalely surfaces resources that truly help, organized and refined by developers worldwide through open contribution. You find what works for you and stop wasting time on what doesn&apos;t.
        </p>
      </div>
    </section>
  );
}
