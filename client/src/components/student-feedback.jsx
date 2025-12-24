import { Badge } from "@/components/ui/badge"
// import { TestimonialCard } from "@/components/testimonial-card"
import WallOfLoveSection from "./wallOfLove-section.jsx"

const testimonials = [
  {
    quote:
      "The courses here transformed my career. The instructors are knowledgeable and the content is always up-to-date with industry standards. I landed my dream job within 3 months of completing the program!",
    name: "Sarah Chen",
    role: "Frontend Developer",
    avatarUrl: "/avatars/sarah-chen.jpg",
  },
  {
    quote:
      "I've tried many online learning platforms, but this one stands out. The interactive lessons and real-world projects gave me the confidence to switch careers into tech. Highly recommended!",
    name: "Marcus Johnson",
    role: "UX Designer",
    avatarUrl: "/avatars/marcus-johnson.jpg",
  },
  {
    quote:
      "As a CS student, these courses complemented my degree perfectly. The practical approach and hands-on exercises helped me understand complex concepts that seemed difficult in textbooks.",
    name: "Priya Patel",
    role: "CS Student",
    avatarUrl: "/avatars/priya-patel.jpg",
  },
  {
    quote:
      "The quality of instruction is exceptional. Every course is well-structured, and the community support is amazing. I've learned more here in 6 months than I did in years of self-study.",
    name: "David Kim",
    role: "Full Stack Developer",
    avatarUrl: "/avatars/david-kim.jpg",
  },
  {
    quote:
      "From beginner to professional level, the learning path was clear and achievable. The instructors are patient, and the curriculum is designed with real career outcomes in mind.",
    name: "Emma Rodriguez",
    role: "Data Analyst",
    avatarUrl: "/avatars/emma-rodriguez.jpg",
  },
  {
    quote:
      "This platform gave me the skills and confidence to freelance full-time. The courses are practical, engaging, and taught by industry experts who truly care about student success.",
    name: "Alex Thompson",
    role: "Freelance Developer",
    avatarUrl: "/avatars/alex-thompson.jpg",
  },
]

export function StudentFeedback() {
  return (
    <section className="w-full bg-gray-50 pt-0 pb-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-3">
          <Badge variant="secondary" className="w-fit bg-accent text-accent-foreground py-1">
            Student Feedback
          </Badge>
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl text-balance">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground max-w-2xl text-pretty">
            Hear from learners who have transformed their careers with our courses.
          </p>
        </div>
        <WallOfLoveSection />

        {/* Testimonials grid */}
        {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div> */}
      </div>
    </section>
  )
}
