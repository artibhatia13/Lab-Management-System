import { Box } from "@chakra-ui/react";
import { Navbar, Signupform } from "../src/components";

export default function Home() {
  return (
    <Box bg="#fafafa">
      <Navbar />
      <Signupform />
    </Box>
  );
}
