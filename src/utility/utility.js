// Importing all the logos, so I can pass them as part of the answers object below
import LogoBongger from "../img/logos/bongger.png";
import LogoCoinye from "../img/logos/coinye.png";
import LogoCthulhuOfferings from "../img/logos/cthulhu-offerings.jpg";
import LogoDeepOnion from "../img/logos/deep-onion.svg";
import LogoDinero from "../img/logos/dinero.png";
import LogoErgo from "../img/logos/ergo.svg";
import LogoFlokiInu from "../img/logos/floki-inu.svg";
import LogoFuzzballs from "../img/logos/fuzzballs.png";
import LogoOmicron from "../img/logos/omicron.png";
import LogoOmniscient from "../img/logos/omniscient.png";
import LogoQuasar from "../img/logos/quasar.svg";
import LogoRiot from "../img/logos/riot.svg";
import LogoSentinel from "../img/logos/sentinel.svg";
import LogoSinon from "../img/logos/sinon.png";
import LogoVorlon from "../img/logos/vorlon.svg";
import LogoVulcan from "../img/logos/vulcan.svg";

// Checking to see if two sets of bounds are intersecting
// Pinched from bobbyhadz.com/blog/javascript-check-if-two-elements-overlap
export const elementsOverlap = (el1, el2) => {
  if (!el1 || !el2) {
    return;
  }

  const domRect1 = el1.getBoundingClientRect();
  const domRect2 = el2.getBoundingClientRect();

  return !(
    domRect1.top > domRect2.bottom ||
    domRect1.right < domRect2.left ||
    domRect1.bottom < domRect2.top ||
    domRect1.left > domRect2.right
  );
};

export const answers = [
  {
    "name": "Dinero",
    "type": "js",
    "logo": LogoDinero,
    "url": "https://dinerojs.com/",
    "description": "Dinero.js is a library for working with monetary values in JavaScript."
  },
  {
    "name": "Omniscient",
    "type": "js",
    "logo": LogoOmniscient,
    "url": "https://github.com/omniscientjs/omniscient",
    "description": "A library providing an abstraction for React components that allows for fast top-down rendering embracing immutable data for js."
  },
  {
    "name": "Deep Onion",
    "type": "crypto",
    "logo": LogoDeepOnion,
    "url": "https://deeponion.org/",
    "description": "It all started when four industry experts decided to create a fast privacy-oriented crypto that communicates through the anonymous Tor® network."
  },
  {
    "name": "bongger",
    "type": "crypto",
    "logo": LogoBongger,
    "url": "https://bongger.com/",
    "description": "Bongger is not only a crypto currency that can be used for purchases, it is also a social project that will aide humanity in many different aspects, as a currency, as an asset and as a funding resource for the cannabis industry."
  },
  {
    "name": "Ergo",
    "type": "crypto",
    "logo": LogoErgo,
    "url": "https://ergoplatform.org/",
    "description": "Ergo is a next-generation smart contract platform that ensures the economic freedom of ordinary people through secure, accessible, and decentralized financial tools."
  },
  {
    "name": "Vorlon",
    "type": "js",
    "logo": LogoVorlon,
    "url": "https://vorlonjs.com/",
    "description": "An open source, extensible, platform-agnostic tool for remotely debugging and testing your JavaScript. Powered by node.js and socket.io."
  },
  {
    "name": "Omicron",
    "type": "crypto",
    "logo": LogoOmicron,
    "url": "https://omic.finance/",
    "description": "A decentralized currency protocol built on Arbitrum"
  },
  {
    "name": "Sinon",
    "type": "js",
    "logo": LogoSinon,
    "url": "https://sinonjs.org/",
    "description": "Standalone test spies, stubs and mocks for JavaScript. Works with any unit testing framework."
  },
  {
    "name": "Vulcan",
    "type": "js",
    "logo": LogoVulcan,
    "url": "http://vulcanjs.org/",
    "description": "The full-stack React+GraphQL framework"
  },
  {
    "name": "Floki Inu",
    "type": "crypto",
    "logo": LogoFlokiInu,
    "url": "https://www.floki.com/",
    "description": "By combining the power of memes with real utility and charitability, FLOKI gives power and opportunity to the people — to the underdogs — instead of venture capitalists and hedge funds."
  },
  {
    "name": "Riot",
    "type": "js",
    "logo": LogoRiot,
    "url": "https://github.com/riot/riot",
    "description": "Simple and elegant component-based UI library."
  },
  {
    "name": "Fuzzballs",
    "type": "crypto",
    "logo": LogoFuzzballs,
    "url": "http://www.fyi-koerier.nl/fuzzballs.htm",
    "description": "FuzzBalls is a coin initially intended for gifting and parties, .You mine this to gift people, in IRC rooms or Chat rooms."
  },
  {
    "name": "Cthulhu Offerings",
    "type": "crypto",
    "logo": LogoCthulhuOfferings,
    "url": "https://twitter.com/cthulhuoff",
    "description": "Cthulhu Offerings (OFF) is a cryptocurrency . Users are able to generate OFF through the process of mining."
  },
  {
    "name": "Coinye",
    "type": "crypto",
    "logo": LogoCoinye,
    "url": "https://en.wikipedia.org/wiki/Coinye",
    "description": "Coinye, formerly Coinye West, is scrypt-based cryptocurrency that was issued cease and desist letters for using the likeness of American hip hop artist Kanye West as its mascot, despite West having no affiliation with the project."
  },
  {
    "name": "Quasar",
    "type": "js",
    "logo": LogoQuasar,
    "url": "https://quasar.dev/",
    "description": "Effortlessly build high-performance & high-quality Vue.js 3 user interfaces in record time"
  },
  {
    "name": "Sentinel",
    "type": "js",
    "logo": LogoSentinel,
    "url": "https://github.com/muicss/sentineljs",
    "description": "SentinelJS is a tiny JavaScript library that lets you detect new DOM nodes using CSS selectors."
  }
];
