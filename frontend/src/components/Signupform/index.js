import { Flex, Box, Text, Input, Button } from "@chakra-ui/react";

export default function Signupform() {
  return (
    <Box bg="#fafafa">
      <Box
        boxShadow="lg"
        mx="auto"
        mt="4em"
        w="25em"
        px="3em"
        py="2em"
        bg="white"
      >
        <Text textAlign="center" fontSize="25px" fontWeight="500">
          Sign Up
        </Text>
        <Box
          h="0.2em"
          w="3em"
          mt="0.3em"
          mx="auto"
          bg="#87C0CD"
          borderRadius="50em"
        ></Box>
        <Box mt="3em" w="100%" mx="auto">
          <Input placeholder="Name" h="3em" />
          <Input placeholder="Email" mt="1.5em" h="3em" />
          <Input placeholder="Password" mt="1.5em" h="3em" />
        </Box>
        <Button
          mt="2em"
          w="100%"
          h="3em"
          bg="#87C0CD"
          color="white"
          borderRadius="10em"
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}
