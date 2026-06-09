"use client";

import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/content";
import Reveal from "./Reveal";

export default function BlogSection() {
  return (
    <section className="py-24 bg-dh-surface">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-dh-gold text-sm uppercase tracking-[0.3em] mb-4">Blog & Kaynak Merkezi</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-16">İlham ve rehberlik</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <Link href="/blog" className="group block">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-white/10">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs uppercase tracking-widest text-dh-gold">{post.category}</span>
                <h3 className="font-display text-xl font-bold mt-2 mb-2 group-hover:text-dh-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-dh-muted text-sm">{post.date}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link href="/blog" className="text-dh-gold hover:text-dh-cream transition-colors">
            Tüm yazılar →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
