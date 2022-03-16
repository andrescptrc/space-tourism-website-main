import Image from 'next/image';
import React, { useState } from 'react';

import { Tab } from '@headlessui/react';
import classNames from 'classnames';

const Destination = () => {
  const [categories] = useState({
    Moon: [
      {
        id: 1,
        title: 'Moon',
        description:
          'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        averageDistance: '384,400 km',
        etaTravelTime: '9 months'
      }
    ],
    Mars: [
      {
        id: 2,
        title: 'Mars',
        description:
          'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        averageDistance: '225 MIL. km',
        etaTravelTime: '9 months'
      }
    ],
    Europe: [
      {
        id: 3,
        title: 'Europe',
        description:
          'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        averageDistance: '628 MIL. km',
        etaTravelTime: '3 years'
      }
    ],
    Titan: [
      {
        id: 4,
        title: 'Titan',
        description:
          'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        averageDistance: '1.6 BIL. km',
        etaTravelTime: '7 years'
      }
    ]
  });

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
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-offset-blue-400 ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                <li className="hover:bg-coolGray-100 relative rounded-md p-3">
                  <h3 className="text-sm font-medium leading-5"></h3>
                  <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4"></ul>
                  <a
                    href="#"
                    className={classNames(
                      'absolute inset-0 rounded-md',
                      'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                    )}
                  />
                </li>
              </ul>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Destination;
