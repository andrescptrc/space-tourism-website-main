export const PLANET_IMAGES: PlanetImagesProps = {
  0: {
    src: '/assets/destination/image-moon.png',
    alt: 'Moon Image'
  },
  1: {
    src: '/assets/destination/image-mars.png',
    alt: 'Mars Image'
  },
  2: {
    src: '/assets/destination/image-europa.png',
    alt: 'Europe Image'
  },
  3: {
    src: '/assets/destination/image-titan.png',
    alt: 'Titan Image'
  }
};

type PlanetImagesProps = {
  [key: string]: {
    src: string;
    alt: string;
  };
};
