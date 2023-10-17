"use client";

import { smoothScrollTo } from "@/util/ui/smoothScroll";
import { FC } from "react";

interface Props {
  textContent: string;
  classes: string;
  scrollToId: string;
}

export const SmoothScrollLink: FC<Props> = ({
  textContent,
  classes,
  scrollToId,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent the default behavior of anchor element
    smoothScrollTo(scrollToId);
  };

  return (
    <a href={`#${scrollToId}`} className={classes} onClick={handleClick}>
      {textContent}
    </a>
  );
};
