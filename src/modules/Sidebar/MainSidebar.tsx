import Image from 'next/image';

const MainSidebar = () => {
  return (
    <div className="flex w-screen justify-center p-6">
      <div className="flex w-[327px] items-center justify-between">
        <Image
          src="/assets/shared/logo.svg"
          alt="Space Logo"
          layout="fixed"
          width={40}
          height={40}
        />

        <Image
          src="/assets/shared/icon-hamburger.svg"
          alt="Hamburguer Icon"
          layout="fixed"
          width={24}
          height={21}
        />
      </div>
    </div>
  );
};

export default MainSidebar;
