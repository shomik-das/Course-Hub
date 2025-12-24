import { Clock, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CourseCard({
  title,
  instructor,
  category,
  duration,
  students,
  price,
  isFree = false,
  imageUrl,
  className,
}) {
  return (
    <Card
      className={cn(
        "group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      {/* Course thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-2 p-5">
        {/* Category badge */}
        <Badge variant="secondary" className="w-fit bg-accent text-accent-foreground">
          {category}
        </Badge>

        {/* Course title */}
        <h3 className="line-clamp-2 text-lg font-bold leading-tight text-foreground">
          {title}
        </h3>

        {/* Instructor */}
        <p className="text-sm text-muted-foreground">By {instructor}</p>

        {/* Meta information */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="size-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="size-4" />
            <span>{students} Students</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="text-lg font-bold text-foreground">
            {isFree ? (
              <Badge className="text-white py-1">Free</Badge>
            ) : (
              price
            )}
          </div>
          <Button size="sm" variant="outline">
            View More
          </Button>
        </div>
      </div>
    </Card>
  )
}
