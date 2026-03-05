"use client";
import React, { useEffect, useRef } from "react";

const TRUSTINDEX_SRC =
  "https://cdn.trustindex.io/loader.js?db0a4ff66ff9442cfa966285511";

export default function TestimonialSection() {
  const widgetMountRef = useRef(null);

  useEffect(() => {
    if (!widgetMountRef.current) return;

    // Mount the Trustindex loader at this exact spot instead of globally.
    widgetMountRef.current.innerHTML = "";
    const script = document.createElement("script");
    script.src = TRUSTINDEX_SRC;
    script.defer = true;
    script.async = true;
    widgetMountRef.current.appendChild(script);

    return () => {
      if (widgetMountRef.current) {
        widgetMountRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <section className="p-4 py-16 md:p-10 lg:p-20 bg-white">
      <div className="">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-black mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Happy Customers
            </span>{" "}
          </h3>
          <p className="text-black max-w-2xl mx-auto text-lg">
            Real reviews from customers across Calgary and nearby areas.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full rounded-3xl bg-white p-6 shadow-xl">
            <div ref={widgetMountRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
