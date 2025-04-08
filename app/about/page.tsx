import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Trophy, Lightbulb, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1920&auto=format&fit=crop"
          alt="School building"
          width={1920}
          height={1080}
          className="h-[400px] w-full object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                About Kudos Private School
              </h1>
              <p className="text-white/90 md:text-xl">
                Learn about our history, mission, vision, and the values that guide our educational approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                A Legacy of Excellence
              </h2>
              <p className="text-gray-500 md:text-lg">
                Kudos Private School was founded with a vision to provide quality education that nurtures the intellectual, physical, and moral development of students. Since our establishment, we have been committed to creating a learning environment that inspires curiosity, fosters creativity, and builds character.
              </p>
              <p className="text-gray-500 md:text-lg">
                Over the years, we have grown from a small institution to a leading educational establishment in Nigeria, known for our academic excellence, modern facilities, and holistic approach to education. Our graduates have gone on to excel in various fields, both locally and internationally.
              </p>
              <p className="text-gray-500 md:text-lg">
                Today, Kudos Private School continues to uphold its tradition of excellence while embracing innovation and adapting to the changing educational landscape to prepare students for the challenges of the 21st century.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                alt="School history"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Our Guiding Principles
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Mission, Vision & Values
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
                The principles that guide our educational philosophy and approach.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-500">
                    To provide a nurturing and stimulating environment where students can develop their full potential academically, physically, socially, and morally, preparing them to become responsible global citizens and leaders.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-500">
                    To be recognized as a center of educational excellence that empowers students with knowledge, skills, and values to thrive in a rapidly changing world and make positive contributions to society.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Our Values</h3>
                  <p className="text-gray-500">
                    Excellence, Integrity, Respect, Innovation, Collaboration, and Social Responsibility. These core values form the foundation of our educational approach and school culture.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Our Leadership
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
                Dedicated professionals committed to providing the best educational experience for our students.
              </p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop"
                  alt="Principal"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Dr. Emmanuel Okafor</h3>
              <p className="text-primary font-medium mb-2">Principal</p>
              <p className="text-sm text-gray-500 max-w-xs">
                With over 20 years of experience in education, Dr. Okafor leads our school with vision and dedication to academic excellence.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop"
                  alt="Vice Principal"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Mrs. Folake Adeyemi</h3>
              <p className="text-primary font-medium mb-2">Vice Principal, Academics</p>
              <p className="text-sm text-gray-500 max-w-xs">
                Mrs. Adeyemi oversees our academic programs, ensuring they meet the highest standards and prepare students for future success.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
                  alt="Administrator"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Mr. Chinedu Nwankwo</h3>
              <p className="text-primary font-medium mb-2">Head of Administration</p>
              <p className="text-sm text-gray-500 max-w-xs">
                Mr. Nwankwo manages the day-to-day operations of the school, ensuring a smooth and efficient learning environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                The Kudos Advantage
              </h2>
              <p className="text-gray-500 md:text-lg">
                At Kudos Private School, we offer a unique educational experience that sets us apart from other institutions. Our commitment to excellence, innovation, and holistic development creates an environment where students can thrive and reach their full potential.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Academic Excellence</h3>
                    <p className="text-sm text-gray-500">Rigorous curriculum designed for success</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Experienced Faculty</h3>
                    <p className="text-sm text-gray-500">Dedicated teachers who inspire</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Holistic Development</h3>
                    <p className="text-sm text-gray-500">Focus on academics, sports, and arts</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Innovative Learning</h3>
                    <p className="text-sm text-gray-500">Modern teaching methods and technology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1000&auto=format&fit=crop"
                alt="Students learning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space\
