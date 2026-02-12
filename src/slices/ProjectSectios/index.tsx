import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProjectSectios`.
 */
export type ProjectSectiosProps =
  SliceComponentProps<Content.ProjectSectiosSlice>;

/**
 * Component for "ProjectSectios" Slices.
 */
const ProjectSectios = ({ slice }: ProjectSectiosProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_sectios (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectSectios;
