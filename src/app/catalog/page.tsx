import { Suspense } from "react";
import CatalogSection from "../home/catalog"

// Loading component for Suspense fallback
function CatalogLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF5C77] mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading catalog...</p>
      </div>
    </div>
  );
}

export default function CakeShopPage() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <Suspense fallback={<CatalogLoading />}>
        <CatalogSection />
      </Suspense>
    </div>
  )
}