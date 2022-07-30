import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { StudentNav, Card, Heading } from "../../src/components";
import Link from "next/link";

export default function student() {
  const labs = [
    {
      id: 1,
      name: "Network Lab",
      img: "/networklab.jpg",
    },
    {
      id: 2,
      name: "Mini Project",
      img: "/lab2.jpg",
    },
  ];

  return (
    <Box bg="#fafafa">
      <StudentNav />
      <Box mx="5em" my="3em">
        <Heading text="Courses" />
        <Flex>
          {labs.map((item) => (
            <Box key={item.id}>
              <Link href={"/admin/lab/" + item.id}>
                <Box
                  boxShadow="lg"
                  bg="white"
                  w="20em"
                  mr="3em"
                  cursor="pointer"
                  borderRadius="6px"
                >
                  <Image
                    src={item.img}
                    h="15em"
                    objectFit="cover"
                    borderRadius="6px 6px 0 0"
                  />
                  <Text p="1em">{item.name}</Text>
                </Box>
              </Link>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
