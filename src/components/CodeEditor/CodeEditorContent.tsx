"use client";

import React from "react";
import { CodeEditor } from "./CodeEditor";

export const CodeEditorContent = () => {
  return (
    <div className="relative w-full h-full polka flex items-center">
      <div className="w-full h-full flex items-center justify-center">
        <CodeEditor />
      </div>
    </div>
  );
};

