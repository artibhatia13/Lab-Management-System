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
import { TimeIcon } from "@chakra-ui/icons";
import { useState,useEffect } from "react";


export default function AssignmentPage({course,id}) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [aid ,setAid] = useState('')
  const [des, setDes] = useState('')
  const [adate, setAdate] = useState('')
  const [aList, setAlist] = useState('')
  const [list,setlist] = useState(null)
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

useEffect(()=>{
  setAlist(course.c_assignments)
},[aList]);

  const handleSubmit = () => {
    const newAssi = {
      a_id: aid,
      a_status: false,
      a_description: des,
      a_date:adate
    };
    console.log(course)
    console.log(id)
    console.log(newAssi)
    const reqData = course;
    const reqId = id;
    setlist(aList)
    // setlist(...list,newAssi)
    reqData.c_assignments = [...reqData.c_assignments,newAssi]

    console.log(reqData)

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
          alert("Lab System added successfully");
          setAlist([...aList, newAssi]);
          setAid("");
          setDes("");
          setAdate("");
        } else {
          alert("Error in details");
        }
        onClose();
      })
      .catch(function (error) {
        alert("Error in adding System");
        onClose();
      });
  };

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

  return <Box>
    <Button
        ml="auto"
        bg="#fff000"
        color="white"
        borderRadius="10em"
        py="1em"
        px="2em"
        onClick={onOpen}
      >
      Add Assignment
    </Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt="7em">
          <ModalHeader textAlign="center">Edit Course Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Assignment Id"  value={aid} onChange={e => setAid(e.target.value)}/>
            <Input placeholder="Assignment Description"  value={des} onChange={e => setDes(e.target.value)}/>
            <Input placeholder="Assignment Deadline"  value={adate} onChange={e => setAdate(e.target.value)}/>
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
    {assignments.map((item) => asgmCard(item))}
    </Box>;
}
