import { FC } from 'react';
import { DestinationTabsObjectProps } from '../constants/destination.constants';

const DestinationTabs: FC<DestinationTabsProps> = ({ currentTab }) => {
  const { title, description, averageDistance, etaTravelTime } = currentTab;

  return (
    <li className="relative rounded-md">
      <h2 className="font-display text-[56px] uppercase text-white">{title}</h2>

      <p className="mb-8 font-body text-lavender-blue">{description}</p>

      <div className="mb-8 h-[1px] w-full bg-spanish-gray" />

      <div className="mb-8 uppercase">
        <h3 className="mb-3 font-body  tracking-[2.36px] text-lavender-blue">
          Avg. Distance
        </h3>
        <p className="font-display text-[28px] text-white">{averageDistance}</p>
      </div>

      <div className="uppercase">
        <h3 className="mb-3 font-body  tracking-[2.36px] text-lavender-blue">
          Est. travel time
        </h3>
        <p className="font-display text-[28px] text-white">{etaTravelTime}</p>
      </div>
    </li>
  );
};

type DestinationTabsProps = {
  currentTab: DestinationTabsObjectProps;
};

export default DestinationTabs;
