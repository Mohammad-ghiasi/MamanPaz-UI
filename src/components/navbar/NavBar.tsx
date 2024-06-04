import { Box, Button, HStack, IconButton, Spacer, Flex, Link } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';


export default function NavBar() {
    return (
        <Box bg="white" boxShadow="sm" className="px-navPXS py-navPYS md:px-navPXL md:py-navPYL font-medium text-black text-base">
            <Flex align="center">
                <IconButton
                    icon={<FaHome />}
                    aria-label="Home"
                    variant="ghost"
                    colorScheme="red"
                    fontSize="2xl"
                />
                <HStack spacing={8} align="center" marginX={8}>
                    <Link href="#" >سرویس غذای شرکتی</Link>
                    <Link href="#" >آشپزی در مامان‌پز</Link>
                    <Link href="#" >ثبت سفارش مهمانی</Link>
                    <Link href="#" >پرسش‌های شما</Link>
                    <Link href="#" >وبلاگ</Link>
                    <Link href="#" >درباره ما</Link>
                </HStack>
                <Spacer />
                <HStack spacing={4}>
                    <Button colorScheme="red" variant="outline" size="sm">
                        پنل ناهار شرکتی
                    </Button>
                    <Button colorScheme="red" variant="solid" size="sm">
                        ثبت‌نام / ورود
                    </Button>
                </HStack>
            </Flex>
        </Box>
    )
}