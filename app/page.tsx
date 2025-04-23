"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import {
  AIHeroSection,
  ProductFeatureSection,
  DataCenterSection,
  DeveloperResourcesSection,
  AISimplifySection,
} from "@/components/intel-sections";

export default function Home() {
  useEffect(() => {
    const debugMode = false; // Toggle to true if you want to debug theme switching

    if (debugMode) {
      document.documentElement.classList.add("debug-theme");

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "class" || mutation.attributeName === "data-theme") {
            console.log("Theme changed:", document.documentElement.className);
          }
        });
      });

      observer.observe(document.documentElement, { attributes: true });

      return () => {
        observer.disconnect();
        document.documentElement.classList.remove("debug-theme");
      };
    }
  }, []);

  return (
    <main className="bg-white dark:bg-black">
      <Navbar />
      <AIHeroSection />
      <ProductFeatureSection />
      <DataCenterSection />
      <DeveloperResourcesSection />
    </main>
  );
}
