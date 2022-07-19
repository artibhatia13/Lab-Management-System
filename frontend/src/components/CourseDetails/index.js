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
import { BsPersonFill } from "react-icons/bs";

export default function CourseDetails() {
  const details = {
    name: "CSL331 Networking Lab",
    description:
      "The course enables the learners to get hands-on experience in network programming using Linux System calls and network monitoring tools. ",
    prerequisite:
      "Sound knowledge in Programming in C, Data Structures and Computer Networks",
    courseOutcome: [
      "Use network related commands and configuration files in Linux Operating System.",
      "Develop network application programs and protocols.",
      "Analyze network traffic using network monitoring tools.",
      "Design and setup a network and configure different network protocols.",
      "Develop simulation of fundamental network concepts using a network simulator.",
    ],
    img: "/networklab.jpg",
    faculty: ["Ms Kiran Mary", "Mrs Rekha"],
    lab: "Computer Lab 1",
    sem: "6",
    st_enrolled: "68",
  };

  return (
    <Box mb="4em">
      <Flex justifyContent="space-between">
        <Box>
          <Flex>
            <Link href="/admin/course/networklab">
              <Text
                fontSize="30px"
                letterSpacing="0.8px"
                fontWeight="600"
                cursor="pointer"
                mt="5px"
              >
                {details.name}
              </Text>
            </Link>
            <Text
              mx="1em"
              my="-3px"
              fontSize="34px"
              fontWeight="200"
              opacity="0.3"
            >
              |
            </Text>
            <Link href="/admin/lab/1">
              <Button fontSize="14px" fontWeight="400" mt="0.5em">
                {details.lab}
              </Button>
            </Link>
          </Flex>

          <Text fontSize="17px" my="1em" mr="2em">
            {details.description}
          </Text>

          <Flex my="1em">
            <Text fontSize="16px" fontWeight="500">
              Prerequisite :
            </Text>
            <Text fontSize="15px" mx="1em">
              {details.prerequisite}
            </Text>
          </Flex>

          <Flex my="1em" fontSize="14px">
            <Text>Semester {details.sem}</Text>
            <Text mx="0.4em" my="-1px">
              |
            </Text>
            <Text>{details.st_enrolled} students enrolled</Text>
          </Flex>
          <Flex fontSize="17px">
            {details.faculty.map((name) => (
              <Flex mr="5em">
                <Icon as={BsPersonFill} color="#49B5CD" my="auto" mr="4px" />
                <Text>{name}</Text>
              </Flex>
            ))}
          </Flex>
          <Text fontSize="16px" fontWeight="500" mt="3em" mb="1em">
            Course Outcome :
          </Text>
        </Box>
        <Image src={details.img} h="15em" />
      </Flex>
      <Box w="80%">
        {details.courseOutcome.map((item, index) => (
          <Grid templateColumns="1fr 5fr">
            <GridItem border="1px" p="1em" borderColor="#e0e0e0">
              <Text fontWeight="500" textAlign="center">
                CO{index + 1}
              </Text>
            </GridItem>
            <GridItem border="1px" p="1em" borderColor="#e0e0e0">
              <Text ml="1em">{item}</Text>
            </GridItem>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}
