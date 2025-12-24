import { Button } from "@/components/ui/button"
import { BookOpen, Code, Palette, TrendingUp, Database, Globe } from "lucide-react"
import { Badge } from "./ui/badge"

const categories = [
  {
    name: "Design",
    courses: 42,
    icon: Palette,
    bgColor: "bg-[oklch(0.95_0.05_340)]",
    iconColor: "text-[oklch(0.6_0.15_340)]",
  },
  {
    name: "Development",
    courses: 58,
    icon: Code,
    bgColor: "bg-[oklch(0.95_0.05_240)]",
    iconColor: "text-[oklch(0.55_0.18_250)]",
  },
  {
    name: "Business",
    courses: 38,
    icon: TrendingUp,
    bgColor: "bg-[oklch(0.95_0.05_180)]",
    iconColor: "text-[oklch(0.6_0.15_180)]",
  },
  {
    name: "Marketing",
    courses: 45,
    icon: Globe,
    bgColor: "bg-[oklch(0.95_0.05_290)]",
    iconColor: "text-[oklch(0.6_0.15_280)]",
  },
  {
    name: "Data Science",
    courses: 36,
    icon: Database,
    bgColor: "bg-[oklch(0.95_0.05_270)]",
    iconColor: "text-[oklch(0.6_0.15_270)]",
  },
  {
    name: "Writing",
    courses: 28,
    icon: BookOpen,
    bgColor: "bg-[oklch(0.95_0.05_50)]",
    iconColor: "text-[oklch(0.6_0.15_50)]",
  },
]

export function CategoriesSection() {
  return (
    <section className="w-full bg-background pb-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-6 mb-12 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <Badge variant="secondary" className="w-fit bg-accent/50 text-accent-foreground py-1">
              Top Categories
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
              Explore Popular Course Categories
            </h2>
            <p className="text-base text-gray-500 max-w-2xl text-pretty leading-relaxed">
              Choose from a wide range of subjects designed to help you build in-demand skills.
            </p>
          </div>
          <Button variant="outline" className="w-fit bg-transparent shrink-0">
            All Categories
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 md:gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.name}
                className="group flex flex-col items-center gap-4 p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Icon */}
                <div
                  className={`flex items-center justify-center size-14 rounded-lg ${category.bgColor} transition-transform group-hover:scale-110 duration-300`}
                >
                  <Icon className={`size-7 ${category.iconColor}`} />
                </div>

                {/* Category Name */}
                <h3 className="text-sm font-semibold text-foreground text-center">{category.name}</h3>

                {/* Course Count */}
                <p className="text-xs text-gray-500">{category.courses} Courses</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
