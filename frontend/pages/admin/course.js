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
import { useState, useEffect } from "react";
import axios from "axios";
import backend from "../../const";
import imag from "../../public/networklab.jpg";

export default function Course() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cName, setCName] = useState("");
  const [cCode, setCCode] = useState("");
  const [cFac1, setFac1] = useState("");
  const [cFac2, setFac2] = useState("");
  const [cSem, setCSem] = useState("");
  const [couList, setCouList] = useState([]);
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

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${backend}/course_list`);
      const res = response.data;
      if (res.status) {
        const resArray = res.cour;
        console.log(resArray);
        setCouList(resArray);
        if (res.msg) alert(res.msg);
      } else {
        alert("Sorry could not retrieve Course list");
      }
    }
    fetchData();
  }, []);

  const handleSubmit = () => {
    const reqData = {
      c_name: cName,
      c_code: cCode,
      c_faculty1: cFac1,
      c_faculty2: cFac2,
      c_sem: cSem,
    };
    console.log(reqData);

    var config = {
      method: "post",
      url: `${backend}/create_course`,
      headers: {
        "Content-Type": "application/json",
      },
      data: reqData,
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === true) {
          alert("New Course added successfully");
          setCouList((couList) => [...couList, response.data.cour]);
          console.log(response.data.cour);
          setCCode("");
          setCName("");
          setCSem("");
          setFac1("");
          setFac2("");
        } else {
          alert("Error in details");
        }
        onClose();
      })
      .catch(function (error) {
        console.log(error);
        alert("Error in adding Course");
        setCCode("");
        setCName("");
        setCSem("");
        setFac1("");
        setFac2("");
        onClose();
      });
  };

  const displayCard = (item) => {
    return (
      <Flex
        p="1em"
        borderBottom="1px"
        borderColor="#e0e0e0"
        w="100%"
        key={item.c_code}
      >
        <Image src={imag.src} h="10em" borderRadius="6px" />
        <Box ml="1em">
          <Link href={"/admin/course/" + item.c_code}>
            <Text
              fontSize="18px"
              letterSpacing="0.8px"
              fontWeight="600"
              cursor="pointer"
            >
              {item.c_name}
            </Text>
          </Link>

          <Flex fontSize="15px" my="0.5em">
            <Flex mr="5em">
              <Icon as={BsPersonFill} color="#49B5CD" my="auto" mr="4px" />
              <Text>{item.c_faculty1}</Text>
            </Flex>
            <Flex mr="5em">
              <Icon as={BsPersonFill} color="#49B5CD" my="auto" mr="4px" />
              <Text>{item.c_faculty2}</Text>
            </Flex>
          </Flex>
          <Link href="/admin/lab/dd">
            <Button fontSize="14px" fontWeight="400" mt="0.5em">
              {item.c_lab}
            </Button>
          </Link>
          <Flex mt="0.5em" fontSize="14px">
            <Text>Semester {item.c_sem}</Text>
            <Text mx="0.4em" my="-1px">
              |
            </Text>
          </Flex>
        </Box>
      </Flex>
    );
  };

  return (
    <Box bg="#fafafa">
      <AdminNav />
      <Box mx="5em" my="3em">
        <Heading text="Courses" />
        {couList.map((item) => (
          <Box key={item.c_code}>{displayCard(item)}</Box>
        ))}

        <Button
          mt="2em"
          px="2em"
          h="3em"
          bg="#87C0CD"
          color="white"
          borderRadius="5em"
          leftIcon={<AddIcon />}
          onClick={onOpen}
        >
          Add Course
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt="7em">
          <ModalHeader textAlign="center">Add Lab</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Course Name"
              value={cName}
              onChange={(e) => setCName(e.target.value)}
            />
            <Input
              placeholder="Course Code"
              mt="1em"
              value={cCode}
              onChange={(e) => setCCode(e.target.value)}
            />
            <Input
              placeholder="Course Faculty 1 "
              mt="1em"
              value={cFac1}
              onChange={(e) => setFac1(e.target.value)}
            />
            <Input
              placeholder="Course Faculty 2"
              mt="1em"
              value={cFac2}
              onChange={(e) => setFac2(e.target.value)}
            />
            <Input
              placeholder="Course Sem"
              mt="1em"
              value={cSem}
              onChange={(e) => setCSem(e.target.value)}
            />
            <Box ml="auto" w="6em">
              <Button
                bg="#87C0CD"
                color="white"
                my="1.5em"
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
    </Box>
  );
}
