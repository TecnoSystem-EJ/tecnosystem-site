import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

export type TestimonialSectionProps = SliceComponentProps<Content.TestimonialSectionSlice>;

const TestimonialSection = ({ slice }: TestimonialSectionProps) => {
  return (
    <section 
      data-slice-type={slice.slice_type} 
      data-slice-variation={slice.variation} 
      className="py-16 bg-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <PrismicRichText field={slice.primary.title} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slice.items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow p-8 relative border border-gray-100"
            >
              {/* Ícone de Aspas (Opcional, dá um toque de design) */}
              <div className="text-blue-200 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              
              <div className="text-gray-600 italic mb-6">
                <PrismicRichText field={item.testimonial_text} />
              </div>
              <h4 className="font-bold text-gray-900">
                - {item.client_name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;