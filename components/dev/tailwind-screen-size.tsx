'use client';

export function TailwindScreenSize() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[1000] flex flex-row justify-center p-3 ">
      <div className="relative flex h-12 flex-row items-center justify-between space-x-3 rounded-lg bg-slate-950/90 p-3 py-2.5 shadow-2xl shadow-slate-900/80 backdrop-blur-sm">
        <div className="flex items-center justify-center font-mono text-xs text-white">
          <div className="block sm:hidden">xs</div>
          <div className="hidden sm:block md:hidden">sm</div>
          <div className="hidden md:block lg:hidden">md</div>
          <div className="hidden lg:block xl:hidden">lg</div>
          <div className="hidden xl:block 2xl:hidden">xl</div>
          <div className="hidden 2xl:block">2xl</div>
        </div>

        {/*
        <div className="flex flex-row items-center space-x-2">
          <Button
            className="text-xs font-medium text-white"
            onClick={() => router.push('/settings')}
            variant="link"
          >
            Settings
          </Button>
          <Button
            className="text-xs font-medium text-white"
            onClick={() => router.push('/api/auth/logout')}
            variant="link"
          >
            Log out
          </Button>
        </div> */}
      </div>
    </div>
  );
}
