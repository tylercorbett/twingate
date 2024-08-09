"use client";

import React from "react";

export interface Props {
  imageURI: string;
}

export default function HeroImage({ imageURI }: Props) {
  return (
    <div className="w-full p-2 border border-black flex justify-center">
      <div className="w-5/6 h-48 relative">
        <img src={imageURI} alt="Hero" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
