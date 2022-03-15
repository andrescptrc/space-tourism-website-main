import { useRouter } from 'next/router';

const HomeView = () => {
  const router = useRouter();

  return (
    <div className="bg-main flex min-h-screen flex-col items-center justify-center bg-home-mobile">
      <div className="flex h-[384] w-[327px] flex-col justify-between text-center">
        <div>
          <h2 className="font-title uppercase text-lavender-blue">
            So, you want to travel to
          </h2>
          <h1 className="font-display text-[80px] uppercase text-white">
            Space
          </h1>
          <h2 className="font-body text-[15px] text-lavender-blue">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </h2>
        </div>
        <div className="mt-20 text-center">
          <button
            className="h-[150px] w-[150px] rounded-full bg-white"
            onClick={() => router.push('/destination')}
          >
            <span className="font-display text-xl uppercase">Explore</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
