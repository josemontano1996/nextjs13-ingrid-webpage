"use client";

import { UIContext } from "@/context/ui/UIContext";
import { useContext } from "react";

export const SideMenuHamburger = () => {
  const { toggleSideMenu } = useContext(UIContext);
  return (
    <div onClick={toggleSideMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.7"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
};
