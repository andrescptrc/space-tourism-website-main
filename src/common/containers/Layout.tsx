import React, { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <div className="relative h-screen bg-rich-black-fogra-29">{children}</div>
  );
};

export default Layout;
