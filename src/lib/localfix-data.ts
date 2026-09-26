import { Bike, Laptop, Refrigerator, Shirt, Smartphone, Sofa, Wrench } from "lucide-react";

export const categories = [
  { name: "Phones", icon: Smartphone, count: "42 guides" },
  { name: "Computers", icon: Laptop, count: "38 guides" },
  { name: "Appliances", icon: Refrigerator, count: "51 guides" },
  { name: "Bicycles", icon: Bike, count: "29 guides" },
  { name: "Furniture", icon: Sofa, count: "24 guides" },
  { name: "Clothing", icon: Shirt, count: "18 guides" },
];

export const repairs = [
  { id: "laptop", item: "MacBook Air", issue: "Won’t power on", category: "Computers", status: "Assessment ready", progress: 68, tone: "teal" },
  { id: "washer", item: "Front-load washer", issue: "Leaking during rinse", category: "Appliances", status: "Diagnosis in progress", progress: 35, tone: "yellow" },
  { id: "bike", item: "City bicycle", issue: "Chain slips under load", category: "Bicycles", status: "Guide saved", progress: 12, tone: "green" },
];

export const professionals = [
  { id: "maya", name: "Maya Chen", business: "Circuit & Co.", specialty: "Computers & phones", rating: 4.9, reviews: 128, response: "20 min", price: "$$", initials: "MC" },
  { id: "jon", name: "Jon Bell", business: "HomeWorks Repair", specialty: "Home appliances", rating: 4.8, reviews: 94, response: "1 hour", price: "$$", initials: "JB" },
  { id: "elena", name: "Elena Ruiz", business: "Rolling Wrench", specialty: "Bicycles", rating: 4.9, reviews: 211, response: "15 min", price: "$", initials: "ER" },
];

export const guideSteps = [
  { title: "Disconnect power", detail: "Unplug all accessories. Hold the power button for 20 seconds, then wait one minute." },
  { title: "Verify the charger", detail: "Inspect the cable and port, then test with a known-good compatible charger for 15 minutes." },
  { title: "Run a power reset", detail: "Reconnect power without peripherals and press the power button once. Listen for fan or startup sounds." },
  { title: "Stop and escalate", detail: "Do not continue if the case is swollen, unusually hot, or has a burnt smell." },
];

export const navItems = [
  { label: "Overview", href: "/dashboard" },
  { label: "My repairs", href: "/repairs" },
  { label: "Find a pro", href: "/professionals" },
];

export const repairPrompts = ["Laptop won’t turn on", "Washer is leaking", "Bike chain keeps slipping", "Phone charges slowly"];
export const ToolIcon = Wrench;
