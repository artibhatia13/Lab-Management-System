import { Box, Text, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Card({ img, text, id }) {
  return (
    <Link href={"/admin/lab/" + id}>
      <Box
        boxShadow="lg"
        bg="white"
        w="20em"
        mr="3em"
        cursor="pointer"
        borderRadius="6px"
      >
        <Image
          src={img}
          h="15em"
          objectFit="cover"
          borderRadius="6px 6px 0 0"
        />
        <Text p="1em">{text}</Text>
      </Box>
    </Link>
  );
}
