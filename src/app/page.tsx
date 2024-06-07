
import NavBar from "@/components/navbar/NavBar"
import { Box } from '@chakra-ui/react';
import HeroBox from "@/components/heroBox/HeroBox";
import Information from "@/components/body/informaiton/Information";
import Customers from "@/components/body/customers/Customers";
import More from "@/components/body/more/More";



export default function Home() {
  return (
    <Box className="">
      <NavBar />
      <HeroBox />
      <Box className="bg-[#f6f6f6e9] backdrop-blur-md pt-5 mt-10" boxShadow="0 16px 56px 2px rgba(0, 0, 0, 0.4)">
        <Information />
        <Customers />
        <More />
      </Box>
    </Box>
  );
}
