export const smoothScrollTo = (id: string): void => {
  console.log(id);
  const scrollSection = document.getElementById(id);
  console.log(scrollSection);
  const header = document.querySelector("header");
  const offset = header ? header.clientHeight : 70;
  const targetPosition = scrollSection!.offsetTop - offset;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
};
