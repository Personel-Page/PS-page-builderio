import { cn } from "@/lib/utils";

export interface Skill {
  name: string;
  icon: string; // public path like /icons/js.svg
  colorFrom?: string;
  colorTo?: string;
}

interface SkillMarqueeProps {
  skills: Skill[];
  reverse?: boolean;
  speedMs?: number;
}

export default function SkillMarquee({
  skills,
  reverse,
  speedMs = 30000,
}: SkillMarqueeProps) {
  // duplicate items to create an infinite loop
  const items = [...skills, ...skills];
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={cn(
          "marquee-track flex w-[200%] gap-3", // 2x content width due to duplication
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        style={{ animationDuration: `${speedMs}ms` }}
      >
        {items.map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold text-white shadow-sm",
              "bg-gradient-to-r",
              skill.colorFrom ?? "from-indigo-500",
              skill.colorTo ?? "to-purple-500",
            )}
          >
            <img src={skill.icon} alt={skill.name} className="h-4 w-4" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
