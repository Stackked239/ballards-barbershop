export interface Service {
  name: string;
  price: string;
}

export interface TeamMember {
  name: string;
  title: string;
  image: string;
  services: Service[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Dustin Prince",
    title: "Master Barber",
    image: "/images/team/dustin-prince.png",
    services: [
      { name: "Classic Cut", price: "$30+" },
      { name: "Buzz Cut", price: "$25+" },
      { name: "Head Shave", price: "$40+" },
      { name: "Lineups", price: "$20+" },
      { name: "The Refiner Cut & Shave", price: "$45" },
      { name: "The Classic Cut & Shave", price: "$55" },
      { name: "The Signature Cut & Shave", price: "$65" },
    ],
  },
  {
    name: "Rob Bumgardner",
    title: "Master Barber",
    image: "/images/team/rob-bumgardner.png",
    services: [
      { name: "Classic Cut", price: "$30+" },
      { name: "Buzz Cut", price: "$25+" },
      { name: "Head Shave", price: "$40+" },
      { name: "Lineups", price: "$20+" },
      { name: "The Refiner Cut & Shave", price: "$45" },
      { name: "The Classic Cut & Shave", price: "$55" },
      { name: "The Signature Cut & Shave", price: "$65" },
    ],
  },
  {
    name: "Dustin Helms",
    title: "Master Barber",
    image: "/images/team/dustin-helms.png",
    services: [
      { name: "Classic Cut", price: "$30+" },
      { name: "Buzz Cut", price: "$25+" },
      { name: "Head Shave", price: "$40+" },
      { name: "Lineups", price: "$20+" },
      { name: "The Refiner Cut & Shave", price: "$45" },
      { name: "The Classic Cut & Shave", price: "$55" },
      { name: "The Signature Cut & Shave", price: "$65" },
    ],
  },
  {
    name: "Ed Trevino",
    title: "Master Barber",
    image: "/images/team/ed-trevino.png",
    services: [
      { name: "Classic Cut", price: "$30+" },
      { name: "Buzz Cut", price: "$25+" },
      { name: "Head Shave", price: "$40+" },
      { name: "Lineups", price: "$20+" },
      { name: "The Refiner Cut & Shave", price: "$45" },
      { name: "The Classic Cut & Shave", price: "$55" },
      { name: "The Signature Cut & Shave", price: "$65" },
    ],
  },
  {
    name: "Ray Goodson",
    title: "Master Barber",
    image: "/images/team/ray-goodson.jpeg",
    services: [
      { name: "Classic Cut", price: "$30+" },
      { name: "Buzz Cut", price: "$25+" },
      { name: "Head Shave", price: "$40+" },
      { name: "Lineups", price: "$20+" },
      { name: "The Refiner Cut & Shave", price: "$45" },
      { name: "The Classic Cut & Shave", price: "$55" },
      { name: "The Signature Cut & Shave", price: "$65" },
    ],
  },
  {
    name: "Dustin Goodson",
    title: "Master Barber",
    image: "/images/team/dustin-goodson.jpeg",
    services: [
      { name: "Classic Cut", price: "$30+" },
      { name: "Buzz Cut", price: "$25+" },
      { name: "Head Shave", price: "$40+" },
      { name: "Lineups", price: "$20+" },
      { name: "The Refiner Cut & Shave", price: "$45" },
      { name: "The Classic Cut & Shave", price: "$55" },
      { name: "The Signature Cut & Shave", price: "$65" },
    ],
  },
  {
    name: "Bryan Walls",
    title: "Master Barber",
    image: "/images/team/bryan-walls.jpeg",
    services: [
      { name: "Classic Cut", price: "$30+" },
      { name: "Buzz Cut", price: "$25+" },
      { name: "Head Shave", price: "$40+" },
      { name: "Lineups", price: "$20+" },
      { name: "The Refiner Cut & Shave", price: "$45" },
      { name: "The Classic Cut & Shave", price: "$55" },
      { name: "The Signature Cut & Shave", price: "$65" },
    ],
  },
];
