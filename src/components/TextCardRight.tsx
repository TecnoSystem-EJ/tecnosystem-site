import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

interface Props {
  title: RichTextField;
  subtitle: RichTextField;
}

const TextCardRight = ({ title, subtitle }: Props) => {
  return (
    <div className="uppercase text-white flex justify-end">
      <div className="border-r-4 border-white pr-4 text-right flex flex-col gap-2 max-w-xl">
        <PrismicRichText
          field={title}
          components={{
            heading3: ({ children }) => (
              <h3 className="font-secondary font-semibold text-2xl md:text-4xl lg:text-5xl leading-tight">
                {children}
              </h3>
            ),
          }}
        />

        <PrismicRichText
          field={subtitle}
          components={{
            paragraph: ({ children }) => (
              <p className="font-secondary text-xl md:text-3xl lg:text-4xl leading-tight">
                {children}
              </p>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default TextCardRight;