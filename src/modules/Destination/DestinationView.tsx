import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
import { DESTINATION_TABS } from './constants/destination.constants';

const DestinationView = () => {
  const [categories] = useState(DESTINATION_TABS);

  return (
    <div className="bg-main flex min-h-screen flex-col items-center bg-destination-mobile pt-[88px]">
      <div className="flex h-[384] w-[327px] flex-col items-center justify-between text-center">
        <h1 className="mb-8 font-title uppercase tracking-[2.7px] text-white">
          <span className="mr-[18px] font-bold text-charcoal">01</span> Pick
          your destination
        </h1>

        <div className="relative mb-[26px] h-[170px] w-[170px]">
          <Image
            src="/assets/destination/image-moon.png"
            alt="Moon Image"
            layout="fill"
            className="absolute"
          />
        </div>

        <Tab.Group>
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
            <Tab.Panel className={classNames()}>
              <ul>
                <li className="relative rounded-md">
                  <h2 className="font-display text-[56px] uppercase text-white">
                    Moon
                  </h2>

                  <p className="mb-8 font-body text-lavender-blue">
                    See our planet as you’ve never seen it before. A perfect
                    relaxing trip away to help regain perspective and come back
                    refreshed. While you’re there, take in some history by
                    visiting the Luna 2 and Apollo 11 landing sites.
                  </p>

                  <div className="mb-8 h-[1px] w-full bg-spanish-gray" />

                  <div className="mb-8 uppercase">
                    <h3 className="mb-3 font-body  tracking-[2.36px] text-lavender-blue">
                      Avg. Distance
                    </h3>
                    <p className="font-display text-[28px] text-white">
                      384,400 km
                    </p>
                  </div>

                  <div className="uppercase">
                    <h3 className="mb-3 font-body  tracking-[2.36px] text-lavender-blue">
                      Est. travel time
                    </h3>
                    <p className="font-display text-[28px] text-white">
                      3 days
                    </p>
                  </div>
                </li>
              </ul>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default DestinationView;
