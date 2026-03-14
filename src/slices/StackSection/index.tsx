import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type StackSectionProps = SliceComponentProps<any>;

const StackSection = ({ slice }: StackSectionProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-20 bg-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Título */}
        <div className="mb-14">
          <div className="flex items-start gap-4">
            {/* Barra vermelha */}
            <div className="w-1 h-12 bg-red-600 rounded"></div>

            <div>
              <div className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                <PrismicRichText field={slice.primary.title} />
              </div>
            </div>
          </div>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {slice.items.map((item: any, index: number) => (
            <div
              key={index}
              className=" bg-red-600 text-white p-8 rounded-xl shadow-md hover:scale-105 transition duration-300"
            >
              {/* Ícone */}
              <div className="w-10 h-10 relative mb-4">
                <PrismicNextImage
                  field={item.tech_image}
                  fallbackAlt=""
                  fill
                  className="object-contain"
                />
              </div>

              {/* Título */}
              <h3 className="text-lg font-bold mb-2">{item.tech_name}</h3>

              {/* Texto */}
              <p className="text-sm text-red-100">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;
