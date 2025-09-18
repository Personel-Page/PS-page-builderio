import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Data Structures in C++",
    desc: "Implementations and visualizations of fundamental data structures and algorithms.",
    image: "/images/project-1.svg",
  },
  {
    title: "Web Portfolio using HTML/CSS/JS",
    desc: "A responsive personal website with animations and clean design.",
    image: "/images/project-2.svg",
  },
  {
    title: "Flutter Mobile App",
    desc: "A sample cross-platform mobile app showcasing UI and navigation.",
    image: "/images/project-3.svg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <p className="mt-2 text-muted-foreground">Some things I've built</p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} className="group overflow-hidden transition hover:shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.desc}</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
