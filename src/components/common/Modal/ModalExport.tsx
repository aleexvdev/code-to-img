"use client";

import { X } from 'lucide-react';
import React, { ReactNode } from 'react'

interface ModalExportProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const ModalExport:  React.FC<ModalExportProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-[#000000b2] bg-opacity-50">
      <div className="bg-[#1D1D1D] rounded-lg shadow-lg w-1/3 p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Export Image</h2>
          <button onClick={onClose} className='bg-[#333333] p-1 rounded-lg hover:bg-[#3c3c3c]'>
            <X size={18} color='white' />
          </button>
        </div>
        <div className="mt-4 min-h-56">
          {children}
        </div>
        <div className="mt-4 flex justify-center items-center w-full gap-5">
          <button onClick={onClose} className="w-1/2 bg-[#333333] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Close
          </button>
          <button onClick={onClose} className="w-1/2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Export
          </button>
        </div>
      </div>
    </div>
  );
}
