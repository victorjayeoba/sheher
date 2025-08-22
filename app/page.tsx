"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, Star, Instagram, Facebook, Twitter } from "lucide-react"

export default function BeautyLandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentTip, setCurrentTip] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const products = [
    {
      name: "Radiant Glow Serum",
      benefit: "Illuminates skin with natural botanicals",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Hydra-Luxe Moisturizer",
      benefit: "Deep hydration with rose gold minerals",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Curl Defining Elixir",
      benefit: "Enhances natural curls with organic oils",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Luminous Face Mask",
      benefit: "Weekly glow boost with precious stones",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Silk Hair Treatment",
      benefit: "Strengthens and shines with silk proteins",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Youth Renewal Cream",
      benefit: "Anti-aging with natural peptides",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const testimonials = [
    {
      name: "Maya Chen",
      quote: "My skin has never looked more radiant. The glow is absolutely natural!",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Zara Williams",
      quote: "These products transformed my curls. They feel so healthy and defined.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Elena Rodriguez",
      quote: "The luxury feel and natural results exceeded all my expectations.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const tips = [
    { text: "Hydrate Naturally", subtitle: "Drink water infused with cucumber for glowing skin" },
    { text: "Embrace Your Curls", subtitle: "Use silk pillowcases to maintain natural texture" },
    { text: "Glow from Within", subtitle: "Massage face oils in upward circular motions" },
    { text: "Natural Radiance", subtitle: "Apply serums on damp skin for better absorption" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-rose-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 parallax" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Natural Beauty Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 text-gradient animate-fade-in">
            Glow Naturally.
          </h1>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 animate-fade-in delay-300">
            Shine Beautifully.
          </h2>
          <p className="text-xl md:text-2xl mb-12 font-light animate-fade-in delay-500">
            Discover the future of natural beauty with our luxurious skincare and haircare collection
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white px-12 py-6 text-lg font-semibold rounded-full animate-pulse-glow animate-fade-in delay-700"
          >
            Explore Our Collection
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl font-bold text-stone-800 mb-4">Featured Collection</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Curated products that enhance your natural radiance with cutting-edge formulations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-stone-800 mb-2">{product.name}</h3>
                  <p className="text-stone-600 leading-relaxed">{product.benefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-20 bg-gradient-to-r from-stone-100 to-rose-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Natural Beauty Lifestyle"
                className="w-full h-80 object-cover rounded-2xl shadow-xl animate-slide-in-left"
              />
              <img
                src="/placeholder.svg?height=300&width=600"
                alt="Natural Ingredients"
                className="w-full h-60 object-cover rounded-2xl shadow-xl animate-slide-in-left delay-300"
              />
            </div>

            <div className="space-y-8 animate-slide-in-right">
              <h2 className="font-heading text-5xl font-bold text-stone-800">Our Story</h2>
              <p className="text-xl text-stone-700 leading-relaxed">
                Born from the belief that true beauty comes from within, we harness the power of nature's most precious
                elements. Our formulations blend ancient wisdom with futuristic science.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Each product is crafted with ethically sourced botanicals, precious minerals, and cutting-edge
                technology to reveal your skin's natural luminosity and your hair's inherent strength.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg font-semibold text-stone-800">Naturally Radiant Since 2020</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl font-bold text-stone-800 mb-4">Transformation Gallery</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Real results from real women who embraced their natural beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative group overflow-hidden rounded-2xl shadow-xl">
              <div className="flex">
                <div className="w-1/2 relative">
                  <img
                    src={`/placeholder.svg?height=400&width=300&query=before skincare transformation natural skin texture ${item}`}
                    alt="Before"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-stone-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Before
                  </div>
                </div>
                <div className="w-1/2 relative">
                  <img
                    src={`/placeholder.svg?height=400&width=300&query=after skincare transformation glowing radiant skin ${item}`}
                    alt="After"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    After
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl font-bold text-stone-800 mb-4">Natural Elements</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Precious ingredients sourced from nature's most powerful sources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Rose Quartz", benefit: "Promotes skin healing and renewal" },
              { name: "Argan Oil", benefit: "Deep nourishment and hydration" },
              { name: "Sea Buckthorn", benefit: "Vitamin C for radiant glow" },
              { name: "Jade Extract", benefit: "Cooling and soothing properties" },
            ].map((ingredient, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-full mx-auto w-48 h-48">
                  <img
                    src={`/placeholder.svg?height=300&width=300&query=${ingredient.name} natural ingredient close up macro photography`}
                    alt={ingredient.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-stone-800 mb-2">{ingredient.name}</h3>
                <p className="text-stone-600">{ingredient.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl font-bold text-stone-800 mb-4">Glowing Reviews</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Join thousands of women who have discovered their natural radiance
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-96 flex items-center justify-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <p className="text-2xl font-light mb-4 italic">"{testimonial.quote}"</p>
                      <p className="font-heading text-xl font-semibold">— {testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-stone-800" />
          </button>

          <button
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-stone-800" />
          </button>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-gradient-to-r from-rose-100 to-stone-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-5xl font-bold text-stone-800 mb-16">Beauty Inspiration</h2>

          <div className="relative h-80 overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-1000 ease-in-out h-full"
              style={{ transform: `translateX(-${currentTip * 100}%)` }}
            >
              {tips.map((tip, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <img
                    src={`/placeholder.svg?height=400&width=800&query=natural beauty tip ${tip.text} spa wellness lifestyle`}
                    alt={tip.text}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                    <div>
                      <h3 className="font-heading text-4xl font-bold mb-4">{tip.text}</h3>
                      <p className="text-xl font-light">{tip.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=600&width=1920"
            alt="Join the Glow Club"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="font-heading text-6xl font-bold mb-6 animate-float">Join the Glow Club</h2>
          <p className="text-2xl font-light mb-12 max-w-2xl mx-auto">
            Be the first to discover new products, exclusive tips, and special offers for radiant skin and healthy hair
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
            />
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white px-8 animate-pulse-glow"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-gradient">Lumina Beauty</h3>
              <p className="text-stone-300 leading-relaxed">
                Enhancing natural beauty with luxurious, science-backed formulations.
              </p>
            </div>

            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-stone-300">
                <li>Skincare</li>
                <li>Haircare</li>
                <li>Body Care</li>
                <li>Gift Sets</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-stone-300">
                <li>Contact Us</li>
                <li>Shipping Info</li>
                <li>Returns</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-stone-300 hover:text-rose-400 cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-stone-300 hover:text-rose-400 cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-stone-300 hover:text-rose-400 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          <div className="border-t border-stone-700 pt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[1, 2, 3, 4].map((item) => (
                <img
                  key={item}
                  src={`/placeholder.svg?height=150&width=150&query=instagram post natural beauty skincare ${item}`}
                  alt={`Instagram ${item}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
              ))}
            </div>

            <div className="text-center text-stone-400">
              <p>&copy; 2024 Lumina Beauty. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
