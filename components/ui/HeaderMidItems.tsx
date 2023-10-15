"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { SmoothScrollLink } from "./SmoothScrollLink";

export const HeaderMidItems = () => {
  const path = usePathname();

  return (
    <>
      {path !== "/" ? (
        <div></div>
      ) : (
        <div className="flex min-w-vw40 justify-between gap-4 xs:gap-2 xxs:hidden">
          <h4>
            <SmoothScrollLink
              classes="italic hover:cursor-pointer hover:underline xs:text-base"
              textContent="The Chef"
              scrollToId="chef"
            />
          </h4>
          <h4>
            <SmoothScrollLink
              classes="italic mx-5 hover:cursor-pointer hover:underline xs:text-base"
              textContent="The Experience"
              scrollToId="experiences"
            />
          </h4>

          <h4>
            <NextLink
              href="/menu"
              className="italic hover:cursor-pointer hover:underline xs:text-base"
            >
              The Menu
            </NextLink>
          </h4>
        </div>
      )}
    </>
  );
};
