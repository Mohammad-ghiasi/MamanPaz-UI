import { Box, Button, Divider, IconButton, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
// import { ChevronDownIcon } from '@chakra-ui/icons';
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import Dividers from '../Divider';

export default function HeroBox() {
    return (
        <>
            <Box className='flex flex-col-reverse justify-end relative lg:flex-row mt-[53px] md:mt-[63px] w-[100%] '>
                <Box className='flex justify-center  lg:w-[30%] lg:absolute z-50 top-24 right-[100px]'>
                    <Box className="w-[100%] md:w-[60%] lg:w-[100%] max-lg:text-center">
                        <Text className="text-xlarg lg:text-2xlarg font-bold">ناهار شرکتی با طعمی از خونه!</Text>
                        <Text className='text-base lg:text-mediom text-grayText mt-12 mb-8 lg:mt-20 lg:mb-12 max-md:mx-3'>مامان‌پز با غذاهای خانگی و سالم یک ناهار کاری فراموش نشدنی را برای شما رقم می‌زند.</Text>
                        <Button size='md' colorScheme="customRed" className='w-[70%] lg:w-[80%] py-6'>نهار شرکتی میخوام</Button>
                    </Box>
                </Box>
                <Box className='relative w-[100%] lg:w-[85%]  h-[50vh] md:h-[66vh] lg:h-[100vh]'>
                    <Image
                        alt='main-img'
                        src='/images/mamanpaz-main-bg.jpg'
                        fill
                        loading='lazy'
                    />
                </Box>
            </Box>
            <Dividers />
        </>
    )
}