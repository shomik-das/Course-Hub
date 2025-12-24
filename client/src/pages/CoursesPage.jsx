import { useState } from "react"
import { CourseCard } from "@/components/course-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Grid3x3, List, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { coursesData } from "@/lib/courses-data"

const courses = coursesData

const categories = ["All", "Development", "Design", "Business", "Marketing", "Data Science"]
const priceOptions = ["All", "Free", "Paid"]
const levelOptions = ["All", "Beginner", "Intermediate", "Advanced"]

export default function CoursesPage() {
  const [viewMode, setViewMode] = useState("grid") // "grid" | "list"

  return (
    <div className="min-h-screen mt-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:py-12">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
            All Courses
          </h1>
          <p className="mt-2 text-gray-500">
            Explore our extensive library of courses and start learning today.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">

          {/* Sidebar */}
          <aside className="w-full lg:w-64 lg:shrink-0">
            <Card className="p-6">
              <div className="space-y-6">

                {/* Categories */}
                <div>
                  <h5 className="mb-3 font-semibold text-foreground">Categories</h5>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className={cn(
                          "w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-accent",
                          category === "All" && "bg-accent text-accent-foreground"
                        )}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="border-t border-black/12 pt-6">
                  <h5 className="mb-3 font-semibold text-foreground">Price</h5>
                  <div className="space-y-2">
                    {priceOptions.map((option) => (
                      <button
                        key={option}
                        className={cn(
                          "w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-accent",
                          option === "All" && "bg-accent text-accent-foreground"
                        )}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Level */}
                <div className="border-t border-black/12 pt-6">
                  <h5 className="mb-3 font-semibold text-foreground">Level</h5>
                  <div className="space-y-2">
                    {levelOptions.map((level) => (
                      <button
                        key={level}
                        className={cn(
                          "w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-accent",
                          level === "All" && "bg-accent text-accent-foreground"
                        )}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">

            {/* Top Bar */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Showing <span className="font-medium text-foreground">{courses.length}</span> courses
              </p>

              {/* View Toggle (UI only) */}
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "text-white" : ""}
                >
                  <Grid3x3 className="size-4 " />
                </Button>

                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "text-white" : ""}
                >
                  <List className="size-4" />
                </Button>
              </div>
            </div>

            {/* Course Grid */}
            <div
              className={cn(
                "grid gap-6",
                viewMode === "grid"
                  ? "sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              )}
            >
              {courses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>


            <div className="mt-12 flex items-center justify-center gap-2">
              <Button variant="outline" size="icon" disabled>
                <ChevronLeft className="size-4" />
              </Button>

              <Button size="icon">1</Button>
              <Button variant="outline" size="icon">2</Button>
              <Button variant="outline" size="icon">3</Button>

              <Button variant="outline" size="icon">
                <ChevronRight className="size-4" />
              </Button>
            </div>

          </main>
        </div>
      </div>
    </div>
  )
}
