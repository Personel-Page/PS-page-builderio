import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
            <p className="mt-2 text-muted-foreground">Let's build something together</p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p>
                GitHub: <a className="text-primary hover:underline" href="https://github.com/" target="_blank" rel="noreferrer">github.com/</a>
              </p>
              <p>
                LinkedIn: <a className="text-primary hover:underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">linkedin.com/</a>
              </p>
              <p>
                Email: <a className="text-primary hover:underline" href="mailto:tranphuocsang@example.com">tranphuocsang@example.com</a>
              </p>
            </div>
          </div>
          <form
            className="rounded-xl border bg-card p-6 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const name = data.get("name");
              const email = data.get("email");
              const message = data.get("message");
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
              window.location.href = `mailto:tranphuocsang@example.com?subject=Portfolio%20Contact&body=${body}`;
            }}
          >
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required placeholder="Tell me about your project..." rows={5} />
              </div>
              <Button type="submit" className="justify-self-start">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
