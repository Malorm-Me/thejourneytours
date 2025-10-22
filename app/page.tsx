"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DestinationCard } from "@/components/destination-card";
import { BookingModal } from "@/components/booking-modal";
import { destinations } from "@/lib/destinations";
import { Users, Globe, Award, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function HomePage() {
  const [showPromo, setShowPromo] = useState(false);

  // Auto-trigger promo popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPromo(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const featuredDestinations = destinations.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/*Promo Popup */}
      <Dialog open={showPromo} onOpenChange={setShowPromo}>
        <DialogContent className="max-w-md bg-white rounded-2xl shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              December in Ghana
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Join us for an unforgettable December heritage tours. Book now and enjoy exclusive offers!
            </DialogDescription>
          </DialogHeader>
          <div className="relative h-48 w-full rounded-xl overflow-hidden my-4">
            <Image
              src="/december.jpg"
              alt="December in Ghana"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-center gap-3">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/december-package">View Package</Link>
            </Button>
           
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/30Things to see and do in Ghana.jpeg?height=700&width=1920"
            alt="The Journey"
            fill
            className="object-cover brightness-75"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            Discover the Magic of Ghana
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Experience unforgettable , breathtaking landscapes, and
            authentic cultural encounters across Ghana's most stunning
            destinations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
            >
              <Link href="/destinations">Explore Destinations</Link>
            </Button>
            <BookingModal
              trigger={
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8"
                >
                  Plan Your Trip
                </Button>
              }
            />
          </div>
        </motion.div>
      </section>

      {/*stats Section*/}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={staggerContainer}
  className="py-16 bg-primary text-primary-foreground"
>
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center items-center text-center gap-8 md:gap-16">
      {[
        {
          value: "20+",
          label: "Destinations Across Ghana",
          icon: Globe,
        },
        {
          value: "2K+",
          label: "Happy Travelers",
          icon: Users,
        },
        {
          value: "5+",
          label: "Years of Experience",
          icon: Award,
        },
      ].map((stat, i) => (
        <motion.div
          key={i}
          variants={fadeInUp}
          className="flex flex-col items-center flex-1 min-w-[120px] max-w-[180px]"
        >
          <div className="mb-3 flex items-center justify-center w-14 h-14 rounded-full bg-white/20">
            <stat.icon className="w-7 h-7 text-white" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold">{stat.value}</div>
          <div className="text-primary-foreground/80 text-sm sm:text-base mt-1">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>


      {/* Featured Destinations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Featured Destinations
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty leading-relaxed">
              Explore our handpicked selection of Ghana's most spectacular
               destinations
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden group hover:shadow-lg transition-shadow relative">
                {/* 🔹 Special Offer Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    Special Offer
                  </span>
                </div>

                {/*Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/december.jpg"
                    alt="december in GH"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Card Content */}
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-xl text-foreground text-balance">
                      December in Ghana
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>Ghana</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    This December, experience Ghana’s heritage like never before
                    a special package to explore the nation’s deep roots and
                    timeless spirit
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-primary"></span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Link href="/december-package">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {featuredDestinations.map((destination) => (
              <motion.div key={destination.id} variants={fadeInUp}>
                <DestinationCard destination={destination} />
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/destinations">View All Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Why Choose thejourneyTours?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty leading-relaxed">
              We're committed to creating exceptional travel experiences
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Users,
                title: "Expert Guides",
                description:
                  "Our experienced local guides bring destinations to life with their knowledge and passion",
              },
              {
                icon: Globe,
                title: "Sustainable Tourism",
                description:
                  "We're committed to responsible travel that benefits local communities and wildlife",
              },
              {
                icon: Award,
                title: "Best Comfort",
                description:
                  "We provided top-notch accommodations and services to ensure a comfortable and enjoyable trip",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="py-20 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Ready for Your Ghanaian Adventure?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Let us help you plan the trip of a lifetime. Contact our team today
            to start your journey.
          </p>
          <BookingModal
            trigger={
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started
              </Button>
            }
          />
        </div>
      </motion.section>
    </div>
  );
}
