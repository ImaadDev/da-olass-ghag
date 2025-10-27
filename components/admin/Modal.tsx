"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ title, children, onClose }: ModalProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
        <div className="bg-white shadow-lg max-w-lg w-full relative">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-gray-200 px-4 py-3">
            <h3 className="text-lg font-bold text-black">{title}</h3>
            <button
              className="p-1 hover:bg-red-600 hover:text-white  transition"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4">{children}</div>
        </div>
      </div>
    </>
  );
}
