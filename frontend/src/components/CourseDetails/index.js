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
  Input
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
import { BsPersonFill } from "react-icons/bs";
import imag from '../../../public/networklab.jpg'
import { useState,useRef } from "react";
import axios from "axios";
import backend from "../../../const";


export default function CourseDetails({course,id}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const[cObj,setCObj] = useState('')
  const inputRef = useRef(null)
  // const details = {
  //   name: "CSL331 Networking Lab",
  //   description:
  //     "The course enables the learners to get hands-on experience in network programming using Linux System calls and network monitoring tools. ",
  //   prerequisite:
  //     "Sound knowledge in Programming in C, Data Structures and Computer Networks",
  //   courseOutcome: [
  //     "Use network related commands and configuration files in Linux Operating System.",
  //     "Develop network application programs and protocols.",
  //     "Analyze network traffic using network monitoring tools.",
  //     "Design and setup a network and configure different network protocols.",
  //     "Develop simulation of fundamental network concepts using a network simulator.",
  //   ],
  //   img: "/networklab.jpg",
  //   faculty: ["Ms Kiran Mary", "Mrs Rekha"],
  //   lab: "Computer Lab 1",
  //   sem: "6",
  //   st_enrolled: "68",
  // };
  const handleSubmit = () => {
    const newCou = {
      ob : cObj,
  
    }
    // console.log(sysstat)
    console.log(newCou)
    const reqData = course
    const reqId = id
    reqData.c_objectives = [...reqData.c_objectives, newCou]
  
    console.log(reqId)
  
    var config = {
        method: 'post',
        url: `${backend}/update_course/${reqId}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: reqData
    };
  
    axios(config)
    .then(function (response) {
        if (response.data.status === true) {
          // console.log(response.data)
          alert("Course Updated successfully")
          setCObj('')
        }
        else {
            alert("Error in Course details")
        }
        onClose()
    })
    .catch(function (error) {
        alert("Error in Updating Course")
        onClose()
    });
    
  }

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
                {course.c_name.toUpperCase()}
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
                {course.c_lab}
              </Button>
            </Link>
          </Flex>

          <Text fontSize="17px" my="1em" mr="2em">
            {course.c_description}
          </Text>

          <Flex my="1em">
            <Text fontSize="16px" fontWeight="500">
              Prerequisite :
            </Text>
            <Text fontSize="15px" mx="1em">
              {course.c_prerequisite}
            </Text>
          </Flex>

          <Flex my="1em" fontSize="14px">
            <Text>Semester {course.c_sem}</Text>
            <Text mx="0.4em" my="-1px">
              |
            </Text>
            <Text>{course.c_students} students enrolled</Text>
          </Flex>
          <Flex fontSize="17px">
            
              <Flex mr="5em">
                <Icon as={BsPersonFill} color="#49B5CD" my="auto" mr="4px" />
                <Text>{course.faculty2}</Text>
              </Flex>
              <Flex mr="5em">
              <Icon as={BsPersonFill} color="#49B5CD" my="auto" mr="4px" />
              <Text>{course.faculty1}</Text>
            </Flex>
            
          </Flex>
          <Text fontSize="16px" fontWeight="500" mt="3em" mb="1em">
            Course Outcome :
          </Text>
        </Box>
        <Image src={imag.src} h="15em" />
      </Flex>
      <Box w="80%">
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
          Add Objective
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt="7em">
          <ModalHeader textAlign="center">Add Objective</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="New Objective" ref={inputRef} value={cObj} onChange={e => setCObj(e.target.value)}/>
            <Box ml="auto" w="6em">
              <Button
                bg="#87C0CD"
                color="white"
                my="1.5em"
                w="100%"
                textAlign="center"
                onClick={()=> {inputRef.current.value!==""?handleSubmit():alert('Enter the Objective')}}
              >
                Add
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
        {course.c_objectives.length ==0?"NO objectives":
        course.c_objectives.map((item, index) => (
          <Grid templateColumns="1fr 5fr">
            <GridItem border="1px" p="1em" borderColor="#e0e0e0">
              <Text fontWeight="500" textAlign="center">
                CO{index + 1}
              </Text>
            </GridItem>
            <GridItem border="1px" p="1em" borderColor="#e0e0e0">
              <Text ml="1em">{item.ob}</Text>
            </GridItem>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}
