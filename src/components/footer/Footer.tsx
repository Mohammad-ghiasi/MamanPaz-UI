"use client"
import React from 'react';
import { Box, Flex, Stack, Text, Link, Icon, Image } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Divider2 from '../Divider2';

const Footer = () => {
    return (
        <Box bg="gray.200" py={10} mt={20} >
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justify="space-between"
                align="center"
                maxW="1200px"
                mx="auto"
                px={4}
            >
                <Stack spacing={4} align={{ base: 'center', md: 'flex-start' }}>
                    <Text fontWeight="bold">مامان‌پز</Text>
                    <Link href="#">غذاها</Link>
                    <Link href="#">مامان ها</Link>
                    <Link href="#">سفارش شرکتی</Link>
                    <Link href="#">در مامان‌پز آشپزی کنید</Link>
                    <Link href="#">وبلاگ</Link>
                </Stack>

                <Stack spacing={4} align={{ base: 'center', md: 'flex-start' }}>
                    <Text fontWeight="bold">خدمات مشتریان</Text>
                    <Link href="#">درباره ما</Link>
                    <Link href="#">تماس با ما</Link>
                    <Link href="#">ثبت شکایات</Link>
                    <Link href="#">سوالات متداول</Link>
                    <Link href="#">قوانین و مقررات</Link>
                </Stack>

                <Stack spacing={4} align={{ base: 'center', md: 'flex-start' }}>
                    <Image src="/images/namad1.png" alt="Logo" boxSize="130px" />
                    <Text>مامان‌پز پشتیبان شماست!</Text>
                    <Text>پشتیبانی امور مشتریان: 09100016400</Text>
                    <Text>info@mamanpaz.ir</Text>
                </Stack>
            </Flex>
            <Flex justify="center" mt={10}>
                <Link href="#" mx={2}><Icon as={FaInstagram} boxSize={6} /></Link>
                <Link href="#" mx={2}><Icon as={FaLinkedin} boxSize={6} /></Link>
                <Link href="#" mx={2}><Icon as={FaFacebook} boxSize={6} /></Link>
            </Flex>
            <Divider2 />

            <Text textAlign="center" mt={0} fontSize="sm">
                کلیه حقوق متعلق به شرکت سپهر فروزان ایرانیان است.
            </Text>
        </Box>
    );
};

export default Footer;
