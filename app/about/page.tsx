"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutPage() {
  const team = [
    {
      name: "Paul Aligri",
      role: "Founder & CEO",
      image: "/paul.jpg",
      bio: "I founded The Journey Travel & Tours out of my deep passion for travel and for sharing authentic African stories. Growing up with my dad working at two major tourist sites in Ghana, I was practically born into tourism. Over the years, that early exposure inspired me to create a platform that connects people to Ghana’s culture, beauty, and unforgettable experiences.",
    },
    {
      name: "Gregory Adams Quist",
      role: "Co-Founder & CEO",
      image: "/adams.jpg",
      bio: "I’m passionate about transforming every trip into a meaningful experience. My goal is to create authentic, safe, and unforgettable adventures across Ghana where every journey feels personal and every moment leaves a lasting impression.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Ghana",
      description:
        "We love what we do and it shows in every trip we organize. Our passion for Africa drives us to create unforgettable experiences.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Your safety is our top priority. We maintain the highest safety standards and work with certified guides and partners.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our service, from planning to execution, ensuring memorable experiences.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "We support local communities and conservation efforts, ensuring tourism benefits both people and wildlife.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/c1.jpg"
            alt="About Us"
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            About thejourneyTours
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto text-pretty leading-relaxed">
            Pioneering sustainable tourism in Ghana since 2023
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At thejourneyTours, we believe in creating transformative travel
              experiences that immerse people in Ghana’s vibrant cultures,
              history, and natural beauty. Our mission is to offer authentic and
              sustainable journeys that celebrate local traditions while
              empowering communities. We’re dedicated to responsible tourism
              practices that preserve Ghana’s heritage and environment, ensuring
              that future generations can continue to experience the country’s
              rich spirit and wonder.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're committed to responsible tourism practices that protect the
              natural wonders we showcase, ensuring future generations can
              experience the magic of Ghana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
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
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              The principles that guide everything we do
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
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
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Passionate professionals dedicated to creating exceptional 
              experiences
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden group">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
