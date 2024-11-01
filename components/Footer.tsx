// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex h-16 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} YourApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
