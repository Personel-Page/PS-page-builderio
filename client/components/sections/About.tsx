export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <p className="mt-2 text-muted-foreground">A quick introduction</p>
          </div>
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              I'm a 3rd-year Computer Science student at HCMUT with strong interests in software development, algorithms, and AI/ML. I enjoy turning ideas into real applications and constantly improving my problem-solving skills.
            </p>
            <p>
              Beyond academics, I explore new technologies, contribute to personal projects, and learn best practices to write clean, maintainable code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
