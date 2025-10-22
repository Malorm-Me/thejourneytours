"use client"

import { motion } from "framer-motion"
import { Check, X, Sparkles, Calendar, Users, Building,Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const packages = [
  {
    name: "Double Occupancy",
    price: 3200,
    description: "Perfect for couples and friends traveling together",
    popular: true,
    features: [
      "Airport Pick up & Drop off",
      "Luxurious Accommodation",
      "Daily Breakfast",
      "Welcoming & Farewell Dinner",
      "Comfortable Transportation: A/C",
      "Fees to Sites & Spiritual/Historical Tours",
      "WiFi Throughout the Stay",
      "Personal Guide Service",
      "Waterfall & Beach Relaxation",
      "Videographer",
      "Detty December Parties",
      "Museums & Art Galleries",
      "City Tours",
      "The Journey Travel & Tours Souvenir",
    ],
  },
  {
    name: "Single Occupancy",
    price: 4000,
    description: "Exclusive experience with private accommodations",
    popular: false,
    features: [
      "Airport Pick up & Drop off",
      "Luxurious Accommodation",
      "Daily Breakfast",
      "Welcoming & Farewell Dinner",
      "Comfortable Transportation: A/C",
      "Fees to Sites & Spiritual/Historical Tours",
      "WiFi Throughout the Stay",
      "Personal Guide Service",
      "Waterfall & Beach Relaxation",
      "Videographer",
      "Detty December Parties",
      "Museums & Art Galleries",
      "City Tours",
      "The Journey Travel & Tours Souvenir",
    ],
  },
]

const exclusions = ["Airfare not included", "Travel insurance not included", "Visa not included"]

const highlights = [
  {
    icon: Plane ,
    title: "Pickup",
    description: "Airport Pick up & Drop off",
  },
  {
    icon: Building,
    title: "Accommodation",
    description: "Luxurious Accommodation",
  },
  {
    icon: Users,
    title: "Group Tours",
    description: "Meet fellow travelers and make memories",
  },
  {
    icon: Sparkles,
    title: "Detty December",
    description: "Experience Ghana's biggest celebration",
  },
]

export default function DecemberPackagePage() {
const handleBookNow = (packageName: string) => {
  const phoneNumber = "233541151574"
  const message = `Hello! I’d like to book the ${packageName} package for the December in Ghana tour.`
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappURL, "_blank")
}


  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              <Sparkles className="w-3 h-3 mr-1" />
              Limited Spots Available
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              December in <span className="text-primary">Ghana</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Experience the magic of Detty December with our exclusive tour packages. Immerse yourself in
              Ghana's rich culture, stunning landscapes, and vibrant celebrations.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 text-center border-2 hover:border-primary/50 transition-colors">
                <highlight.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Choose Your Package</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the perfect package for your December adventure in Ghana
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`p-8 h-full flex flex-col relative ${
                    pkg.popular ? "border-2 border-primary shadow-xl" : "border-2"
                  }`}
                >
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">${pkg.price.toLocaleString()}</span>
                      <span className="text-muted-foreground"></span>
                    </div>
                  </div>

                  <div className="flex-1 mb-6">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => handleBookNow(pkg.name)}
                    className={`w-full ${
                      pkg.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    }`}
                    size="lg"
                  >
                    Book {pkg.name}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <Card className="p-8 bg-muted/50">
              <h3 className="text-xl font-bold mb-4">Important Information</h3>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Not Included:</h4>
                <ul className="space-y-2">
                  {exclusions.map((exclusion, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{exclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>Note:</strong> Customized stay duration can be arranged.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for the Adventure of a Lifetime?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't miss out on this incredible opportunity to experience Ghana's Detty December. Limited spots
              available!
            </p>
          </motion.div>
        </div>
      </section>

  
    </div>
  )
}
