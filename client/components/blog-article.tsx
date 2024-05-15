"use client";

import { articleContent } from "@/lib/data";
import Image from "next/image";

type ArticleProps = (typeof articleContent)[number];

export default function BlogArticle({
  content,
  title,
  logo,
  intro,
  tags,
  imageUrl,
}: ArticleProps) {

  return (
    <article className="flex flex-col gap-8">
      <div className="article flex flex-col gap-8">
        <h3 className="flex items-center text-base text-zinc-900 dark:text-zinc-100"><span className="h-4 w-0.5 rounded-full bg-zinc-500 dark:bg-zinc-500"></span><span className="ml-3">Case Study</span></h3>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto cursor-default">
        {tags.map((tag, index) => (
          <li
            className="bg-black/60 ring-1 ring-white/10 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
            key={index}
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
