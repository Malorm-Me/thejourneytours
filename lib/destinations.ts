export interface Destination {
  id: string;
  name: string;
  country?: string;
  region?: string;
  description: string;
  shortDescription: string;
  image: string;
  gallery?: string[];
  attractions: string[];
  bestTime: string;
  duration: string;
  price: string;
}

export const destinations: Destination[] = [
  {
    id: "greater-accra",
    name: "Greater Accra Region",
    region: "Greater Accra",
    country: "Ghana",
    shortDescription:
      "Ghana's vibrant capital with rich history and coastal beauty",
    description:
      "Explore Ghana's bustling capital region, where modern city life meets historical significance. From the iconic Kwame Nkrumah Mausoleum to the pristine Labadi Beach, Greater Accra offers a perfect blend of culture, history, and relaxation. Discover colonial forts, vibrant markets, and the legacy of Pan-Africanism.",
    image: "/acc2.jpg",
    gallery: ["/acc1.jpg", "/acc2.jpg", "/acc3.jpeg", "/acc4.jpg"],
    attractions: [
      "Kwame Nkrumah Mausoleum",
      "Independence Square (Black Star Square)",
      "Labadi Beach",
      "Osu Castle (Fort Christiansborg)",
      "Jamestown Lighthouse",
      "Accra Arts Centre",
      "W.E.B. Du Bois Centre",
      "Makola Market",
      "Legon Botanical Gardens",
      "Shai Hills Resource Reserve",
    ],
    bestTime: "November to March",
    duration: "3-5 days",
    price: "From $50-$4700",
  },
  {
    id: "central-region",
    name: "Central Region",
    country: "Ghana",
    region: "Central",
    shortDescription: "Historic castles and pristine beaches along the coast",
    description:
      "Journey through Ghana's Central Region, home to UNESCO World Heritage slave castles and the breathtaking Kakum National Park. Walk among the treetops on canopy walkways, explore centuries-old fortresses, and relax on beautiful coastal beaches. This region is essential for understanding Ghana's role in history.",
    image: "/cape-coast-castle-overlooking-ocean.jpeg",
    gallery: ["/c1.jpg", "/c2.jpg", "/c3.jpg", "/c4.jpg"],
    attractions: [
      "Cape Coast Castle",
      "Elmina Castle",
      "Kakum National Park",
      "Hans Cottage Botel",
      "Assin Manso Slave River",
      "Brenu Beach",
      "Fort St. Jago",
      "Anomabo Beach Resort",
    ],
    bestTime: "November to April",
    duration: "3-4 days",
    price: "From $50-$4700",
  },
  {
    id: "western-region",
    name: "Western Region",
    country: "Ghana",
    region: "Western",
    shortDescription: "Pristine beaches and unique stilt villages",
    description:
      "Discover the Western Region's stunning coastline with pristine beaches like Busua and Butre. Experience the unique Nzulezu Stilt Village built entirely on water, explore colonial forts, and visit the southernmost point of Ghana at Cape Three Points. This region offers untouched natural beauty and authentic cultural experiences.",
    image: "/liberation Road, Takoradi, Ghana.jpeg",
    gallery: ["/w1.jpeg", "/w2.jpeg", "/w3.jpeg", "/w4.jpeg"],
    attractions: [
      "Busua Beach",
      "Butre Beach",
      "Dixcove Fort",
      "Nzulezu Stilt Village",
      "Ankasa Conservation Area",
      "Cape Three Points Lighthouse",
      "Fort Metal Cross (Dixcove)",
      "Takoradi Market Circle",
    ],
    bestTime: "November to March",
    duration: "3-5 days",
    price: "From $300-$5000",
  },
  {
    id: "eastern-region",
    name: "Eastern Region",
    region: "Eastern",
    country: "Ghana",
    shortDescription: "Waterfalls, botanical gardens, and cocoa heritage",
    description:
      "Experience the lush Eastern Region with its stunning waterfalls, botanical gardens, and the impressive Akosombo Dam. Visit the historic Tetteh Quarshie Cocoa Farm, hike to Boti Falls, and marvel at the natural Umbrella Rock formation. This region showcases Ghana's natural beauty and agricultural heritage.",
    image: "/Boti Falls by Photo_Keely.jpeg?height=400&width=600",
    gallery: [
      "/e1.jpg?height=400&width=600",
      "/e2.jpg?height=400&width=600",
      "/e3.jpeg?height=400&width=600",
      "/e4.jpeg?height=400&width=600",
    ],
    attractions: [
      "Aburi Botanical Gardens",
      "Boti Falls",
      "Akosombo Dam",
      "Tetteh Quarshie Cocoa Farm",
      "Akaa Falls",
      "Umbrella Rock",
      "Atewa Range Forest Reserve",
      "Adomi Bridge",
    ],
    bestTime: "October to April",
    duration: "2-4 days",
    price: "From $300-$5000",
  },
  {
    id: "volta-region",
    name: "Volta Region",
    region: "Volta",
    country: "Ghana",
    shortDescription: "Majestic waterfalls and Ghana's highest peak",
    description:
      "Explore the scenic Volta Region, home to the highest waterfall in West Africa - Wli Falls. Climb Mount Afadja, Ghana's highest peak, visit the Tafi Atome Monkey Sanctuary, and experience traditional kente weaving. The region offers adventure, wildlife, and rich cultural traditions.",
    image: "/LakeVolta.jpeg?height=400&width=600",
    gallery: [
      "/v1.jpg?height=400&width=600",
      "/v2.jpg?height=400&width=600",
      "/v3.jpeg?height=400&width=600",
      "/v4.jpg?height=400&width=600",
    ],
    attractions: [
      "Wli Waterfalls",
      "Tafi Atome Monkey Sanctuary",
      "Mount Afadja (Afadjato)",
      "Tagbo Falls",
      "Volta Lake",
      "Keta Lagoon",
      "Fort Prinzenstein",
      "Tafi Abuipe Kente Village",
    ],
    bestTime: "November to March",
    duration: "3-5 days",
    price: "From $300-$3850",
  },
  {
    id: "ashanti-region",
    name: "Ashanti Region",
    region: "Ashanti",
    country: "Ghana",
    shortDescription: "Royal heritage and traditional kente weaving",
    description:
      "Immerse yourself in the heart of Ashanti culture in Kumasi, Ghana's cultural capital. Visit the Manhyia Palace Museum, explore the largest open-air market in West Africa, and witness traditional kente weaving in Bonwire. Experience the sacred Lake Bosomtwe and learn about the legendary Okomfo Anokye Sword.",
    image:
      "/KUMASI, Kumasi, Ashanti Region Apartment for Sale.jpeg?height=400&width=600",
    gallery: [
      "/a1.jpg?height=400&width=600",
      "/a2.jpeg?height=400&width=600",
      "/a3.png?height=400&width=600",
      "/a4.jpeg?height=400&width=600",
    ],
    attractions: [
      "Manhyia Palace Museum",
      "Prempeh II Jubilee Museum",
      "Lake Bosomtwe",
      "Kumasi Central Market (Kejetia)",
      "Bonwire Kente Village",
      "Okomfo Anokye Sword Site",
      "Adanwomase Kente Village",
      "Rattray Park",
    ],
    bestTime: "November to March",
    duration: "3-4 days",
    price: "From $300-$3750",
  },
  {
    id: "northern-region",
    name: "Northern Region",
    region: "Northern",
    country: "Ghana",
    shortDescription: "nature adventures and ancient mosques",
    description:
      "Venture into Northern Ghana for an authentic nature experience at Mole National Park, home to elephants, antelopes, and diverse wildlife. Visit the ancient Larabanga Mosque, one of the oldest in West Africa, and experience traditional village life in Mognori. This region offers a different side of Ghana with savanna landscapes and unique cultural heritage.",
    image: "/Ghana.jpeg?height=400&width=600",
    gallery: [
      "/n1.jpg?height=400&width=600",
      "/n2.jpg?height=400&width=600",
      "/n3.jpeg?height=400&width=600",
      "/n4.jpeg?height=400&width=600",
    ],
    attractions: [
      "Mole National Park",
      "Larabanga Mosque",
      "Larabanga Mystic Stone",
      "Mognori Eco Village",
      "Daboya Weaving Village",
      "Tamale Central Market",
      "Kintampo Waterfalls (border with Bono East)",
    ],
    bestTime: "November to March",
    duration: "3-5 days",
    price: "From $500-$3950",
  },
  {
    id: "upper-east",
    name: "Upper East Region",
    region: "Upper East",
    country: "Ghana",
    shortDescription: "Sacred crocodiles and traditional art villages",
    description:
      "Discover the Upper East Region's unique attractions, including the famous Paga Crocodile Pond where you can interact with sacred crocodiles. Explore the mystical Tongo Hills and Tengzug Shrine, visit traditional art villages in Sirigu, and learn about the region's history at Pikworo Slave Camp. Experience authentic northern Ghanaian culture and craftsmanship.",
    image: "/The_Upper_East_region_Ghana_main.png?height=400&width=600",
    gallery: [
      "/ue1.jpeg?height=400&width=600",
      "/ue2.jpeg?height=400&width=600",
      "/ue3.jpeg?height=400&width=600",
      "/ue4.jpeg?height=400&width=600",
    ],
    attractions: [
      "Paga Crocodile Pond",
      "Tongo Hills and Tengzug Shrine",
      "Bolgatanga Crafts Village",
      "Sirigu Art Village",
      "Pikworo Slave Camp",
    ],
    bestTime: "November to March",
    duration: "2-3 days",
    price: "From $300-$3950",
  },
  {
    id: "upper-west",
    name: "Upper West Region",
    country: "Ghana",
    region: "Upper West",
    shortDescription: "Hippo sanctuaries and ancient defense walls",
    description:
      "Explore the Upper West Region's natural wonders at Wechiau Hippo Sanctuary, where you can observe hippos in their natural habitat. Visit the historic Gwollu Slave Defence Wall and the Wa Naa's Palace. This remote region offers authentic cultural experiences and unique wildlife encounters away from typical tourist routes.",
    image: "/4172_PalaceoftheWaNaa1.jpg?height=400&width=600",
    gallery: [
      "/uw1.jpeg?height=400&width=600",
      "/uw2.jpeg?height=400&width=600",
      "/uw3.jpeg?height=400&width=600",
      "/uw4.jpeg?height=400&width=600",
    ],
    attractions: [
      "Wechiau Hippo Sanctuary",
      "Gwollu Slave Defence Wall",
      "Wa Naa's Palace",
      "Wichiau Community Sanctuary",
    ],
    bestTime: "November to March",
    duration: "2-3 days",
    price: "From $300-$3950",
  },
  {
    id: "bono-regions",
    country: "Ghana",
    name: "Bono / Bono East / Ahafo Regions",
    region: "Bono",
    shortDescription: "Waterfalls, monkey sanctuaries, and mysterious caves",
    description:
      "Discover the Bono regions' natural attractions including the spectacular Kintampo Waterfalls and Fuller Falls. Visit the Boabeng-Fiema Monkey Sanctuary where monkeys roam freely, explore the mysterious Buoyem Caves with its bat colony, and learn about wildlife conservation. These regions offer diverse natural beauty and wildlife experiences.",
    image:
      "/place-to-see_national-parks-in-ghana-you-do-not-want-to-miss_ghana-national-parks_2021-05-27_526_1590-tn.jpg?height=400&width=600",
    gallery: [
      "/b1.jpeg?height=400&width=600",
      "/b2.jpeg?height=400&width=600",
      "/b3.jpeg?height=400&width=600",
      "/b4.jpeg?height=400&width=600",
    ],
    attractions: [
      "Kintampo Waterfalls",
      "Fuller Falls",
      "Boabeng-Fiema Monkey Sanctuary",
      "Buoyem Caves and Bats Colony",
      "Fiema Monkey Sanctuary",
      "Sunyani Wildlife Museum",
    ],
    bestTime: "November to April",
    duration: "2-4 days",
    price: "From $300-$3950",
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    location: "United States",
    rating: 5,
    text: "An absolutely incredible experience! The tours exceeded all expectations. Our guide was knowledgeable and the accommodations were luxurious.",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "The trip of a lifetime! Every detail was perfectly planned. Seeing the wildebeest migration was breathtaking. Highly recommend!",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Emma Williams",
    location: "United Kingdom",
    rating: 5,
    text: "Professional service from start to finish. The team went above and beyond to ensure we had an unforgettable African adventure.",
    image: "/placeholder.svg?height=48&width=48",
  },
];
