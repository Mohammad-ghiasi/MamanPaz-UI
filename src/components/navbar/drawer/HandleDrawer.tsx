"use client"
import Link from 'next/link'
import { Box, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerFooter, Divider, DrawerCloseButton, HStack, DrawerHeader } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
export default function HandleDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box display={{ base: 'block', lg: 'none' }}>
                <IconButton
                    icon={<FaBars />}
                    aria-label="Menu"
                    variant="ghost"
                    onClick={onOpen}
                    fontSize="2xl"
                    textAlign='center'
                />
            </Box>
            <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody>

                        <Image
                            alt='logo-img'
                            src='/images/mamanpaz_logo_small.png'
                            width={40}
                            height={40}
                            loading='lazy'
                            className='mt-5'
                        />
                        <Link href="#" onClick={onClose} className="block py-2 mt-5">سرویس غذای شرکتی</Link>
                        <Link href="#" onClick={onClose} className="block py-2">آشپزی در مامان‌پز</Link>
                        <Link href="#" onClick={onClose} className="block py-2">ثبت سفارش مهمانی</Link>
                        <Link href="#" onClick={onClose} className="block py-2">پرسش‌های شما</Link>
                        <Link href="#" onClick={onClose} className="block py-2">وبلاگ</Link>
                        <Link href="#" onClick={onClose} className="block py-2">درباره ما</Link>
                        <Divider className='my-3' height="1px" bg="#cdcaca" />
                        <Link href="#" onClick={onClose} className="block py-2">ورود</Link>
                        <Link href="#" onClick={onClose} className="block py-2">ثبت نام</Link>
                    </DrawerBody>
                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
