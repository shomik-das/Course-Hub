import { Rocket, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function InformationalBlock() {
  return (
    <section className="w-full bg-background pb-24 pt-0">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <Badge variant="secondary" className="w-fit bg-accent/50 text-accent-foreground py-1">
              Why Choose Us
            </Badge>

            <h2 className="text-balance text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Learn at Your Own Pace With Industry-Relevant Skills
            </h2>

            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Our platform is designed to help learners grow through structured courses, hands-on projects, and expert
              guidance. Whether you're starting your journey or advancing your career, we provide the tools and support
              you need to succeed.
            </p>

            <Button size="lg" className="w-fit text-white font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl group">
              Start Learning Today
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
            <img
              src="/hero.png"
              alt="Students learning on digital platform with interactive courses and collaborative tools"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
