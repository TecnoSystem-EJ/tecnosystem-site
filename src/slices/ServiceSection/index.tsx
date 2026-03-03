import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

export type ServiceSectionProps = SliceComponentProps<any>;

const ServiceSection = ({ slice }: ServiceSectionProps) => {
  return (
    <section 
      data-slice-type={slice.slice_type} 
      data-slice-variation={slice.variation} 
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          {/* Renderiza o título principal da secção */}
          <div className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <PrismicRichText field={slice.primary.title} />
          </div>
        </div>

        {/* Grelha de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slice.items.map((item: any, index: number) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {item.service_name}
              </h3>
              <div className="text-gray-600 leading-relaxed">
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