"use client";

import React from "react";

interface MaxContentItem {
  children: React.ReactNode;
  className?: string;
  title: string;
}

export const MaxContentItem = ({ children, title }: MaxContentItem) => {
  return (
    <div className="w-[246px] h-max">
      <div className="relative flex items-center h-12 justify-start overflow-hidden w-full flex-shrink-0">
        <span className="text-white text-sm font-semibold">{title}</span>
      </div>
      {children}
    </div>
  );
};