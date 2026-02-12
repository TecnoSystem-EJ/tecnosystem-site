import React from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import TextCard from "@/components/TextCard";
import SliderComponent from "@/components/SliderComponent";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
/**
 * Props for `AboutSection`.
 */
export type AboutSectionProps = SliceComponentProps<Content.AboutSectionSlice>;

/**
 * Component for "AboutSection" Slices.
 */
const AboutSection = ({ slice }: AboutSectionProps) => {
  return (
    <section
      className="flex flex-col w-full gap-8 md:gap-16 mb-8 md:mb-16"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="text-3xl font-primary text-primary-main my-3 font-400 lg:hidden">
        {slice.primary.company_name}
      </h2>
      <div className="flex flex-col lg:flex-row lg:gap-10 lg:mb-8">
        <div className="hidden lg:flex rounded-2xl overflow-hidden lg:flex-1 lg:max-h-[430px] ">
          <PrismicNextImage
            field={slice.primary.company_image}
            height={650}
            width={600}
          />
        </div>
        <div className="flex flex-col flex-1 gap-4 lg:flex-1">
          <div className="hidden lg:flex ">
            <TextCard
              title={slice.primary.paragraph_text_card_title}
              subtitle={slice.primary.paragraph_text_card_subtitle}
            />
          </div>
          <PrismicRichText
            field={slice.primary.text}
            components={{
              paragraph: ({ children }) => (
                <p className="font-secondary text-black text-sm font-light lg:normal-case lg:text-base">
                  {children}
                </p>
              ),
            }}
          />
          <Image
            src="/images/line3.svg"
            alt="line"
            width={430}
            height={10}
            className="hidden lg:flex"
          />
        </div>
      </div>
      <TextCard
        title={slice.primary.text_card_title}
        subtitle={slice.primary.text_card_subtitle}
      />
      <SliderComponent cards={slice.items} />
    </section>
  );
};

export default AboutSection;
