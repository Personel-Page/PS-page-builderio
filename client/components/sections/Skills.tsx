import { Badge } from "@/components/ui/badge";

const skills = [
  "C++",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "Flutter",
  "Git",
  "React (basics)",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
        <p className="mt-2 text-muted-foreground">Languages & technologies</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill}
              className="bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-500 text-white shadow hover:brightness-110 transition"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
