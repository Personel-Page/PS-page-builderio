import SkillMarquee, { type Skill } from "@/components/sections/SkillMarquee";

const BASE_PATH = import.meta.env.BASE_URL || "";

const row1: Skill[] = [
  {
    name: "C++",
    icon: `${BASE_PATH}/icons/cplusplus.svg`,
    colorFrom: "from-indigo-500",
    colorTo: "to-sky-500",
  },
  {
    name: "Python",
    icon: `${BASE_PATH}/icons/python.svg`,
    colorFrom: "from-sky-500",
    colorTo: "to-yellow-400",
  },
  {
    name: "HTML",
    icon: `${BASE_PATH}/icons/html5.svg`,
    colorFrom: "from-orange-500",
    colorTo: "to-rose-500",
  },
  {
    name: "CSS",
    icon: `${BASE_PATH}/icons/css3.svg`,
    colorFrom: "from-sky-600",
    colorTo: "to-indigo-500",
  },
  {
    name: "JavaScript",
    icon: `${BASE_PATH}/icons/javascript.svg`,
    colorFrom: "from-yellow-400",
    colorTo: "to-amber-500",
  },
];

const row2: Skill[] = [
  {
    name: "Java",
    icon: `${BASE_PATH}/icons/java.svg`,
    colorFrom: "from-red-500",
    colorTo: "to-rose-500",
  },
  {
    name: "Flutter",
    icon: `${BASE_PATH}/icons/flutter.svg`,
    colorFrom: "from-sky-500",
    colorTo: "to-cyan-500",
  },
  {
    name: "Git",
    icon: `${BASE_PATH}/icons/git.svg`,
    colorFrom: "from-orange-500",
    colorTo: "to-red-500",
  },
  {
    name: "React",
    icon: `${BASE_PATH}/icons/react.svg`,
    colorFrom: "from-cyan-500",
    colorTo: "to-indigo-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
        <p className="mt-2 text-muted-foreground">Languages & technologies</p>

        <div className="mt-8 space-y-4">
          <SkillMarquee skills={[...row1, ...row2]} speedMs={28000} />
          <SkillMarquee skills={[...row2, ...row1]} reverse speedMs={34000} />
        </div>
      </div>
    </section>
  );
}
