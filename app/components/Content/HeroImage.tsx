"use client";

import React from "react";

export interface Props {
  imageURI: string;
}

export default function HeroImage({ imageURI }: Props) {
  return (
    <div className="relative w-full p-2 border border-black">
      <img src={imageURI} />
    </div>
  );
}
