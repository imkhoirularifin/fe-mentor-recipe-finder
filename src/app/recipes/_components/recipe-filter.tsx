"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { useDebounce } from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';

export default function RecipeFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [maxPrepTime, setMaxPrepTime] = useState(searchParams.get('maxPrepTime') || '');
  const [maxCookTime, setMaxCookTime] = useState(searchParams.get('maxCookTime') || '');
  
  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    const params = new URLSearchParams();
    
    if (debouncedSearch) {
      params.set('search', debouncedSearch);
    }
    
    if (maxPrepTime) {
      params.set('maxPrepTime', maxPrepTime);
    }
    
    if (maxCookTime) {
      params.set('maxCookTime', maxCookTime);
    }
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    const currentUrl = `${window.location.pathname}${window.location.search}`;
    
    if (newUrl !== currentUrl) {
      router.replace(newUrl, { scroll: false });
    }
  }, [debouncedSearch, maxPrepTime, maxCookTime]);

  const timeOptions = [
    { value: '', label: 'Clear' },
    { value: '0', label: '0 minutes' },
    { value: '5', label: '5 minutes' },
    { value: '10', label: '10 minutes' },
    { value: '15', label: '15 minutes' },
    { value: '20', label: '20 minutes' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-200 py-300 md:px-250">
      <div className="flex flex-col gap-200 md:flex-row md:items-center md:justify-between">
        {/* Filter dropdowns */}
        <div className="flex gap-200">
          {/* Max Prep Time */}
          <div className="relative">
            <select
              value={maxPrepTime}
              onChange={(e) => setMaxPrepTime(e.target.value)}
              className="rounded-8 border border-x-neutral-300 bg-white px-200 py-150 text-preset-7 text-x-neutral-900 appearance-none pr-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            >
              <option value="">Max Prep Time</option>
              {timeOptions.filter(opt => opt.value !== '').map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-200 top-1/2 -translate-y-1/2">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Max Cook Time */}
          <div className="relative">
            <select
              value={maxCookTime}
              onChange={(e) => setMaxCookTime(e.target.value)}
              className="rounded-8 border border-x-neutral-300 bg-white px-200 py-150 text-preset-7 text-x-neutral-900 appearance-none pr-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            >
              <option value="">Max Cook Time</option>
              {timeOptions.filter(opt => opt.value !== '').map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-200 top-1/2 -translate-y-1/2">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-200 top-1/2 h-5 w-5 -translate-y-1/2 text-x-neutral-500" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or ingredient…"
            className="rounded-8 border border-x-neutral-300 bg-white pl-400 pr-200 py-150 text-preset-7 text-x-neutral-900 placeholder:text-x-neutral-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 w-full md:w-80"
            aria-label="Search recipes by name or ingredient"
          />
        </div>
      </div>
    </div>
  );
}
