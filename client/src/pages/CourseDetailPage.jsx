import { useParams } from "react-router-dom"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Clock,
  Users,
  BarChart3,
  Globe,
  Heart,
  Play,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { coursesData } from "@/lib/courses-data"

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "curriculum", label: "Curriculum" },
  { id: "instructor", label: "Instructor" },
  { id: "faq", label: "FAQ" },
  { id: "reviews", label: "Reviews" },
]

const defaultCurriculum = [
  {
    id: "module-1",
    title: "Getting Started",
    lessons: [
      { id: 1, title: "Introduction to the Course", duration: "5:30" },
      { id: 2, title: "Course Overview", duration: "10:20" },
    ],
  },
]

export default function CourseDetailPage() {
  const { id } = useParams()
  const courseId = Number(id)
  const course = coursesData.find((c) => c.id === courseId)

  const [activeTab, setActiveTab] = useState("curriculum")

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Course Not Found</h1>
          <p className="text-gray-500">
            The course you're looking for doesn't exist.
          </p>
        </div>
      </div>
    )
  }

  const curriculumData = course.curriculum || defaultCurriculum

  return (
    <div className="min-h-screen mt-16 bg-background">
      {/* HERO */}
      <div className="bg-gradient-to-b from-primary/5 to-background py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-2">
              <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground">
                {course.category}
              </Badge>

              <h1 className="mb-4 text-3xl font-bold lg:text-4xl">
                {course.title}
              </h1>

              <p className="mb-6 text-lg text-gray-500">
                {course.description || "Learn from industry experts."}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="size-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="size-4" />
                  {course.students} Students
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="size-4" />
                  {course.level || "All Levels"}
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="size-4" />
                  {course.language || "English"}
                </div>
              </div>

              <div className="mt-6">
                <span className="text-sm text-gray-500">Instructor: </span>
                <span className="font-medium">{course.instructor}</span>
              </div>
            </div>

            {/* DESKTOP SIDEBAR */}
            <div className="hidden lg:block">
              <Card className="sticky top-24 p-6">
                <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                  <img
                    src={course.imageUrl || "/placeholder.svg"}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mb-6">
                  {course.isFree ? (
                    <span className="text-3xl font-bold">Free</span>
                  ) : (
                    <span className="text-3xl font-bold">{course.price}</span>
                  )}
                </div>

                <div className="space-y-3">
                  <Button size="lg" className="w-full text-white">
                    {course.isFree ? "Enroll for Free" : "Enroll Now"}
                  </Button>
                  <Button size="lg" variant="outline" className="w-full">
                    <Heart className="mr-2 size-4" />
                    Add to Wishlist
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE ENROLLMENT BAR */}
      <div className="border-b bg-background lg:hidden">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              {course.isFree ? (
                <span className="text-2xl font-bold">Free</span>
              ) : (
                <span className="text-2xl font-bold">{course.price}</span>
              )}
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="outline">
                <Heart className="size-4" />
              </Button>
              <Button size="sm" className="text-white">
                {course.isFree ? "Enroll Free" : "Enroll Now"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="border-b">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex gap-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "border-b-2 px-1 py-4 text-sm font-medium",
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-foreground"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          {activeTab === "curriculum" && (
            <>
              <h2 className="mb-6 text-2xl font-bold">Course Curriculum</h2>

              <Accordion
                type="single"
                collapsible
                defaultValue={curriculumData[0]?.id}
                className="space-y-4"
              >
                {curriculumData.map((module) => (
                  <AccordionItem
                    key={module.id}
                    value={module.id}
                    className="rounded-lg border"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex w-full justify-between">
                        <span className="font-semibold">{module.title}</span>
                        <span className="text-sm text-gray-500">
                          {module.lessons.length} lessons
                        </span>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-6 pb-4">
                      <ul className="space-y-3">
                        {module.lessons.map((lesson) => (
                          <li
                            key={lesson.id}
                            className="flex items-center justify-between rounded-md px-4 py-3 hover:bg-accent/50"
                          >
                            <div className="flex items-center gap-3">
                              <Play className="size-4 text-gray-500" />
                              <span>{lesson.title}</span>
                            </div>
                            <span className="text-sm text-gray-500">
                              {lesson.duration}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
