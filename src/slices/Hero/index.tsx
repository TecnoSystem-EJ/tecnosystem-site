import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
       className="mx-6 md:mx-24 mb-10 mt-10"
    >
      <PrismicRichText 
        field={slice.primary.nome_da_empresa} 
        components={{
          heading3: ({ children }) => (
            <h3 className="text-xl md:text-3xl mb-2 font-black text-red-600 font-righteous">
              {children}
            </h3>
          ),
        }}
      />

      <PrismicRichText
        field={slice.primary.hero_text}
        components={{
          heading1: ({ children }) => (
            <h1 className="text-4xl md:text-8xl font-righteous font-bold mb-4 text-black leading-tight">
              {children}
            </h1>
          ),
          strong: ({ children }) => (
            <span className="text-red-600">{children}</span>
          ),
        }}
      />

      <div className="space-y-3">
        {slice.primary.topicos_hero.map((item: any, index: number) => (
          <div key={index} className="flex gap-2 items-start">
            <i className="bi bi-check-circle-fill text-base md:text-lg text-red-600 mt-1"></i>
            <PrismicRichText
              field={item.texto}
              components={{
                paragraph: ({ children }) => (
                  <p className="uppercase text-sm md:text-lg leading-relaxed">{children}</p>
                ),
              }}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-3 mt-8 text-center">
        <PrismicNextLink 
          field={slice.primary.button_contate} 
          className="p-3 px-6 bg-red-600 text-white rounded-md font-bold text-lg md:text-xl transition-transform active:scale-95" 
        />
        <PrismicNextLink 
          field={slice.primary.button_saibamais} 
          className="p-3 px-6 border border-red-600 text-red-600 rounded-md font-bold text-lg md:text-xl transition-transform active:scale-95" 
        />
      </div>
    </section>
  );
};

export default Hero;