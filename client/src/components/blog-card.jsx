import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

export function BlogCard({ title, category, publishDate, excerpt, imageUrl }) {
  return (
    <Card className="group overflow-hidden border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Featured Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <CardContent className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <Badge variant="secondary" className="bg-primary/10 text-black hover:bg-primary/20">
            {category}
          </Badge>

          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Calendar className="size-3.5" />
            <span>{publishDate}</span>
          </div>
        </div>

        <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
          {title}
        </h3>

        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-500">
          {excerpt}
        </p>

        <div className="flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
          <span>Read More</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </div>
      </CardContent>
    </Card>
  )
}
