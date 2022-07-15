import Link from "next/link";
import { Flex, Text, Image } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex my="auto" justify="space-between" px="2.5em" py="1.5em">
      <Link href="/">
        <Image src="/logo.png" alt="doc_img" h="2em" />
      </Link>
      <Flex py="0.5em">
        <Link href="/login">
          <Text mx="2em">Admin</Text>
        </Link>
        <Link href="/login">
          <Text>Student</Text>
        </Link>
      </Flex>
    </Flex>
  );
}
