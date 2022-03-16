import Image from 'next/image';
import { PLANET_IMAGES } from '../constants/planets-images.constants';

const useCurrentPlanetImage = (index: number) => {
  const { src, alt } = PLANET_IMAGES[index];

  return <Image src={src} alt={alt} layout="fill" className="absolute" />;
};

export default useCurrentPlanetImage;
