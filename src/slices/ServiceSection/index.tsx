import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServiceSection`.
 */
export type ServiceSectionProps =
  SliceComponentProps<Content.ServiceSectionSlice>;

/**
 * Component for "ServiceSection" Slices.
 */
const ServiceSection = ({ slice }: ServiceSectionProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for service_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ServiceSection;
