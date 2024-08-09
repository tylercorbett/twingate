"use client";

import React from 'react';
import Image from 'next/image';

export interface Props {
  imageURI: string;
}

export default function HeroImage({ imageURI }: Props) {
  return (
    <div className="w-5/6 p-4"> {/* w-5/6 is 85% of the width */}
      <div className="relative w-full h-0 pb-[56.25%]"> {/* Aspect ratio box */}
        <Image
          src={imageURI}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
