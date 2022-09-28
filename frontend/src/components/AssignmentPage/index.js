import {
  Box,
  Text,
  Flex,
  Image,
  Link,
  Icon,
  Button,
  Input,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { TimeIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import backend from "../../../const";

export default function AssignmentPage({ course, id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [aid, setAid] = useState("");
  const [des, setDes] = useState("");
  const [adate, setAdate] = useState("");
  const [aList, setAlist] = useState("");
  const [list, setlist] = useState(null);
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

  useEffect(() => {
    setAlist(course.c_assignment);
  }, [aList]);

  const handleSubmit = () => {
    const newAssi = {
      a_id: aid,
      a_status: false,
      a_description: des,
      a_date: adate,
    };
    // console.log(course)
    // console.log(id)
    // console.log(newAssi)
    const reqData = course;
    const reqId = id;
    // setlist(aList)
    // setlist(...list,newAssi)
    if (!reqData.c_assignment) {
      reqData.c_assignment = newAssi;
    } else {
      reqData.c_assignment = [...reqData.c_assignment, newAssi];
    }
    // reqData.c_assignments = [...reqData.c_assignments,newAssi]

    console.log(reqData);

    var config = {
      method: "post",
      url: `${backend}/add_assign/${reqId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: reqData,
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === true) {
          // console.log(response.data)
          alert("Assignment added successfully");
          setAlist([...aList, newAssi]);
          setAid("");
          setDes("");
          setAdate("");
        } else {
          alert("Error in details of Assignment");
        }
        onClose();
      })
      .catch(function (error) {
        alert("Error in adding Assignment");
        onClose();
      });
  };

  const handleComplete = (item = {}) => {
    const newA = {
      a_id: item.a_id,
      a_status: true,
    };
    console.log(newA);
    const reqData = newA;
    const reqId = id;
    // reqData.l_systems = [...reqData.l_systems, newSys]

    // console.log(reqData)

    var config = {
      method: "post",
      url: `${backend}/update_assi/${reqId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: reqData,
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === true) {
          console.log(response.data);
          alert("Assignment Status updated successfully");
          setAlist(...aList, response.data.data);
        } else {
          alert("Error in details");
        }
      })
      .catch(function (error) {
        alert("Error in updating Assignment Status");
      });
  };

  const asgmCard = (item) => {
    return (
      <Box
        mb="3em"
        bg={item.a_status ? "grey" : "white"}
        borderRadius="6px"
        px="3em"
        py="1.5em"
      >
        <Flex justifyContent="space-between">
          <Text fontSize="22px" fontWeight="500">
            {item.a_id}
          </Text>
          <Flex opacity="0.6">
            <TimeIcon my="auto" mr="5px" h={3.5} />
            <Text fontSize="14px" my="auto">
              {item.a_date}
            </Text>
          </Flex>
        </Flex>
        <Text my="1em">{item.a_description}</Text>
        <Text my="1em"> {"Status: " + item.a_status}</Text>
        <Button
          ml="auto"
          bg="#87C0CD"
          color="white"
          borderRadius="10em"
          py="1em"
          px="2em"
          onClick={() => handleComplete(item)}
        >
          {/* {item.a_status ? "Marked Incomplete" : "Mark Complete"} */}
          Submit Assignment
        </Button>
      </Box>
    );
  };

  return (
    <Box>
      {/* <Button
        mb="1em"
        bg="#87C0CD"
        color="white"
        borderRadius="10em"
        py="1em"
        px="2em"
        leftIcon={<AddIcon />}
        onClick={onOpen}
      >
        Add Assignment
      </Button> */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt="7em">
          <ModalHeader textAlign="center">Edit Course Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              mb="1em"
              placeholder="Assignment Id"
              value={aid}
              onChange={(e) => setAid(e.target.value)}
            />
            <Input
              mb="1em"
              placeholder="Assignment Description"
              value={des}
              onChange={(e) => setDes(e.target.value)}
            />
            <Input
              mb="1em"
              placeholder="Assignment Deadline"
              value={adate}
              onChange={(e) => setAdate(e.target.value)}
            />
            <Box ml="auto" w="6em">
              <Button
                bg="#87C0CD"
                color="white"
                mb="1em"
                w="100%"
                textAlign="center"
                onClick={() => handleSubmit()}
              >
                Add
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* if !aList
    return null
    else */}
      {/* dgdfg */}
      {course.c_assignment.map((item) => asgmCard(item))}
    </Box>
  );
}
