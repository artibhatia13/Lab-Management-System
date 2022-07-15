import { Navbar, Loginform } from "../src/components";
import { Flex, Box, Text, Image } from "@chakra-ui/react";

export default function Login() {
  return (
    <Box bg="#fafafa">
      <Navbar />
      <Loginform />
    </Box>
  );
}
