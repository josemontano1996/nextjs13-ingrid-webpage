import { Metadata } from "next";
import NextLink from "next/link";
import { Img } from "@/components/ui/Img";

import { SmoothScrollLink } from "@/components/ui/SmoothScrollLink";
import { ExperiencesSection } from "@/components/ui/homePage/ExperiencesSection";

export const metadata: Metadata = {
  title: "Home Page",
  description: `Chef d${`'`}Arconso Home page`,
};

export default function HomePage() {
  return (
    <>
      <div className="fadeIn bg-bgAlt pb-8 pt-4">
        <section className="centering grid grid-cols-2 items-center gap-8 sm:grid-cols-1 sm:text-center">
          <div>
            <h2>A healthy meal delivered to your door, every single day</h2>
            <h6 className="mb-6 mt-8">
              The smart 365-days-year food subscription that will make you eat
              healthy again. Tailored to your personal tastes and nutritional
              needs.
            </h6>
            <div className="flex items-center sm:justify-center xs:block">
              <div>
                <NextLink href="/menu" className={"btn mr-4  xs:mb-3 xs:mr-0"}>
                  Check our Menu
                </NextLink>
              </div>
              <div>
                <SmoothScrollLink
                  textContent="Learn more"
                  classes="btn-alt"
                  scrollToId="chef"
                />
              </div>
            </div>
          </div>
          <div>
            <Img
              url="https://res.cloudinary.com/dfupfbnez/image/upload/v1696712336/hero_ea7ibx.webp"
              optimized={false}
              altText="Hero-Image"
            />
          </div>
        </section>
      </div>
      <section id="chef">
        <h2 className="my-8 text-center">The Chef</h2>
        <div className="centering grid grid-cols-2 items-center gap-8 sm:grid-cols-1 sm:text-center">
          <div>
            <Img
              url="https://res.cloudinary.com/dfupfbnez/image/upload/v1696760817/pexels-miquel-ferran-gomez-figueroa-3814446_vunxq8.jpg"
              optimized={false}
              altText={`Chef d'Arconso image`}
            />
          </div>
          <div>
            <h3>Chef d{`'`}Arconso: A culinary journey</h3>
            <p className="mx-auto my-6">
              Meet Chef DArconso, a culinary virtuoso with over 25 years of
              culinary expertise. Her journey in the world of gastronomy has
              been nothing short of extraordinary. Having honed her skills in
              the most prestigious kitchens around the globe, she now stands at
              the threshold of a new culinary adventure.
            </p>

            <p className="mb-6 sm:hidden">
              Now, Chef DArconso embarks on a new standalone project, bringing
              her unparalleled passion and expertise directly to you. Her
              dedication to culinary excellence remains unwavering as she
              introduces a range of experiences on this webpage that reflect her
              commitment to culinary innovation and the art of food.
            </p>

            <div className="text-center">
              <SmoothScrollLink
                textContent={" Check my Instagram"}
                classes={"btn-alt"}
                scrollToId={"experiences"}
              />
            </div>
          </div>
        </div>
      </section>

      <ExperiencesSection />

      <section className="text-center">
        <h3 className="mt-8">Testimonies </h3>
        <div>
          <div className="mx-auto max-w-vw85 ">
            <h6>Culinary Delight at Its Finest!</h6>
            <p>
              Chef culinary expertise is a true revelation. The flavors in each
              dish are simply extraordinary. I get enough of the mouthwatering
              creations. Its a dining experience that will leave you craving for
              more. - Sarah W.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
