import Link from "next/link";
import { Flex, Text, Image } from "@chakra-ui/react";

export default function StudentNav() {
  return (
    <Flex my="auto" justify="space-between" px="2.5em" py="1.5em">
      <Link href="/">
        <Image cursor="pointer" src="/logo.png" alt="doc_img" h="2em" />
      </Link>
      <Flex py="0.5em">
        <Link href="/">
          <Text cursor="pointer" mx="1em">
            profile
          </Text>
        </Link>
        <Link href="/logout">
          <Text cursor="pointer" mx="1em">
            logout
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}
