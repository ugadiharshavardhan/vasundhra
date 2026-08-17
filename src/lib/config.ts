export const CONFIG = {
  brand: {
    name: "VASUNDHARA",
    subtitle: "DIAMOND ROOF",
    tagline: "Cinematic High Jewellery Architecture",
    teluguName: "వసుంధర డైమండ్ రూఫ్",
    established: "1999",
    location: "Hyderabad, India",
  },
  assets: {
    videos: {
      exteriorEntrance: "/videos/vasundhara-entrance.mp4",
    },
    images: {
      heroPoster: "/images/hero-poster.jpg",
      logo: "/images/vasundhara-logo.svg",
    },
    models: {
      diamondSolitaire: "/models/diamond.glb",
      engagementRing: "/models/afrg019_goldring_wedding_engagement_luxury.glb",
      signatureNecklace: "/models/afrg019_goldring_wedding_engagement_luxury.glb",
      kundanChoker: "/models/afrg019_goldring_wedding_engagement_luxury.glb",
      nizamHaram: "/models/afrg019_goldring_wedding_engagement_luxury.glb",
      receptionCascade: "/models/diamond.glb",
    },
    textures: {},
  },
  animation: {
    duration: {
      fast: 0.3,
      normal: 0.8,
      slow: 1.4,
      cinematic: 2.2,
    },
    ease: {
      luxury: "power3.inOut",
      smooth: "power2.out",
      entrance: "expo.out",
      door: "power4.inOut",
    },
    scroll: {
      lenisLerp: 0.08,
      heroPinDuration: 500, // scroll distance factor in %
      entranceVideoMilestones: {
        wideShot: 0.0,
        approachFacade: 0.2,
        reachStairs: 0.4,
        topOfStairs: 0.55,
        atDoor: 0.65,
        doorOpening: 0.75,
        entering: 0.88,
        blackInterior: 1.0,
      },
    },
  },
  breakpoints: {
    mobile: 640,
    tablet: 1024,
    desktop: 1280,
    wide: 1536,
  },
  performance: {
    maxDpr: 2,
    lowPowerFpsThreshold: 35,
    reducedMotion: false,
    preloadVideoChunks: true,
  },
  colors: {
    gold: "#a57b53",
    light: "#f0f2f0",
    charcoal: "#161616",
    deepBlack: "#050505",
  },
};

export type AppConfig = typeof CONFIG;
