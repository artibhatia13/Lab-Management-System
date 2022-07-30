import {
  Box,
  Text,
  Flex,
  Image,
  Link,
  Icon,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

export default function AssignmentPage() {
  const assignments = [
    {
      id: 1,
      heading: "UDP",
      description:
        "Implement a Concurrent Time Server application using UDP to execute the program at a remote server. Client sends a time request to the server, server sends its system time back to the client. Client displays the result.",
      deadline: "Monday, 30 July, 10:00 PM",
    },
    {
      id: 2,
      heading: "ARQ Flow Control Protocol",
      description:
        "a) Implement Stop-and-Wait ARQ flow control protocol. b) Implement Go-Back--N ARQ flow control protocol. c) Implement Selective Repeat ARQ flow control protocol.",
      deadline: "Monday, 23 July, 12:00 PM",
    },
  ];

  const asgmCard = (item) => {
    return (
      <Box mb="3em" bg="white" borderRadius="6px" px="3em" py="1.5em">
        <Flex justifyContent="space-between">
          <Text fontSize="22px" fontWeight="500">
            {item.heading}
          </Text>
          <Flex opacity="0.6">
            <TimeIcon my="auto" mr="5px" h={3.5} />
            <Text fontSize="14px" my="auto">
              {item.deadline}
            </Text>
          </Flex>
        </Flex>
        <Text my="1em">{item.description}</Text>
        <Button
          ml="auto"
          bg="#87C0CD"
          color="white"
          borderRadius="10em"
          py="1em"
          px="2em"
        >
          Submit
        </Button>
      </Box>
    );
  };

  return <Box>{assignments.map((item) => asgmCard(item))}</Box>;
}
