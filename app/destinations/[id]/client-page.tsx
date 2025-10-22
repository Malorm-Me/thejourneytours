"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { destinations } from "@/lib/destinations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, DollarSign, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { BookingModal } from "@/components/booking-modal";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface ClientPageProps {
  params: { id: string };
}

export default function DestinationDetailClientPage({
  params,
}: ClientPageProps) {
  console.log("🧭 Route params:", params);
  const destination = destinations.find((d) => d.id === params.id);
  console.log("🎯 Matched destination:", destination);
  if (!destination) {
    notFound();
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
              <span className="text-lg">
                {destination.region || destination.country}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-balance">
              {destination.name}
            </h1>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  About This Destination
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {destination.description}
                </p>

                <h3 className="text-xl font-bold text-foreground mb-4">
                  Top Attractions
                </h3>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {destination.attractions.map((attraction, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        {attraction}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {destination.gallery && destination.gallery.length > 0 && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    Gallery
                  </h3>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-2 gap-4"
                  >
                    {destination.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="relative aspect-[4/3] rounded-lg overflow-hidden group"
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${destination.name} gallery image ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </div>

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
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    Trip Details
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm text-muted-foreground">
                          Starting Price
                        </div>
                        <div className="font-semibold text-foreground">
                          {destination.price}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Enjoy a fully curated experience featuring guided tours,
                    cultural activities, and transportation.{" "}
                    <span className="block mt-2 text-foreground font-medium">
                      Note:
                    </span>{" "}
                    Accommodation is included, and prices may vary depending on
                    the type or star rating of the selected lodging.
                  </p>

                  <BookingModal
                    tourName={destination.name}
                    duration={destination.duration}
                    trigger={
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-3">
                        Book This Trip
                      </Button>
                    }
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
