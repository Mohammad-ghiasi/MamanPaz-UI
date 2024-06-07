"use client"
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Box, Divider } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { logoData, logosData } from '@/data/logoData';
import Divider2 from '@/components/Divider2';


export default function Customers() {
  return (
    <Box className='px-navPXS md:px-navPXL'>
      <Divider2 />
      <Box className="flex justify-center items-center  ">
        <Box className=' max-w-[80%]'>
          <Swiper
            spaceBetween={6}
            breakpoints={{
              1200: { slidesPerView: 8 },
              992: { slidesPerView: 4 },
              768: { slidesPerView: 2 },
              500: { slidesPerView: 2 },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {logosData?.map((item: logoData) => (
              <SwiperSlide key={item.img} className='flex justify-center items-center'>
                <Box className="flex justify-center items-center">
                  <Image
                    alt='logo-img'
                    src={item.img}
                    width={80}
                    height={80}
                    loading='lazy'
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>

      <Divider2 />
    </Box>
  )
}
