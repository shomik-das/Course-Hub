import { Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PromotionalBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 rounded-xl bg-white/10 p-8 backdrop-blur-sm md:flex-row md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-balance text-2xl font-bold leading-tight text-white md:text-3xl">
                Get Unlimited Access to Premium Courses
              </h2>
              <p className="text-pretty text-sm leading-relaxed text-white/90 md:text-base">
                Upgrade your learning experience with exclusive content and expert-led programs.
              </p>
            </div>
          </div>
          <Button
            size="lg"
            className="shrink-0 font-semibold bg-white text-primary hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl group"
          >
            Explore Plans
            <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
