import Image from "next/image";
import { Box, Button, HStack, IconButton, Spacer, Link, Flex } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';

export default function Home() {
  return (
    <Box bg="white" px={4} py={2} boxShadow="sm">
      <Flex align="center">
        <IconButton
          icon={<FaHome />}
          aria-label="Home"
          variant="ghost"
          colorScheme="red"
          fontSize="2xl"
        />
        <HStack spacing={8} align="center">
          <Link href="#" fontSize="sm">سرویس غذای شرکتی</Link>
          <Link href="#" fontSize="sm">آشپزی در مامان‌پز</Link>
          <Link href="#" fontSize="sm">ثبت سفارش مهمانی</Link>
          <Link href="#" fontSize="sm">پرسش‌های شما</Link>
          <Link href="#" fontSize="sm">وبلاگ</Link>
          <Link href="#" fontSize="sm">درباره ما</Link>
        </HStack>
        <Spacer />
        <HStack spacing={4}>
          <Button colorScheme="red" variant="solid" size="sm">
            ثبت‌نام / ورود
          </Button>
          <Button colorScheme="red" variant="outline" size="sm">
            پنل ناهار شرکتی
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
