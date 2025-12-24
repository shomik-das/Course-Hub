import { Link } from "react-router-dom"
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react"

export function Footer() {
  const quickLinks = [
    { to: "#", label: "Help Center" },
    { to: "#", label: "Support" },
    { to: "#", label: "Terms of Service" },
    { to: "#", label: "Privacy Policy" },
    { to: "#", label: "Contact Us" },
  ]

  const programs = [
    { to: "#", label: "Web Development" },
    { to: "#", label: "UI/UX Design" },
    { to: "#", label: "Data Science" },
    { to: "#", label: "Digital Marketing" },
    { to: "#", label: "Business Management" },
  ]

  const socialLinks = [
    { to: "#", icon: Facebook, label: "Facebook" },
    { to: "#", icon: Twitter, label: "Twitter" },
    { to: "#", icon: Instagram, label: "Instagram" },
    { to: "#", icon: Linkedin, label: "LinkedIn" },
    { to: "#", icon: Github, label: "GitHub" },
  ]

  return (
    <footer className="border-t border-black/12 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">

        {/* Main Content */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Left: Brand */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-bold text-foreground no-underline"
            >
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="size-5 text-primary-foreground text-white" />
              </div>
              <span>Academy LMS</span>
            </Link>

            <p className="text-sm leading-relaxed text-gray-500">
              Empowering learners worldwide with practical, industry-ready
              education. Learn, grow, and advance your career.
            </p>

            {/* Contact */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Mail className="size-4" />
                <span>support@academylms.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Phone className="size-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="size-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3 pl-0">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
  to={link.to}
  className="
    text-sm
    text-gray-500
    no-underline
    transition-colors duration-200
    hover:text-foreground
    decoration-none hover:decoration-none
  "
>
  {link.label}
</Link>

                </li>
              ))}
            </ul>
          </div>

          {/* Right: Programs */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Popular Programs
            </h3>
            <ul className="space-y-3 pl-0">
              {programs.map((program) => (
                <li key={program.label}>
                 <Link
  to={program.to}
  className="
    text-sm
    text-gray-500
    no-underline
    transition-colors duration-200
    hover:text-foreground
    decoration-none hover:decoration-none
  "
>
  {program.label}
</Link>

                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/12 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Academy LMS. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.label}
                  to={social.to}
                  aria-label={social.label}
                  className="
                    text-gray-500
                    no-underline transition-colors
                    hover:text-foreground
                    
                  "
                >
                  <Icon className="size-5" />
                </Link>
              )
            })}
          </div>
        </div>

      </div>
    </footer>
  )
}
