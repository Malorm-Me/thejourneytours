"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "lucide-react";

interface BookingModalProps {
  tourName?: string;
  duration?: string;
  trigger?: React.ReactNode;
  className?: string;
}

export function BookingModal({
  tourName = "",
  duration = "",
  trigger,
  className,
}: BookingModalProps) {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const tourName = formData.get("tourName");
    const duration = formData.get("duration");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const country = formData.get("country");
    const arrivalDate = formData.get("arrivalDate");
    const departureDate = formData.get("departureDate");
    const travellers = formData.get("travellers");
    const children = formData.get("children");
    const accommodation = formData.get("accommodation");
    const message = formData.get("message");

    const phoneNumber = "+233541151574";

    // Create the WhatsApp message
    const whatsappMessage = `
📌 *Tour Booking Request*
--------------------------------
*Tour Name:* ${tourName}
👤 *Full Name:* ${firstName} ${lastName}
🌍 *Country:* ${country}
📅 *Arrival:* ${arrivalDate}
📅 *Departure:* ${departureDate}
👨‍👩‍👧‍👦 *Travellers:* ${travellers}
🧒 *Children:* ${children}
🏨 *Accommodation:* ${accommodation}

💬 *Message:*
${message || "N/A"}
--------------------------------
`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );

    // Optionally close dialog
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button className={className}>Book Now</Button>}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book Your Tour</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you within 24 hours to
            confirm your booking.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tour Name */}
            <div className="md:col-span-2">
              <Label htmlFor="tourName">Tour Name</Label>
              <Select name="tourName" defaultValue={tourName} required>
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Select a region" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Greater Accra Region",
                    "Central Region",
                    "Western Region",
                    "Eastern Region",
                    "Volta Region",
                    "Ashanti Region",
                    "Northern Region",
                    "Upper East Region",
                    "Upper West Region",
                    "Bono / Bono East / Ahafo Regions",
                  ].map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* First Name */}
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                required
                className="mt-1.5"
              />
            </div>

            {/* Last Name */}
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                required
                className="mt-1.5"
              />
            </div>

            {/* Country */}
            <div className="md:col-span-2">
              <Label htmlFor="country">Country</Label>
              <Select name="country" required>
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Ghana",
                    "Nigeria",
                    "Kenya",
                    "South Africa",
                    "United States",
                    "United Kingdom",
                    "Canada",
                    "Australia",
                    "France",
                    "Germany",
                    "India",
                    "China",
                    "Japan",
                    "Brazil",
                    "Mexico",
                    "Italy",
                    "Spain",
                    "Netherlands",
                    "UAE",
                    "Saudi Arabia",
                  ].map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Preferred Arrival Date */}
            <div>
              <Label htmlFor="arrivalDate">Preferred Arrival Date</Label>
              <div className="relative mt-1.5">
                <Input
                  id="arrivalDate"
                  name="arrivalDate"
                  type="date"
                  required
                  className="pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Departure Date */}
            <div>
              <Label htmlFor="departureDate">Departure Date</Label>
              <div className="relative mt-1.5">
                <Input
                  id="departureDate"
                  name="departureDate"
                  type="date"
                  required
                  className="pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Number of Travellers */}
            <div>
              <Label htmlFor="travellers">Number of Travellers</Label>
              <Select name="travellers" required>
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Select number" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 40 }, (_, i) => i + 1).map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Number of Children */}
            <div>
              <Label htmlFor="children">Number of Children</Label>
              <Select name="children" required>
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Select number" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 41 }, (_, i) => i).map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Accommodation Type */}
            <div className="md:col-span-2">
              <Label htmlFor="accommodation">Accommodation Type</Label>
              <Select name="accommodation" required>
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Select accommodation type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="budget">Budget</SelectItem>
                  <SelectItem value="mid-range">Mid Range</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your preferences, special requests, or any questions you have..."
                rows={4}
                className="mt-1.5"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Submit Booking Request
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
