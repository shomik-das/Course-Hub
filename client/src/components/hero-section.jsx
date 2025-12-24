import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero.png')`,
          }}
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="flex flex-col items-center lg:items-start lg:text-left max-w-4xl lg:mx-0">

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Build Skills With Online Courses From Industry Experts
          </h1>

          {/* Supporting Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl text-balance leading-relaxed">
            Advance your career with practical courses, expert mentors, and flexible learning designed for real-world
            success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Button
              size="lg"
              className="bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl group"
            >
              Get Started
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all group"
            >
              <Play className="mr-2 size-5 transition-transform group-hover:scale-110" />
              Browse Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
