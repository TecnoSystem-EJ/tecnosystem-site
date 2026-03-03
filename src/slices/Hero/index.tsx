import { Children, FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next/pages";

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
      className="mr-24 ml-24 mb-10"
    > 
    {/* Nome da Empresa */}
      <PrismicRichText field={slice.primary.nome_da_empresa} components={{
        heading3: ({ children }) => <h3 className="text-3xl mb-2 font-black text-red-600 font-righteous">{children}</h3>,
      }}/> 

      {/* Títlo do Hero */}
      <PrismicRichText
        field={slice.primary.hero_text}
        components={{
          heading1: ({ children }) => (
            <h1 className="text-8xl font-righteous font-bold mb-4 text-black">
              {children}
            </h1>
          ),
          strong: ({ children }) => (
            <span className="text-red-600">{children}</span>
          ),
        }}
      />


      {/* Tópicos de Subtítulo */}
      {slice.primary.topicos_hero.map((item, index) => (
        <div key={index} className="flex gap-2 items-start">
          <i className="bi bi-check-circle-fill text-lg text-red-600"></i>
          <PrismicRichText
            field={item.texto}
            components={{
              paragraph: ({ children }) => (
                <p className="uppercase text-lg">{children}</p>
              ),
            }}
          />
        </div>
      ))}


      {/* botão contate-nos */}
      <div className="flex gap-2 mt-6 text-md text-xl font-bold text-white">
      <PrismicNextLink field={slice.primary.button_contate} className="p-3 pr-4 pl-4 bg-red-600 rounded-md" />
      <PrismicNextLink field={slice.primary.button_saibamais} className="p-3 pr-4 pl-4 border border-red-600 text-red-600 rounded-md" />
      </div>
    </section>
  );
};

export default Hero;
