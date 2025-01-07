"use client";
import React from "react";
import { TextRevealCard } from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Coming Soon"
        revealText="Coming Soon"
      ></TextRevealCard>
    </div>
  );
}
