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
  return (
    <a className={classes} onClick={() => smoothScrollTo(scrollToId)}>
      {textContent}
    </a>
  );
};
