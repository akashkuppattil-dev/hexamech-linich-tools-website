import Image from "next/image"
import { Card } from "@/components/ui/card"
import { StatsCounter } from "@/components/about/stats-counter"
import { Badge } from "@/components/ui/badge"
import { MapPin, Truck, Target, Eye, Rocket, Users, Award, Wrench } from "lucide-react"

export const metadata = {
  title: "About Us | Hexamech Linich Tools | Kerala Automotive Tools Wholesaler",
  description:
    "Learn about Hexamech Linich Tools, a trusted B2B automotive tools wholesaler serving 4,000+ workshops across India.",
}

const stats = [
  { label: "Annual Turnover", value: "1.5-5", suffix: "Cr", iconName: "Award" as const },
  { label: "Team Strength", value: "10", suffix: "+", iconName: "Users" as const },
  { label: "Tools & SKUs", value: "1000", suffix: "+", iconName: "Package" as const },
  { label: "Workshops Served", value: "4000", suffix: "+", iconName: "ThumbsUp" as const },
]

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* HERO */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/kerala-workshop-automotive-mechanic.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Trusted Since 2023</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Powering India's Workshops with <span className="text-primary">Professional Tools</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Hexamech Linich Tools is Kerala's leading B2B automotive tools supplier, delivering genuine equipment to
            over 4,000 workshops across India.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Our Identity</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Who We Are</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Hexamech Linich Tools</strong> was founded in 2023 in Chulliparamba,
                near Farook College, Kerala — with a single mission: to provide automotive workshops with reliable
                access to genuine, professional-grade tools at wholesale prices.
              </p>
              <p>
                We are not just a supplier; we are a <strong className="text-foreground">trusted partner</strong> to
                workshops, service centers, dealerships, and industrial buyers across India. Our team brings together
                deep automotive expertise, operational excellence, and a commitment to building long-term relationships.
              </p>
              <p>
                Today, we proudly serve <strong className="text-primary">4,000+ workshops</strong> with over{" "}
                <strong className="text-primary">1,000+ SKUs</strong> from world-renowned brands — ensuring every
                mechanic has the right tool for the job.
              </p>
            </div>
          </div>

          {/* LOGO */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 via-secondary to-accent/10 flex items-center justify-center p-8">
              <Image
                src="/images/logo.jpg"
                alt="Hexamech Linich Tools Logo"
                width={336}
                height={336}
                className="object-contain drop-shadow-2xl"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-xl shadow-xl">
              <p className="text-4xl font-bold text-primary">Since</p>
              <p className="text-5xl font-bold text-foreground">2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Difference</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Workshops Trust Hexamech</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We understand the automotive industry because we come from it. Here's what sets us apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">100% Genuine</h3>
              <p className="text-sm text-muted-foreground">
                Only authentic tools from authorized distributors — no compromises.
              </p>
            </Card>

            <Card className="glass p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Same-day delivery in Kerala, reliable shipping across India.
              </p>
            </Card>

            <Card className="glass p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Expert Guidance</h3>
              <p className="text-sm text-muted-foreground">Our team helps you choose the right tool for every job.</p>
            </Card>

            <Card className="glass p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">B2B Focus</h3>
              <p className="text-sm text-muted-foreground">
                Built exclusively for workshops, dealerships, and industrial buyers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Leadership</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet the Founders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hexamech Linich Tools is built and led by three visionary entrepreneurs who share a passion for automotive
              excellence and a commitment to serving India's workshops.
            </p>
          </div>

          <div className="space-y-16">
            {/* 1. JITHIN */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center">
                <div className="relative w-44 h-44 md:w-48 md:h-48">
                  <Image
                    src="/images/jithin-mullasseri.jpg"
                    alt="Jithin Mullasseri Chulliyil - Co-Founder of Hexamech"
                    fill
                    className="object-cover rounded-full border-4 border-primary shadow-xl object-[center_20%]"
                  />
                </div>
              </div>
              <div className="md:col-span-2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground">Jithin Mullasseri Chulliyil</h3>
                <p className="text-primary font-semibold mb-4">Co-Founder of Hexamech | Chief Executive Officer</p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Jithin is the driving force behind Hexamech's vision and strategic direction. With a deep-rooted
                  passion for automotive technology and years of hands-on experience in the industry, he understands
                  exactly what workshops need to operate at their best.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  As CEO, Jithin oversees supplier partnerships, brand selection, and quality assurance — personally
                  ensuring that every tool Hexamech supplies meets the rigorous standards demanded by professional
                  mechanics.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  His commitment to building trust-based relationships with workshops across India has been instrumental
                  in Hexamech's rapid growth and reputation for reliability.
                </p>
              </div>
            </div>

            {/* 2. LINEESH */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center md:order-2">
                <div className="relative w-44 h-44 md:w-48 md:h-48">
                  <Image
                    src="/images/lineesh-tp.jpg"
                    alt="Lineesh TP - Co-Founder of Hexamech"
                    fill
                    className="object-cover rounded-full border-4 border-primary shadow-xl"
                  />
                </div>
              </div>
              <div className="md:col-span-2 text-center md:text-left md:order-1">
                <h3 className="text-2xl font-bold text-foreground">Lineesh TP</h3>
                <p className="text-primary font-semibold mb-4">Co-Founder of Hexamech | Sales & Business Development</p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Lineesh brings exceptional expertise in sales strategy and dealer development to Hexamech. His ability
                  to understand market dynamics and customer needs has been pivotal in building Hexamech's extensive
                  network of workshop partners.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  He leads all sales initiatives, dealer engagement programs, and regional expansion efforts — ensuring
                  Hexamech stays closely connected to the real-world requirements of automotive professionals.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Lineesh's focus on sustainable growth and long-term partnerships has helped Hexamech establish a loyal
                  customer base that trusts us as their go-to tools supplier.
                </p>
              </div>
            </div>

            {/* 3. SHAIBEESH */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center">
                <div className="relative w-44 h-44 md:w-48 md:h-48">
                  <Image
                    src="/images/shaibeesh-tp.jpg"
                    alt="Shaibeesh TP - Co-Founder of Hexamech"
                    fill
                    className="object-cover rounded-full border-4 border-primary shadow-xl"
                  />
                </div>
              </div>
              <div className="md:col-span-2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground">Shaibeesh TP</h3>
                <p className="text-primary font-semibold mb-4">Co-Founder of Hexamech | Operations & Supply Chain</p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Shaibeesh is the operational backbone of Hexamech, ensuring that every order is fulfilled accurately,
                  on time, and with the utmost care. His expertise in logistics and supply chain management keeps
                  Hexamech running like a well-oiled machine.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  He manages inventory planning, warehouse operations, vendor coordination, and delivery logistics —
                  making sure workshops receive their tools exactly when they need them.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Shaibeesh's operational discipline and attention to detail enable Hexamech to deliver consistently at
                  scale, maintaining our reputation for reliability across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Our People</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">The Hexamech Team</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Behind every successful delivery is a dedicated team of professionals who understand the automotive industry
            from the ground up.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our team includes technical tool experts who can recommend the perfect equipment for any job, procurement
            specialists who source only genuine products, logistics coordinators who ensure timely deliveries, and
            customer support professionals who are always ready to help.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Based in Kerala and serving customers across India, every member of the Hexamech team works with a single
            purpose — to help workshops operate more efficiently and profitably with the right tools.
          </p>
        </div>
      </section>

      {/* MISSION / VISION / FUTURE */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Direction</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Drives Us Forward</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-xl mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower automotive workshops across India with genuine, professional-grade tools, expert guidance,
                and reliable service — enabling them to deliver excellence to their customers every day.
              </p>
            </Card>

            <Card className="glass p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground text-xl mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted B2B automotive tools supplier — recognized for integrity, product
                knowledge, competitive pricing, and lasting partnerships with workshops nationwide.
              </p>
            </Card>

            <Card className="glass p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-xl mb-3">Our 10-Year Plan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Expand our product range to 5,000+ SKUs, establish regional distribution centers, launch private-label
                professional tools, and build a pan-India B2B network serving 25,000+ workshops.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Hexamech by the Numbers</h2>
            <p className="text-primary-foreground/80">Our growth reflects the trust workshops place in us every day.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatsCounter key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Visit Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Location</h2>
            <p className="text-muted-foreground">Based in Kerala, serving workshops across India.</p>
          </div>

          <Card className="glass rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-3">Head Office</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ground Floor, Door No 17/346
                    <br />
                    Vpalp School, Chulliparamba
                    <br />
                    Near Farook College
                    <br />
                    Malappuram, Kerala – India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-3">Delivery Coverage</h3>
                  <p className="text-muted-foreground mb-4">Fast and reliable delivery to workshops everywhere.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 text-primary">Kerala – Same Day</Badge>
                    <Badge className="bg-accent/10 text-accent">All India Shipping</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
