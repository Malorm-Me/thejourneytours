"use client"

import { destinations } from "@/lib/destinations"
import { DestinationCard } from "@/components/destination-card"
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

export default function DestinationsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Explore Our Destinations</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
           From the vibrant streets of Accra to the serene beaches of Cape Coast, discover Ghana’s most captivating destinations
          </p>
        </div>
      </motion.section>

      {/* Destinations Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {destinations.map((destination) => (
              <motion.div key={destination.id} variants={fadeInUp}>
                <DestinationCard destination={destination} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
