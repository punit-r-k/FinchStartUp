export const foundingTeam = [
  {
    name: "Nicanor Garza-Zazueta",
    role: "CEO & Co-founder",
    email: "nicanor14gz@tamu.edu",
    image: "/finch/team/nicanor.png",
  },
  {
    name: "Jose Tirado",
    role: "CTO & Co-founder",
    email: "jmtirador@tamu.edu",
    image: "/finch/team/jose.jpeg",
  },
  {
    name: "Carlos Luna Pena",
    role: "CTO & Co-founder",
    email: "carlunpen@tamu.edu",
    image: "/finch/team/carlos.jpeg",
  },
] as const;

export const brand = {
  name: "Finch",
  shortName: "Finch",
  tagline: "Fewer Applications. More Interviews.",
  heroHeadline: "Turn Applications Into Interviews.",
  logo: "/brand/logo-light.png",
  logomark: "/brand/logo-mark.png",
  blurb:
    "Finch is an intentional internship platform that helps students replace mass-application chaos with a faster, smarter path to interviews.",
  website: "https://applyfinch.com",
  primaryEmail: "nicanor14gz@tamu.edu",
  supportEmail: "nicanor14gz@tamu.edu",
};

export function hasBrandMark() {
  return Boolean(brand.logomark || brand.logo);
}
