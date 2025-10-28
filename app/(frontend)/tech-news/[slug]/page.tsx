import { notFound } from "next/navigation";
import { getNewsBySlug, getTechnologyNews } from "@/lib/getNewsByCategory";
import ScrollBasedAnimation from "../../../../components/ScrollBasedAnimation";

export async function generateStaticParams() {
  const posts = await getTechnologyNews();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  try {
    const post = await getNewsBySlug(slug);

    if (!post) {
      notFound();
    }

    return (
      <main className="bg-white text-black max-w-7xl mx-auto px-8 py-16 md:py-24">
        {/* Article Header */}
        <ScrollBasedAnimation direction="up" delay={0.1}>
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-8 bg-black" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-600">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
            {post.summary && (
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {post.summary}
              </p>
            )}
          </header>
        </ScrollBasedAnimation>

        {/* Featured Image */}
        {post.image_url && post.image_url.length > 0 && (
          <ScrollBasedAnimation direction="up" delay={0.2}>
            <figure className="mb-12">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
                <img
                  src={post.image_url[0]}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-4 text-sm text-gray-500 text-center">
                By {post.author}
              </figcaption>
            </figure>
          </ScrollBasedAnimation>
        )}

        {/* Article Metadata */}
        <ScrollBasedAnimation direction="up" delay={0.2}>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-mono mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Author:</span>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Published:</span>
              <span>{post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : 'Recently'}</span>
            </div>
            {post.read_time && (
              <div className="flex items-center gap-2">
                <span className="font-semibold">Read time:</span>
                <span>{post.read_time} min</span>
              </div>
            )}
          </div>
        </ScrollBasedAnimation>

        {/* Article Content */}
        <ScrollBasedAnimation direction="up" delay={0.3}>
          <article className="prose prose-lg max-w-none text-black">
            <div className="text-gray-900 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </article>
        </ScrollBasedAnimation>

        {/* Additional Images */}
        {post.image_url && post.image_url.length > 1 && (
          <ScrollBasedAnimation direction="up" delay={0.4}>
            <section className="mt-12">
              <h3 className="text-xl font-semibold mb-6 text-black">Additional Images</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {post.image_url.slice(1).map((url: string, index: number) => (
                  <figure key={index} className="group">
                    <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                      <img
                        src={url}
                        alt={`${post.title} - Image ${index + 2}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </figure>
                ))}
              </div>
            </section>
          </ScrollBasedAnimation>
        )}

        {/* Article Meta Info */}
        <ScrollBasedAnimation direction="up" delay={0.5}>
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="inline-flex px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                    Featured
                  </span>
                )}
                <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                  post.published
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}>
                  {post.published ? "Published" : "Draft"}
                </span>
              </div>

              <div className="text-sm text-gray-500">
                {post.views ? `${post.views} views` : "New article"}
              </div>
            </div>
          </footer>
        </ScrollBasedAnimation>
      </main>
    );
  } catch (error) {
    console.error("Error loading article:", error);
    notFound();
  }
}