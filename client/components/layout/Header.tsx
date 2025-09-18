import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const nav = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-xl border bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:bg-zinc-900/60">
          <div className="flex h-14 items-center justify-between px-4">
            <a href="#home" className="font-extrabold tracking-tight text-xl">
              <span className="gradient-text">Trần Phước Sang</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-muted-foreground hover:text-foreground transition-colors",
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <Button asChild size="sm" className="hidden sm:inline-flex">
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
