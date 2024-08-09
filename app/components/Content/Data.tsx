"use client";

import React, { useState, useEffect } from "react";

export interface Props {
  url: string;
}

export default function Data({ url }: Props) {
  const [data, setData] = useState<string>("Loading...");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.text(); // Assuming the response is in text format
      setData(result);
    } catch (error) {
      setData("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <div className="relative w-full p-4 border border-black flex max-h-40">
      <div className="mr-4">
        <button
          onClick={fetchData}
          className="p-2 bg-blue-500 text-white rounded"
          disabled={loading}
        >
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>
      <div className="flex-grow overflow-hidden flex items-center justify-center">
        {loading ? (
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        ) : (
          <pre className="whitespace-pre-wrap overflow-hidden text-ellipsis max-h-40">
            {data}
          </pre>
        )}
      </div>
    </div>
  );
}
