import {
  Box,
  Button,
  Flex,
  useDisclosure,
  Input,
  Text,
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
import { AdminNav, Card, Heading } from "../src/components";
import { AddIcon } from "@chakra-ui/icons";

export default function Admin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const labs = [
    {
      id: 1,
      name: "Computer Lab 1",
      img: "lab1.jpg",
    },
    {
      id: 2,
      name: "Computer Lab 2",
      img: "lab2.jpg",
    },
    {
      id: 3,
      name: "Computer Lab 3",
      img: "lab3.jpg",
    },
  ];

  return (
    <Box bg="#fafafa">
      <AdminNav />
      <Box mx="5em" my="3em">
        <Heading text="All labs" />
        <Flex>
          {labs.map((item) => (
            <Box key={item.id}>
              <Card img={item.img} text={item.name} id={item.id} />
            </Box>
          ))}
        </Flex>
        <Button
          mt="3em"
          px="2em"
          h="3em"
          bg="#87C0CD"
          color="white"
          borderRadius="5em"
          leftIcon={<AddIcon />}
          onClick={onOpen}
        >
          Add Lab
        </Button>
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
