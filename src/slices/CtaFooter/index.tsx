import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next/pages";

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
      className="mx-24 mt-12 relative overflow-hidden bg-red-600 rounded-xl pt-4 px-4 flex"
    >
      <div>
          <div className="flex gap-3 mb-2 m-4">
          <div className="w-1 bg-white rounded" />
          <div>
            {/* TÍTULO */}
            <PrismicRichText
              field={slice.primary.title}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-white font-black text-4xl">
                    {children}
                  </p>
                ),
              }}
            />

            {/* SUBÍTULO */}
            <PrismicRichText field={slice.primary.sub}  components={{
                paragraph: ({ children }) => (
                  <p className="text-white text-2xl">
                    {children}
                  </p>
                ),
              }}
              />
          </div>
        </div>

        {/* FORMULÁRIO DE CONTATO */}
        <form
          className="p-4 w-lg rounded-lg space-y-4 mx-auto block"
        >
          <input
            name="name"
            placeholder="Nome"
            required
            className="w-full p-4 shadow bg-white text-gray-600 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            className="w-full p-4 shadow bg-white text-gray-600 rounded"
          />

          <input
            name="message"
            placeholder="Número"
            required
            className="w-full p-4 shadow bg-white text-gray-600 rounded"
          />

          <button
            type="submit"
            className="bg-white text-red-600 font-bold px-10 py-2 rounded mx-auto block hover:drop-shadow-2xl transition"
          >
            Enviar
          </button>
        </form>

        {/* BOTÕES DE REDES SOCIAIS */}
        <div className="p-4 flex justify-between">
          {slice.primary.socials.map((item, index) => (
          <PrismicNextLink key={index} field={item.socials_link} >
            <PrismicNextImage field={item.image} className="w-10 m-6 text-white"/>
          </PrismicNextLink>
        ))}
        </div>
      </div>
      <img src="/ctaimage.png" alt="Programador" className="absolute right-20 top-0 rounded-lg"/>
    </section>
  );
};

export default CtaFooter;
