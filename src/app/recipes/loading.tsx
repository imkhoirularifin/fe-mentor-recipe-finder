export default function RecipesLoading() {
  return (
    <div className="mx-auto max-w-7xl px-200 md:px-250">
      {/* Filter skeleton */}
      <div className="py-300">
        <div className="flex flex-col gap-200 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-200">
            <div className="h-10 w-32 bg-x-neutral-300 rounded-8 animate-pulse" />
            <div className="h-10 w-32 bg-x-neutral-300 rounded-8 animate-pulse" />
          </div>
          <div className="h-10 w-full md:w-80 bg-x-neutral-300 rounded-8 animate-pulse" />
        </div>
      </div>

      {/* Recipe cards skeleton */}
      <div className="grid gap-300 md:grid-cols-2 lg:grid-cols-3 pb-400">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="rounded-12 bg-x-neutral-300 aspect-[4/3] mb-200" />
            <div className="space-y-100">
              <div className="h-6 bg-x-neutral-300 rounded" />
              <div className="h-4 bg-x-neutral-300 rounded w-3/4" />
              <div className="flex gap-200">
                <div className="h-4 bg-x-neutral-300 rounded w-20" />
                <div className="h-4 bg-x-neutral-300 rounded w-20" />
                <div className="h-4 bg-x-neutral-300 rounded w-20" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}