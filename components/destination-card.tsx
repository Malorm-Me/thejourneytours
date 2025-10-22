"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Destination } from "@/lib/destinations";

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-xl text-foreground text-balance">
            {destination.name}
          </h3>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
          <MapPin className="h-4 w-4" />
          <span>{destination.country}</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {destination.shortDescription}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-primary">
              {destination.price}
            </span>
          </div>
        </div>
        <Button
          asChild
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Link href={`/destinations/${destination.id}`}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
