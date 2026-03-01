import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type StackSectionProps = SliceComponentProps<Content.StackSectionSlice>;

const StackSection = ({ slice }: StackSectionProps) => {
  return (
    <section 
      data-slice-type={slice.slice_type} 
      data-slice-variation={slice.variation} 
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <PrismicRichText field={slice.primary.title} />
          </div>
        </div>

        {/* Grelha de Tecnologias */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {slice.items.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 w-full border border-gray-100"
            >
              {/* Logótipo da Tecnologia */}
              <div className="w-16 h-16 relative mb-4">
                <PrismicNextImage 
                  field={item.tech_image} 
                  fallbackAlt=""
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Nome da Tecnologia */}
              <span className="text-gray-700 font-semibold text-center">
                {item.tech_name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;