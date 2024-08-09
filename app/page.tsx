"use client";
import { isValidJSON } from "@/utils/isValidJSON";
import React, { useState, useEffect } from "react";

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
    <main className="min-h-screen p-8">
      <div className="flex h-full">
        {/* Left Side: JSON Textarea */}
        <div className="w-1/2 p-4 h-screen">
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
        <div className="w-1/2 p-4 flex items-center justify-center">
          <div className="w-full h-full border-4 border-gray-400 flex items-center justify-center">
            {hasError ? (
              <p className="text-red-500 font-bold">
                Invalid JSON format. Please check your input.
              </p>
            ) : (
              <p>working content here</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
