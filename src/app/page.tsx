
import NavBar from "@/components/navbar/NavBar"
import { Box } from '@chakra-ui/react';
import HeroBox from "@/components/heroBox/HeroBox";
import Information from "@/components/body/informaiton/Information";
import Customers from "@/components/body/customers/Customers";
import More from "@/components/body/more/More";
import Comments from "@/components/body/comments/Comments";
import TabBar from "@/components/body/tabs/Tabs";
import Footer from "@/components/footer/Footer";



export default function Home() {
  return (
    <Box className="">
      <NavBar />
      <HeroBox />
      <Box className="bg-[#ffffff] pt-5 mt-10" boxShadow="0 16px 56px 2px rgba(0, 0, 0, 0.4)">
        <Information />
        <Customers />
        <More />
        <Comments />
        <TabBar />
        <Footer />
      </Box>
    </Box>
  );
}
