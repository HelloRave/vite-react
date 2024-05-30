import Logo from '@/assets/logo.svg?react';

export default function Dashboard() {
  return (
    <div className="relative">
      <img
        src={'/images/banner-1.png'}
        className="h-auto w-full"
        alt="banner"
      />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-3">
        <Logo className="text-white" />
        <h1 className="text-center font-dessau-medium text-white">
          Collate and curate manga as a community
        </h1>
      </div>
    </div>
  );
}
