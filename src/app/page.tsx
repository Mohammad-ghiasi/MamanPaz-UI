import Image from "next/image";
import NavBar from "@/components/navbar/NavBar"
import { Box, Button, HStack, IconButton, Spacer, Flex, Link } from '@chakra-ui/react';
import HeroBox from "@/components/heroBox/HeroBox";


export default function Home() {
  return (
    <Box className="">
      <NavBar />
      <HeroBox />
    </Box>
  );
}
