import { Tab } from '@headlessui/react';
import DestinationTabs from '@modules/Destination/components/DestinationTabs';
import { DESTINATION_TABS } from '@modules/Destination/constants/destination.constants';
import useCurrentPlanetImage from '@modules/Destination/hooks/useCurrentPlanetImage';
import classNames from 'classnames';
import { useState } from 'react';

const CrewView = () => {
  const [categories] = useState(DESTINATION_TABS);
  const [currentPlanet, setCurrentPlanet] = useState(1);

  const CurrentPlanetImage = useCurrentPlanetImage(currentPlanet);

  return (
    <div className="bg-main flex min-h-screen flex-col items-center bg-crew-mobile pt-[88px]">
      <div className="flex h-[384] w-[327px] flex-col items-center justify-between text-center">
        <h1 className="mb-8 font-title uppercase tracking-[2.7px] text-white">
          <span className="mr-[18px] font-bold text-charcoal">03</span> Meet
          your crew
        </h1>

        <div className="relative mb-[26px] h-[170px] w-[170px]">
          {CurrentPlanetImage}
        </div>

        <Tab.Group onChange={index => setCurrentPlanet(index)}>
          <Tab.List>
            {Object.keys(categories).map(category => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    { 'border-b-2 border-solid border-white': selected },
                    'mr-[26px] py-2 font-title font-normal tracking-[2.36px] text-white transition delay-150 ease-in-out last:mr-0'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((category, index) => (
              <Tab.Panel key={`tab-${index}`} className={classNames()}>
                <ul>
                  {category.map((tab, index) => (
                    <DestinationTabs
                      key={`current-tab-${index}`}
                      currentTab={tab}
                    />
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default CrewView;
