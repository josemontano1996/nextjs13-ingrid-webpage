"use client";

import { useContext } from "react";
import { UIContext } from "@/context/ui/UIContext";
import { ExperiencesSectionSmall } from "./ExperiencesSectionSmall";
import { ExperiencesSectionBig } from "./ExperiencesSectionBig";


export const ExperiencesSection = () => {
  const { isSmallScreen } = useContext(UIContext);
  return (
    <>
      {isSmallScreen ? <ExperiencesSectionSmall /> : <ExperiencesSectionBig />}
    </>
  );
};
