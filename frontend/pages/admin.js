import {
  Box,
  Button,
  Flex,
  useDisclosure,
  Input,
  Text,
  Image,
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
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from 'axios';
import backend from "../const";

export default function Admin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [labList, setlabList] = useState([])
  const [name, setName] = useState('')
  const [manager, setManager] = useState('')
  const [ location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [sysno , setSysno] = useState('')
  const [code, setCode] = useState('')

  
  useEffect(() => {
    async function fetchData(){
    const response = await axios.get(`${backend}/lab_list`)
    const res = response.data;
    if (res.status) {
        
        const resArray = res.labs
        setlabList(resArray);
        if(res.msg)
            alert(res.msg)
    }
    else {
        alert('Sorry could not retrieve Lab list')
    }
    }
    fetchData();

}, [])

const handleSubmit = () => {
  const reqData = {
      "l_name":name,
      "l_manager":manager,
      "l_description":description,
      "l_sysno":sysno,
      "l_location": location,
      "l_code":code,
  }

  console.log(reqData)

  var config = {
      method: 'post',
      url: `${backend}/create_lab`,
      headers: {
          'Content-Type': 'application/json'
      },
      data: reqData
  };

  axios(config)
  .then(function (response) {
      if (response.data.status === true) {
        alert("Lab added successfully")
        setlabList(labList =>[...labList, response.data.lab])
        setName('')
        setManager('')
        setSysno('')
        setLocation('')
        setCode('')
        setDescription('')
      }
      else {
          alert("Error in details")
      }
      onClose()
  })
  .catch(function (error) {
     console.log(error)
      alert("Error in adding Lab")
      setName('')
      setManager('')
      setSysno('')
      setLocation('')
      setCode('')
      setDescription('')
      onClose()
  });
  
}

  return (
    <Box bg="#fafafa">
      <AdminNav />
      <Box mx="5em" my="3em">
        <Heading text="All labs" />
        <Flex>
          {labList.map((item) => (
            <Box key={item.l_code}>
              <Link href={"/admin/lab/" + item.l_code}>
                <Box
                  boxShadow="lg"
                  bg="white"
                  w="20em"
                  mr="3em"
                  cursor="pointer"
                  borderRadius="6px"
                >
                  {/* <Image
                    src={item.img}
                    h="15em"
                    objectFit="cover"
                    borderRadius="6px 6px 0 0"
                  /> */}
                  <Text p="1em">{item.l_name}</Text>
                </Box>
              </Link>
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
          <Input placeholder="Name" value={name} onChange={e=> setName(e.target.value)} />
            <Input placeholder="Lab code" value={code} mt="1em" onChange={e=> setCode(e.target.value)}/>
            <Input placeholder="Manager Name" value={manager} mt="1em" onChange={e=> setManager(e.target.value)}/>
            <Input placeholder="Location" value={location} mt="1em" onChange={e=> setLocation(e.target.value)}/>
            <Input placeholder="Description" value={description} mt="1em" onChange={e=> setDescription(e.target.value)}/>
            <Input placeholder="No of Systems" value={sysno} mt="1em" onChange={e=> setSysno(e.target.value)}/>
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
