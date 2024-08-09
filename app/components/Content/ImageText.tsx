"use client";

import React from "react";

export interface Props {
  imageURI: string;
  text: string;
  title?: string;
  leftToRight?: boolean;
}

export default function ImageText({
  imageURI,
  text,
  title,
  leftToRight = true,
}: Props) {
  return (
    <div
      className="p-4 border border-black overflow-hidden bg-white"
    >
      <div
        className={`flex overflow-hidden p-3 gap-2 h-full ${
          leftToRight ? "flex-row" : "flex-row-reverse"
        } items-center max-h-40 `}
      >
        <div className="w-[25%] aspect-square">
          <img
            src={imageURI}
            alt={title || "Image"}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="ml-4 w-[75%] flex flex-col justify-start h-full overflow-hidden">
          {title && <h3 className="font-bold text-lg mb-2">{title}</h3>}
          <p className="text-gray-700 overflow-hidden leading-tight text-ellipsis-line max-h-28">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
