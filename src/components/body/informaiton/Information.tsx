import Dividers from '@/components/Divider'
import { IData, infoData } from '@/data/infoData'
import { Box, Button, Divider, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import InfoItem from './InfoItem'

export default function Information() {
    return (
        <Box className='px-navPXS md:px-navPXL text-center pb-10 mt-5'>
            <Box>
                <Text className='text-larg md:text-xlarg font-bold'>چطور غذای شرکتی سفارش دهیم؟</Text>
                <Box className='my-10 mx-5 md:mx-10 lg:mx-14 xl:mx-20'>
                    <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8 text-center">
                        {infoData?.map((item: IData) => (
                           <InfoItem key={item.title} {...item} />
                        ))}
                      
                    </Box>
                </Box>
                <Button colorScheme="customRed" rounded="13px" className='py-6 w-[260px]'>اطلاعات بیشتر</Button>
            </Box>
        </Box>
    )
}
