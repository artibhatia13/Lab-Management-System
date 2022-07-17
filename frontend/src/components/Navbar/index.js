import Link from "next/link";
import { Flex, Text, Image } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex my="auto" justify="space-between" px="2.5em" py="1.5em">
      <Link href="/">
        <Image src="/logo.png" alt="doc_img" h="2em" cursor="pointer" />
      </Link>
      <Flex py="0.5em">
        <Link href="/admin">
          <Text mx="2em" cursor="pointer">
            Admin
          </Text>
        </Link>
        <Link href="/login">
          <Text cursor="pointer">Student</Text>
        </Link>
      </Flex>
    </Flex>
  );
}
