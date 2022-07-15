import { Navbar, Signupform } from "../src/components";
import { Flex, Box, Text, Image } from "@chakra-ui/react";

export default function Signup() {
  return (
    <Box bg="#fafafa">
      <Navbar />
      <Signupform />
    </Box>
  );
}
