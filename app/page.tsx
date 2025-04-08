"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, CheckCircle, GraduationCap, Users, Award, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  // Animation for reveal on scroll
  const revealRefs = useRef<HTMLDivElement[]>([])

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      revealRefs.current.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const windowHeight = window.innerHeight || document.documentElement.clientHeight

        if (rect.top <= windowHeight * 0.85) {
          el.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 hero-gradient z-10" />
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop"
          alt="Students in classroom"
          width={1920}
          height={1080}
          className="h-[85vh] w-full object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl space-y-6 animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Empowering Future Leaders
              </h1>
              <p className="text-xl text-white/90 md:text-2xl">
                Providing quality education and nurturing excellence at Kudos Private School.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white animate-pulse">
                  <Link href="/">Apply Now</Link>
                </Button>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 reveal" ref={addToRefs}>
            <h2 className="section-title mb-3">Why Choose Kudos</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              We provide a nurturing environment where students can develop their full potential academically,
              physically, socially, and morally.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="reveal animate-delay-100" ref={addToRefs}>
              <Card className="card-hover border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-primary/10 p-3 mb-4">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Academic Excellence</h3>
                    <p className="text-muted-foreground">
                      Our rigorous curriculum is designed to challenge students and prepare them for future success in a
                      competitive world.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="reveal animate-delay-200" ref={addToRefs}>
              <Card className="card-hover border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-primary/10 p-3 mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Experienced Faculty</h3>
                    <p className="text-muted-foreground">
                      Our teachers are highly qualified professionals dedicated to inspiring and nurturing each
                      student's potential.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="reveal animate-delay-300" ref={addToRefs}>
              <Card className="card-hover border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-primary/10 p-3 mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Modern Facilities</h3>
                    <p className="text-muted-foreground">
                      Our campus features state-of-the-art classrooms, laboratories, sports facilities, and technology
                      resources.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="reveal animate-slide-left" ref={addToRefs}>
              <h2 className="section-title mb-6">Academic Programs</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We offer comprehensive educational programs designed to nurture intellectual curiosity and develop
                critical thinking skills.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Primary School</h3>
                    <p className="text-muted-foreground">
                      Building strong foundations in literacy, numeracy, and critical thinking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Junior Secondary</h3>
                    <p className="text-muted-foreground">
                      Expanding core subjects while introducing specialized disciplines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold">Senior Secondary</h3>
                    <p className="text-muted-foreground">
                      Preparing students for higher education through rigorous academics.
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
                <Link href="/" className="flex items-center gap-2">
                  Explore Programs <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative reveal animate-slide-right" ref={addToRefs}>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1000&auto=format&fit=crop"
                  alt="Students learning"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary rounded-xl p-4 shadow-lg animate-pulse">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold">15:1</h3>
                  <p className="text-sm">Student-Teacher Ratio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 reveal" ref={addToRefs}>
            <h2 className="section-title mb-3">Campus Life</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Our vibrant campus offers a rich array of activities and facilities to enhance the educational experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="reveal animate-delay-100" ref={addToRefs}>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1000&auto=format&fit=crop"
                  alt="Modern Classrooms"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-bold text-white">Modern Classrooms</h3>
                    <p className="text-sm text-white/80">Equipped with the latest educational technology</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal animate-delay-200" ref={addToRefs}>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1000&auto=format&fit=crop"
                  alt="Science Laboratories"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-bold text-white">Science Laboratories</h3>
                    <p className="text-sm text-white/80">Well-equipped labs for practical learning</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal animate-delay-300" ref={addToRefs}>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?q=80&w=1000&auto=format&fit=crop"
                  alt="Sports Complex"
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-bold text-white">Sports Complex</h3>
                    <p className="text-sm text-white/80">Comprehensive facilities for physical development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 reveal" ref={addToRefs}>
            <h2 className="section-title mb-3">What Parents Say</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Hear from our community about their experiences with Kudos Private School.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="reveal animate-delay-100" ref={addToRefs}>
              <Card className="card-hover border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-20 w-20 rounded-full overflow-hidden mb-4 border-4 border-primary">
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                        alt="Parent"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-muted-foreground italic mb-4">
                      "Kudos Private School has been transformative for my child. The teachers are dedicated and the
                      curriculum is challenging yet engaging."
                    </p>
                    <div>
                      <h4 className="font-semibold">Mrs. Adebayo</h4>
                      <p className="text-sm text-muted-foreground">Parent of Primary 5 Student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="reveal animate-delay-200" ref={addToRefs}>
              <Card className="card-hover border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-20 w-20 rounded-full overflow-hidden mb-4 border-4 border-primary">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                        alt="Parent"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-muted-foreground italic mb-4">
                      "The holistic approach to education at Kudos is impressive. My children are not only excelling
                      academically but are also developing important life skills."
                    </p>
                    <div>
                      <h4 className="font-semibold">Mr. Okonkwo</h4>
                      <p className="text-sm text-muted-foreground">Parent of JSS2 and SSS1 Students</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="reveal animate-delay-300" ref={addToRefs}>
              <Card className="card-hover border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-20 w-20 rounded-full overflow-hidden mb-4 border-4 border-primary">
                      <Image
                        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop"
                        alt="Parent"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-muted-foreground italic mb-4">
                      "The facilities at Kudos Private School are world-class, and the attention given to each student
                      is remarkable. The school truly lives up to its mission."
                    </p>
                    <div>
                      <h4 className="font-semibold">Dr. Nwachukwu</h4>
                      <p className="text-sm text-muted-foreground">Parent of SSS3 Student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 reveal" ref={addToRefs}>
            <h2 className="section-title mb-3">Upcoming Events</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Stay updated with the latest happenings at Kudos Private School.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="reveal animate-delay-100" ref={addToRefs}>
              <Card className="card-hover border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Annual Science Fair</h3>
                      <p className="text-sm text-muted-foreground">May 15, 2024</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Students will showcase their innovative science projects, demonstrating their understanding of
                    scientific principles.
                  </p>
                  <Button asChild variant="link" className="p-0">
                    <Link href="/" className="flex items-center gap-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="reveal animate-delay-200" ref={addToRefs}>
              <Card className="card-hover border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Sports Day</h3>
                      <p className="text-sm text-muted-foreground">June 10, 2024</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Join us for a day of athletic competitions, team sports, and physical activities that promote
                    sportsmanship.
                  </p>
                  <Button asChild variant="link" className="p-0">
                    <Link href="/" className="flex items-center gap-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="reveal animate-delay-300" ref={addToRefs}>
              <Card className="card-hover border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Cultural Day</h3>
                      <p className="text-sm text-muted-foreground">July 5, 2024</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Experience the rich cultural diversity of our school community through performances, exhibitions,
                    and culinary delights.
                  </p>
                  <Button asChild variant="link" className="p-0">
                    <Link href="/" className="flex items-center gap-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-6 reveal animate-slide-left" ref={addToRefs}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to Join the Kudos Family?
              </h2>
              <p className="text-xl text-white/90">
                Take the first step towards providing your child with an exceptional educational experience. Apply now
                or schedule a visit to our campus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white animate-pulse">
                  <Link href="/">Apply Now</Link>
                </Button>
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  <Link href="/">Schedule a Visit</Link>
                </Button>
              </div>
            </div>
            <div className="relative reveal animate-slide-right" ref={addToRefs}>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop"
                  alt="School building"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg animate-pulse">
                <div className="text-primary text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm font-bold">Admissions Open</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
