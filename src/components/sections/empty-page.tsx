type EmptyPageProps = {
  eyebrow: string;
  title: string;
};

export function EmptyPage({ eyebrow, title }: EmptyPageProps) {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-[var(--warm-white)] px-5 py-20 sm:px-8 lg:px-12">
      <section className="mx-auto flex min-h-[55vh] max-w-5xl flex-col justify-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--luxury-gold-deep)]">
          {eyebrow}
        </p>
        <h1 className="luxury-heading max-w-3xl text-4xl font-semibold leading-tight text-[var(--luxury-black)] sm:text-6xl">
          {title}
        </h1>
      </section>
    </main>
  );
}
