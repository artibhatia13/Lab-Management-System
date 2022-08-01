import {
  Box,
  Button,
  Flex,
  useDisclosure,
  Input,
  Text,
  Image,
  Icon,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { BsPersonFill } from "react-icons/bs";
import { AdminNav, Card, Heading } from "../../src/components";
import { AddIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Course() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const courses = [
    {
      id: 1,
      name: "CSL332 Networking Lab",
      img: "/networklab.jpg",
      faculty: ["Ms Kiran Mary", "Mrs Rekha"],
      lab: "Computer Lab 1",
      sem: "6",
      st_enrolled: "68",
    },
    {
      id: 2,
      name: "CSL332 Networking Lab",
      img: "/networklab.jpg",
      faculty: ["Ms Kiran Mary", "Mrs Rekha"],
      lab: "Computer Lab 1",
      sem: "6",
      st_enrolled: "68",
    },
    {
      id: 3,
      name: "CSL332 Networking Lab",
      img: "/networklab.jpg",
      faculty: ["Ms Kiran Mary", "Mrs Rekha"],
      lab: "Computer Lab 1",
      sem: "6",
      st_enrolled: "68",
    },
  ];

  const displayCard = (item) => {
    return (
      <Flex
        p="1em"
        borderBottom="1px"
        borderColor="#e0e0e0"
        w="100%"
        key={item.id}
      >
        <Image src={item.img} h="10em" borderRadius="6px" />
        <Box ml="1em">
          <Link href="/admin/course/networklab">
            <Text
              fontSize="18px"
              letterSpacing="0.8px"
              fontWeight="600"
              cursor="pointer"
            >
              {item.name}
            </Text>
          </Link>

          <Flex fontSize="15px" my="0.5em">
            {item.faculty.map((name) => (
              <Flex mr="5em">
                <Icon as={BsPersonFill} color="#49B5CD" my="auto" mr="4px" />
                <Text>{name}</Text>
              </Flex>
            ))}
          </Flex>
          <Link href="/admin/lab/1">
            <Button fontSize="14px" fontWeight="400" mt="0.5em">
              {item.lab}
            </Button>
          </Link>
          <Flex mt="0.5em" fontSize="14px">
            <Text>Semester {item.sem}</Text>
            <Text mx="0.4em" my="-1px">
              |
            </Text>
            <Text>{item.st_enrolled} students enrolled</Text>
          </Flex>
        </Box>
      </Flex>
    );
  };

  return (
    <Box bg="#fafafa">
      <AdminNav />
      <Box mx="5em" my="3em">
        
        <Button
          mt="1em"
          px="1em"
          h="2em"
          bg="#87C0CD"
          color="white"
          borderRadius="4em"
          leftIcon={<AddIcon />}
          onClick={onOpen}
        >
          Add Course
        </Button>
        <Heading text="Courses" />
        {courses.map((item) => (
          <Box>{displayCard(item)}</Box>
        ))}
        
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt="7em">
          <ModalHeader textAlign="center">Add Lab</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Name" />
            <Input placeholder="Manager Name" mt="1em" />
            <Input placeholder="Location" mt="1em" />
            <Input placeholder="Description" mt="1em" />
            <Input placeholder="No of Sytems" mt="1em" />
            <Box ml="auto" w="6em">
              <Button
                bg="#87C0CD"
                color="white"
                my="1.5em"
                w="100%"
                textAlign="center"
                onClick={onClose}
              >
                Add
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
