import { choosen, choosenitem } from '@/data/choosen'
import { Box, Divider, Show, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function More() {
    return (
        <>
            <Box className='flex justify-center px-navPXS md:px-navPXL '>
                <Box className='max-w-[85%]'>
                    <Text textAlign='center' className='text-larg font-bold mt-7 mb-10'>چرا مامان‌پز را انتخاب کنیم؟</Text>
                    <Box className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-20 '>
                        {choosen.map((item: choosenitem) => (
                            <Box key={item.title} className=''>
                                <Box className='bg-white rounded-lg overflow-hidden shadow-lg '>
                                    <Image
                                        alt='logo-img'
                                        src={item.img}
                                        width={200}
                                        height={250}
                                        loading='lazy'
                                    />
                                </Box>
                                <Text className='mt-5 font-bold text-center'>{item.title}</Text>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            <Box className="flex justify-center  px-navPXS md:px-navPXL mt-28 mb-3 ">
                <Box display="flex" alignItems="center" className='w-[100%]'>
                    <Divider bg='#d0c8c8df' height='1px' />
                    <Show above='md'>
                        <Box
                            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.5)"
                            rounded='13px'
                            className=' w-[900px]'
                        >
                           <Text className="text-redButtons text-mediom text-center py-1">لحظات دوست داشتنی با طعمی از خانه</Text>
                        </Box>
                    </Show>
                    <Divider bg='#d0c8c8df' height='1px' />
                </Box>
            </Box>
        </>
    )
}
