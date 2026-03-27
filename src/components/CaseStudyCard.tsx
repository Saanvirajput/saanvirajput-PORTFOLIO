import Link from 'next/link';
import { motion } from 'framer-motion';

interface CaseStudyCardProps {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  imageText: string;
}

export function CaseStudyCard({ slug, title, excerpt, tags, imageText }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/case-studies/${slug}`} className="block">
        <div className="aspect-[16/10] bg-zinc-100 dark:bg-zinc-800 rounded-2xl overflow-hidden mb-6 transition-all group-hover:shadow-xl group-hover:shadow-zinc-200/50 dark:group-hover:shadow-none border border-transparent dark:border-zinc-800 group-hover:border-zinc-200 dark:group-hover:border-zinc-700">
          <div className="w-full h-full flex items-center justify-center text-zinc-400 font-medium px-6 text-center">
            {imageText}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold group-hover:text-zinc-500 transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
            {excerpt}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
