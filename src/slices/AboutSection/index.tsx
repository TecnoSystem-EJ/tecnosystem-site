import React from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import TextCardRight from "@/components/TextCardRight";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `AboutSection`.
 */
export type AboutSectionProps = SliceComponentProps<any>;

/**
 * Component for "AboutSection" Slices.
 */
const AboutSection = ({ slice }: AboutSectionProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col w-full gap-8 md:gap-16 mb-8 md:mb-16 bg-red-600 text-white py-12 px-6 md:px-24"
    >
      {/* Título Visível apenas no Mobile */}
      <h2 className="text-2xl md:text-3xl font-bold mb-2 lg:hidden leading-tight">
        {slice.primary.company_name}
      </h2>

      <div className="flex flex-col lg:flex-row lg:gap-16 lg:items-center">
        <div className="flex rounded-2xl overflow-hidden mb-6 lg:mb-0 lg:flex-1 max-h-[300px] md:max-h-[430px]">
          <PrismicNextImage
            field={slice.primary.company_image}
            className="w-full h-full object-cover"
            fallbackAlt=""
          />
        </div>

        <div className="flex flex-col flex-1 gap-6 lg:items-end">
          {/* Card de Texto visível apenas no Desktop */}
          <div className="hidden lg:flex">
            <TextCardRight
              title={slice.primary.paragraph_text_card_title}
              subtitle={slice.primary.paragraph_text_card_subtitle}
            />
          </div>

          {/* Texto Principal com PrismicRichText */}
          <div className="prose prose-invert max-w-none">
            <PrismicRichText
              field={slice.primary.text}
              components={{
                paragraph: ({ children }) => (
                  <p className="font-secondary text-base md:text-lg font-light leading-relaxed text-justify md:text-right">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;