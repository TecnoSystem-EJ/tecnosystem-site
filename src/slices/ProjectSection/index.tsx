import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProjectSection`.
 */
export type ProjectSectionProps =
  SliceComponentProps<Content.ProjectSectionSlice>;

/**
 * Component for "ProjectSection" Slices.
 */
const ProjectSection = ({ slice }: ProjectSectionProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectSection;
