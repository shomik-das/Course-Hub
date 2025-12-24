import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { GraduationCap, Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { to: "/", label: "Home", active: true },
  { to: "/courses", label: "Courses", active: true },
]


export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm ">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-foreground no-underline"
          >
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-white">
              <GraduationCap className="size-5 text-primary-foreground" />
            </div>
            <span>EduX</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `
                  text-sm text-gray-500 font-medium no-underline transition-colors duration-200 
                  ${isActive
                    ? "text-foreground text-blue-500"
                    : "text-gray-500 hover:text-foreground"}
                `
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="outline" size="lg">
              Sign In
            </Button>
            <Button size="lg" className="text-white">Sign Up</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className="text-sm font-medium text-gray-500 no-underline transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="flex flex-col gap-2 border-t pt-4">
                <Button variant="outline" size="sm" className="w-full">
                  Sign In
                </Button>
                <Button size="sm" className="w-full text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}

      </div>
    </nav>
  )
}
