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
  Input,
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
import imag from "../../../public/networklab.jpg";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import backend from "../../../const";

export default function CourseDetails({ course, id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modal2 = useDisclosure();
  const [cObj, setCObj] = useState("");
  const inputRef = useRef(null);
  const [name, setName] = useState("");
  const [preq, setPreq] = useState("");
  const [sem, setSem] = useState("");
  const [cf1, setCf1] = useState("");
  const [cf2, setCf2] = useState("");
  const [clab, setClab] = useState("");
  const [des, setDes] = useState("");

  useEffect(() => {
    setName(course.c_name);
    setPreq(course.c_prerequisite);
    setCf1(course.c_faculty1);
    setCf2(course.c_faculty2);
    setClab(course.c_lab);
    setSem(course.c_sem);
    setDes(course.c_description);
  }, []);

  const handleSubmit = () => {
    const newCou = {
      ob: cObj,
    };
    // console.log(sysstat)
    console.log(newCou);
    const reqData = course;
    const reqId = id;
    reqData.c_objectives = [...reqData.c_objectives, newCou];

    console.log(reqId);

    var config = {
      method: "post",
      url: `${backend}/update_course/${reqId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: reqData,
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === true) {
          // console.log(response.data)
          alert("Course Updated successfully");
          setCObj("");
        } else {
          alert("Error in Course details");
        }
        onClose();
      })
      .catch(function (error) {
        alert("Error in Updating Course");
        onClose();
      });
  };

  const handleEdit = () => {
    const newCou = course;
    newCou.c_name = name;
    newCou.c_description = des;
    newCou.c_faculty1 = cf1;
    newCou.c_faculty2 = cf2;
    newCou.c_sem = sem;
    newCou.c_lab = clab;
    newCou.c_prerequisite = preq;
    // console.log(sysstat)
    console.log(newCou);
    const reqData = newCou;
    const reqId = id;
    console.log(reqId);
    var config = {
      method: "post",
      url: `${backend}/update_course/${reqId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: reqData,
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === true) {
          console.log(response.data);
          alert("Course Updated successfully");
          setName("");
          setPreq("");
          setCf1("");
          setCf2("");
          setClab("");
          setSem("");
        } else {
          alert("Error in Course details");
        }
        modal2.onClose();
      })
      .catch(function (error) {
        alert("Error in Updating Course");
        modal2.onClose();
      });
  };

  return (
    <Box mb="4em">
      <Flex justifyContent="space-between">
        <Box>
          <Flex>
            <Link href={"/admin/course/" + course.c_code}>
              <Text
                fontSize="30px"
                letterSpacing="0.8px"
                fontWeight="600"
                cursor="pointer"
                mt="5px"
              >
                {course.c_code} -- {course.c_name.toUpperCase()}
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
            <Link href={"/admin/lab/" + course.c_lab}>
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
            <Text>
              Semester: <b>{course.c_sem}</b>
            </Text>
            <Text mx="0.4em" my="-1px">
              |
            </Text>
            <Text>{course.c_students} students enrolled</Text>
          </Flex>
          <Flex fontSize="17px">
            <Flex mr="5em">
              <Icon as={BsPersonFill} color="#49B5CD" my="auto" mr="4px" />
              <Text>{course.c_faculty2}</Text>
            </Flex>
            <Flex mr="5em">
              <Icon as={BsPersonFill} color="#49B5CD" my="auto" mr="4px" />
              <Text>{course.c_faculty1}</Text>
            </Flex>
          </Flex>
          {/* <Button
            mt="1em"
            px="1em"
            h="2em"
            bg="#87C0CD"
            color="white"
            borderRadius="4em"
            leftIcon={<AddIcon />}
            onClick={modal2.onOpen}
          >
            Edit Detalis
          </Button> */}
          <Modal isOpen={modal2.isOpen} onClose={modal2.onClose}>
            <ModalOverlay />
            <ModalContent mt="7em">
              <ModalHeader textAlign="center">Edit Course Details</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  mb="1em"
                  placeholder="Couse Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  mb="1em"
                  placeholder="Course Prerequiste"
                  value={preq}
                  onChange={(e) => setPreq(e.target.value)}
                />
                <Input
                  mb="1em"
                  placeholder="Course Lab"
                  value={clab}
                  onChange={(e) => setClab(e.target.value)}
                />
                <Input
                  mb="1em"
                  placeholder="Course Description"
                  value={des}
                  onChange={(e) => setDes(e.target.value)}
                />
                <Input
                  mb="1em"
                  placeholder="Course Sem"
                  value={sem}
                  onChange={(e) => setSem(e.target.value)}
                />
                <Input
                  mb="1em"
                  placeholder="Course Faculty 1"
                  value={cf1}
                  onChange={(e) => setCf1(e.target.value)}
                />
                <Input
                  mb="1em"
                  placeholder="Course Faculty 2"
                  value={cf2}
                  onChange={(e) => setCf2(e.target.value)}
                />
                <Box ml="auto" w="6em">
                  <Button
                    bg="#87C0CD"
                    color="white"
                    mb="1em"
                    w="100%"
                    textAlign="center"
                    onClick={() => handleEdit()}
                  >
                    Add
                  </Button>
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
          <Text fontSize="16px" fontWeight="500" mt="3em" mb="1em">
            Course Outcome :
          </Text>
        </Box>
        <Image src={imag.src} h="15em" alt="cimage" />
      </Flex>
      <Box w="80%">
        {/* <Button
          mb="1em"
          px="1em"
          h="2em"
          bg="#87C0CD"
          color="white"
          borderRadius="4em"
          leftIcon={<AddIcon />}
          onClick={onOpen}
        >
          Add Objective
        </Button> */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent mt="7em">
            <ModalHeader textAlign="center">Add Objective</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="New Objective"
                ref={inputRef}
                value={cObj}
                onChange={(e) => setCObj(e.target.value)}
              />
              <Box ml="auto" w="6em">
                <Button
                  bg="#87C0CD"
                  color="white"
                  my="1.5em"
                  w="100%"
                  textAlign="center"
                  onClick={() => {
                    inputRef.current.value !== ""
                      ? handleSubmit()
                      : alert("Enter the Objective");
                  }}
                >
                  Add
                </Button>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
        {course.c_objectives.length == 0 ? (
          <Box mt="1em">
            <Text>No Objectives</Text>
          </Box>
        ) : (
          course.c_objectives.map((item, index) => (
            <Grid templateColumns="1fr 5fr" key={index}>
              <GridItem border="1px" p="1em" borderColor="#e0e0e0">
                <Text fontWeight="500" textAlign="center">
                  CO{index + 1}
                </Text>
              </GridItem>
              <GridItem border="1px" p="1em" borderColor="#e0e0e0">
                <Text ml="1em">{item.ob}</Text>
              </GridItem>
            </Grid>
          ))
        )}
      </Box>
    </Box>
  );
}
