import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/30 via-sky-400/30 to-purple-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur dark:bg-zinc-900/60">
              Computer Science Student @ HCMUT
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="gradient-text">Trần Phước Sang</span>
            </h1>
            <p className="max-w-prose text-base leading-7 text-muted-foreground sm:text-lg">
              Passionate about coding, exploring technologies, and building
              meaningful projects.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-2xl border shadow-xl md:w-80">
            <img
              src="/images/profile-placeholder.svg"
              alt="Profile placeholder"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
