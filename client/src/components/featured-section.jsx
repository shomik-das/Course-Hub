import { CourseCard } from "./course-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    instructor: "Sarah Johnson",
    category: "Development",
    duration: "6h 30m",
    students: "1.2k",
    price: "1999 BDT",
    isFree: false,
    imageUrl: "/hero.png",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    instructor: "Michael Chen",
    category: "Design",
    duration: "4h 15m",
    students: "850",
    price: "2999 BDT",
    isFree: false,
    imageUrl: "/hero.png",
  },
  {
    id: 3,
    title: "Introduction to Data Science",
    instructor: "Dr. Emily Roberts",
    category: "Data Science",
    duration: "8h 45m",
    students: "2.1k",
    isFree: true,
    imageUrl: "/hero.png",
  },
  {
    id: 4,
    title: "App Development Bootcamp",
    instructor: "David Martinez",
    category: "Development",
    duration: "5h 20m",
    students: "950",
    price: "1499 BDT",
    isFree: false,
    imageUrl: "/hero.png",
  },
  {
    id: 5,
    title: "Digital Marketing Mastery",
    instructor: "Jennifer Lee",
    category: "Marketing",
    duration: "3h 50m",
    students: "1.5k",
    price: "999 BDT",
    isFree: true,
    imageUrl: "/hero.png",
  },
  {
    id: 6,
    title: "Machine Learning Essentials",
    instructor: "Prof. James Wilson",
    category: "Data Science",
    duration: "7h 10m",
    students: "1.8k",
    price: "999 BDT",
    isFree: false,
    imageUrl: "/hero.png",
  },
]

export function FeaturedSection() {
  return (
    <section className="bg-background pb-16 pt-0 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <Badge variant="secondary" className="w-fit bg-accent/50 text-accent-foreground py-1">
              Featured Courses
            </Badge>
            <h2 className="text-3xl font-bold leading-tight text-balance text-foreground md:text-5xl">
              Explore Our Popular Courses
            </h2>
            <p className="text-gray-500 max-w-2xl leading-relaxed">
              Learn from industry experts and gain practical, job-ready skills.
            </p>
          </div>
          <Button variant="outline" className="w-fit shrink-0 bg-transparent">
            View All Courses
          </Button>
        </div>

        {/* Course grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  )
}
