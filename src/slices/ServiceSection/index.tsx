import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

export type ServiceSectionProps = SliceComponentProps<any>;

const ServiceSection = ({ slice }: ServiceSectionProps) => {
  return (
    <section 
      data-slice-type={slice.slice_type} 
      data-slice-variation={slice.variation} 
      className="py-10 md:py-16 bg-gray-50"
    >
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="text-center mb-10 md:mb-12">
          <div className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            <PrismicRichText field={slice.primary.title} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {slice.items.map((item: any, index: number) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-4">
                {item.service_name}
              </h3>
              <div className="text-gray-600 text-sm md:text-base leading-relaxed">
                <PrismicRichText field={item.service_description} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;