"use client";
import { isValidJSON } from "@/utils/isValidJSON";
import React, { useState, useEffect } from "react";
import Content from "./components/Content/Content";

export default function Home() {
  const [hasError, setHasError] = useState<boolean>(false);
  const [jsonText, setJsonText] = useState<string>("");

  useEffect(() => {
    setHasError(!isValidJSON(jsonText));
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
        <div className=" w-1/2 h-screen overflow-y-auto px-4 py-2 border-4 border-gray-400">
          {hasError ? (
            <p className="text-red-500 font-bold">
              Invalid JSON format. Please check your input.
            </p>
          ) : (
            <Content json={jsonText} />
          )}
        </div>
      </div>
    </main>
  );
}
