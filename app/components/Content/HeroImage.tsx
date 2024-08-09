"use client";

import React from "react";
import Image from "next/image";

export interface Props {
  imageURI: string;
}

export default function HeroImage({ imageURI }: Props) {
  return (
    <div className="relative w-full p-2">
      <img src={imageURI} />
    </div>
  );
}
