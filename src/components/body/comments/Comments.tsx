import Divider2 from "@/components/Divider2";
import { Box, Flex, Text } from "@chakra-ui/react";


export default function Comments() {
    return (
        <>
        <Box className="flex justify-center items-center flex-col px-navPXS py-navPYS md:px-navPXL md:py-navPYL mb-8">
            <Text className="text-larg md:text-xlarg font-bold mt-8 mb-12" textAlign='center'>مشتریان مامان‌پز چه می‌گویند؟</Text>
            <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Box className="shadow-md shadow-gray-400 rounded-2xl overflow-hidden mx-5 py-2 px-3">
                    <Flex direction="column" alignItems="center" textAlign="center" >

                        <Text fontSize="xl" fontWeight="bold" color="red.500" mb={2}>
                            فیله سوخاری دستپخت مامان فلور
                        </Text>
                        <Text>
                            انقدر عالی بود که کلمه ها کم میارن از گفتنش ... واقعا ممنونم ازتون.
                        </Text>
                        <Text mt={2} fontStyle="italic">
                            وجید از تصمین‌چی
                        </Text>

                    </Flex>

                </Box>
                <Box className="shadow-md shadow-gray-400 rounded-2xl overflow-hidden mx-5 py-2 px-3">
                    <Flex direction="column" alignItems="center" textAlign="center" >

                        <Text fontSize="xl" fontWeight="bold" color="red.500" mb={2}>
                            عدس‌پلو دستپخت مامان شقایق
                        </Text>
                        <Text>
                            خیلی خوشمزه و خوب بود، شبیه غذای مامان خودم
                        </Text>
                        <Text mt={2} fontStyle="italic">
                            صبا از اقتصاد بیدار
                        </Text>

                    </Flex>

                </Box>
                <Box className="shadow-md shadow-gray-400 rounded-2xl overflow-hidden mx-5 py-2 px-3">
                    <Flex direction="column" alignItems="center" textAlign="center" >

                        <Text fontSize="xl" fontWeight="bold" color="red.500" mb={2}>
                            چلو خورشت کرفس دستپخت مامان زینت
                        </Text>
                        <Text>
                            من عاشق این خورشتم و مامان زینت هم این رو عالی میپزه! دست گلتون درد نکنه!
                        </Text>
                        <Text mt={2} fontStyle="italic">
                            مهدی از تراکنش همراه ایمن
                        </Text>

                    </Flex>

                </Box>
                <Box className="shadow-md shadow-gray-400 rounded-2xl overflow-hidden mx-5 py-2 px-3">
                    <Flex direction="column" alignItems="center" textAlign="center" >

                        <Text fontSize="xl" fontWeight="bold" color="red.500" mb={2}>
                            زرشک پلو دستپخت مامان لیلیوم
                        </Text>
                        <Text>
                            زرشک پلو خیلی خوب بود کل همکارای ما از مامان لیلیوم رضایت کامل دارند.
                        </Text>
                        <Text mt={2} fontStyle="italic">
                            یاسمن از توسعه ابزار بازار سرمایه
                        </Text>

                    </Flex>

                </Box>
               
            </Box>
        </Box>
        <Divider2 />
        </>
    )
}
