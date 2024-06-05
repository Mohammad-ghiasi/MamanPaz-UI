import Link from 'next/link'
import { Box, Button, HStack, Spacer, Flex } from '@chakra-ui/react';

import Image from 'next/image';
import HandleDrawer from './drawer/HandleDrawer';


export default function NavBar() {


    return (
        <Box bg="white" boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)" className="px-navPXS py-navPYS md:px-navPXL md:py-navPYL font-medium text-black text-base" position="fixed" top={0} width="100%" zIndex={999}>
            <Flex align="center">
                <Image
                    alt='logo-img'
                    src='/images/mamanpaz_logo_small.png'
                    width={40}
                    height={40}
                    loading='lazy'
                />
                <HStack spacing={8} align="center" marginX={8} display={{ base: 'none', lg: 'flex' }}>
                    <Link href="#" className="hover:text-ProRedButtons hover:scale-105 transition" >سرویس غذای شرکتی</Link>
                    <Link href="#" className="hover:text-ProRedButtons hover:scale-105 transition" >آشپزی در مامان‌پز</Link>
                    <Link href="#" className="hover:text-ProRedButtons hover:scale-105 transition" >ثبت سفارش مهمانی</Link>
                    <Link href="#" className="hover:text-ProRedButtons hover:scale-105 transition" >وبلاگ</Link>
                    <Link href="#" className="hover:text-ProRedButtons hover:scale-105 transition" >درباره ما</Link>
                </HStack>
                <Spacer />
                <HStack spacing={4}>
                    <Button variant="outline"
                        rounded="13px"
                        size="md"
                        borderColor="customRed.500"
                        color="customRed.500"
                    >
                        پنل ناهار شرکتی
                    </Button>
                    <Button colorScheme="customRed" rounded="13px" variant="solid" size="md" display={{ base: 'none', lg: 'flex' }}>
                        ثبت‌نام / ورود
                    </Button>


                    <HandleDrawer />


                </HStack>
            </Flex>
        </Box>
    )
}