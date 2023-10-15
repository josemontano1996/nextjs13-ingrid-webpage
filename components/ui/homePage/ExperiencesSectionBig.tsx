import { FC } from "react";
import NextLink from "next/link";
import { Img } from "../Img";

export const ExperiencesSectionBig: FC = () => {
  return (
    <section id="experiences">
      <h2 className="mt-12 mb-8 text-center">The Experience</h2>
      <div className="centering grid grid-cols-2 items-center gap-8  sm:grid-cols-1 sm:text-center">
        <div>
          <h3>Chef-curated food delivered to you</h3>
          <p className="my-6 text-sm">
            Indulge in a delightful culinary experience from the comfort of your
            own home with Ingrid{`'`}s exclusive food delivery service.
            Experience the magic of having a skilled chef prepare and deliver
            exquisite, handcrafted meals right to your doorstep.
          </p>

          <div className="text-center">
            <NextLink href="/menu" className="btn">
              Check the Menu
            </NextLink>
          </div>
        </div>
        <div>
          <Img
            url="https://res.cloudinary.com/dfupfbnez/image/upload/v1684227502/ingrid-chef-webpage/focaccia-min-min-min_bsfnup.jpg"
            optimized={false}
            altText="Hero-Image"
          />
        </div>
        <div>
          <Img
            url="https://res.cloudinary.com/dfupfbnez/image/upload/v1684226733/ingrid-chef-webpage/chef-min_ozt35l.jpg"
            optimized={false}
            altText="Hero-Image"
          />
        </div>
        <div>
          <h3>Private chef for your favourite events</h3>
          <p className="my-6 text-sm">
            Ingrid offers a private chef service that caters to a range of
            events, including weddings, birthdays, and company meals. From
            intimate gatherings to large celebrations, she provides a
            personalized culinary experience that is tailored to your tastes and
            preferences.
          </p>

          <div className="text-center">
            <NextLink href="/services" className="btn">
              Book an Event
            </NextLink>
          </div>
        </div>

        <div>
          <h3>Cooking Classes and Demonstrations</h3>
          <p className="my-6 text-sm">
            Meet Chef DArconso, a culinary virtuoso with over 25 years of
            culinary expertise. Her journey in the world of gastronomy has been
            nothing short of extraordinary. Having honed her skills in the most
            prestigious kitchens around the globe, she now stands at the
            threshold of a new culinary adventure.
          </p>

          <div className="text-center">
            <NextLink href="/services" className="btn">
              Book a Workshop
            </NextLink>
          </div>
        </div>
        <div>
          <Img
            url="https://res.cloudinary.com/dfupfbnez/image/upload/v1684227649/ingrid-chef-webpage/private-lessons-min-min_gtzge6.jpg"
            widthMeasure="100%"
            optimized={false}
            altText="Hero-Image"
          />
        </div>
      </div>
    </section>
  );
};
