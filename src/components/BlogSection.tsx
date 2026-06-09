"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/content";
import Reveal from "./Reveal";

export default function BlogSection() {
  return (
    <section className="py-24 bg-dh-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-dh-gold text-sm uppercase tracking-[0.3em] mb-4">Blog & Kaynak Merkezi</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-16">
            İlham ve <span className="italic-art text-dh-coral">rehberlik</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.12}>
              <Link href="/blog" className="group block">
                <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.4 }}>
                  <div className="relative aspect-[16/10] rounded-sm overflow-hidden mb-4 artistic-frame">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:saturate-150"
                    />
                    <div className="absolute inset-0 bg-dh-gold/0 group-hover:bg-dh-gold/10 mix-blend-overlay transition-colors duration-500" />
                    <motion.span
                      className="absolute top-4 left-4 px-3 py-1 bg-dh-bg/80 text-xs uppercase tracking-widest text-dh-gold backdrop-blur-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                    >
                      {post.category}
                    </motion.span>
                  </div>
                  <h3 className="font-display text-xl font-bold mt-2 mb-2 group-hover:text-dh-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-dh-muted text-sm font-art">{post.date}</p>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link href="/blog" className="group inline-flex items-center gap-3 text-dh-gold hover:text-dh-cream transition-colors">
            <span className="w-8 h-px bg-dh-gold group-hover:w-16 transition-all" />
            Tüm yazılar
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
