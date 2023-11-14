import { FC } from "react";
import NextLink from "next/link";
import { Img } from "../Img";

export const ExperiencesSectionSmall: FC = () => {
  return (
    <div className="centering hidden text-center sm:block">
      <h2>The Experience</h2>
      <div>
        <h4 className="my-8">Chef-curated food delivered to you</h4>
        <div className="mx-auto">
          <Img
            url="https://res.cloudinary.com/dfupfbnez/image/upload/v1684227502/ingrid-chef-webpage/focaccia-min-min-min_bsfnup.jpg"
            optimized={false}
            widthMeasure="70%"
            altText="Hero-Image"
          />
        </div>
        <p className="my-5">
          Indulge in a delightful culinary experience from the comfort of your
          own home with Ingrid
          {`'`}s exclusive food delivery service. Experience the magic of having
          a skilled chef prepare and deliver exquisite, handcrafted meals right
          to your doorstep.
        </p>

        <div>
          <NextLink href="/menu" className="btn">
            Check the Menu
          </NextLink>
        </div>
      </div>

      <div>
        <h4 className="my-8">Private chef for your favourite events</h4>
        <div className="mx-auto">
          <Img
            url="https://res.cloudinary.com/dfupfbnez/image/upload/v1684226733/ingrid-chef-webpage/chef-min_ozt35l.jpg"
            optimized={false}
            altText="Hero-Image"
          />
        </div>
        <p className="my-5">
          Ingrid offers a private chef service that caters to a range of events,
          including weddings, birthdays, and company meals. From intimate
          gatherings to large celebrations, she provides a personalized culinary
          experience that is tailored to your tastes and preferences.
        </p>

        <div>
          <NextLink href="/services" className="btn">
            Book an Event
          </NextLink>
        </div>
      </div>

      <div>
        <h4 className="my-8">Cooking lessons and workshops</h4>
        <div className="mx-auto">
          <Img
            url="https://res.cloudinary.com/dfupfbnez/image/upload/v1684227649/ingrid-chef-webpage/private-lessons-min-min_gtzge6.jpg"
            widthMeasure="100%"
            optimized={false}
            altText="Hero-Image"
          />
        </div>
        <p className="my-5">
          Discover the art of culinary excellence with Ingrid{`'`}s immersive
          cooking classes and captivating demonstrations. Unleash your inner
          chef as you learn the secrets of Mediterranean cuisine under her
          expert guidance.
        </p>

        <div>
          <NextLink href="/services" className="btn">
            Book a Workshop
          </NextLink>
        </div>
      </div>
    </div>
  );
};
