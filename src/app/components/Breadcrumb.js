import React from "react";

export default function Breadcrumb({ name, subtitle }) {
  return (
    <div className="w-full py-16 bg-gradient-to-r from-primary to-secondary">
      <p className="text-4xl lg:text-5xl text-white font-bold text-center capitalize">
        {name}
      </p>
      {subtitle && (
        <p className="mt-4 text-center text-white/90 text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
