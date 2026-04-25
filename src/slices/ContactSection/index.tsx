"use client";

import { FC } from "react";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import ContactForm from "../../components/ContactForm";

export type ContactSectionProps = SliceComponentProps<any>;

const ContactSection: FC<ContactSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12 md:py-20 bg-white"
    >
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Informações de Contato */}
          <div className="max-w-2xl">
            <div className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              <PrismicRichText field={slice.primary.title} />
            </div>
            <div className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              <PrismicRichText field={slice.primary.description} />
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center text-gray-700 gap-1 sm:gap-2">
                <span className="font-bold text-gray-900">E-mail:</span>
                <a 
                  href={`mailto:${slice.primary.email}`} 
                  className="text-red-600 hover:text-red-700 transition-colors break-all"
                >
                  {slice.primary.email}
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center text-gray-700 gap-1 sm:gap-2">
                <span className="font-bold text-gray-900">Telefone/WhatsApp:</span>
                <span className="text-gray-600">{slice.primary.phone}</span>
              </div>
            </div>
          </div>

          {/* Área do Formulário */}
          <div className="bg-gray-50 p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Envie uma mensagem
            </h3>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;