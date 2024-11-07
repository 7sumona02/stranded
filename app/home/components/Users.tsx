"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "/b1.png"
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "/b1.png"
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "/b1.png"
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "/b1.png"
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "/b1.png"
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "/b1.png",
  },
];

export function Users() {
  return (
    <div className="flex flex-row  w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
