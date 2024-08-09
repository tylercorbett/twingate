"use client";

import React, { useState, useEffect } from "react";
import HeroImage from "./HeroImage";
import ImageText from "./ImageText";
import Data from "./Data";

interface Props {
  json: string;
}

export default function Content({ json }: Props) {
  const [contentArray, setContentArray] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const parsedJson = JSON.parse(json);

      // Check if parsedJson is an array
      if (Array.isArray(parsedJson)) {
        setContentArray(parsedJson);
      } else {
        throw new Error("JSON is not an array.");
      }
    } catch (e) {
      setError("Invalid JSON input or JSON is not an array.");
      console.error("JSON parsing error:", e);
    }
  }, [json]);

  const renderContent = (item: any) => {
    switch (item.type) {
      case "hero":
        return <HeroImage key={item.imageURI} {...item} />;
      case "imageText":
        return <ImageText key={item.imageURI} {...item} />;
      case "data":
        return <Data key={item.url} {...item} />;
      default:
        return null;
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>{contentArray.map((item) => renderContent(item))}</div>;
}
