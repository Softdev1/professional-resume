"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="absolute inset-0 overflow-hidden">
        <ParticleBackground />
      </div>

      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "thoughts", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0 mt-8 sm:mt-12 lg:mt-20"
        >
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 lg:space-y-8">
              <div className="space-y-2">
                <div className="text-xs sm:text-sm text-muted-foreground font-mono tracking-wider animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
                  TECHNICAL PRODUCT MANAGER
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight animate-fade-in-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards] mt-5">
                  <span className="inline-block animate-slide-in-left [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
                    OGBAJE
                  </span>
                  <br />
                  <span className="text-muted-foreground inline-block animate-slide-in-right [animation-delay:0.8s] opacity-0 [animation-fill-mode:forwards]">
                    Stephen
                  </span>
                </h1>
              </div>

              <div className="space-y-4 lg:space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed animate-fade-in-up [animation-delay:1s] opacity-0 [animation-fill-mode:forwards]">
                  Technical Product Manager shaping innovative solutions at the intersection of
                  <span className="text-foreground animate-pulse [animation-delay:1.5s]"> AI</span>,
                  <span className="text-foreground animate-pulse [animation-delay:1.7s]"> blockchain</span>, and
                  <span className="text-foreground animate-pulse [animation-delay:1.9s]"> emerging technologies</span> —
                  bridging design, engineering, and human needs to deliver impactful digital experiences.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground animate-fade-in-up [animation-delay:1.2s] opacity-0 [animation-fill-mode:forwards]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div className="text-muted-foreground/60">Remote</div>
                </div>

                <div className="animate-fade-in-up [animation-delay:1.4s] opacity-0 [animation-fill-mode:forwards]">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1BV09gENCy2y2Dy1Jl9mZUsWTkL5g9L_l"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-4 sm:px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
                  >
                    <span className="font-medium">Download Resume</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </a>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 animate-fade-in-up [animation-delay:1.6s] opacity-0 [animation-fill-mode:forwards]">
                  <a
                    href="https://github.com/Softdev1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-2 rounded-lg hover:bg-muted/50 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/stephen-ogbaje/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-2 rounded-lg hover:bg-muted/50 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  <a
                    href="https://x.com/iamsirsteve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-2 rounded-lg hover:bg-muted/50 transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 lg:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-3 lg:space-y-4 animate-slide-in-right [animation-delay:1.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="text-xs sm:text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground text-sm sm:text-base">Senior Product Manager</div>
                  <div className="text-muted-foreground text-sm">@ IQ.wiki</div>
                  <div className="text-xs text-muted-foreground">2022 — Present</div>
                </div>
              </div>

              <div className="space-y-3 lg:space-y-4 animate-slide-in-right [animation-delay:1.6s] opacity-0 [animation-fill-mode:forwards]">
                <div className="text-xs sm:text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["Design", "Documentation", "Communication", "Strategic Planning", "AI/ML"].map((skill, index) => (
                    <span
                      key={skill}
                      className={`px-2 sm:px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]`}
                      style={{ animationDelay: `${1.8 + index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-16 sm:py-24 lg:py-32 opacity-0"
        >
          <div className="space-y-12 lg:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
              <h2 className="text-3xl sm:text-4xl font-light">Selected Work</h2>
              <div className="text-sm text-muted-foreground font-mono">2017 — 2025</div>
            </div>

            <div className="space-y-8 lg:space-y-12">
              {[
                {
                  year: "2023",
                  role: "Senior Product Manager ",
                  company: "NITDA",
                  description: "Leading frontend architecture for developer tools and AI-powered features.",
                  tech: ["Powersapp", "Communication", "Strategic Planning", "Design"],
                },
                {
                  year: "2022",
                  role: "Frontend Engineer",
                  company: "Linear",
                  description: "Built performant interfaces for project management and team collaboration.",
                  tech: ["React", "GraphQL", "Framer Motion"],
                },
                {
                  year: "2021",
                  role: "Full Stack Developer",
                  company: "Stripe",
                  description: "Developed payment infrastructure and merchant-facing dashboard features.",
                  tech: ["Ruby", "React", "PostgreSQL"],
                },
                {
                  year: "2019",
                  role: "Software Engineer",
                  company: "Airbnb",
                  description: "Created booking flow optimizations and host management tools.",
                  tech: ["React", "Node.js", "MySQL"],
                },
                 {
                  year: "2019",
                  role: "Software Engineer",
                  company: "Airbnb",
                  description: "Created booking flow optimizations and host management tools.",
                  tech: ["React", "Node.js", "MySQL"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className={`group grid lg:grid-cols-12 gap-4 lg:gap-8 py-6 lg:py-8 border-b border-border/50 hover:border-border transition-all duration-500 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]`}
                  style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500 group-hover:scale-105 transform">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-2 lg:space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium group-hover:translate-x-2 transition-transform duration-300">
                        {job.role}
                      </h3>
                      <div className="text-muted-foreground text-sm sm:text-base">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg text-sm sm:text-base">
                      {job.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
                    {job.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs text-muted-foreground rounded border border-transparent group-hover:border-muted-foreground/30 transition-all duration-500 hover:scale-105 transform`}
                        style={{ transitionDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-16 sm:py-24 lg:py-32 opacity-0"
        >
          <div className="space-y-12 lg:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
              Recent Thoughts
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  title: "The Future of Web Development",
                  excerpt: "Exploring how AI and automation are reshaping the way we build for the web.",
                  date: "Dec 2024",
                  readTime: "5 min",
                },
                {
                  title: "Design Systems at Scale",
                  excerpt: "Lessons learned from building and maintaining design systems across multiple products.",
                  date: "Nov 2024",
                  readTime: "8 min",
                },
                {
                  title: "Performance-First Development",
                  excerpt: "Why performance should be a first-class citizen in your development workflow.",
                  date: "Oct 2024",
                  readTime: "6 min",
                },
                {
                  title: "The Art of Code Review",
                  excerpt: "Building better software through thoughtful and constructive code reviews.",
                  date: "Sep 2024",
                  readTime: "4 min",
                },
              ].map((post, index) => (
                <article
                  key={index}
                  className={`group p-6 lg:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 cursor-pointer animate-fade-in-up opacity-0 [animation-fill-mode:forwards]`}
                  style={{ animationDelay: `${0.4 + index * 0.15}s` }}
                >
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span className="group-hover:text-foreground transition-colors duration-300">{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span>Read more</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4-4m4 4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => (sectionsRef.current[3] = el)} className="py-16 sm:py-24 lg:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 lg:space-y-8 animate-slide-in-left [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-4 lg:space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:ogbaje@example.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="text-base sm:text-lg">ogbaje@example.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4-4m4 4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:space-y-8 animate-slide-in-right [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
              <div className="text-xs sm:text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@Softdev1", url: "https://github.com/Softdev1" },
                  { name: "Twitter", handle: "@iamsirsteve", url: "https://x.com/iamsirsteve" },
                  { name: "LinkedIn", handle: "stephen-ogbaje", url: "https://www.linkedin.com/in/stephen-ogbaje/" },
                  { name: "Dribbble", handle: "ogbajestephen", url: "#" },
                ].map((social, index) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className={`group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-sm hover:-translate-y-1 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]`}
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300 text-sm sm:text-base">
                        {social.name}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 lg:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 OGBAJE Stephen. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built by Sir Steve</div>
            </div>

            <div className="flex items-center gap-3 lg:gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414 0zM17 11a1 1 0 100-2H3a1 1 0 000 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414 0zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
