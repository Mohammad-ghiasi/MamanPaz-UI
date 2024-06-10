import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Box, Button, Text, Show } from '@chakra-ui/react'
import Image from 'next/image'
export default function TabBar() {
    return (
        <Box paddingBottom={10}>
            <Text className="text-larg md:text-xlarg font-bold mt-8 pb-12" textAlign='center'>مامان‌پز چه خدماتی دارد؟</Text>
            <Show above='md'>
                <Tabs position='relative' variant='unstyled' isFitted>
                    <Box className="flex justify-center">
                        <Box className='w-[60%px]'>
                            <TabList>
                                <Tab className="mx-2 px-20 w-[240px]">سفارش شرکتی</Tab>
                                <Tab className="mx-2 px-20 w-[240px]">سفارش آنلاین</Tab>
                            </TabList>
                        </Box>
                    </Box>
                    <TabIndicator mt='-1.5px' height='3px' bg='#EF5350' borderRadius='1px' />
                    <TabPanels>
                        <Box className="flex justify-center mt-7">
                            <Box className=''>
                                <TabPanel>
                                    <Box className='flex flex-row max-w-[700px]'>
                                        <Box className='relative w-[1000px] h-[200px] rounded-md overflow-hidden'>
                                            <Image
                                                alt='image'
                                                src='/images/service-enterprise.jpg'
                                                fill
                                                loading='lazy'
                                            />
                                        </Box>
                                        <Box className='flex flex-col justify-start space-y-3 px-3'>
                                            <Text className='text-base'>اگر شرکتی هستید که می‌خواهید برای تامین غذای روزانه کارکنان خود از خدمات مامان‌پز استفاده کنید، فقط کافیست اطلاعات تماس خود را با ما به اشتراک بگذارید تا کارشناسان مامان‌پز با شما تماس بگیرند.</Text>
                                            <Box className='relative h-[100%]'>
                                                <Button colorScheme="customRed" paddingX={8} rounded="13px" className='absolute top-[54px] px-10 '>نهار شرکتی میخوام!</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </TabPanel>

                            </Box>
                        </Box>
                        <Box className="flex justify-center ">
                            <Box className=''>
                                <TabPanel>
                                    <Box className='flex flex-row max-w-[700px]'>
                                        <Box className='relative w-[1700px] h-[200px]'>
                                            <Image
                                                alt='image'
                                                src='/images/service-mamanpaz.jpg'
                                                fill
                                                loading='lazy'
                                            />
                                        </Box>
                                        <Box className='flex flex-col justify-start space-y-3 px-3 '>
                                            <Text className='text-base'>شما می‌توانید از روی سایت و به طور مستقیم هم سفارش خود را از میان غذاهای مامان‌پز انتخاب و ثبت کنید. فقط در نظر داشته باشید که به دلیل محدودیت مامان‌ها در تهیه مواد اولیه‌، باید یک روز زودتر غذای خود را سفارش دهید. هر مامان در صورتی که چهار سفارش برای غذای مورد‌نظر دریافت کند آن را تهیه می‌کند.</Text>
                                            <Box className='flex items-center h-[100%] '>
                                                <Button colorScheme="customRed" paddingX={8} rounded="13px">میخوام سفارش بدم</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </TabPanel>

                            </Box>
                        </Box>
                    </TabPanels>
                </Tabs>
            </Show>

            <Box className='block md:hidden'>
                <Box className='flex flex-col justify-center mx-auto  space-y-5 '>
                    <Box className="w-[100%]">
                        <Box className=' relative w-[85%] h-[200px] rounded-md overflow-hidden mx-auto bg-red-500'>
                            <Image
                                alt='image'
                                src='/images/service-enterprise.jpg'
                                fill
                                loading='lazy'
                            />
                        </Box>
                    </Box>
                    <Box className='flex flex-col justify-center space-y-3 px-3'>
                        <Text textAlign='center' className='text-base px-4 py-5'>اگر شرکتی هستید که می‌خواهید برای تامین غذای روزانه کارکنان خود از خدمات مامان‌پز استفاده کنید، فقط کافیست اطلاعات تماس خود را با ما به اشتراک بگذارید تا کارشناسان مامان‌پز با شما تماس بگیرند.</Text>
                        <Box className='mx-auto'>
                            <Button colorScheme="customRed" paddingX={8} rounded="13px">نهار شرکتی میخوام!</Button>
                        </Box>
                    </Box>
                </Box>


                <Box className='flex flex-col justify-center mx-auto  space-y-5  mt-8'>
                    <Box className="w-[100%]">
                        <Box className=' relative w-[85%] h-[200px] rounded-md overflow-hidden mx-auto bg-red-500'>
                            <Image
                                alt='image'
                                src='/images/service-mamanpaz.jpg'
                                fill
                                loading='lazy'
                            />
                        </Box>
                    </Box>
                    <Box className='flex flex-col justify-center space-y-3 px-3'>
                        <Text textAlign='center' className='text-base px-4 py-5'>شما می‌توانید از روی سایت و به طور مستقیم هم سفارش خود را از میان غذاهای مامان‌پز انتخاب و ثبت کنید. فقط در نظر داشته باشید که به دلیل محدودیت مامان‌ها در تهیه مواد اولیه‌، باید یک روز زودتر غذای خود را سفارش دهید. هر مامان در صورتی که چهار سفارش برای غذای مورد‌نظر دریافت کند آن را تهیه می‌کند.</Text>
                        <Box className='mx-auto'>
                            <Button colorScheme="customRed" paddingX={8} rounded="13px">میخوام سفارش بدم</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}
