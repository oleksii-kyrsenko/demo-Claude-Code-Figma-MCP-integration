import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">404 — Page not found</h1>
      <p className="text-zinc-500 dark:text-zinc-400">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Go home
      </Link>
    </div>
  );
}
