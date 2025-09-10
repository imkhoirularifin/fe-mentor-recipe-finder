"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function RecipesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Recipes page error:", error);
  }, [error]);

  return (
    <div className="mx-auto max-w-7xl px-200 py-400 text-center md:px-250">
      <div className="mx-auto max-w-md">
        <div className="text-preset-2 text-x-neutral-900 mb-200">
          Something went wrong!
        </div>

        <div className="text-preset-7 text-x-neutral-500 mb-300">
          {error.message || "Failed to load recipes. Please try again."}
        </div>

        <Button onClick={reset} className="mx-auto">
          Try again
        </Button>
      </div>
    </div>
  );
}
