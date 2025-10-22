"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, DollarSign, Calendar, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function DestinationDetailPageClient({ params }: { params: { id: string } }) {
  // In a real app, you'd fetch this data from your CMS or database
  const destinations = [
    {
      id: "paris",
      name: "Paris",
      country: "France",
      description:
        "The City of Love. Paris, the capital of France, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.",
      image: "/paris.jpg",
      attractions: ["Eiffel Tower", "Louvre Museum", "Notre Dame Cathedral"],
      price: "$2000",
      duration: "7 days",
      bestTime: "Spring",
    },
    {
      id: "tokyo",
      name: "Tokyo",
      country: "Japan",
      description:
        "A vibrant metropolis. Tokyo is Japan's busy capital, mixing the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.",
      image: "/tokyo.jpg",
      attractions: ["Shibuya Crossing", "Tokyo Skytree", "Senso-ji Temple"],
      price: "$2500",
      duration: "10 days",
      bestTime: "Autumn",
    },
    {
      id: "rome",
      name: "Rome",
      country: "Italy",
      description:
        "The Eternal City. Rome, Italy's capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display.",
      image: "/rome.jpg",
      attractions: ["Colosseum", "Roman Forum", "Vatican City"],
      price: "$1800",
      duration: "5 days",
      bestTime: "Spring",
    },
  ]

  const destination = destinations.find((d) => d.id === params.id)

  if (!destination) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {/* Hero Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={destination.image || "/placeholder.svg"}
            alt={destination.name}
            fill
            className="object-cover brightness-90"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 p-8"
        >
          <div className="container mx-auto">
            <div className="flex items-center gap-2 text-white/90 mb-2">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">{destination.country}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-balance">{destination.name}</h1>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">About This Destination</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{destination.description}</p>

              <h3 className="text-xl font-bold text-foreground mb-4">Top Attractions</h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              >
                {destination.attractions.map((attraction, index) => (
                  <motion.div key={index} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{attraction}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">Trip Details</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm text-muted-foreground">Starting Price</div>
                        <div className="font-semibold text-foreground">{destination.price}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm text-muted-foreground">Duration</div>
                        <div className="font-semibold text-foreground">{destination.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm text-muted-foreground">Best Time to Visit</div>
                        <div className="font-semibold text-foreground">{destination.bestTime}</div>
                      </div>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
