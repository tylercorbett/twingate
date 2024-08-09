"use client";
import { isValidJSON } from "@/utils/isValidJSON";
import React, { useState, useEffect } from "react";
import HeroImage from "./components/Content/HeroImage";

export default function Home() {
  const [hasError, setHasError] = useState<boolean>(false);
  const [jsonText, setJsonText] = useState<string>("");

  // Effect to check JSON validity on every change
  useEffect(() => {
    if (jsonText === "") setHasError(false);
    else {
      setHasError(!isValidJSON(jsonText));
    }
  }, [jsonText]);

  return (
    <main className="h-screen overflow-hidden">
      <div className="flex h-full p-4 gap-4">
        {/* Left Side: JSON Textarea */}
        <div className="w-1/2 h-screen">
          <textarea
            className={`w-full h-full p-4 border ${
              hasError ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 ${
              hasError ? "focus:ring-red-500" : "focus:ring-blue-500"
            } resize-none`}
            placeholder="Type your JSON here..."
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
          ></textarea>
        </div>

        {/* Right Side: Content Area with Border */}
        <div className=" w-1/2 h-screen overflow-y-auto px-4 border-4 border-gray-400 flex flex-col justify-start gap-4">
          {hasError ? (
            <p className="text-red-500 font-bold">
              Invalid JSON format. Please check your input.
            </p>
          ) : (
            <>
              <HeroImage imageURI="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg" />
              <HeroImage imageURI="https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J" />
              {/* <HeroImage imageURI="https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J" />
              <HeroImage imageURI="https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J" />
              <HeroImage imageURI="https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J" />
              <HeroImage imageURI="https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J" /> */}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
