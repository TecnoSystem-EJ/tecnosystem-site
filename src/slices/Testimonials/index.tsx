"use client";

import { FC, useRef } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type TestimonialsProps =
  SliceComponentProps<Content.TestimonialsSlice>;

const Testimonials: FC<TestimonialsProps> = ({ slice }) => {
  const testimonials = slice.primary.testimonial ?? [];
  const isSlider = testimonials.length > 2;

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mx-24 relative overflow-hidden"
    >
      {/* TÍTULO */}
      <div className="flex gap-3 mb-6">
        <div className="w-1 bg-red-600 rounded" />
        <div>
          <PrismicRichText
            field={slice.primary.testimonials_titulo}
            components={{
              paragraph: ({ children }) => (
                <p className="text-black font-black text-3xl">
                  {children}
                </p>
              ),
            }}
          />
          <PrismicRichText field={slice.primary.testimonials_subtitulo}  components={{
              paragraph: ({ children }) => (
                <p className="text-black text-xl">
                  {children}
                </p>
              ),
            }}
            />
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="flex gap-6 items-stretch">
        {/* CTA FIXO */}
        <div className="p-6 bg-red-600 rounded-lg max-w-[320px]">
          <i className="bi bi-quote text-red-300 text-7xl block mb-4" />
          <PrismicRichText
            field={slice.primary.testimonials_cta}
            components={{
              paragraph: ({ children }) => (
                <p className="text-4xl text-red-100 font-bold leading-tight">
                  {children}
                </p>
              ),
            }}
          />
        </div>

        {/* SLIDER + BOTÕES */}
        <div className="flex-1 min-w-0">
          {/* BOTÕES */}
          {isSlider && (
            <div className="absolute -top-14 right-0 flex gap-2 z-10">
              <button
                ref={prevRef}
                className="w-10 h-10 text-4xl text-center self-center rounded-full bg-red-600 text-white flex items-center justify-center"
              >
                ‹
              </button>
              <button
                ref={nextRef}
                className="w-10 h-10 text-4xl text-centerself-center rounded-full bg-red-600 text-white flex items-center justify-center"
              >
                ›
              </button>
            </div>
          )}

          {isSlider ? (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              className="w-full"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <TestimonialCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((item, index) => (
                <TestimonialCard key={index} item={item} />
                
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

/* ===========================
   CARD
=========================== */

const TestimonialCard = ({ item }: any) => {
  return (
    <div className="p-4 w-[400px] h-full">
      <div className="p-4 w-full min-h-[220px] bg-white shadow-lg rounded-lg mb-6">
        <PrismicRichText
          field={item.testimonial_text}
          components={{
            paragraph: ({ children }) => (
              <p className="text-md text-gray-900 text-justify mb-2 line-clamp-10">
                {children}
              </p>
            ),
          }}
        />

        <div className="flex gap-1 text-red-600 text-xl">
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <PrismicNextImage
          field={item.testimonial_img}
          className="rounded-full w-12 h-12"
        />

        <div className="flex gap-4">
          <div className="w-1 bg-red-600 rounded" />
          <div>
            <PrismicRichText
              field={item.testimonial_user}
              components={{
                paragraph: ({ children }) => (
                  <p className="font-bold">{children}</p>
                ),
              }}
            />
            <PrismicRichText field={item.testimonial_empresa} />
          </div>
        </div>
      </div>
    </div>
  );
};

