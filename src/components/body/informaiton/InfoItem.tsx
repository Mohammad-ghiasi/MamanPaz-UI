import { IData } from '@/data/infoData'
import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function InfoItem({ img, subtitle, title }: IData) {
    return (
        <Box className=''>
            <Box className="flex justify-center items-center">
                <Image
                    alt='infos-card'
                    src={img}
                    width={250}
                    height={250}
                    loading='lazy'
                />
            </Box>
            <Text className='font-bold text-mediom mb-5'>{title}</Text>
            <Text>{subtitle}</Text>
        </Box>
    )
}
