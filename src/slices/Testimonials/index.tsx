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

export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

const Testimonials: FC<TestimonialsProps> = ({ slice }) => {
  const testimonials = slice.primary.testimonial ?? [];
  const isSlider = testimonials.length > 2;

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mx-6 md:mx-24 my-12 md:my-20 relative overflow-visible"
    >
      {/* TÍTULO */}
      <div className="flex gap-3 mb-8 md:mb-12">
        <div className="w-1.5 bg-red-600 rounded-full" />
        <div>
          <PrismicRichText
            field={slice.primary.testimonials_titulo}
            components={{
              paragraph: ({ children }) => (
                <p className="text-black font-black text-2xl md:text-3xl leading-tight">
                  {children}
                </p>
              ),
            }}
          />
          <PrismicRichText 
            field={slice.primary.testimonials_subtitulo}  
            components={{
              paragraph: ({ children }) => (
                <p className="text-gray-700 text-lg md:text-xl mt-1">
                  {children}
                </p>
              ),
            }}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        
        <div className="p-8 bg-red-600 rounded-2xl lg:max-w-[320px] flex flex-col justify-center relative overflow-hidden">
          <i className="bi bi-quote text-red-300/30 text-6xl md:text-7xl absolute -top-2 -left-2 md:static md:block md:mb-4" />
          <PrismicRichText
            field={slice.primary.testimonials_cta}
            components={{
              paragraph: ({ children }) => (
                <p className="text-2xl md:text-4xl text-red-100 font-bold leading-tight relative z-10">
                  {children}
                </p>
              ),
            }}
          />
        </div>

        {/* SLIDER + BOTÕES */}
        <div className="flex-1 min-w-0 relative">
          {isSlider && (
            <div className="hidden md:flex absolute -top-14 right-0 gap-2 z-20">
              <button
                ref={prevRef}
                className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                ‹
              </button>
              <button
                ref={nextRef}
                className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                ›
              </button>
            </div>
          )}

          {isSlider ? (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 1.5 },
                1280: { slidesPerView: 2 },
              }}
              className="w-full pb-12"
            >
              {testimonials.map((item: any, index: number) => (
                <SwiperSlide key={index} className="h-auto">
                  <TestimonialCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((item: any, index: number) => (
                <TestimonialCard key={index} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

/* ===========================
    CARD (REMOVIDO LARGURA FIXA)
=========================== */

const TestimonialCard = ({ item }: { item: any }) => {
  return (
    <div className="h-full flex flex-col py-2">
      {/* Removido w-[400px] para que o card ocupe o espaço do slide */}
      <div className="p-6 w-full flex-1 bg-white shadow-md rounded-2xl mb-6 border border-gray-100">
        <PrismicRichText
          field={item.testimonial_text}
          components={{
            paragraph: ({ children }) => (
              <p className="text-sm md:text-base text-gray-700 text-justify mb-4 line-clamp-6">
                {children}
              </p>
            ),
          }}
        />

        <div className="flex gap-1 text-yellow-500 text-lg">
          <i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
        </div>
      </div>

      <div className="flex gap-4 items-center px-2">
        <div className="relative w-12 h-12 flex-shrink-0">
          <PrismicNextImage
            field={item.testimonial_img}
            fill
            className="rounded-full object-cover border-2 border-red-600"
          />
        </div>

        <div className="flex gap-3 items-stretch">
          <div className="w-1 bg-red-600 rounded-full" />
          <div className="flex flex-col">
            <PrismicRichText
              field={item.testimonial_user}
              components={{
                paragraph: ({ children }) => (
                  <p className="font-bold text-gray-900 text-sm md:text-base leading-none mb-1">{children}</p>
                ),
              }}
            />
            <div className="text-xs md:text-sm text-gray-500 uppercase font-medium">
                <PrismicRichText field={item.testimonial_empresa} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;