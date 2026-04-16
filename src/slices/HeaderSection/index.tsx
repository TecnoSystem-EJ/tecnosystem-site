// Flow
import React from "react";
//  Prismic
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
//  Components
import List from "@/components/List";
import TextCard from "@/components/TextCard";
import Button from "@/components/Button";
/**
 * Props for HeaderSection.
 */
export type HeaderSectionProps = SliceComponentProps<any>;
/**
 * Component for "HeaderSection" Slices.
 */

const HeaderSection = ({ slice }: HeaderSectionProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col gap-8 md:gap-16 mb-8 md:mb-16 px-6 md:px-24"
    >
      <header className="flex flex-col gap-y-5">
        <div>
          <h2 className="text-xl md:text-2xl font-primary text-primary-main my-3 lg:text-3xl">
            {slice.primary.company_name}
          </h2>
          <div className="text-3xl md:text-5xl lg:text-6xl font-primary leading-tight">
            <PrismicRichText
              field={slice.primary.sub_title}
              components={{
                strong: ({ children }) => (
                  <span className="text-primary-main font-bold">
                    {children}
                  </span>
                ),
              }}
            />
          </div>
        </div>

        <ul className="flex flex-col gap-2">
          {slice.items.map((item: any, index: number) => (
            <List key={index} text={item.topics} />
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button
            href={slice.primary.button_link_1}
            styles="primary"
            name={slice.primary.button_text_1}
          />
          <Button
            href={slice.primary.button_link_2}
            styles="secondary"
            name={slice.primary.button_text_2}
          />
        </div>
      </header>

      <div className="flex flex-col gap-y-8">
        <TextCard
          title={slice.primary.text_card_title}
          subtitle={slice.primary.text_card_subtitle}
        />
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap lg:flex-nowrap justify-between mb-8">
        <PrismicNextImage
          field={slice.primary.image_1}
          className="w-full md:w-[48%] lg:w-[32%] h-auto object-cover rounded-lg"
        />
        <PrismicNextImage
          field={slice.primary.image_2}
          className="w-full md:w-[48%] lg:w-[32%] h-auto object-cover rounded-lg"
        />
        <PrismicNextImage
          field={slice.primary.image_3}
          className="w-full md:w-[48%] lg:w-[32%] h-auto object-cover rounded-lg hidden md:block"
        />
      </div>
    </section>
  );
};

export default HeaderSection;
