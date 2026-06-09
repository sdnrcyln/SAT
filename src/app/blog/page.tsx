import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { blogPosts, blogCategories } from "@/lib/content";

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Blog & Kaynak Merkezi"
        title="İlham, rehberlik ve araştırma"
        subtitle="Mimarlık, tasarım, sanat, teknoloji ve öğrenci rehberleri."
      />
      <section className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {blogCategories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full border border-white/10 text-sm text-dh-muted hover:border-dh-gold hover:text-dh-gold transition-colors cursor-default"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-white/10">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <span className="text-xs uppercase tracking-widest text-dh-gold">{post.category}</span>
                <h2 className="font-display text-xl font-bold mt-2 mb-2 group-hover:text-dh-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-dh-muted text-sm">{post.date}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
