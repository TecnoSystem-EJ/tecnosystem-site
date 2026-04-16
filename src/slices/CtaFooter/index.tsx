"use client";

import { FC } from "react";
import Image from "next/image";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `CtaFooter`.
 */
export type CtaFooterProps = SliceComponentProps<Content.CtaFooterSlice>;

/**
 * Component for "CtaFooter" Slices.
 */
const CtaFooter: FC<CtaFooterProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mx-6 md:mx-24 mt-12 mb-12 relative overflow-hidden bg-red-600 rounded-2xl pt-8 px-6 md:px-12 flex flex-col lg:flex-row"
    >
      <div className="flex-1 z-10">
        <div className="flex gap-3 mb-6">
          <div className="w-1.5 bg-white rounded-full" />
          <div>
            {/* TÍTULO RESPONSIVO */}
            <PrismicRichText
              field={slice.primary.title}
              components={{
                paragraph: ({ children }) => (
                  <h2 className="text-white font-black text-2xl md:text-4xl leading-tight">
                    {children}
                  </h2>
                ),
              }}
            />

            {/* SUBTÍTULO RESPONSIVO */}
            <PrismicRichText 
              field={slice.primary.sub} 
              components={{
                paragraph: ({ children }) => (
                  <p className="text-white/90 text-lg md:text-2xl mt-2">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        </div>

        {/* FORMULÁRIO DE CONTATO */}
        <form
          className="w-full max-w-lg space-y-4 mb-8"
        >
          <input
            name="name"
            placeholder="Nome"
            required
            className="w-full p-4 shadow-sm bg-white text-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-red-400 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            className="w-full p-4 shadow-sm bg-white text-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-red-400 transition"
          />

          <input
            name="phone"
            placeholder="Número de Telefone"
            required
            className="w-full p-4 shadow-sm bg-white text-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-red-400 transition"
          />

          <button
            type="submit"
            className="w-full md:w-auto bg-white text-red-600 font-bold px-12 py-4 rounded-lg hover:bg-gray-100 transition-all active:scale-95 shadow-lg"
          >
            Enviar
          </button>
        </form>

        {/* BOTÕES DE REDES SOCIAIS */}
        <div className="flex flex-wrap gap-4 mb-8">
          {slice.primary.socials.map((item: any, index: number) => (
            <PrismicNextLink key={index} field={item.socials_link} className="hover:scale-110 transition-transform">
              <PrismicNextImage field={item.image} className="w-8 h-8 md:w-10 md:h-10 object-contain"/>
            </PrismicNextLink>
          ))}
        </div>
      </div>

      <div className="relative lg:absolute lg:right-10 lg:bottom-0 w-full lg:w-[450px] flex justify-center lg:block mt-6 lg:mt-0">
        <Image 
          src="/ctaimage.png" 
          alt="Programador" 
          width={400} 
          height={300} 
          className="rounded-t-lg lg:rounded-lg object-contain lg:object-cover"
        />
      </div>
    </section>
  );
};

export default CtaFooter;