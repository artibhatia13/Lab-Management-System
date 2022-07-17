import { Box, Text } from "@chakra-ui/react";

export default function Heading({ text }) {
  return (
    <>
      <Text
        textTransform="uppercase"
        fontWeight="700"
        fontSize="20px"
        opacity="0.5"
      >
        {text}
      </Text>
      <Box
        h="1px"
        w="100%"
        bg="#424242"
        mt="0.2em"
        mb="2em"
        opacity="0.2"
      ></Box>
    </>
  );
}
