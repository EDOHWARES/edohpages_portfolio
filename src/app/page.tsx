"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ExternalLink,
  Star,
  Zap,
  Rocket,
  Code,
  Smartphone,
  TrendingUp,
  Users,
  Mail,
  Github,
  Twitter,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import defivault_img from "@/assets/defivault.png";
import nftpage_img from "@/assets/nft.png";
import cryptopage_img from "@/assets/crypto.png";
import ProjectInquiryForm from "@/components/ProjectInquiryForm";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "work", "services", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "DeFi Protocol Landing",
      category: "Web3 DeFi",
      description:
        "Designed and developed a high-converting landing page for a DeFi protocol that increased user sign-ups by 340% and TVL by $2.3M in the first month.",
      image: defivault_img,
      goals: "Drive protocol adoption and increase total value locked (TVL)",
      approach:
        "Focused on trust-building elements, clear value propositions, and seamless onboarding flow",
      outcome: "340% increase in conversions, $2.3M TVL growth",
      tech: ["React", "Web3.js", "Framer Motion", "Tailwind CSS"],
      link: "https://defi-vault.vercel.app/",
    },
    {
      title: "NFT Marketplace Launch",
      category: "Web3 NFT",
      description:
        "Created a premium landing page for an exclusive NFT marketplace that sold out their genesis collection in under 2 hours, generating $1.8M in revenue.",
      image: nftpage_img,
      goals: "Generate hype and drive NFT collection sales",
      approach:
        "Implemented scarcity psychology, social proof, and immersive visual storytelling",
      outcome: "Genesis collection sold out in <2 hours, $1.8M revenue",
      tech: ["Next.js", "Ethereum", "GSAP", "Three.js"],
      link: "https://cyber-punks-2077.vercel.app/",
    },
    {
      title: "Crypto Exchange Platform",
      category: "Web3 Exchange",
      description:
        "Built a conversion-optimized landing page for a new crypto exchange that achieved 28% sign-up rate and onboarded 50K+ users in launch week.",
      image: cryptopage_img,
      goals: "Drive user registrations and platform adoption",
      approach:
        "Emphasized security, ease of use, and competitive advantages with clear CTAs",
      outcome: "28% conversion rate, 50K+ users in first week",
      tech: ["Vue.js", "TypeScript", "Chart.js", "Web3 Wallet Integration"],
      link: "http://crypto-pulse-kappa.vercel.app",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, DeFi Protocol",
      company: "CryptoFlow",
      quote:
        "The landing page edohpages created for us was a game-changer. Our conversion rates skyrocketed, and the design perfectly captured our brand's innovative spirit.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO, NFT Marketplace",
      company: "ArtChain",
      quote:
        "Working with edohpages was incredible. The landing page not only looked stunning but drove real results - we sold out our entire genesis collection in record time.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Head of Marketing",
      company: "BlockTrade",
      quote:
        "edohpages understands both design and conversion psychology. The landing page delivered exceptional results and exceeded all our KPI targets.",
      rating: 5,
    },
  ];

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web2 & Web3 Landing Page Design",
      description:
        "Custom-designed landing pages optimized for conversions with modern aesthetics and seamless user experience.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Delivery",
      description:
        "Quick turnaround times without compromising quality. Most projects delivered within 1-2 weeks.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Conversion Optimization",
      description:
        "Data-driven approach to maximize conversions using proven psychology principles and A/B testing.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive + Clean Code",
      description:
        "Pixel-perfect responsive designs with clean, maintainable code that performs across all devices.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                edoh.pages
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["home", "work", "services", "about", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`px-3 py-2 text-sm font-medium transition-colors capitalize ${
                        activeSection === item
                          ? "text-cyan-400"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "work", "services", "about", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block px-3 py-2 text-base font-medium transition-colors capitalize w-full text-left ${
                    activeSection === item
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-cyan-500/30">
              Available for new projects
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
              Landing Pages That
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Convert & Scale
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            I help Web2 & Web3 startups build high-converting landing pages that
            turn visitors into customers.
            <span className="text-cyan-400 font-semibold">
              {" "}
              Proven results. Fast delivery. Premium quality.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection("work")}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-cyan-500  bg-cyan-500/10 text-white px-8 py-3 text-lg font-semibold"
            >
              Start Your Project
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">340%+</div>
              <div className="text-gray-400">Avg. Conversion Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                $4.1M+
              </div>
              <div className="text-gray-400">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-400 border-purple-500/30">
              Featured Projects
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Landing Pages That
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Drive Results
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Here are three Web3 projects where I delivered exceptional
              conversion rates and measurable business impact.
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-black border-gray-800 overflow-hidden group hover:border-cyan-500/30 transition-all duration-500"
              >
                <CardContent className="p-0">
                  <div
                    className={`grid lg:grid-cols-2 gap-0 ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        index % 2 === 1 ? "lg:col-start-2" : ""
                      }`}
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={1920} // native width of your screenshot
                        height={1080} // native height of your screenshot
                        unoptimized
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <Badge className="mb-4 w-fit bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-cyan-500/30">
                        {project.category}
                      </Badge>

                      <h3 className="text-3xl font-bold mb-4 text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                        {project.description}
                      </p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-2">
                            Goals
                          </h4>
                          <p className="text-gray-400">{project.goals}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-400 mb-2">
                            Approach
                          </h4>
                          <p className="text-gray-400">{project.approach}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-400 mb-2">
                            Outcome
                          </h4>
                          <p className="text-gray-400">{project.outcome}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-gray-600 text-gray-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <Link href={project.link} target="_blank">
                        <Button className="w-fit bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-green-400 border-green-500/30">
              Client Success Stories
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                What Founders Say
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-500/30 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-cyan-400">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30">
              What I Offer
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Services That
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Deliver Results
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-black border-gray-800 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full text-purple-400 group-hover:text-cyan-400 transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/30 to-black"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-cyan-500/20 to-green-500/20 text-cyan-400 border-cyan-500/30">
              About Me
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Conversion-Focused
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent">
                Developer & Designer
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a frontend developer with a passion for creating landing
                pages that don't just look good—they convert. With over 5 years
                of experience in the Web2 and Web3 space, I've helped startups
                generate millions in revenue through strategic design and
                conversion optimization.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                My approach combines data-driven insights with cutting-edge
                design to create experiences that resonate with your target
                audience and drive measurable results. Every project is an
                opportunity to push boundaries and deliver exceptional value.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20">
                  <Users className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                  <Rocket className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-cyan-500/30 flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Available Now
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-green-400 border-green-500/30">
              Let's Work Together
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Scale
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                Your Startup?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Let's discuss your project and create a landing page that converts
              visitors into customers.
            </p>
          </div>

          <Card className="bg-gradient-to-br from-gray-900/50 to-black border-gray-800">
            <CardContent className="p-8">
              <ProjectInquiryForm />
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">Or reach out directly:</p>
            <div className="flex justify-center space-x-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                edohpages.dev
              </span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>
                &copy; {new Date().getFullYear()} edohpages.dev. All rights
                reserved.
              </p>
              <p className="text-sm mt-1">
                Building the future, one landing page at a time.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
