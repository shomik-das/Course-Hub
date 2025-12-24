import { Button } from "@/components/ui/button"

export function AcademyCta() {
  return (
    <section className="bg-background pt-0 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 shadow-lg md:p-12 lg:p-16">
          
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            
            {/* Text */}
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl font-bold leading-tight text-balance text-foreground md:text-4xl">
                Start Your Learning Journey With Academy LMS
              </h2>

              <p className="text-base text-muted-foreground text-balance md:text-lg">
                Whether you want to learn new skills or share your expertise, Academy LMS gives you the tools to succeed.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              
              {/* Primary */}
              <Button
                size="lg"
                className="
                  bg-blue-600 px-8 font-semibold text-white
                  transition-all duration-200
                  hover:bg-blue-700 hover:text-white
                  hover:scale-[1.03] hover:shadow-lg
                "
              >
                I'm a Student
              </Button>

              {/* Secondary */}
              <Button
                size="lg"
                variant="outline"
                className="
                  border-2 border-blue-600 bg-white px-8 font-semibold text-blue-600
                  transition-all duration-200
                  hover:bg-blue-50 hover:text-blue-700
                  hover:scale-[1.03] hover:shadow-md
                "
              >
                Become an Instructor
              </Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
