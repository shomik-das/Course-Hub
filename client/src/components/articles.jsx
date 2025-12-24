import { BlogCard } from "./blog-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const articles = [
  {
    id: 1,
    title: "10 Proven Learning Strategies to Master Any Skill Faster",
    category: "Learning Tips",
    publishDate: "Dec 15, 2024",
    excerpt:
      "Discover evidence-based learning techniques that will help you acquire new skills more efficiently and retain information longer.",
    imageUrl: "/hero.png",
  },
  {
    id: 2,
    title: "The Future of Online Education: Trends Shaping 2025",
    category: "Industry Insights",
    publishDate: "Dec 10, 2024",
    excerpt:
      "Explore the emerging technologies and methodologies that are revolutionizing how we learn online in the coming year.",
    imageUrl: "/hero.png",
  },
  {
    id: 3,
    title: "Building a Successful Career Through Continuous Learning",
    category: "Career Development",
    publishDate: "Dec 5, 2024",
    excerpt:
      "Learn how to leverage online courses and certifications to accelerate your career growth and stay competitive in the job market.",
    imageUrl: "/hero.png",
  },
  {
    id: 4,
    title: "Study Techniques That Actually Work: Science-Backed Methods",
    category: "Study Tips",
    publishDate: "Nov 28, 2024",
    excerpt:
      "Move beyond traditional studying with these scientifically proven techniques that enhance memory retention and understanding.",
    imageUrl: "/hero.png",
  },
  {
    id: 5,
    title: "How AI is Transforming Personalized Learning Experiences",
    category: "Technology",
    publishDate: "Nov 20, 2024",
    excerpt:
      "Discover how artificial intelligence is creating adaptive learning paths tailored to individual student needs and preferences.",
    imageUrl: "/hero.png",
  },
  {
    id: 6,
    title: "From Beginner to Expert: A Roadmap for Skill Development",
    category: "Skill Building",
    publishDate: "Nov 15, 2024",
    excerpt:
      "Follow this comprehensive guide to structure your learning journey and progress systematically from novice to mastery.",
    imageUrl: "/hero.png",
  },
]

export function LatestArticles() {
  return (
    <section className="bg-background pt-0 pb-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <Badge variant="secondary" className="w-fit bg-accent/50 text-accent-foreground py-1">
              Latest Articles
            </Badge>
            <h2 className="text-3xl font-bold leading-tight text-balance text-foreground md:text-5xl">
              Insights & Resources From Our Blog
            </h2>
            <p className="text-gray-500 max-w-2xl leading-relaxed">
              Stay updated with the latest trends, tips, and learning strategies.
            </p>
          </div>
          <Button variant="outline" className="w-fit shrink-0 bg-transparent">
            All Articles
          </Button>
        </div>

        {/* Articles grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <BlogCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}
