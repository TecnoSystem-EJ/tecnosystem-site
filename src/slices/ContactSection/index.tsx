"use client";

import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import ContactForm from "../../components/ContactForm";

export type ContactSectionProps = SliceComponentProps<any>;

const ContactSection = ({ slice }: ContactSectionProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Informações de Contato */}
          <div>
            <div className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              <PrismicRichText field={slice.primary.title} />
            </div>
            <div className="text-gray-600 text-lg mb-8">
              <PrismicRichText field={slice.primary.description} />
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <span className="font-bold mr-2">E-mail:</span>
                <a href={`mailto:${slice.primary.email}`} className="text-blue-600 hover:underline">
                  {slice.primary.email}
                </a>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="font-bold mr-2">Telefone/WhatsApp:</span>
                <span>{slice.primary.phone}</span>
              </div>
            </div>
          </div>

          {/* Área do Formulário */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">Envie uma mensagem</h3>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;