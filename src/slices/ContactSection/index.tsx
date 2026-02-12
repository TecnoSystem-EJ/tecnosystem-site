import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactSection`.
 */
export type ContactSectionProps =
  SliceComponentProps<Content.ContactSectionSlice>;

/**
 * Component for "ContactSection" Slices.
 */
const ContactSection = ({ slice }: ContactSectionProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for contact_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ContactSection;
