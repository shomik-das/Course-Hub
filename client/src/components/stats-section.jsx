import { Users, GraduationCap, CheckCircle, BookOpen } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "25K+",
    label: "Students Enrolled",
  },
  {
    icon: GraduationCap,
    value: "1.2K+",
    label: "Expert Instructors",
  },
  {
    icon: CheckCircle,
    value: "95%",
    label: "Satisfaction Rate",
  },
  {
    icon: BookOpen,
    value: "150+",
    label: "Online Courses",
  },
]

export function StatsSection() {
  return (
    <section className="w-full bg-muted/30 pt-16 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 rounded-lg bg-background p-6 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-blue-50">
                  <Icon className="size-7 text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
