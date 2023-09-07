import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { testimonialsData } from '../constants';

import Slide from './Slide';

register();

const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      pagination: {
        clickable: true,
      },
      loop: false,

      breakpoints: {
        0: {
          slidesPerView: 1,
          pagination: {
            enabled: true,
          },
        },
        976: {
          slidesPerView: 2,
          spaceBetween: 25,
          pagination: {
            enabled: false,
          },
        },
      },

      injectStyles: [
        ` 
          .swiper-wrapper{
            padding-top: 2.5rem;
            padding-bottom: 3rem;
            cursor: grab;
            select: none;
          }

          .swiper-pagination{
            position: absolute;
            bottom: 0 !important;
          }

          .swiper-pagination-bullet{
            width: .8rem;
            height: .8rem;
            background-color: var(--brightRed);
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <section id='testimonials' className='mb-9 lg:mb-40'>
      <div className='container--big flex flex-col px-6 lg:px-0 mx-auto'>
        <h2 className='text-4xl font-bold mb-16 text-center'>
          What they&rsquo;ve said
        </h2>
        {/* swiper container */}
        <div className='py-8'>
          <swiper-container ref={swiperRef} init='false'>
            {testimonialsData.map((testimonial) => (
              <Slide key={testimonial.id} slideData={testimonial} />
            ))}
          </swiper-container>
        </div>
        <button className='px-8 pt-4 pb-3 block mx-auto bg-brightRed hover:bg-brightRedLight text-white font-bold rounded-full'>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
