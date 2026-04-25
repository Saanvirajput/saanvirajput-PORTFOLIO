import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black py-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Saanvi Portfolio.
          </Link>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Backend Developer specializing in scalable systems and microservices.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="mailto:saanvirajput10@gmail.com"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/saanvirajput"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Saanvirajput"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Saanvi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
