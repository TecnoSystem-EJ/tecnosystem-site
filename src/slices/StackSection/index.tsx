import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type StackSectionProps = SliceComponentProps<any>;

const StackSection = ({ slice }: StackSectionProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12 md:py-20 bg-gray-100"
    >
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        {/* Título */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-stretch gap-4">
            <div className="w-1.5 bg-red-600 rounded-full"></div>

            <div className="max-w-[90%]">
              <div className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                <PrismicRichText field={slice.primary.title} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {slice.items.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-red-600 text-white p-6 md:p-8 rounded-xl shadow-md md:hover:scale-105 transition duration-300 flex flex-col items-start"
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

              <h3 className="text-lg md:text-xl font-bold mb-2">{item.tech_name}</h3>

              <div className="text-sm text-red-100 leading-relaxed">
                <p>
                  Lorem ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;