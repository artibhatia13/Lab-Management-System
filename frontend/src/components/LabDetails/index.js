import { Box, Text, Flex, Image } from "@chakra-ui/react";

export default function LabDetails() {
  const details = [
    {
      id: 1,
      title: "Name",
      text: "Computer Lab 2",
    },
    {
      id: 2,
      title: "Manager Name",
      text: "Aysha Fymin Majeed",
    },
    {
      id: 3,
      title: "Location",
      text: "Second Floor",
    },
    {
      id: 4,
      title: "Description",
      text: "Mini Project, Microprocessor Lab, C Lab",
    },
    {
      id: 5,
      title: "Number of System",
      text: "23",
    },
  ];

  return (
    <>
      <Flex justifyContent="space-between" mb="4em">
        <Box>
          {details.map((item) => (
            <Flex
              key={item.id}
              bg="white"
              boxShadow="lg"
              border="1px"
              borderColor="#e0e0e0"
              mt="-1px"
              w="42em"
            >
              <Text
                flex="0.4"
                bg="#87C0CD"
                color="white"
                fontWeight="500"
                pl="2em"
                pr="1em"
                py="1em"
              >
                {item.title}
              </Text>
              <Text pl="2em" pr="1em" py="1em" flex="0.6">
                {item.text}
              </Text>
            </Flex>
          ))}
        </Box>
        <Image src="/lab2.jpg" width="30em" h="18em" objectFit="cover" />
      </Flex>
    </>
  );
}
