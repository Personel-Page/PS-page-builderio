export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Trần Phước Sang. All rights reserved.
      </div>
    </footer>
  );
}
