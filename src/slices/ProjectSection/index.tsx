import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type ProjectSectionProps = SliceComponentProps<any>;

const ProjectSection = ({ slice }: ProjectSectionProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-10 md:py-16 bg-red-600"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-end mb-8 md:mb-12">
          <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white border-r-4 md:border-r-8 border-white rounded pr-4 md:pr-5 max-w-[90%] md:max-w-full text-right">
            <PrismicRichText field={slice.primary.title} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {slice.items.map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 p-3 bg-white"
            >
              <div className="w-full h-48 sm:h-56 relative bg-gray-200 rounded-xl">
                <PrismicNextImage
                  field={item.project_image}
                  fallbackAlt=""
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <div className="p-4 md:p-6 flex-1 flex flex-col bg-white">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {item.project_title}
                </h3>
                <div className="text-gray-900 text-sm md:text-base font-medium">
                  <PrismicRichText field={item.project_description} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;